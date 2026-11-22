<script setup lang="ts">
import { plans } from '~/data/shared'
import { site } from '~/data/site'
import catalog from '~/data/billing-catalog.v1.json'
const props = defineProps<{ level?: 1 | 2 }>()
const sub = computed(() => props.level === 1 ? 'h2' : 'h3')
const c = useContent()
const to = useLocalLink()
const { locale } = useI18n()
const amount = (id: string) => new Intl.NumberFormat(locale.value, { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(catalog.offers.find(o => o.id === id)!.price.amountMinor / 100)
const quantity = (n: number) => new Intl.NumberFormat(locale.value).format(n)
const rows = computed(() => [
  { label: c.value.offer.local, values: catalog.offers.map(() => c.value.offer.included) },
  { label: c.value.offer.basics, values: catalog.offers.map(() => c.value.offer.included) },
  { label: c.value.offer.ivy, values: catalog.offers.map(o => `${quantity(o.limits.ivyUnits)}${o.id === 'team' ? ' · ' + c.value.offer.seat : ''}`) },
  // Transcription hours are not published: Free has a monthly allowance and paid plans fair use, both defined in the Terms.
  { label: c.value.offer.asr, values: catalog.offers.map(o => o.id === 'free' ? c.value.offer.asrBasic : c.value.offer.asrUnlimited) },
  { label: c.value.offer.storage, values: catalog.offers.map(o => `${o.limits.storageBytes / 1e9} GB${o.id === 'team' ? ' · '+ c.value.offer.seat : ''}`) },
])
</script>

<template>
  <section id="pricing" class="section" aria-labelledby="pricing-title">
    <div class="wrap">
      <SectionHead id="pricing-title" :level="level" :eyebrow="c.pricing.eyebrow" :title="c.pricing.title">{{ c.pricing.lead }}</SectionHead>
      <p class="offer-status island">{{ c.offer.status }}</p>
      <ul class="plans">
        <li v-for="plan in plans" :key="plan.id" class="plan island" :class="{ framed: plan.id === 'personal' }">
          <svg class="plan__art" viewBox="0 0 180 56" width="180" height="56" fill="none" aria-hidden="true">
            <rect x="4" y="8" width="64" height="40" rx="8" fill="var(--accent-soft)" stroke="currentColor" />
            <path d="M18 22h34M18 31h24M18 40h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <g v-if="plan.id !== 'free'" stroke="currentColor" stroke-width="2"><path d="M80 28h22m-5-5 5 5-5 5" /><rect x="114" y="12" width="52" height="32" rx="8" /><path d="M126 24h28m-28 8h18" /></g>
            <circle v-if="plan.id === 'team'" cx="166" cy="44" r="9" fill="var(--surface-base)" stroke="currentColor" />
          </svg>
          <span class="plan__badge">{{ c.pricing.plans[plan.id].badge }}</span>
          <component :is="sub">{{ c.pricing.plans[plan.id].name }}</component>
          <p class="plan__price"><strong>{{ amount(plan.id) }}</strong><span>{{ c.pricing.plans[plan.id].per }}</span></p>
          <p>{{ c.pricing.plans[plan.id].tagline }}</p>
          <ul class="plan__points"><li v-for="point in c.pricing.plans[plan.id].points" :key="point"><UIcon name="i-lucide-check" />{{ point }}</li></ul>
          <UButton :to="plan.available ? plan.href : to(plan.href)" :external="plan.available" block size="lg" :color="plan.available ? 'primary' : 'neutral'" :variant="plan.available ? 'solid' : 'outline'" :label="plan.available ? c.pricing.plans[plan.id].cta : c.nav.docs" />
        </li>
      </ul>
      <p class="offer-detail">
        {{ c.offer.fairUse }}
        <a :href="site.links.terms" target="_blank" rel="noopener" class="offer-link">{{ c.offer.fairUseLink }}</a>
      </p>
      <p class="offer-detail">{{ c.offer.tax }}</p>
      <span id="compare" />
      <div id="comparison" class="comparison island">
        <table>
          <caption>{{ c.offer.comparison }}</caption>
          <thead><tr><th scope="col">{{ c.pricing.eyebrow }}</th><th v-for="plan in plans" :key="plan.id" scope="col">{{ c.pricing.plans[plan.id].name }}</th></tr></thead>
          <tbody><tr v-for="row in rows" :key="row.label"><th scope="row">{{ row.label }}</th><td v-for="(value, i) in row.values" :key="i">{{ value }}</td></tr></tbody>
        </table>
      </div>
      <p class="offer-details"><NuxtLink to="/docs/plans-and-billing/">{{ c.offer.docs }}</NuxtLink></p>
    </div>
  </section>
</template>

<style scoped>
.offer-status { padding: 18px 24px; margin-bottom: 24px; border-left: 3px solid var(--accent); color: var(--text-secondary); }
.plans { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; list-style: none; padding: 0; }
.plan { padding: 28px; display: flex; flex-direction: column; gap: 14px; min-width: 0; }
.plan__art { color: var(--accent-text); max-width: 100%; }
.plan__badge { font-size: 12px; color: var(--text-muted); }
.plan__price { display: flex; flex-direction: column; gap: 4px; }
.plan__price strong { font-size: 40px; letter-spacing: -.035em; color: var(--text-primary); }
.plan p { color: var(--text-secondary); }
.plan__points { flex: 1; display: grid; align-content: start; gap: 12px; padding: 0; list-style: none; font-size: 14px; }
.plan__points li { display: flex; gap: 8px; align-items: start; }.plan__points .iconify { flex-shrink: 0; color: var(--safe-text); margin-top: 3px; }
.offer-detail { margin: 24px 0; color: var(--text-secondary); }
.offer-detail + .offer-detail { margin-top: -12px; }
.offer-link { color: var(--accent-text); text-decoration: underline; text-underline-offset: 3px; }
.comparison { overflow-x: auto; margin-top: 32px; }
table { width: 100%; border-collapse: collapse; font-size: 14px; }
caption { text-align: left; padding: 24px; font-size: 22px; font-weight: 600; color: var(--text-primary); }
th, td { padding: 16px; border-top: 1px solid var(--border); text-align: left; }
th { color: var(--text-primary); } td { color: var(--text-secondary); }
.offer-details { margin-top: 24px; color: var(--text-secondary); }
.offer-details a { color: var(--text-primary); text-decoration: underline; }
@media (max-width: 940px) { .plans { grid-template-columns: 1fr; max-width: 520px; margin-inline: auto; } }
@media (max-width: 600px) {
  table, thead, tbody { display: block; }
  tr { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
  th, td { padding: 12px 8px; border-top: 0; }
  tr { border-top: 1px solid var(--border); }
  th:first-child { grid-column: 1 / -1; padding-bottom: 4px; }
  thead th:not(:first-child), td { text-align: center; }
}
</style>
