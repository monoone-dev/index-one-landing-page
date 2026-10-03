<script setup lang="ts">
import { comparison, competitors, type Support } from '~/data/shared'

const c = useContent()
const label = computed<Record<Support, string>>(() => ({ ...c.value.compare.labels, info: '' }))
const icon: Partial<Record<Support, string>> = { yes: 'i-lucide-check', partial: 'i-lucide-circle-dashed', no: 'i-lucide-minus', unknown: 'i-lucide-circle-help' }
</script>

<template>
  <section id="compare" class="section section--ruled" aria-labelledby="compare-title">
    <div class="wrap">
      <SectionHead id="compare-title" :eyebrow="c.compare.eyebrow" :title="c.compare.title">
        {{ c.compare.lead }}
      </SectionHead>

      <div v-reveal class="compare">
        <div class="compare__scroll" tabindex="0" role="region" aria-labelledby="compare-title">
          <table>
            <caption class="sr-only">{{ c.compare.caption }}</caption>
            <thead>
              <tr>
                <th scope="col" class="compare__criterion">{{ c.compare.capability }}</th>
                <th v-for="(name, i) in competitors" :key="name" scope="col" :class="{ 'compare__us': i === 0 }">{{ name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparison" :key="row.id">
                <th scope="row" class="compare__criterion">{{ c.compare.rows[row.id].criterion }}</th>
                <td v-for="(value, i) in row.values" :key="competitors[i]" :class="{ 'compare__us': i === 0 }">
                  <span class="mark" :class="`mark--${value}`">
                    <UIcon v-if="icon[value]" :name="icon[value]!" class="mark__icon" />
                    <span v-if="label[value]" class="sr-only">{{ label[value] }}</span>
                    <span v-if="c.compare.rows[row.id].cells[i] || value === 'unknown'" class="mark__note">
                      {{ c.compare.rows[row.id].cells[i] || c.compare.notStated }}
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="compare__foot">{{ c.compare.footnote }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.compare {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--round-lg);

  &__scroll {
    // Contains the absolutely positioned .sr-only labels; without it WebKit lets them
    // escape the scroller and widen the page on mobile once the reveal transform is gone.
    position: relative;
    overflow-x: auto;
  }

  table {
    width: 100%;
    min-width: 880px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 14px 16px;
    border-top: 1px solid var(--border-subtle);
    font-size: 14px;
    text-align: left;
    vertical-align: top;
  }

  thead th {
    border-top: 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 700;
  }

  tbody tr:first-child > * {
    border-top: 0;
  }

  &__criterion {
    width: 22%;
    color: var(--text-primary);
    font-weight: 600;
  }

  &__us {
    background: var(--accent-soft);
  }

  thead &__us {
    color: var(--accent-text);
  }

  &__foot {
    padding: 14px 20px;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 13px;
  }
}

.mark {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: var(--text-secondary);

  &__icon {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 1px;
  }

  &--yes &__icon {
    color: var(--safe-text);
  }

  &--partial &__icon {
    color: var(--warn-text);
  }

  &--no &__icon,
  &--unknown &__icon {
    color: var(--text-muted);
  }

  &__note {
    font-size: 13px;
    line-height: 1.45;
  }
}
</style>
