<script setup lang="ts">
import type { Screenshot } from '~/data/shared'

defineProps<{ shot: Screenshot, alt: string }>()
</script>

<template>
  <figure class="shot">
    <img
      :src="shot.src"
      :width="shot.width"
      :height="shot.height"
      :alt="alt"
      loading="lazy"
      decoding="async"
    >
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

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
