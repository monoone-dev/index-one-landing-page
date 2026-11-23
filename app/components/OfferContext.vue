<script setup lang="ts">
import { site } from '~/data/site'
import type { OfferBenefitId } from '~~/i18n/content/types'

const c = useContent()
const to = useLocalLink()

// Each benefit is told by its text; the scene above it is decorative.
const benefits: OfferBenefitId[] = ['local', 'sync', 'grow']
</script>

<template>
  <section class="section offer" aria-labelledby="offer-title">
    <div class="wrap">
      <SectionHead id="offer-title" :eyebrow="c.offer.eyebrow" :title="c.offer.title">{{ c.offer.lead }}</SectionHead>

      <ul class="offer__grid">
        <li v-for="id in benefits" :key="id" v-reveal class="offer__card island">
          <div class="offer__stage" :class="`offer__stage--${id}`">
            <IllustrationsOfferLocal v-if="id === 'local'" />
            <IllustrationsOfferSync v-else-if="id === 'sync'" />
            <IllustrationsOfferGrow v-else />
          </div>
          <h3>{{ c.offer.benefits[id].title }}</h3>
          <p>{{ c.offer.benefits[id].body }}</p>
        </li>
      </ul>

      <div v-reveal class="offer__actions">
        <div class="offer__download">
          <UButton :to="site.links.download" external size="xl" icon="i-lucide-arrow-down-to-line" :label="c.offer.download" />
          <span>{{ c.offer.forMac }}</span>
        </div>
        <UButton :to="site.links.web" external size="xl" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-up-right" :label="c.offer.web" />
        <UButton :to="to('/pricing')" size="xl" color="neutral" variant="ghost" trailing-icon="i-lucide-arrow-right" :label="c.offer.plans" class="offer__plans" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// The next section brings its own top padding, so the offer adds none below its buttons.
.offer {
  padding: 64px 0 0;

  @include below(sm) {
    padding: 40px 0 0;
  }

  :deep(.section-head) {
    margin-bottom: 32px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;

    @include below(sm) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: var(--gap) var(--gap) 24px;

    h3 {
      margin: 20px 16px 8px;
      font-size: 19px;
      line-height: 1.25;
    }

    p {
      margin: 0 16px;
      color: var(--text-secondary);
      font-size: 15px;
      line-height: 1.55;
    }
  }

  &__stage {
    display: grid;
    place-items: center;
    padding: 18px 16px;
    border-radius: calc(var(--radius) - 4px);
    background:
      radial-gradient(110% 100% at 50% 0%, color-mix(in oklch, var(--accent) 20%, transparent), transparent 72%),
      var(--surface-sunken);

    &--sync {
      background:
        radial-gradient(90% 100% at 20% 0%, color-mix(in oklch, var(--accent) 22%, transparent), transparent 70%),
        radial-gradient(90% 100% at 85% 100%, color-mix(in oklch, var(--chart-teal) 14%, transparent), transparent 70%),
        var(--surface-sunken);
    }

    &--grow {
      background:
        radial-gradient(100% 100% at 85% 0%, color-mix(in oklch, var(--ivy) 24%, transparent), transparent 68%),
        radial-gradient(100% 100% at 15% 0%, color-mix(in oklch, var(--accent) 16%, transparent), transparent 68%),
        var(--surface-sunken);
    }

    :deep(.art) {
      max-width: 320px;

      @include below(sm) {
        max-width: 260px;
      }
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;

    @include below(sm) {
      flex-direction: column;
      align-items: stretch;

      :deep(.offer__plans),
      :deep(a) {
        justify-content: center;
      }
    }
  }

  &__download {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    @include below(sm) {
      align-items: stretch;
      text-align: center;
    }

    // On the sky, not on an island: secondary text keeps 4.5:1 where muted would not.
    span {
      color: var(--text-secondary);
      font-size: 13px;
    }
  }
}
</style>
