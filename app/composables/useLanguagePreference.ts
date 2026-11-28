/**
 * The language the visitor picked in the language menu. Only the menu writes it and only the bare "/"
 * reads it, so opening a link never changes it.
 */
export function useLanguagePreference() {
  return useCookie<string | undefined>('index-one-locale', { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
}
