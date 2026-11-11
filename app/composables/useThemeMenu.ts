import type { DropdownMenuItem } from '@nuxt/ui'

const modes = [
  { value: 'light', icon: 'i-lucide-sun' },
  { value: 'dark', icon: 'i-lucide-moon' },
  { value: 'system', icon: 'i-lucide-monitor' },
] as const

/** Light, dark or system. Surface is the only skin, so the mode is the whole theme choice. */
export function useThemeMenu() {
  const colorMode = useColorMode()
  const c = useContent()

  const items = computed<DropdownMenuItem[][]>(() => [
    [
      { type: 'label', label: c.value.theme.modesGroup },
      ...modes.map(m => ({
        type: 'checkbox' as const,
        label: c.value.theme.modes[m.value],
        icon: m.icon,
        checked: colorMode.preference === m.value,
        onUpdateChecked: () => { colorMode.preference = m.value },
      })),
    ],
  ])

  const current = computed(() => modes.find(m => m.value === colorMode.preference) ?? modes[2])

  return { items, icon: computed(() => current.value.icon) }
}
