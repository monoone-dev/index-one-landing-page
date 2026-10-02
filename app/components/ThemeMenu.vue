<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { skins, type Skin } from '~/composables/useSkin'

const { skin, setSkin } = useSkin()
const colorMode = useColorMode()
const c = useContent()

const modes = [
  { value: 'light', icon: 'i-lucide-sun' },
  { value: 'dark', icon: 'i-lucide-moon' },
  { value: 'system', icon: 'i-lucide-monitor' },
] as const

const currentLabel = computed(() => c.value.theme.skins[skin.value].label)

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
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }" :ui="{ content: 'min-w-60' }">
    <UButton
      color="neutral"
      variant="outline"
      icon="i-lucide-palette"
      trailing-icon="i-lucide-chevron-down"
      :aria-label="c.theme.label"
      class="theme-trigger"
    >
      <span class="theme-trigger__label">{{ c.theme.label }}</span>
      <span class="theme-trigger__current">{{ currentLabel }}</span>
    </UButton>

    <template #item-leading="{ item }">
      <span v-if="'skin' in item" class="swatch" :class="`swatch--${item.skin}`" aria-hidden="true" />
      <UIcon v-else-if="item.icon" :name="item.icon" class="size-4 text-dimmed" />
    </template>
  </UDropdownMenu>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.theme-trigger {
  gap: 8px;

  &__current {
    color: var(--text-muted);
    font-weight: 500;
  }

  @media (max-width: 1280px) {
    &__label {
      display: none;
    }
  }

  @include below(sm) {
    &__label,
    &__current {
      display: none;
    }
  }
}

.swatch {
  width: 20px;
  height: 20px;
  flex: none;
  border-radius: 50%;
  border: 1px solid var(--border);

  &--studio {
    background: linear-gradient(135deg, oklch(98.7% 0.002 197.1) 50%, oklch(68.5% 0.169 237.323) 50%);
  }

  &--paper {
    background: linear-gradient(135deg, oklch(96.5% 0.011 99) 50%, oklch(51.4% 0.123 37.45) 50%);
  }

  &--minimalist {
    background: linear-gradient(135deg, oklch(1 0 0) 50%, oklch(0.205 0 0) 50%);
  }
}
</style>
