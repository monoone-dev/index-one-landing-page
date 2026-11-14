import latest from '#release-latest'
import docs from '../../user-docs/nav.json'

const base = 'https://index-one.io'
const locales = [
  { code: 'en', language: 'en-US' },
  { code: 'pl', language: 'pl-PL' },
  { code: 'es', language: 'es-ES' },
  { code: 'it', language: 'it-IT' },
  { code: 'fr', language: 'fr-FR' },
  { code: 'pt', language: 'pt-BR' },
  { code: 'de', language: 'de-DE' },
  { code: 'zh', language: 'zh-CN' },
  { code: 'ja', language: 'ja-JP' },
]
const pages = ['/', '/features/', '/privacy/', '/pricing/', '/changelog/']

const docsPages = () => ['/docs/', ...docs.groups.flatMap(g => g.pages.map(slug => `/docs/${slug}/`))]

const url = (code: string, page: string) => `${base}${code === 'en' ? page : `/${code}${page}`}`

export default defineEventHandler((event) => {
  const entries = pages.flatMap(page => locales.map(({ code }) => {
    const alternates = locales
      .map(l => `    <xhtml:link rel="alternate" hreflang="${l.language}" href="${url(l.code, page)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}"/>`)
      .join('\n')
    // Only the changelog has a date that is known to be true: the newest release.
    const lastmod = page === '/changelog/' ? `\n    <lastmod>${latest.date}</lastmod>` : ''
    return `  <url>\n    <loc>${url(code, page)}</loc>${lastmod}\n${alternates}\n  </url>`
  }))
  // The documentation is English only: no alternates, and the day its pages were last revised.
  for (const page of docsPages()) {
    entries.push(`  <url>\n    <loc>${base}${page}</loc>\n    <lastmod>${docs.updated}</lastmod>\n  </url>`)
  }
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
})
