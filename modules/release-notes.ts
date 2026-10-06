import { readdirSync, readFileSync } from 'node:fs'
import { Marked, type Token, type Tokens } from 'marked'
import { addTemplate, addTypeTemplate, createResolver, defineNuxtModule, updateTemplates } from 'nuxt/kit'

// Notes published before the "Originally released on" line was added to every file.
const releaseDates: Record<string, string> = {
  'v2.9.0': '2026-10-01',
}

const datePattern = /^\*Originally released on (\d{4}-\d{2}-\d{2})\.\*\s*/

export interface ReleaseNote {
  tag: string
  date: string
  html: string
}

const marked = new Marked({
  gfm: true,
  renderer: {
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      const external = /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener"' : ''
      return `<a href="${href}"${title ? ` title="${title}"` : ''}${external}>${text}</a>`
    },
  },
})

// Each version title is an <h2>, so the note's own headings start at <h3> whatever level they use.
function shiftHeadings(tokens: Token[]) {
  const headings = tokens.filter((t): t is Tokens.Heading => t.type === 'heading')
  const top = Math.min(...headings.map(h => h.depth))
  for (const heading of headings) heading.depth = Math.min(6, heading.depth - top + 3)
}

const compareTags = (a: string, b: string) => {
  const pa = a.slice(1).split('.').map(Number)
  const pb = b.slice(1).split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return (pb[i] ?? 0) - (pa[i] ?? 0)
  }
  return 0
}

function readNotes(dir: string): ReleaseNote[] {
  return readdirSync(dir)
    .filter(name => /^v\d+\.\d+\.\d+\.md$/.test(name))
    .map((name) => {
      const tag = name.replace(/\.md$/, '')
      let source = readFileSync(`${dir}/${name}`, 'utf8')
      const date = source.match(datePattern)?.[1] ?? releaseDates[tag]
      if (!date) throw new Error(`release-notes/${name}: no release date; start it with "*Originally released on YYYY-MM-DD.*"`)
      source = source.replace(datePattern, '')
      const tokens = marked.lexer(source)
      shiftHeadings(tokens)
      return { tag, date, html: marked.parser(tokens) }
    })
    .sort((a, b) => compareTags(a.tag, b.tag))
}

export default defineNuxtModule({
  meta: { name: 'release-notes' },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const dir = resolve('../release-notes')

    const template = addTemplate({
      filename: 'release-notes.mjs',
      getContents: () => `export default ${JSON.stringify(readNotes(dir))}\n`,
    })
    nuxt.options.alias['#release-notes'] = template.dst

    // The newest version on its own, so pages that only need its number don't bundle every note.
    const latest = addTemplate({
      filename: 'release-latest.mjs',
      getContents: () => {
        const [newest] = readNotes(dir)
        if (!newest) throw new Error('release-notes/: no notes found')
        const { tag, date } = newest
        return `export default ${JSON.stringify({ tag, date })}\n`
      },
    })
    nuxt.options.alias['#release-latest'] = latest.dst

    addTypeTemplate({
      filename: 'types/release-notes.d.ts',
      getContents: () => `declare module '#release-notes' {
  const notes: { tag: string, date: string, html: string }[]
  export default notes
}
declare module '#release-latest' {
  const latest: { tag: string, date: string }
  export default latest
}
`,
    })

    nuxt.hook('builder:watch', async (_event, path) => {
      if (path.includes('release-notes/')) await updateTemplates({ filter: t => ['release-notes.mjs', 'release-latest.mjs'].includes(t.filename) })
    })
  },
})
