<script setup lang="ts">
import { homeStats } from '~/data/shared'

const c = useContent()
const stats = computed(() => homeStats.map((value, i) => ({ value, label: c.value.home.stats.labels[i]! })))
</script>

<template>
  <section class="band" :aria-label="c.home.stats.aria">
    <div class="band__track">
      <ul class="band__list">
        <li v-for="stat in stats" :key="stat.value + stat.label" class="band__item">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </li>
      </ul>
      <!-- A second copy keeps the loop seamless; screen readers hear the first one only. -->
      <ul class="band__list band__list--copy" aria-hidden="true">
        <li v-for="stat in stats" :key="stat.value + stat.label" class="band__item">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// A ticker on the accent colour, the one loud strip on the page.
.band {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 26px 0;
  background:
    linear-gradient(90deg, var(--accent), color-mix(in oklch, var(--accent), var(--ivy) 45%));
  color: var(--text-on-accent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);

  &__track {
    display: flex;
    width: max-content;
    animation: ticker 48s linear infinite;

    &:hover {
      animation-play-state: paused;
    }

    @include reduced-motion {
      flex-wrap: wrap;
      justify-content: center;
      width: auto;
      animation: none;
    }
  }

  &__list {
    display: flex;
    flex: none;
    margin: 0;
    padding: 0;
    list-style: none;

    @include reduced-motion {
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 16px;

      &--copy {
        display: none;
      }
    }
  }

  &__item {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 0 40px;
    border-right: 1px solid color-mix(in oklch, var(--text-on-accent) 22%, transparent);
    white-space: nowrap;

    strong {
      color: inherit;
      font-family: var(--font-display);
      font-size: 34px;
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    span {
      font-size: 15px;
      font-weight: 500;
      opacity: 0.9;
    }
  }
}

@keyframes ticker {
  to {
    transform: translateX(-50%);
  }
}
</style>
