import { site } from '~/data/site'

/** The legal documents for the page's language: Polish for Polish readers, English for everybody else. */
export function useLegalDocs() {
  const { locale } = useI18n()
  return computed(() => {
    const lang = locale.value === 'pl' ? 'pl' : 'en'
    const url = (polish: string, english: string) =>
      `${site.links.legal}${lang === 'pl' ? polish : `en/${english}`}.html`
    return {
      /** The language of the linked documents, for `hreflang`. */
      lang,
      terms: url('regulamin', 'terms'),
      privacy: url('polityka-prywatnosci', 'privacy-policy'),
      withdrawal: url('odstapienie', 'withdrawal'),
      dpa: url('dpa', 'dpa'),
    }
  })
}
