<script setup lang="ts">
import { plans } from '~/data/shared'
import catalog from '~/data/billing-catalog.v1.json'
import type { PlanId } from '~~/i18n/content/types'

const props = withDefaults(defineProps<{
  level?: 1 | 2
  /** The home page shows the cards and the tax note; /pricing adds the comparison and plan details. */
  compact?: boolean
}>(), { level: 2, compact: false })

const sub = computed(() => props.level === 1 ? 'h2' : 'h3')
const c = useContent()
const to = useLocalLink()
const { locale } = useI18n()
const legal = useLegalDocs()

// Every amount, allowance and seat minimum comes from the billing catalog. A plan missing from it
// must stop the build, never render as a price of zero.
function offerOf(id: PlanId) {
  const offer = catalog.offers.find(o => o.id === id)
  if (!offer) throw new Error(`billing-catalog.v1.json has no offer "${id}"`)
  return offer
}
const currency = (code: string) => new Intl.NumberFormat(locale.value, { style: 'currency', currency: code, maximumFractionDigits: 0 })
const quantity = (n: number) => new Intl.NumberFormat(locale.value).format(n)
const gigabytes = (bytes: number) => quantity(bytes / 1e9)

const trustIcons: Record<PlanId, string> = {
  free: 'i-lucide-credit-card',
  personal: 'i-lucide-rotate-ccw',
  team: 'i-lucide-settings-2',
}

const cards = computed(() => plans.map((plan) => {
  const offer = offerOf(plan.id)
  const copy = c.value.pricing.plans[plan.id]
  const values = { ivy: quantity(offer.limits.ivyUnits), storage: gigabytes(offer.limits.storageBytes), seats: offer.minSeats }
  return {
    ...plan,
    copy,
    featured: plan.id === 'personal',
    // Split so the number can be the hero and the currency sits beside it, in every locale's order.
    price: currency(offer.price.currency).formatToParts(offer.price.amountMinor / 100),
    period: fill(copy.period, values),
    points: copy.points.map(point => fill(point, values)),
    trustIcon: trustIcons[plan.id],
  }
}))

// Phones stack the cards, so Free fills the first screen; this line keeps the paid offer in view.
const peek = computed(() => cards.value.find(card => card.featured)!)

const note = computed(() => {
  const team = offerOf('team')
  return fill(c.value.pricing.note, {
    seats: team.minSeats,
    total: currency(team.price.currency).format(team.price.amountMinor * team.minSeats / 100),
  })
})

const rows = computed(() => {
  const o = c.value.offer
  return [
    { label: o.local, values: catalog.offers.map(() => o.included) },
    { label: o.basics, values: catalog.offers.map(() => o.included) },
    { label: o.asr, values: catalog.offers.map(x => x.id === 'free' ? o.asrBasic : o.asrPaid) },
    { label: o.ivy, values: catalog.offers.map(x => `${quantity(x.limits.ivyUnits)}${x.payerKind === 'workspace' ? ` · ${o.seat}` : ''}`) },
    { label: o.storage, values: catalog.offers.map(x => `${gigabytes(x.limits.storageBytes)} ${o.gb}${x.payerKind === 'workspace' ? ` · ${o.seat}` : ''}`) },
    { label: o.meetBot, values: catalog.offers.map(x => x.meetBotAvailable ? o.included : o.notIncluded) },
  ]
})
</script>

<template>
  <section id="pricing" class="section pricing" :class="{ 'pricing--compact': compact }" aria-labelledby="pricing-title">
    <div class="wrap">
      <SectionHead id="pricing-title" :level="level" :eyebrow="c.pricing.eyebrow" :title="c.pricing.title">{{ c.pricing.lead }}</SectionHead>

      <p class="peek">
        <span class="peek__row">
          <span class="peek__plan"><UIcon name="i-lucide-sparkles" />{{ peek.copy.name }}</span>
          <span class="peek__price"><b>{{ peek.price.map(part => part.value).join('') }}</b> {{ peek.period }}</span>
        </span>
        <span class="peek__row">
          <span class="peek__benefit"><UIcon name="i-lucide-check" />{{ c.pricing.peek.benefit }}</span>
          <a class="peek__link" :href="`#plan-card-${peek.id}`">{{ c.pricing.peek.link }}<UIcon name="i-lucide-arrow-down" /></a>
        </span>
      </p>

      <ul class="plans">
        <li v-for="plan in cards" :id="`plan-card-${plan.id}`" :key="plan.id" v-reveal class="plan island" :class="{ 'plan--featured framed': plan.featured }">
          <div class="plan__head">
            <component :is="sub" :id="`plan-${plan.id}`" class="plan__name">{{ plan.copy.name }}</component>
            <span v-if="plan.featured" class="plan__badge"><UIcon name="i-lucide-sparkles" />{{ c.pricing.recommended }}</span>
          </div>
          <p class="plan__for">{{ plan.copy.audience }}</p>
          <p class="plan__price">
            <span class="plan__amount">
              <span v-for="(part, i) in plan.price" :key="i" :class="part.type === 'currency' ? 'plan__currency' : 'plan__number'">{{ part.value }}</span>
            </span>
            <span class="plan__period">{{ plan.period }}</span>
          </p>
          <ul class="plan__points">
            <li v-for="point in plan.points" :key="point">
              <span class="plan__check"><UIcon name="i-lucide-check" /></span>{{ point }}
            </li>
          </ul>
          <UButton
            :to="plan.available ? plan.href : '/docs/plans-and-billing/'"
            :external="plan.available"
            block
            size="xl"
            :color="plan.featured ? 'primary' : 'neutral'"
            :variant="plan.featured ? 'solid' : 'outline'"
            :icon="plan.id === 'free' ? 'i-lucide-arrow-down-to-line' : undefined"
            :trailing-icon="plan.id === 'free' ? undefined : 'i-lucide-arrow-up-right'"
            :label="plan.copy.cta"
            :aria-describedby="`plan-${plan.id}`"
          />
          <p class="plan__trust"><UIcon :name="plan.trustIcon" />{{ plan.copy.trust }}</p>
        </li>
      </ul>

      <!-- Paid transcription is never called unlimited: heavy use goes to a slower queue, and that has limits too. -->
      <p class="pricing__note">
        {{ c.offer.fairUse }}
        <a :href="legal.terms" target="_blank" rel="noopener" class="pricing__more">{{ c.offer.fairUseLink }}<UIcon name="i-lucide-arrow-up-right" /></a>
      </p>
      <p class="pricing__note">
        {{ note }}
        <NuxtLink v-if="compact" :to="to('/pricing#comparison')" class="pricing__more">{{ c.pricing.compareLink }}<UIcon name="i-lucide-arrow-right" /></NuxtLink>
      </p>

      <template v-if="!compact">
        <span id="compare" />
        <div id="comparison" class="comparison island">
          <table>
            <caption>{{ c.offer.comparison }}</caption>
            <thead>
              <tr>
                <th scope="col">{{ c.offer.feature }}</th>
                <th v-for="plan in cards" :key="plan.id" scope="col">{{ plan.copy.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td v-for="(value, i) in row.values" :key="i">{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <aside class="details island" aria-labelledby="plan-details-title">
          <h2 id="plan-details-title" class="details__title"><UIcon name="i-lucide-info" />{{ c.offer.detailsTitle }}</h2>
          <p>{{ c.offer.details }}</p>
          <details class="details__more">
            <summary>{{ c.offer.more }}</summary>
            <p>{{ c.offer.after }}</p>
            <p>{{ c.offer.team }}</p>
            <p>{{ c.offer.lifecycle }}</p>
            <p>{{ c.offer.unit }}</p>
          </details>
          <p class="details__links">
            <NuxtLink :to="to('/privacy')">{{ c.nav.privacy }}</NuxtLink>
            <NuxtLink to="/docs/plans-and-billing/">{{ c.offer.docs }}</NuxtLink>
            <NuxtLink :to="legal.terms" external>{{ c.footer.terms }}</NuxtLink>
          </p>
        </aside>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.pricing--compact {
  :deep(.section-head) {
    margin-bottom: 40px;
  }
}

.peek {
  display: none;

  @include below(lg) {
    display: grid;
    gap: 8px;
    max-width: 520px;
    margin: -8px auto 20px;
    padding: 14px 16px;
    border: 1px solid var(--accent-ring);
    border-radius: 16px;
    background: linear-gradient(var(--accent-soft), var(--accent-soft)), var(--surface-raised);
    color: var(--text-secondary);
    font-size: 14px;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 4px 12px;
  }

  &__plan,
  &__benefit,
  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    .iconify {
      flex-shrink: 0;
    }
  }

  &__plan {
    color: var(--accent-text);
    font-weight: 650;
  }

  &__price b {
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }

  &__benefit {
    color: var(--text-primary);

    .iconify {
      color: var(--accent-text);
    }
  }

  &__link {
    gap: 4px;
    color: var(--accent-text);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.plans {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(lg) {
    grid-template-columns: minmax(0, 1fr);
    max-width: 520px;
    margin-inline: auto;
    gap: 16px;
  }
}

.plan {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 28px;

  @include below(sm) {
    padding: 24px;
  }

  &--featured {
    background:
      linear-gradient(180deg, color-mix(in oklch, var(--accent) 7%, transparent), transparent 55%),
      var(--surface-raised);
    box-shadow: 0 0 0 1px var(--accent-ring), 0 0 0 var(--gap) var(--glass-frame), var(--pop);
  }

  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 28px;
  }

  &__name {
    margin: 0;
    font-size: 20px;
    line-height: 1.2;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: var(--round-pill, 999px);
    background: var(--accent);
    color: var(--text-on-accent);
    font-size: 12.5px;
    font-weight: 600;
  }

  &__for {
    margin-top: 6px;
    color: var(--text-secondary);
    font-size: 15px;
  }

  &__price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 22px 0 22px;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--border);
  }

  &__amount {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    color: var(--text-primary);
    font-family: var(--font-display);
    font-weight: 650;
    letter-spacing: -0.035em;
  }

  &__number {
    font-size: 52px;
    line-height: 1;

    @include below(sm) {
      font-size: 46px;
    }
  }

  &__currency {
    padding-inline: 2px;
    color: var(--text-secondary);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  &__period {
    color: var(--text-muted);
    font-size: 14px;
  }

  &__points {
    display: grid;
    flex: 1;
    align-content: start;
    gap: 12px;
    margin: 0 0 24px;
    padding: 0;
    list-style: none;
    color: var(--text-primary);
    font-size: 15px;

    li {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      min-width: 0;
    }
  }

  &__check {
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 20px;
    height: 20px;
    margin-top: 1px;
    border-radius: 50%;
    background: var(--safe-soft);
    color: var(--safe-text);
    font-size: 13px;
  }

  &--featured &__check {
    background: var(--accent-soft);
    color: var(--accent-text);
  }

  &__trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;
    color: var(--text-muted);
    font-size: 13.5px;
    text-align: center;

    .iconify {
      flex-shrink: 0;
    }
  }
}

.pricing__note {
  max-width: 46em;
  margin: 32px auto 0;
  color: var(--text-secondary);
  font-size: 14.5px;
  text-align: center;

  & + & {
    margin-top: 8px;
  }
}

.pricing__more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 6px;
  color: var(--accent-text);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.comparison {
  overflow-x: auto;
  margin-top: 48px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14.5px;
}

caption {
  padding: 24px;
  color: var(--text-primary);
  font-size: 22px;
  font-weight: 600;
  text-align: left;
}

th,
td {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  text-align: left;
}

thead th {
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 600;
}

thead th:nth-child(3) {
  color: var(--accent-text);
}

th {
  color: var(--text-primary);
}

td {
  color: var(--text-secondary);
}

tbody td:nth-child(3) {
  background: color-mix(in oklch, var(--accent) 5%, transparent);
}

.details {
  margin-top: 24px;
  padding: 24px 28px;
  border-left: 3px solid var(--accent);
  color: var(--text-secondary);
  font-size: 14.5px;

  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 17px;
    letter-spacing: -0.01em;

    .iconify {
      color: var(--accent-text);
    }
  }

  &__more {
    margin-top: 14px;

    summary {
      width: fit-content;
      color: var(--text-primary);
      font-weight: 600;
      cursor: pointer;
    }

    p {
      margin-top: 10px;
    }
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin-top: 16px;

    a {
      color: var(--accent-text);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

@include below(sm) {
  table,
  caption,
  thead,
  tbody {
    display: block;
  }

  caption {
    padding: 20px;
    font-size: 20px;
  }

  tr {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--border);
  }

  th,
  td {
    padding: 12px 8px;
    border-top: 0;
    overflow-wrap: anywhere;
  }

  th:first-child {
    grid-column: 1 / -1;
    padding-bottom: 4px;
  }

  thead th:first-child {
    display: none;
  }

  thead th:not(:first-child),
  td {
    text-align: center;
  }

  .details {
    padding: 20px;
  }
}
</style>
