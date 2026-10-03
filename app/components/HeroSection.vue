<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section id="product" class="hero" aria-labelledby="hero-title">
    <div class="wrap hero__grid">
      <div>
        <div class="hero__badges">
          <span class="pill"><span class="pill__dot pill__dot--safe" /> {{ c.hero.badgeLocal }}</span>
          <span class="pill"><BrandIcon name="ivy" :tile="false" :size="16" /> {{ c.hero.badgeIvy }}</span>
          <a class="pill pill--link" :href="site.links.repo" :aria-label="c.hero.githubAria">
            <UIcon name="i-simple-icons-github" /> {{ c.hero.badgeStar }}
          </a>
        </div>
        <h1 id="hero-title" class="hero__title">
          {{ c.hero.titleStrong }} <span class="hero__title-soft">{{ c.hero.titleSoft }}</span>
        </h1>
        <p class="hero__sub" v-html="c.hero.subHtml" />
        <div class="hero__actions">
          <UButton :to="site.links.download" external size="xl" icon="i-lucide-arrow-down-to-line" :label="c.hero.download" />
          <UButton :to="to('/privacy')" size="xl" color="neutral" variant="outline" :label="c.hero.privacyCta" />
        </div>
        <p class="hero__note">
          <UIcon name="i-lucide-check" class="hero__note-icon" />
          {{ c.hero.note }}
        </p>
      </div>
      <HeroVideo />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.hero {
  position: relative;
  padding: 96px 0 48px;

  @include below(lg) {
    padding-top: 56px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.02fr 1fr;
    gap: 56px;
    align-items: center;

    @include below(lg) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  &__title {
    margin-bottom: 24px;
    font-size: clamp(38px, 6.2vw, 68px);
    line-height: 1.04;
    letter-spacing: -0.035em;
  }

  &__title-soft {
    color: var(--text-secondary);
  }

  &__sub {
    max-width: 34em;
    margin-bottom: 32px;
    color: var(--text-secondary);
    font-size: clamp(16.5px, 2vw, 19px);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    color: var(--text-muted);
    font-size: 13.5px;
  }

  &__note-icon {
    flex: none;
    color: var(--safe-text);
  }
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: var(--round-pill);
  color: var(--text-secondary);
  font-size: 12.5px;
  font-weight: 500;

  &__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);

    &--safe {
      background: var(--safe-text);
    }
  }

  &--link {
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }
  }
}
</style>
