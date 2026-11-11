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
  border-radius: var(--radius);
  background: var(--surface-solid);
  // Surface's glass frame: an island gap of frosted white around the window.
  box-shadow: 0 0 0 var(--gap) var(--glass-frame), var(--pop);
}
</style>
