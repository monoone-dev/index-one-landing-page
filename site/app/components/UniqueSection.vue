<script setup lang="ts">
import { differentiators, features, highlightedFeatureIds } from '~/data/shared'

const c = useContent()
const to = useLocalLink()
const highlighted = features.filter(f => highlightedFeatureIds.includes(f.id))
</script>

<template>
  <section id="why" class="section" aria-labelledby="why-title">
    <div class="wrap">
      <SectionHead id="why-title" :eyebrow="c.unique.eyebrow" :title="c.unique.title">
        {{ c.unique.lead }}
      </SectionHead>

      <ul class="unique">
        <li v-for="item in differentiators" :key="item.id" v-reveal class="unique__item">
          <BrandIcon v-if="item.ivy" name="ivy" :size="40" class="unique__brand" />
          <span v-else class="unique__icon"><UIcon :name="item.icon" /></span>
          <h3>{{ c.unique.items[item.id].title }}</h3>
          <p>{{ c.unique.items[item.id].body }}</p>
          <NuxtLink :to="to(item.to)" class="unique__link">
            {{ c.unique.items[item.id].link }} <UIcon name="i-lucide-arrow-right" />
          </NuxtLink>
        </li>
      </ul>

      <div class="unique__features">
        <FeatureRow v-for="(feature, i) in highlighted" :key="feature.id" :feature-id="feature.id" :shot="feature.shot" :flip="i % 2 === 1" />
      </div>

      <p v-reveal class="unique__more">
        <UButton :to="to('/features')" color="neutral" variant="outline" size="lg" trailing-icon="i-lucide-arrow-right" :label="c.unique.seeAll" />
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.unique {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px 28px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(lg) {
    grid-template-columns: 1fr 1fr;
  }

  @include below(sm) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding-top: 22px;
    border-top: 1px solid var(--border);

    h3 {
      margin-bottom: 8px;
      font-size: 18px;
    }

    p {
      flex: 1;
      color: var(--text-secondary);
      font-size: 14.5px;
    }
  }

  &__icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
    border-radius: var(--round-sm);
    background: var(--accent-soft);
    color: var(--accent-text);
    font-size: 21px;
  }

  &__brand {
    margin-bottom: 14px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 14px;
    color: var(--accent-text);
    font-size: 14px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }

  &__features {
    margin-top: 96px;
  }

  &__more {
    margin-top: 72px;
    text-align: center;
  }
}
</style>
