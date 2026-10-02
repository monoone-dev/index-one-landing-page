<script setup lang="ts">
const { items, currentLabel } = useThemeMenu()
const c = useContent()
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
      <SkinSwatch v-if="'skin' in item" :skin="item.skin" />
      <UIcon v-else-if="item.icon" :name="item.icon" class="size-4 text-dimmed" />
    </template>
  </UDropdownMenu>
</template>

<style lang="scss" scoped>
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
}
</style>
