<script setup lang="ts">
const { items, icon } = useLanguageMenu()
const c = useContent()
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }" :ui="{ content: 'min-w-44' }">
    <UButton
      :icon="icon"
      color="neutral"
      variant="ghost"
      square
      :aria-label="c.common.language"
      class="language-switcher"
    />
  </UDropdownMenu>
</template>
