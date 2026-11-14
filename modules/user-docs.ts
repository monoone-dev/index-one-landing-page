import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { Lexer, Marked, type Tokens } from 'marked'
import { addTemplate, addTypeTemplate, createResolver, defineNuxtModule, updateTemplates } from 'nuxt/kit'

// The user documentation: user-docs/*.md, ordered and grouped by user-docs/nav.json, turned into
// HTML at build time. Each page becomes its own chunk (#user-docs/pages/<slug>), and #user-docs
// holds only the table of contents, so a docs page loads its own text and nothing more.

export interface DocsNav {
  version: string
  released: string
  updated: string
  groups: { title: string, icon: string, pages: string[] }[]
}

export interface DocHeading {
  id: string
  text: string
  depth: 2 | 3
}

export interface DocShot {
  name: string
  alt: string
  src: string
  light: string
  width: number
  height: number
}

export interface DocPage {
  slug: string
  title: string
  description: string
  keywords: string[]
  group: string
  lede: string
  html: string
  headings: DocHeading[]
  shots: DocShot[]
  /** Plain text of the page, for the search box. */
  text: string
}

interface Shot { src: string, light: string, width: number, height: number }

/** Reads the pixel size of a WebP file (lossy, lossless and extended). */
function webpSize(file: string) {
  const b = readFileSync(file)
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') throw new Error(`${file}: not a WebP file`)
  const chunk = b.toString('ascii', 12, 16)
  if (chunk === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3FFF, height: b.readUInt16LE(28) & 0x3FFF }
  if (chunk === 'VP8L') {
    const bits = b.readUInt32LE(21)
    return { width: (bits & 0x3FFF) + 1, height: ((bits >> 14) & 0x3FFF) + 1 }
  }
  if (chunk === 'VP8X') return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 }
  throw new Error(`${file}: unknown WebP chunk ${chunk}`)
}

/** Every screenshot that has a dark and a light file, by name. Docs shots win over site shots. */
function readShots(publicDir: string) {
  const shots = new Map<string, Shot>()
  for (const dir of ['assets/screens', 'assets/docs']) {
    if (!existsSync(`${publicDir}/${dir}`)) continue
    for (const name of readdirSync(`${publicDir}/${dir}`)) {
      const m = name.match(/^(.+?)\.webp$/)
      if (!m || m[1]!.endsWith('-light')) continue
      const base = m[1]!
      if (!existsSync(`${publicDir}/${dir}/${base}-light.webp`)) continue
      shots.set(base, { src: `/${dir}/${base}.webp`, light: `/${dir}/${base}-light.webp`, ...webpSize(`${publicDir}/${dir}/${name}`) })
    }
  }
  return shots
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const stripTags = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'')

export const slugify = (text: string) => text
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/&[a-z]+;/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

function parseFrontMatter(source: string, file: string) {
  const m = source.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) throw new Error(`${file}: missing front matter`)
  const data: Record<string, string> = {}
  for (const line of m[1]!.split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (kv) data[kv[1]!] = kv[2]!.trim().replace(/^(['"])(.*)\1$/, '$2')
  }
  for (const key of ['title', 'description', 'keywords']) {
    if (!data[key]) throw new Error(`${file}: front matter needs "${key}"`)
  }
  return { data, body: source.slice(m[0].length) }
}

const callouts: Record<string, string> = { NOTE: 'Note', TIP: 'Tip', WARNING: 'Warning', IMPORTANT: 'Important' }

function renderPage(slug: string, group: string, file: string, shots: Map<string, Shot>, slugs: Set<string>): DocPage {
  const { data, body } = parseFrontMatter(readFileSync(file, 'utf8'), file)
  const headings: DocHeading[] = []
  const used = new Set<string>()
  const pageShots: DocShot[] = []

  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens)
        if (depth < 2) throw new Error(`${file}: use ## and ### only; the title is the page's h1`)
        let id = slugify(stripTags(html)) || 'section'
        while (used.has(id)) id += '-2'
        used.add(id)
        if (depth <= 3) headings.push({ id, text: stripTags(html), depth: depth as 2 | 3 })
        return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${html}</h${depth}>\n`
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const docs = href.match(/^\/docs\/([a-z0-9-]+)\/?(#.*)?$/)
        if (docs && !slugs.has(docs[1]!)) throw new Error(`${file}: link to unknown docs page ${href}`)
        const external = /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener"' : ''
        return `<a href="${href}"${title ? ` title="${escapeHtml(title)}"` : ''}${external}>${text}</a>`
      },
      image({ href, title, text }) {
        const name = href.match(/^shot:([a-z0-9-]+)$/)?.[1]
        if (!name) throw new Error(`${file}: images must be ![alt](shot:<name>), got ${href}`)
        const shot = shots.get(name)
        if (!shot) throw new Error(`${file}: no screenshot named "${name}" in public/assets/{screens,docs}`)
        if (!text) throw new Error(`${file}: screenshot "${name}" needs alt text`)
        pageShots.push({ name, alt: text, ...shot })
        const img = (src: string, mode: string) =>
          `<img src="${src}" data-mode="${mode}" width="${shot.width}" height="${shot.height}" alt="${escapeHtml(text)}" loading="lazy" decoding="async">`
        const caption = title ? `<figcaption>${escapeHtml(title)}</figcaption>` : ''
        return `<figure class="doc-shot"><span class="doc-shot__frame">${img(shot.src, 'dark')}${img(shot.light, 'light')}</span>${caption}</figure>`
      },
      blockquote({ tokens }) {
        const first = tokens[0]
        if (first?.type === 'paragraph') {
          const m = (first as Tokens.Paragraph).text.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*\n?/)
          if (m) {
            const kind = m[1]!
            const p = first as Tokens.Paragraph
            p.text = p.text.slice(m[0].length)
            p.tokens = Lexer.lexInline(p.text)
            return `<aside class="callout callout--${kind.toLowerCase()}"><p class="callout__title">${callouts[kind]}</p>${this.parser.parse(tokens)}</aside>\n`
          }
        }
        return `<blockquote>${this.parser.parse(tokens)}</blockquote>\n`
      },
      table(token) {
        // Render the default table, wrapped so a wide one scrolls on its own instead of the page.
        const head = token.header.map(cell => `<th${cell.align ? ` style="text-align:${cell.align}"` : ''}>${this.parser.parseInline(cell.tokens)}</th>`).join('')
        const rows = token.rows.map(row => `<tr>${row.map(cell => `<td${cell.align ? ` style="text-align:${cell.align}"` : ''}>${this.parser.parseInline(cell.tokens)}</td>`).join('')}</tr>`).join('\n')
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`
      },
      html(): string {
        throw new Error(`${file}: inline HTML is not allowed in the docs`)
      },
    },
  })

  if (/^# /m.test(body.replace(/```[\s\S]*?```/g, ''))) throw new Error(`${file}: do not write an h1; the title is the page's h1`)
  const tokens = marked.lexer(body)
  const lead = tokens.findIndex(t => t.type !== 'space')
  const lede = tokens[lead]?.type === 'paragraph'
    ? marked.parser(tokens.splice(lead, 1)).trim().replace(/^<p>|<\/p>$/g, '')
    : ''
  const html = marked.parser(tokens)

  return {
    slug,
    title: data.title!,
    description: data.description!,
    keywords: data.keywords!.split(',').map(k => k.trim()).filter(Boolean),
    group,
    lede,
    html,
    headings,
    shots: pageShots,
    text: stripTags(`${lede} ${html}`).replace(/\s+/g, ' ').trim(),
  }
}

export function readNav(dir: string): DocsNav {
  return JSON.parse(readFileSync(`${dir}/nav.json`, 'utf8')) as DocsNav
}

/** The slugs of every docs page, in reading order. Used for prerendering and the sitemap too. */
export const docSlugs = (dir: string) => readNav(dir).groups.flatMap(g => g.pages)

function readDocs(dir: string, publicDir: string) {
  const nav = readNav(dir)
  const icons = readFileSync(`${dir}/../app/composables/useDocs.ts`, 'utf8')
  for (const g of nav.groups) {
    if (!icons.includes(`'${g.icon}'`)) throw new Error(`user-docs/nav.json: add the icon ${g.icon} to docsGroupIcons in app/composables/useDocs.ts`)
  }
  const shots = readShots(publicDir)
  const slugs = new Set(nav.groups.flatMap(g => g.pages))
  const files = readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
  const orphans = files.filter(f => !slugs.has(f))
  if (orphans.length) throw new Error(`user-docs: ${orphans.join(', ')} not listed in nav.json`)
  const pages = nav.groups.flatMap(g => g.pages.map((slug) => {
    const file = `${dir}/${slug}.md`
    if (!existsSync(file)) throw new Error(`user-docs/nav.json lists "${slug}" but user-docs/${slug}.md does not exist`)
    return renderPage(slug, g.title, file, shots, slugs)
  }))
  return { nav, pages }
}

export default defineNuxtModule({
  meta: { name: 'user-docs' },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const dir = resolve('../user-docs')
    const publicDir = resolve('../public')

    let cache: ReturnType<typeof readDocs> | null = null
    const docs = () => (cache ??= readDocs(dir, publicDir))
    const slugs = docSlugs(dir)

    // The table of contents and search index: titles, descriptions and the plain text of every page.
    const index = addTemplate({
      filename: 'user-docs/index.mjs',
      write: true,
      getContents: () => {
        const { nav, pages } = docs()
        const toc = {
          version: nav.version,
          released: nav.released,
          updated: nav.updated,
          groups: nav.groups.map(g => ({
            title: g.title,
            icon: g.icon,
            pages: g.pages.map((slug) => {
              const p = pages.find(page => page.slug === slug)!
              return { slug, title: p.title, description: p.description, keywords: p.keywords }
            }),
          })),
        }
        const loaders = slugs.map(slug => `  ${JSON.stringify(slug)}: () => import('./pages/${slug}.mjs').then(m => m.default),`).join('\n')
        return `export const toc = ${JSON.stringify(toc)}\nexport const loaders = {\n${loaders}\n}\n`
      },
    })
    nuxt.options.alias['#user-docs'] = index.dst

    for (const slug of slugs) {
      addTemplate({
        filename: `user-docs/pages/${slug}.mjs`,
        write: true,
        getContents: () => `export default ${JSON.stringify(docs().pages.find(p => p.slug === slug))}\n`,
      })
    }

    // The search text of every page, loaded only when someone types in the search box.
    addTemplate({
      filename: 'user-docs/search.mjs',
      write: true,
      getContents: () => `export default ${JSON.stringify(docs().pages.map(p => ({ slug: p.slug, text: p.text.toLowerCase() })))}\n`,
    })

    addTypeTemplate({
      filename: 'types/user-docs.d.ts',
      getContents: () => `declare module '#user-docs' {
  export interface DocsTocPage { slug: string, title: string, description: string, keywords: string[] }
  export interface DocsToc { version: string, released: string, updated: string, groups: { title: string, icon: string, pages: DocsTocPage[] }[] }
  export interface DocHeading { id: string, text: string, depth: 2 | 3 }
  export interface DocShot { name: string, alt: string, src: string, light: string, width: number, height: number }
  export interface DocPage { slug: string, title: string, description: string, keywords: string[], group: string, lede: string, html: string, headings: DocHeading[], shots: DocShot[], text: string }
  export const toc: DocsToc
  export const loaders: Record<string, () => Promise<DocPage>>
}
declare module '#user-docs-search' {
  const search: { slug: string, text: string }[]
  export default search
}
`,
    }, { nuxt: true })
    nuxt.options.alias['#user-docs-search'] = resolve(nuxt.options.buildDir, 'user-docs/search.mjs')

    nuxt.hook('builder:watch', async (_event, path) => {
      if (path.includes('user-docs/') || path.includes('assets/docs/')) {
        cache = null
        await updateTemplates({ filter: t => t.filename.startsWith('user-docs/') })
      }
    })
  },
})
