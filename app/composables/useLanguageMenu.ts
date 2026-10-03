import type { DropdownMenuItem } from '@nuxt/ui'
import { flags } from '~/data/site'

export function useLanguageMenu() {
  const { locale, locales, setLocale } = useI18n()

  const items = computed<DropdownMenuItem[]>(() =>
    locales.value.map(l => ({
      label: l.name,
      icon: flags[l.code],
      type: 'checkbox' as const,
      checked: l.code === locale.value,
      onSelect: () => setLocale(l.code),
    })),
  )

  return { items, icon: computed(() => flags[locale.value]) }
}
