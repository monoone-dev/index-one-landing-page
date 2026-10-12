<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

type Filter = 'all' | 'features' | 'fixes'
type Note = (typeof notes)[number]

const c = useContent()
const { locale } = useI18n()

usePageSeo({
  path: '/changelog',
  meta: () => c.value.meta.changelog,
})

/** Releases shown before "Show older releases". */
const PAGE = 6

const latest = notes[0]
const filter = ref<Filter>('all')
const showAll = ref(false)

const filters = computed(() => (['all', 'features', 'fixes'] as const).map(value => ({
  value,
  label: c.value.changelog.filters[value],
})))

const kindBadge = {
  major: { color: 'primary', variant: 'solid' },
  minor: { color: 'primary', variant: 'soft' },
  patch: { color: 'neutral', variant: 'soft' },
} as const

/** Releases of the chosen kind: features are major and minor releases, fixes are patch releases. */
const matching = computed(() => filter.value === 'all'
  ? notes
  : notes.filter(n => (n.kind === 'patch') === (filter.value === 'fixes')))

// Every release stays in the generated HTML; the older ones are only hidden until asked for.
const shown = computed(() => new Set((showAll.value ? matching.value : matching.value.slice(0, PAGE)).map(n => n.tag)))
const hasMore = computed(() => !showAll.value && matching.value.length > PAGE)

const count = computed(() => {
  const n = matching.value.length
  const forms = c.value.changelog.count
  const rule = new Intl.PluralRules(locale.value).select(n)
  return fill(forms[rule] ?? forms.other, { count: n })
})

const dateFormat = computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium', timeZone: 'UTC' }))
const formatDate = (date: string) => dateFormat.value.format(new Date(`${date}T00:00:00Z`))

/** The release being read, highlighted in the versions list. */
const active = ref(latest?.tag ?? '')
const root = ref<HTMLElement | null>(null)
/** Set while a jump scrolls, so the releases passed on the way are not highlighted. */
let jumping = false

/** Scrolls to a release, showing older ones first if it is hidden. */
async function jump(note: Note, event: Event) {
  event.preventDefault()
  if (!shown.value.has(note.tag)) {
    showAll.value = true
    await nextTick()
  }
  const heading = root.value?.querySelector<HTMLElement>(`[id="${note.tag}"]`)
  if (!heading) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  heading.focus({ preventScroll: true })
  history.replaceState(history.state, '', `#${note.tag}`)
  active.value = note.tag
  jumping = true
  const done = () => (jumping = false)
  document.addEventListener('scrollend', done, { once: true, capture: true })
  setTimeout(done, 1000)
}

watch(filter, () => {
  showAll.value = false
  active.value = matching.value[0]?.tag ?? ''
})

// Browser only: follow the scroll, again whenever the shown releases change.
let observer: IntersectionObserver | null = null
watch([root, shown, filter], () => {
  observer?.disconnect()
  if (typeof IntersectionObserver === 'undefined' || !root.value) return
  observer = new IntersectionObserver((entries) => {
    const hit = entries.find(e => e.isIntersecting)
    const tag = (hit?.target as HTMLElement | undefined)?.dataset.tag
    if (tag && !jumping) active.value = tag
  }, { rootMargin: '-80px 0px -70% 0px' })
  root.value.querySelectorAll('.release:not([hidden])').forEach(el => observer?.observe(el))
}, { flush: 'post' })

// A link to /changelog#v2.4.0 opens the older releases so the target exists.
onMounted(() => {
  const tag = decodeURIComponent(location.hash.slice(1))
  const note = notes.find(n => n.tag === tag)
  if (note && !shown.value.has(tag)) {
    showAll.value = true
    nextTick(() => document.getElementById(tag)?.scrollIntoView({ block: 'start' }))
  }
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <main id="main" ref="root" class="changelog">
    <div class="changelog__glow" aria-hidden="true" />
    <div class="layout">
      <nav class="versions" aria-labelledby="versions-title">
        <p id="versions-title" class="versions__title">
          {{ c.changelog.versions }}
        </p>
        <ol class="versions__list">
          <li v-for="note in matching" :key="note.tag">
            <a
              class="versions__link"
              :href="`#${note.tag}`"
              :aria-current="active === note.tag ? 'location' : undefined"
              @click="jump(note, $event)"
            >
              <span class="versions__num">{{ note.tag }}</span>
              <time class="versions__date" :datetime="note.date">{{ formatDate(note.date) }}</time>
            </a>
          </li>
        </ol>
      </nav>

      <div class="main">
        <header class="head">
          <span class="eyebrow">{{ c.changelog.eyebrow }}</span>
          <h1>{{ c.changelog.title }}</h1>
          <p class="head__lead">
            {{ c.changelog.lead }}
          </p>
          <div class="head__actions">
            <UButton :to="site.links.download" external icon="i-lucide-arrow-down-to-line" :label="c.changelog.download" />
            <UButton :to="site.links.releases" external color="neutral" variant="outline" icon="i-simple-icons-github" :label="c.changelog.github" />
          </div>
          <p v-if="locale !== 'en'" class="head__note">
            <UIcon name="i-lucide-languages" class="size-4 shrink-0" />
            {{ c.changelog.englishNote }}
          </p>
        </header>

        <div class="toolbar">
          <div class="segmented" role="radiogroup" :aria-label="c.changelog.filterLabel">
            <button
              v-for="f in filters"
              :key="f.value"
              type="button"
              role="radio"
              class="segmented__option"
              :aria-checked="filter === f.value"
              @click="filter = f.value"
            >
              {{ f.label }}
            </button>
          </div>
          <p class="toolbar__count" role="status">
            {{ count }}
          </p>
        </div>

        <ol class="timeline">
          <li
            v-for="note in matching"
            :key="note.tag"
            class="release"
            :hidden="!shown.has(note.tag)"
            :data-tag="note.tag"
            :data-latest="note === latest ? '' : undefined"
          >
            <div class="when">
              <span class="when__version">{{ note.tag }}</span>
              <time :datetime="note.date">{{ formatDate(note.date) }}</time>
              <UBadge v-if="note === latest" color="primary" variant="subtle" size="sm" :label="c.changelog.latest" />
            </div>
            <span class="dot" aria-hidden="true" />
            <article class="body" :aria-labelledby="note.tag" lang="en">
              <h2 :id="note.tag" class="body__title" tabindex="-1">
                IndexOne {{ note.tag.slice(1) }}
              </h2>
              <UBadge class="body__kind" v-bind="kindBadge[note.kind]" :label="c.changelog.kinds[note.kind]" :lang="locale" />
              <!-- eslint-disable vue/no-v-html -- built from this repository's release-notes/*.md -->
              <p v-if="note.summary" class="body__summary" v-html="note.summary" />
              <div class="release-notes" v-html="note.html" />
              <!-- eslint-enable vue/no-v-html -->
            </article>
          </li>
          <li v-if="matching.length === 0" class="empty">
            {{ c.changelog.empty }}
          </li>
        </ol>

        <div v-if="hasMore" class="more">
          <UButton color="neutral" variant="outline" icon="i-lucide-chevrons-down" :label="c.changelog.showOlder" @click="showAll = true" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// Follows the SurfaceOne changelog template: a sticky versions list beside a timeline of
// date | rail | notes, collapsing to a versions row and then to a single column.
.changelog {
  --rail: 9.5rem; // the timeline's date column
  --gap: 2rem;

  position: relative;
  overflow-x: clip;
  container-type: inline-size;
  padding: 56px 24px 80px;

  @include below(xs) {
    padding: 40px 16px 64px;
  }

  &__glow {
    position: absolute;
    top: -120px;
    right: -10%;
    z-index: -1;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.16;
    filter: blur(140px);
    pointer-events: none;
  }
}

.layout {
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  align-items: start;
  gap: var(--gap);
  max-width: 68rem;
  margin-inline: auto;
}

.main {
  min-width: 0;
}

// Versions: jump to a release without scrolling
.versions {
  position: sticky;
  top: 88px;
  display: grid;
  gap: 8px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  overscroll-behavior: contain;

  &__title {
    margin: 0;
    padding-left: 12px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
  }

  &__list {
    display: grid;
    margin: 0;
    padding: 0;
    border-left: 1px solid var(--border-subtle);
    list-style: none;
  }

  &__link {
    display: grid;
    margin-left: -1px;
    padding: 4px 12px;
    border-left: 2px solid transparent;
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
    }

    &[aria-current='location'] {
      border-left-color: var(--accent);
      color: var(--accent-text);
    }

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: -2px;
      border-radius: 4px;
    }
  }

  &__num {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
  }

  &__date {
    color: var(--text-muted);
    font-size: 12px;
  }
}

// Header
.head {
  display: grid;
  justify-items: start;
  gap: 10px;
  padding-left: calc(var(--rail) + var(--gap));

  h1 {
    margin: 4px 0 0;
    font-size: clamp(32px, 4.6vw, 46px);
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  &__lead {
    max-width: 38rem;
    margin: 0;
    color: var(--text-secondary);
    font-size: clamp(16px, 1.8vw, 17px);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0 0;
    color: var(--text-muted);
    font-size: 14px;
  }
}

// Filter
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 32px 0;
  padding: 12px 0 12px calc(var(--rail) + var(--gap));
  border-block: 1px solid var(--border-subtle);

  &__count {
    margin: 0;
    color: var(--text-secondary);
    font-size: 14px;
    font-variant-numeric: tabular-nums;
  }
}

.segmented {
  flex: none;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--round-md);
  background: var(--surface-hover);

  &__option {
    padding: 4px 12px;
    border: 0;
    border-radius: var(--round-sm);
    background: none;
    color: var(--text-secondary);
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: var(--text-primary);
    }

    &[aria-checked='true'] {
      background: var(--surface-base);
      color: var(--text-primary);
      box-shadow: var(--shadow-sm);
    }

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: 1px;
    }
  }
}

// Timeline: date | rail | notes
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.release {
  position: relative;
  display: grid;
  grid-template-columns: var(--rail) var(--gap) minmax(0, 1fr);
  padding-bottom: 48px;

  &[hidden] {
    display: none;
  }

  // The rail: a line through every dot, stopping at the last one.
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 0;
    left: calc(var(--rail) + var(--gap) / 2 - 0.5px);
    width: 1px;
    background: var(--border);
  }

  &:last-child::before,
  &:has(+ [hidden])::before {
    display: none;
  }
}

.when {
  display: grid;
  justify-items: end;
  align-content: start;
  gap: 4px;
  padding-top: 2px;
  text-align: right;

  &__version {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }

  time {
    color: var(--text-secondary);
    font-size: 13px;
  }
}

.dot {
  justify-self: center;
  width: 12px;
  height: 12px;
  margin-top: 6px;
  border: 2px solid var(--border);
  border-radius: 50%;
  background: var(--surface-base);

  .release[data-latest] & {
    border-color: var(--accent);
    background: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-soft);
  }
}

.body {
  display: grid;
  justify-items: start;
  gap: 12px;
  min-width: 0;

  &__title {
    margin: 0;
    scroll-margin-top: 96px;
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: -0.02em;

    &:focus {
      outline: none;
    }
  }

  &__kind {
    margin-top: -4px;
  }

  &__summary {
    margin: 0;
    color: var(--text-primary);
    font-size: 16px;
    line-height: 1.6;

    :deep(a) {
      color: var(--accent-text);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}

.empty {
  padding: 24px 0 24px calc(var(--rail) + var(--gap));
  color: var(--text-secondary);
}

.more {
  display: flex;
  padding-left: calc(var(--rail) + var(--gap));
}

// Medium: the versions become a scrollable row above the releases.
@container (max-width: 960px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .versions {
    position: static;
    order: 1;
    max-height: none;

    &__title {
      padding-left: 0;
    }

    &__list {
      display: flex;
      gap: 4px;
      overflow-x: auto;
      border-left: 0;
      border-bottom: 1px solid var(--border-subtle);
    }

    &__link {
      margin: 0 0 -1px;
      border-left: 0;
      border-bottom: 2px solid transparent;
      white-space: nowrap;

      &[aria-current='location'] {
        border-bottom-color: var(--accent);
      }
    }
  }

  .main {
    display: contents;
  }

  .head {
    order: 0;
  }

  .toolbar,
  .timeline,
  .more {
    order: 2;
  }

  .toolbar {
    margin: 0;
  }
}

// Narrow: version and date move above each release, the rail to the edge.
@container (max-width: 640px) {
  .head,
  .toolbar,
  .empty,
  .more {
    padding-left: 0;
  }

  .release {
    grid-template-columns: 24px minmax(0, 1fr);
    grid-template-areas:
      'dot when'
      '. body';
    row-gap: 8px;

    &::before {
      left: 11.5px;
    }
  }

  .when {
    grid-area: when;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    text-align: left;
  }

  .dot {
    grid-area: dot;
    justify-self: start;
    margin-left: 6px;
  }

  .body {
    grid-area: body;

    &__title {
      font-size: 21px;
    }
  }
}

.release-notes {
  justify-self: stretch;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.65;
  overflow-wrap: anywhere;

  :deep(h3),
  :deep(h4) {
    margin: 28px 0 10px;
    color: var(--text-primary);
    font-size: 17px;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  :deep(h4) {
    font-size: 15px;
  }

  :deep(p),
  :deep(ul),
  :deep(ol),
  :deep(blockquote),
  :deep(pre) {
    margin: 0 0 14px;
  }

  :deep(ul),
  :deep(ol) {
    padding-left: 22px;
  }

  :deep(ul) {
    list-style: disc;
  }

  :deep(ol) {
    list-style: decimal;
  }

  :deep(li) {
    margin: 6px 0;

    &::marker {
      color: var(--text-muted);
    }
  }

  :deep(a) {
    color: var(--accent-text);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  :deep(strong) {
    color: var(--text-primary);
  }

  :deep(code) {
    padding: 1px 5px;
    border-radius: 5px;
    background: var(--surface-hover);
    font-size: 0.88em;
  }

  :deep(pre) {
    overflow-x: auto;
    padding: 12px 14px;
    border-radius: 8px;
    background: var(--surface-hover);

    code {
      padding: 0;
      background: none;
    }
  }

  :deep(blockquote) {
    padding-left: 14px;
    border-left: 3px solid var(--border);
  }

  :deep(hr) {
    margin: 24px 0;
    border: 0;
    border-top: 1px solid var(--border-subtle);
  }

  :deep(table) {
    display: block;
    overflow-x: auto;
    margin: 0 0 14px;
    border-collapse: collapse;
    font-size: 14px;
  }

  :deep(th),
  :deep(td) {
    padding: 6px 10px;
    border: 1px solid var(--border-subtle);
    text-align: left;
  }

  > :deep(:first-child) {
    margin-top: 0;
  }

  > :deep(:last-child) {
    margin-bottom: 0;
  }
}
</style>
