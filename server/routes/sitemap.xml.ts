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
const pages = ['/', '/features/', '/privacy/', '/pricing/']

const url = (code: string, page: string) => `${base}${code === 'en' ? page : `/${code}${page}`}`

export default defineEventHandler((event) => {
  const entries = pages.flatMap(page => locales.map(({ code }) => {
    const alternates = locales
      .map(l => `    <xhtml:link rel="alternate" hreflang="${l.language}" href="${url(l.code, page)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}"/>`)
      .join('\n')
    return `  <url>\n    <loc>${url(code, page)}</loc>\n${alternates}\n  </url>`
  }))
  entries.push(`  <url>\n    <loc>${base}/docs.html</loc>\n  </url>`)
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
})
