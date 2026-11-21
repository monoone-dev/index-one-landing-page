<script setup lang="ts">
import { homePrivacyCards, privacyCards } from '~/data/shared'

const c = useContent()
const to = useLocalLink()
const cards = homePrivacyCards.map(id => privacyCards.find(card => card.id === id)!)
</script>

<template>
  <section class="section" aria-labelledby="security-title">
    <div class="wrap">
      <div v-reveal class="security island framed">
        <div class="security__head">
          <span class="eyebrow eyebrow--safe"><UIcon name="i-lucide-shield-check" /> {{ c.privacy.eyebrow }}</span>
          <h2 id="security-title">{{ c.privacy.title }}</h2>
          <UButton :to="to('/privacy')" color="neutral" variant="outline" size="lg" trailing-icon="i-lucide-arrow-right" :label="c.home.security.more" />
        </div>
        <ul class="security__cards">
          <li v-for="card in cards" :key="card.id" class="security__card">
            <span class="security__icon" :class="{ 'is-safe': card.tone === 'safe' }"><UIcon :name="card.icon" /></span>
            <h3>{{ c.privacy.cards[card.id].title }}</h3>
            <p v-html="c.privacy.cards[card.id].body" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.security {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 48px;
  padding: 48px;

  @include below(lg) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 24px;
  }

  &__head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    h2 {
      margin-bottom: 8px;
      font-size: clamp(28px, 3.6vw, 40px);
      line-height: 1.1;
    }
  }

  &__cards {
    display: grid;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__card {
    display: grid;
    grid-template-columns: 40px 1fr;
    column-gap: 16px;

    h3 {
      align-self: center;
      font-size: 17px;
    }

    p {
      grid-column: 2;
      margin-top: 4px;
      color: var(--text-secondary);
      font-size: 14.5px;
    }
  }

  &__icon {
    display: grid;
    grid-row: span 2;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--accent-soft);
    color: var(--accent-text);
    font-size: 20px;

    &.is-safe {
      background: var(--safe-soft);
      color: var(--safe-text);
    }
  }
}
</style>
