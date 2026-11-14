import { toc, type DocsTocPage } from '#user-docs'

export interface DocsHit extends DocsTocPage {
  group: string
}

const pages: DocsHit[] = toc.groups.flatMap(g => g.pages.map(p => ({ ...p, group: g.title })))

/** The docs' table of contents, flat and in reading order. */
export const docsPages = pages

/** The page before and after `slug` in reading order. */
export function docsNeighbours(slug: string) {
  const i = pages.findIndex(p => p.slug === slug)
  return { prev: i > 0 ? pages[i - 1] : undefined, next: i >= 0 ? pages[i + 1] : undefined }
}

export const docsVersionDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))

/**
 * Search over the docs: titles, descriptions and keywords right away, and the full text of every
 * page once it has loaded (only after the first keystroke, so the page itself stays light).
 */
export function useDocsSearch() {
  const query = ref('')
  const fullText = shallowRef<Map<string, string> | null>(null)
  let loading = false

  watch(query, (q) => {
    if (!q || fullText.value || loading) return
    loading = true
    import('#user-docs-search').then((m) => {
      fullText.value = new Map(m.default.map(p => [p.slug, p.text]))
    }).catch(() => {
      loading = false
    })
  })

  const results = computed<DocsHit[]>(() => {
    const words = query.value.toLowerCase().split(/\s+/).filter(Boolean)
    if (!words.length) return []
    const scored = pages.map((p) => {
      const head = `${p.title} ${p.keywords.join(' ')}`.toLowerCase()
      const desc = p.description.toLowerCase()
      const body = fullText.value?.get(p.slug) ?? ''
      let score = 0
      for (const w of words) {
        if (head.includes(w)) score += 3
        else if (desc.includes(w)) score += 2
        else if (body.includes(w)) score += 1
        else return { p, score: 0 }
      }
      return { p, score }
    })
    return scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score).map(s => s.p)
  })

  return { query, results }
}

// The group icons named in user-docs/nav.json. The icon bundle is built by scanning app/ for icon
// names, so every one used there must also be written out here.
export const docsGroupIcons = [
  'i-lucide-rocket',
  'i-lucide-folder-tree',
  'i-lucide-mic',
  'i-lucide-sparkles',
  'i-lucide-plug',
  'i-lucide-settings',
  'i-lucide-shield-check',
] as const
