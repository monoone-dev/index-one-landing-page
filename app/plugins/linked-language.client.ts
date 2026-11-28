/**
 * Only the bare "/" picks a language for the visitor (`redirectOn: 'root'` in nuxt.config.ts).
 * "/" with a query or an anchor is a link to the English page, such as a campaign link with utm_
 * parameters, so it opens as written. The language detection reads the remembered choice before the
 * browser language, so remembering English here, before it runs, is enough.
 */
export default defineNuxtPlugin({
  name: 'linked-language',
  enforce: 'pre',
  setup() {
    const { pathname, search, hash } = window.location
    if (pathname !== '/' || (!search && !hash)) return
    // The name is `cookieKey` in nuxt.config.ts.
    document.cookie = 'index-one-locale=en; Path=/; Max-Age=31536000; SameSite=Lax'
  },
})
