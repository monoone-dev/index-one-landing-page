<script setup lang="ts">
import { trustIcons } from '~/data/shared'

const c = useContent()
</script>

<template>
  <div class="trust">
    <ul class="wrap trust__inner" :aria-label="c.trust.aria">
      <li v-for="(label, i) in c.trust.items" :key="i" class="trust__item">
        <UIcon :name="trustIcons[i]!" class="trust__icon" />
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.trust {
  margin-top: 44px;
  padding: 26px 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px 34px;
    margin-block: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-secondary);
    font-size: 14.5px;
    font-weight: 500;
  }

  &__icon {
    flex: none;
    width: 19px;
    height: 19px;
    color: var(--text-muted);
  }
}
</style>
