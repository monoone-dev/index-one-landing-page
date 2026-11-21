<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
const latest = notes[0]
const announce = computed(() => latest ? fill(c.value.home.announce.text, { version: latest.tag.slice(1) }) : '')
</script>

<template>
  <section id="product" class="hero" aria-labelledby="hero-title">
    <div class="wrap hero__inner">
      <NuxtLink v-if="latest" :to="to(`/changelog#${latest.tag}`)" class="hero__announce glass">
        <span class="hero__announce-badge">{{ c.home.announce.badge }}</span>
        <span class="hero__announce-text">{{ announce }}</span>
        <UIcon name="i-lucide-arrow-right" class="hero__announce-arrow" />
      </NuxtLink>

      <h1 id="hero-title" class="hero__title">
        {{ c.hero.titleStrong }} <span class="hero__title-soft">{{ c.hero.titleSoft }}</span>
      </h1>
      <p class="hero__sub" v-html="c.hero.subHtml" />
      <div class="hero__actions">
        <UButton :to="site.links.download" external size="xl" icon="i-lucide-arrow-down-to-line" :label="c.hero.download" />
        <UButton :to="to('/privacy')" size="xl" color="neutral" variant="outline" :label="c.hero.privacyCta" trailing-icon="i-lucide-arrow-right" />
      </div>
      <p class="hero__note">
        <UIcon name="i-lucide-check" class="hero__note-icon" />
        {{ c.hero.note }}
      </p>
    </div>

    <div class="wrap hero__stage">
      <div class="hero__glow" aria-hidden="true" />
      <HeroVideo />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// A centred statement over a wide product stage, the way large developer-tool sites open.
.hero {
  position: relative;
  padding: 72px 0 24px;

  @include below(sm) {
    padding-top: 40px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__announce {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    max-width: 100%;
    margin-bottom: 28px;
    padding: 5px 14px 5px 5px;
    border-radius: var(--round-pill);
    color: var(--text-secondary);
    font-size: 13.5px;
    font-weight: 500;
    transition: color 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      color: var(--text-primary);
      box-shadow: 0 0 0 1px var(--accent-ring);
    }
  }

  &__announce-badge {
    flex: none;
    padding: 3px 10px;
    border-radius: var(--round-pill);
    background: var(--accent);
    color: var(--text-on-accent);
    font-size: 12px;
    font-weight: 600;
  }

  &__announce-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__announce-arrow {
    flex: none;
    transition: transform 0.15s ease;

    .hero__announce:hover & {
      transform: translateX(3px);
    }
  }

  &__title {
    max-width: 15em;
    margin-bottom: 24px;
    font-size: clamp(38px, 7vw, 80px);
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  &__title-soft {
    display: block;
    background: linear-gradient(90deg, var(--accent-text), var(--ivy));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  &__sub {
    max-width: 40em;
    margin-bottom: 34px;
    color: var(--text-secondary);
    font-size: clamp(16.5px, 2vw, 19px);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  &__note {
    max-width: 44em;
    margin-top: 18px;
    color: var(--text-muted);
    font-size: 13.5px;
  }

  // Inline, so the check stays next to the first word however the centred line wraps.
  &__note-icon {
    margin-right: 6px;
    vertical-align: -2px;
    color: var(--safe-text);
  }

  &__stage {
    position: relative;
    max-width: 1040px;
    margin-top: 64px;

    @include below(sm) {
      margin-top: 40px;
    }
  }

  &__glow {
    position: absolute;
    inset: 8% 6% -6%;
    z-index: -1;
    border-radius: 50%;
    background: radial-gradient(closest-side, color-mix(in oklch, var(--accent) 40%, transparent), transparent);
    filter: blur(40px);
    opacity: 0.7;
    pointer-events: none;
  }
}
</style>
