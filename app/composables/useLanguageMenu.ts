import type { DropdownMenuItem } from '@nuxt/ui'
import { flags } from '~/data/site'

export function useLanguageMenu() {
  const { locale, locales, setLocale } = useI18n()
  const route = useRoute()
  const localePath = useLocalePath()
  const picked = useLanguagePreference()

  // The documentation is English only, so another language there opens that language's home page.
  const choose = (code: typeof locale.value) => {
    picked.value = code
    return route.path.startsWith('/docs/') && code !== 'en'
      ? navigateTo(localePath('/', code))
      : setLocale(code)
  }

  const items = computed<DropdownMenuItem[]>(() =>
    locales.value.map(l => ({
      label: l.name,
      icon: flags[l.code],
      type: 'checkbox' as const,
      checked: l.code === locale.value,
      onSelect: () => choose(l.code),
    })),
  )

  return { items, icon: computed(() => flags[locale.value]) }
}
