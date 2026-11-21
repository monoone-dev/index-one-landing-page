<script setup lang="ts">
import { differentiators } from '~/data/shared'

const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section id="only" class="section" aria-labelledby="why-title">
    <div class="wrap">
      <SectionHead id="why-title" :eyebrow="c.unique.eyebrow" :title="c.unique.title">
        {{ c.unique.lead }}
      </SectionHead>

      <ul class="unique">
        <li v-for="item in differentiators" :key="item.id" v-reveal class="unique__item island">
          <BrandIcon v-if="item.ivy" name="ivy" :size="40" class="unique__brand" />
          <span v-else class="unique__icon"><UIcon :name="item.icon" /></span>
          <h3>{{ c.unique.items[item.id].title }}</h3>
          <p>{{ c.unique.items[item.id].body }}</p>
          <NuxtLink :to="to(item.to)" class="unique__link">
            {{ c.unique.items[item.id].link }} <UIcon name="i-lucide-arrow-right" />
          </NuxtLink>
        </li>
      </ul>

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
  gap: var(--gap);
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
    padding: 22px;

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
    border-radius: 10px;
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

  &__more {
    margin-top: 72px;
    text-align: center;
  }
}
</style>
