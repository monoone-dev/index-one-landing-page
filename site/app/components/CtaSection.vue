<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
const legacy = computed(() => fill(c.value.cta.legacyHtml, { download: site.links.download }))
</script>

<template>
  <section class="section cta" aria-labelledby="cta-title">
    <div class="wrap">
      <div v-reveal class="cta__card">
        <h2 id="cta-title">{{ c.cta.title }}</h2>
        <p>
          {{ c.cta.lead }}
          <NuxtLink :to="to('/pricing#compare')" class="cta__compare">{{ c.cta.compare }}</NuxtLink>
        </p>
        <div class="cta__actions">
          <UButton :to="site.links.download" external size="xl" icon="i-lucide-arrow-down-to-line" :label="c.cta.download" />
          <UButton :to="site.links.repo" external size="xl" color="neutral" variant="outline" icon="i-simple-icons-github" :label="c.cta.github" />
        </div>
        <p class="cta__legacy" v-html="legacy" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  text-align: center;

  &__card {
    padding: 64px 32px;
    border: 1px solid var(--border);
    border-radius: var(--round-xl);

    h2 {
      margin-bottom: 16px;
      font-size: clamp(28px, 4vw, 44px);
      line-height: 1.08;
    }

    > p:not(.cta__legacy) {
      max-width: 30em;
      margin: 0 auto 30px;
      color: var(--text-secondary);
      font-size: clamp(16px, 2vw, 18px);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  &__compare {
    display: block;
    margin-top: 8px;
    color: var(--accent-text);
    font-size: 15px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &__legacy {
    max-width: 46em;
    margin: 22px auto 0;
    color: var(--text-muted);
    font-size: 13.5px;

    :deep(a) {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
