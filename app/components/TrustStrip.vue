<script setup lang="ts">
import { trustIcons } from '~/data/shared'

const c = useContent()
</script>

<template>
  <div class="trust">
    <ul class="wrap trust__inner" :aria-label="c.trust.aria">
      <li v-for="(label, i) in c.trust.items" :key="i" class="trust__item glass">
        <UIcon :name="trustIcons[i]!" class="trust__icon" />
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.trust {
  margin-top: 40px;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
    margin-block: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 0 14px;
    border-radius: 999px;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
  }

  &__icon {
    flex: none;
    width: 17px;
    height: 17px;
    color: var(--accent-text);
  }
}
</style>
