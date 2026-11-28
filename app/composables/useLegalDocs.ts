import { site } from '~/data/site'

/** The legal documents for the page's language: Polish for Polish readers, English for everybody else. */
export function useLegalDocs() {
  const { locale } = useI18n()
  return computed(() => {
    const url = (polish: string, english: string) =>
      `${site.links.legal}${locale.value === 'pl' ? polish : `en/${english}`}.html`
    return {
      terms: url('regulamin', 'terms'),
      privacy: url('polityka-prywatnosci', 'privacy-policy'),
      withdrawal: url('odstapienie', 'withdrawal'),
      dpa: url('dpa', 'dpa'),
    }
  })
}
