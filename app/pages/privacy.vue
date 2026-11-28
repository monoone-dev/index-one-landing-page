<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
const { locale } = useI18n()
// The policy is published in Polish and in English; every other language gets the English one.
const policy = computed(() => `${site.links.legal}${locale.value === 'pl' ? 'polityka-prywatnosci.html' : 'en/privacy-policy.html'}`)

usePageSeo({
  path: '/privacy',
  meta: () => c.value.meta.privacy,
})
</script>

<template>
  <main id="main">
    <PrivacySection :level="1" />
    <section class="section plan-details" aria-labelledby="plan-details-title">
      <div class="wrap">
        <aside class="plan-details__card island" aria-labelledby="hosting-title">
          <h2 id="hosting-title"><UIcon name="i-lucide-server" />{{ c.privacy.hosting.title }}</h2>
          <p>{{ c.privacy.hosting.body }}</p>
          <p class="plan-details__links">
            <a :href="policy" target="_blank" rel="noopener">{{ c.privacy.hosting.policyLink }}</a>
          </p>
        </aside>
        <aside class="plan-details__card island">
          <h2 id="plan-details-title"><UIcon name="i-lucide-info" />{{ c.offer.detailsTitle }}</h2>
          <p>{{ c.offer.details }}</p>
          <p class="plan-details__links">
            <NuxtLink :to="to('/pricing#comparison')">{{ c.offer.comparison }}</NuxtLink>
            <NuxtLink to="/docs/plans-and-billing/">{{ c.offer.docs }}</NuxtLink>
            <NuxtLink :to="site.links.terms" external>{{ c.footer.terms }}</NuxtLink>
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
.plan-details__card + .plan-details__card { margin-top: 24px; }
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
