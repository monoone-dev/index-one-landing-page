<script setup lang="ts">
import type { FeatureId } from '~~/i18n/content/types'
import { ivyFeatureIds, type Screenshot } from '~/data/shared'

const props = withDefaults(defineProps<{ featureId: FeatureId, shot: Screenshot, flip?: boolean, heading?: 'h2' | 'h3' }>(), { heading: 'h3' })
const c = useContent()
const feature = computed(() => c.value.features.items[props.featureId])
const isIvy = computed(() => ivyFeatureIds.includes(props.featureId))
</script>

<template>
  <article :id="featureId" v-reveal class="feature" :class="{ 'feature--flip': flip }" :aria-labelledby="`feature-${featureId}`">
    <div class="feature__text">
      <span class="feature__eyebrow">
        <BrandIcon v-if="isIvy" name="ivy" :size="featureId === 'ivy' ? 44 : 28" />
        <span class="eyebrow">{{ feature.eyebrow }}</span>
      </span>
      <component :is="heading" :id="`feature-${featureId}`" class="feature__title">{{ feature.title }}</component>
      <p v-html="feature.body" />
      <ul class="feature__points">
        <li v-for="point in feature.points" :key="point">
          <UIcon name="i-lucide-check" class="feature__check" />
          <span v-html="point" />
        </li>
      </ul>
    </div>
    <ScreenShot :shot="shot" :alt="feature.alt" />
  </article>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;

  & + & {
    margin-top: 96px;

    @include below(lg) {
      margin-top: 72px;
    }
  }

  &--flip &__text {
    order: 2;
  }

  @include below(lg) {
    grid-template-columns: 1fr;
    gap: 32px;

    &--flip .feature__text {
      order: 0;
    }
  }

  &__eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__text {
    .feature__title {
      margin: 14px 0 16px;
      font-size: clamp(24px, 3vw, 32px);
      line-height: 1.12;
    }

    > p {
      margin-bottom: 20px;
      color: var(--text-secondary);
      font-size: 16.5px;
    }
  }

  &__points {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 11px;
      align-items: flex-start;
      color: var(--text-secondary);
      font-size: 15px;
    }
  }

  &__check {
    flex: none;
    width: 19px;
    height: 19px;
    margin-top: 2px;
    color: var(--text-muted);
  }
}
</style>
