<script setup lang="ts">
import type { ShowcaseTabId } from '~~/i18n/content/types'
import { features, showcaseTabs } from '~/data/shared'

const c = useContent()
const active = ref<ShowcaseTabId>('record')
const tabRefs = ref<HTMLButtonElement[]>([])

const current = computed(() => showcaseTabs.find(t => t.id === active.value)!)
const copy = computed(() => c.value.features.items[current.value.feature])
const shot = computed(() => features.find(f => f.id === current.value.feature)!.shot)

// Arrow keys move between tabs, as the ARIA tabs pattern expects.
function onKey(event: KeyboardEvent, index: number) {
  const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
  const edge = event.key === 'Home' ? 0 : event.key === 'End' ? showcaseTabs.length - 1 : -1
  if (!step && edge < 0) return
  event.preventDefault()
  const next = edge >= 0 ? edge : (index + step + showcaseTabs.length) % showcaseTabs.length
  active.value = showcaseTabs[next]!.id
  tabRefs.value[next]?.focus()
}
</script>

<template>
  <section id="tour" class="section" aria-labelledby="tour-title">
    <div class="wrap">
      <SectionHead id="tour-title" :eyebrow="c.home.showcase.eyebrow" :title="c.home.showcase.title">
        {{ c.home.showcase.lead }}
      </SectionHead>

      <div class="tabs glass" role="tablist" :aria-label="c.home.showcase.tabsLabel">
        <button
          v-for="(tab, i) in showcaseTabs"
          :id="`tour-tab-${tab.id}`"
          :key="tab.id"
          ref="tabRefs"
          type="button"
          role="tab"
          class="tabs__tab"
          :class="{ 'is-active': tab.id === active }"
          :aria-selected="tab.id === active"
          :aria-controls="`tour-panel`"
          :tabindex="tab.id === active ? 0 : -1"
          @click="active = tab.id"
          @keydown="onKey($event, i)"
        >
          <span class="tabs__n">{{ String(i + 1).padStart(2, '0') }}</span>
          <UIcon :name="tab.icon" />
          {{ c.home.showcase.tabs[tab.id] }}
        </button>
      </div>

      <div id="tour-panel" class="panel" role="tabpanel" :aria-labelledby="`tour-tab-${active}`">
        <div :key="active" class="panel__grid">
          <div class="panel__text">
            <span class="eyebrow">{{ copy.eyebrow }}</span>
            <h3>{{ copy.title }}</h3>
            <p v-html="copy.body" />
            <ul class="panel__points">
              <li v-for="point in copy.points.slice(0, 3)" :key="point">
                <UIcon name="i-lucide-check" class="panel__check" />
                <span v-html="point" />
              </li>
            </ul>
          </div>
          <ScreenShot :shot="shot" :alt="copy.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.tabs {
  display: flex;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto 48px;
  padding: 5px;
  gap: 4px;
  overflow-x: auto;
  border-radius: var(--round-pill);
  scrollbar-width: none;

  &__tab {
    display: inline-flex;
    flex: none;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: 0;
    border-radius: var(--round-pill);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.18s var(--ease), color 0.18s var(--ease);

    &:hover {
      color: var(--text-primary);
    }

    &.is-active {
      background: var(--accent);
      color: var(--text-on-accent);

      .tabs__n {
        opacity: 0.75;
      }
    }

    @include below(xs) {
      padding: 9px 13px;
      font-size: 14px;
    }
  }

  &__n {
    font-family: var(--font-mono);
    font-size: 12px;
    opacity: 0.6;

    @include below(xs) {
      display: none;
    }
  }
}

.panel {
  &__grid {
    display: grid;
    animation: panel-in 0.25s ease;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 56px;
    align-items: center;

    @include below(lg) {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }

  &__text {
    h3 {
      margin: 10px 0 14px;
      font-size: clamp(24px, 3vw, 32px);
      line-height: 1.15;
    }

    > p {
      color: var(--text-secondary);
      font-size: 16px;
    }
  }

  &__points {
    display: grid;
    gap: 10px;
    margin: 22px 0 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 10px;
      color: var(--text-secondary);
      font-size: 15px;
    }
  }

  &__check {
    flex: none;
    margin-top: 4px;
    color: var(--accent-text);
  }
}

// A new panel fades in; the old one is replaced at once, so the content never lags the tab.
@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}
</style>
