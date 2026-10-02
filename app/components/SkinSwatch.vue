<script setup lang="ts">
import type { Skin } from '~/composables/useSkin'

defineProps<{ skin: Skin }>()
</script>

<template>
  <span class="swatch" :class="`swatch--${skin}`" aria-hidden="true" />
</template>

<style lang="scss" scoped>
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
