<script setup lang="ts">
const { items, icon } = useThemeMenu()
const c = useContent()
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }" :ui="{ content: 'min-w-44' }">
    <UButton color="neutral" variant="ghost" :icon="icon" :aria-label="c.theme.label" />
  </UDropdownMenu>
</template>
