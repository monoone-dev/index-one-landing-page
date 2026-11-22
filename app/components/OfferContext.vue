<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ showStatus?: boolean }>(), { showStatus: true })
const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section class="section" aria-labelledby="offer-context">
    <div class="wrap">
      <h2 id="offer-context">{{ c.pricing.lead }}</h2>
      <div class="offer-context">
        <article v-for="part in ['trial', 'meter', 'privacy'] as const" :key="part" class="island">
          <h3>{{ c.offer[`${part}Title`] }}</h3>
          <p>{{ c.offer[part] }}</p>
          <a v-if="part === 'meter'" :href="site.links.terms" target="_blank" rel="noopener" class="offer-link">{{ c.offer.fairUseLink }}</a>
        </article>
      </div>
      <p v-if="showStatus" class="offer-note">
        {{ c.offer.status }}
        <NuxtLink :to="to('/pricing#comparison')" class="offer-link offer-link--inline">{{ c.offer.comparison }}</NuxtLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
h2 { max-width: 30em; font-size: clamp(22px, 2.6vw, 28px); line-height: 1.2; }
.offer-context { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
article { padding: 24px; }
p { color: var(--text-secondary); margin-top: 12px; }
.offer-note { font-size: 14px; }
.offer-link { display: inline-block; margin-top: 12px; color: var(--accent-text); font-size: 14px; text-decoration: underline; text-underline-offset: 3px; }
.offer-link--inline { margin-top: 0; margin-left: 4px; font-weight: 600; }
@media (max-width: 800px) { .offer-context { grid-template-columns: 1fr; } }
</style>
