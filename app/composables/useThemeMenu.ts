import type { DropdownMenuItem } from '@nuxt/ui'
import { skins, type Skin } from '~/composables/useSkin'

const modes = [
  { value: 'light', icon: 'i-lucide-sun' },
  { value: 'dark', icon: 'i-lucide-moon' },
  { value: 'system', icon: 'i-lucide-monitor' },
] as const

export function useThemeMenu() {
  const { skin, setSkin } = useSkin()
  const colorMode = useColorMode()
  const c = useContent()

  const items = computed<DropdownMenuItem[][]>(() => [
    [
      { type: 'label', label: c.value.theme.skinsGroup },
      ...skins.map(s => ({
        type: 'checkbox' as const,
        label: c.value.theme.skins[s.value].label,
        description: c.value.theme.skins[s.value].description,
        skin: s.value,
        checked: skin.value === s.value,
        onUpdateChecked: () => setSkin(s.value as Skin),
      })),
    ],
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

  return { items, currentLabel: computed(() => c.value.theme.skins[skin.value].label) }
}
