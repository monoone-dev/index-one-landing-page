<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { flags } from '~/data/site'

const { locale, locales, setLocale } = useI18n()
const c = useContent()

const items = computed<DropdownMenuItem[]>(() =>
  locales.value.map(l => ({
    label: l.name,
    icon: flags[l.code],
    type: 'checkbox' as const,
    checked: l.code === locale.value,
    onSelect: () => setLocale(l.code),
  })),
)
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }" :ui="{ content: 'min-w-44' }">
    <UButton
      :icon="flags[locale]"
      color="neutral"
      variant="ghost"
      square
      :aria-label="c.common.language"
      class="language-switcher"
    />
  </UDropdownMenu>
</template>
