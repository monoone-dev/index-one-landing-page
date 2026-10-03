<script setup lang="ts">
import { plans } from '~/data/shared'

const props = defineProps<{ level?: 1 | 2 }>()
const sub = computed(() => props.level === 1 ? 'h2' : 'h3')
const c = useContent()
</script>

<template>
  <section id="pricing" class="section" aria-labelledby="pricing-title">
    <div class="wrap">
      <SectionHead id="pricing-title" :level="level" :eyebrow="c.pricing.eyebrow" :title="c.pricing.title">
        {{ c.pricing.lead }}
      </SectionHead>
      <ul class="plans">
        <li v-for="plan in plans" :key="plan.id" v-reveal class="plan" :class="{ 'plan--featured': plan.available, 'plan--soon': !plan.available }">
          <span class="plan__badge" :class="plan.available ? 'plan__badge--now' : 'plan__badge--soon'">{{ c.pricing.plans[plan.id].badge }}</span>
          <component :is="sub" class="plan__name">{{ c.pricing.plans[plan.id].name }}</component>
          <p class="plan__price">
            <span class="plan__amount">{{ c.pricing.plans[plan.id].price }}</span>
            <span v-if="c.pricing.plans[plan.id].per" class="plan__per">{{ c.pricing.plans[plan.id].per }}</span>
          </p>
          <p class="plan__tagline">{{ c.pricing.plans[plan.id].tagline }}</p>
          <ul class="plan__points">
            <li v-for="point in c.pricing.plans[plan.id].points" :key="point">
              <UIcon name="i-lucide-check" class="plan__check" />
              {{ point }}
            </li>
          </ul>
          <UButton
            :to="plan.href"
            external
            block
            size="lg"
            :color="plan.available ? 'primary' : 'neutral'"
            :variant="plan.available ? 'solid' : 'outline'"
            :label="c.pricing.plans[plan.id].cta"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(lg) {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }
}

.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  border: 1px solid var(--border);
  border-radius: var(--round-xl);

  &--featured {
    border-color: var(--accent-ring);
  }

  &--soon {
    opacity: 0.85;
  }

  &__name {
    font-size: 20px;
  }

  &__badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 13px;
    border-radius: var(--round-pill);
    font-family: var(--font-mono);
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;

    &--now {
      background: var(--accent);
      color: var(--text-on-accent);
    }

    &--soon {
      border: 1px solid var(--border);
      background: var(--surface-solid);
      color: var(--text-secondary);
    }
  }

  &__price {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin: 16px 0 4px;
  }

  &__amount {
    font-size: 42px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  &__per {
    color: var(--text-muted);
    font-size: 15px;
  }

  &__tagline {
    min-height: 42px;
    color: var(--text-secondary);
    font-size: 14.5px;
  }

  &__points {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 12px;
    margin: 22px 0 26px;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      color: var(--text-secondary);
      font-size: 14.5px;
    }
  }

  &__check {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    color: var(--text-muted);
  }
}
</style>
