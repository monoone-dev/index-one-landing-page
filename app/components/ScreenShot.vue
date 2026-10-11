<script setup lang="ts">
import type { Screenshot } from '~/data/shared'

defineProps<{ shot: Screenshot, alt: string }>()
</script>

<template>
  <figure class="shot">
    <ThemeImage
      :dark="shot.src"
      :light="shot.light"
      :width="shot.width"
      :height="shot.height"
      :alt="alt"
    />
  </figure>
</template>

<style lang="scss" scoped>
.shot {
  position: relative;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--round-lg);
  background: var(--surface-solid);
  box-shadow: var(--shadow-md);
}
</style>
