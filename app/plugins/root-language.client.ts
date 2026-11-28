/**
 * Only the bare "/" picks a language: the one picked in the menu, otherwise the browser's. Every other
 * address opens as written, and so does "/" with a query or an anchor, such as a campaign link.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const { pathname, search, hash } = window.location
  if (pathname !== '/' || search || hash) return
  const picked = useLanguagePreference()
  nuxtApp.hook('app:mounted', async () => {
    const i18n = nuxtApp.$i18n
    // The pick wins; a value the site does not publish falls back to the browser's language.
    const wanted = [picked.value, i18n.getBrowserLocale()]
      .map(code => i18n.locales.value.find(l => l.code === code)?.code)
      .find(Boolean)
    if (wanted && wanted !== 'en') await nuxtApp.runWithContext(() => i18n.setLocale(wanted))
  })
})
