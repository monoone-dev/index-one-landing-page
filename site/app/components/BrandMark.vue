<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ size?: number }>(), { size: 30 })
const c = useContent()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink class="brand" :to="localePath('/')" :aria-label="c.common.homeAria">
    <BrandIcon name="index-one" :size="size" />
    <span>{{ site.name }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  color: var(--text-primary);

  @include coarse-pointer {
    min-height: 44px;
  }
}
</style>
