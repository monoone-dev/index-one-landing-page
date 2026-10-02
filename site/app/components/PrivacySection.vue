<script setup lang="ts">
import { privacyCards, privacyShot, providers } from '~/data/shared'

const props = defineProps<{ level?: 1 | 2 }>()
const sub = computed(() => props.level === 1 ? 'h2' : 'h3')
const c = useContent()
</script>

<template>
  <section id="privacy" class="section section--ruled" aria-labelledby="privacy-title">
    <div class="wrap">
      <SectionHead id="privacy-title" :level="level" :eyebrow="c.privacy.eyebrow" :title="c.privacy.title" tone="safe">
        <span v-html="c.privacy.leadHtml" />
      </SectionHead>

      <ul class="cards">
        <li
          v-for="card in privacyCards"
          :key="card.id"
          v-reveal
          class="card"
          :class="{ 'card--safe': card.tone === 'safe', 'card--wide': card.wide }"
        >
          <span class="card__icon"><UIcon :name="card.icon" /></span>
          <component :is="sub" class="card__title">{{ c.privacy.cards[card.id].title }}</component>
          <p v-html="c.privacy.cards[card.id].body" />
        </li>
      </ul>

      <div id="providers" v-reveal class="egress">
        <div class="egress__scroll">
          <table>
            <caption class="sr-only">{{ c.privacy.tableCaption }}</caption>
            <thead>
              <tr>
                <th v-for="header in c.privacy.tableHeaders" :key="header" scope="col">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in providers" :key="p.id">
                <th scope="row">
                  <BrandIcon v-if="p.id === 'on-device'" name="ivy" :tile="false" :size="18" class="egress__ivy" />
                  {{ c.privacy.providers[p.id].name }}
                  <span v-if="c.privacy.providers[p.id].note" class="egress__note">({{ c.privacy.providers[p.id].note }})</span>
                </th>
                <td>{{ c.privacy.providers[p.id].where }}</td>
                <td>
                  <span class="tag" :class="p.leaves ? 'tag--yes' : 'tag--no'">
                    {{ p.leaves ? c.privacy.leavesYes : c.privacy.leavesNo }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="egress__shot">
          <ScreenShot :shot="privacyShot" :alt="c.privacy.shotAlt" />
        </div>
        <p class="egress__foot">{{ c.privacy.footnote }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px 28px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(lg) {
    grid-template-columns: 1fr 1fr;
  }

  @include below(sm) {
    grid-template-columns: 1fr;
  }
}

.card {
  padding-top: 22px;
  border-top: 1px solid var(--border);

  &--wide {
    grid-column: 1 / -1;
  }

  &__icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
    border-radius: var(--round-sm);
    background: var(--surface-hover);
    color: var(--accent-text);
    font-size: 21px;
  }

  &--safe &__icon {
    color: var(--safe-text);
  }

  &__title {
    margin-bottom: 8px;
    font-size: 18px;
  }

  p {
    color: var(--text-secondary);
    font-size: 14.5px;
  }
}

.egress {
  margin-top: 48px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--round-lg);

  &__scroll {
    overflow-x: auto;
  }

  table {
    width: 100%;
    min-width: 560px;
    border-collapse: collapse;
  }

  thead th {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-align: left;
    text-transform: uppercase;
  }

  tbody th,
  tbody td {
    padding: 16px 20px;
    border-top: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    font-size: 14.5px;
    text-align: left;
  }

  tbody tr:first-child > * {
    border-top: 0;
  }

  tbody th {
    color: var(--text-primary);
    font-weight: 600;
  }

  &__ivy {
    margin: -3px 6px 0 0;
  }

  &__note {
    color: var(--text-muted);
    font-weight: 400;
  }

  &__shot {
    padding: 32px 20px 0;
  }

  &__foot {
    padding: 14px 20px;
    margin-top: 32px;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 13px;
  }
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: var(--round-pill);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 600;

  &--no {
    background: var(--safe-soft);
    color: var(--safe-text);
  }

  &--yes {
    background: var(--warn-soft);
    color: var(--warn-text);
  }
}
</style>
