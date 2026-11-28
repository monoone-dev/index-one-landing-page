<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()

usePageSeo({
  path: '/privacy',
  meta: () => c.value.meta.privacy,
})

const legal = useLegalDocs()
</script>

<template>
  <main id="main">
    <PrivacySection :level="1" />
    <section class="section plan-details" aria-labelledby="plan-details-title">
      <div class="wrap">
        <aside class="plan-details__card island">
          <h2 id="plan-details-title"><UIcon name="i-lucide-info" />{{ c.offer.detailsTitle }}</h2>
          <p>{{ c.offer.details }}</p>
          <p class="plan-details__links">
            <NuxtLink :to="to('/pricing#comparison')">{{ c.offer.comparison }}</NuxtLink>
            <NuxtLink to="/docs/plans-and-billing/">{{ c.offer.docs }}</NuxtLink>
            <NuxtLink :to="legal.terms" external>{{ c.footer.terms }}</NuxtLink>
          </p>
        </aside>
      </div>
    </section>
    <section class="section" aria-labelledby="lifecycle-title">
      <div class="wrap">
        <h2 id="lifecycle-title">{{ c.privacy.lifecycle.title }}</h2>
        <div class="lifecycle">
          <article v-for="item in c.privacy.lifecycle.items" :key="item.title" class="island">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>
    <CtaSection />
  </main>
</template>

<style scoped>
.plan-details { padding-block: 0; }
.plan-details__card { padding: 24px 28px; border-left: 3px solid var(--accent); color: var(--text-secondary); font-size: 14.5px; }
.plan-details__card p { margin-top: 0; }
.plan-details h2 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 17px; letter-spacing: -0.01em; }
.plan-details h2 .iconify { color: var(--accent-text); }
.plan-details__links { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 16px !important; }
.plan-details__links a { color: var(--accent-text); text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 640px) { .plan-details__card { padding: 20px; } }
.lifecycle { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
article { padding: 24px; }
p { color: var(--text-secondary); margin-top: 12px; }
@media (max-width: 800px) { .lifecycle { grid-template-columns: 1fr; } }
</style>
