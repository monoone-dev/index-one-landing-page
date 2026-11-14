<script setup lang="ts">
import { toc } from '#user-docs'

const props = defineProps<{ current?: string }>()

const { query, results } = useDocsSearch()
const open = ref(false)
const route = useRoute()

// A link followed on a phone closes the contents again.
watch(() => route.path, () => {
  open.value = false
  query.value = ''
})

const currentTitle = computed(() => toc.groups.flatMap(g => g.pages).find(p => p.slug === props.current)?.title)
</script>

<template>
  <nav class="side" :class="{ 'is-open': open }" aria-label="Documentation">
    <button type="button" class="side__toggle island" :aria-expanded="open" aria-controls="docs-contents" @click="open = !open">
      <UIcon name="i-lucide-list" class="size-4 shrink-0" />
      <span class="side__toggle-label">{{ currentTitle ?? 'Contents' }}</span>
      <UIcon name="i-lucide-chevron-down" class="side__chev size-4 shrink-0" />
    </button>

    <div id="docs-contents" class="side__panel island">
      <label class="side__search">
        <UIcon name="i-lucide-search" class="size-4 shrink-0" />
        <span class="sr-only">Search the documentation</span>
        <input v-model="query" type="search" placeholder="Search docs" autocomplete="off" spellcheck="false">
      </label>

      <ol v-if="query" class="side__results" aria-live="polite">
        <li v-for="hit in results.slice(0, 12)" :key="hit.slug">
          <NuxtLink :to="`/docs/${hit.slug}/`" class="side__link" :aria-current="hit.slug === current ? 'page' : undefined">
            {{ hit.title }}
            <small>{{ hit.group }}</small>
          </NuxtLink>
        </li>
        <li v-if="!results.length" class="side__empty">
          No pages match “{{ query }}”.
        </li>
      </ol>

      <template v-else>
        <NuxtLink to="/docs/" class="side__link side__home" :aria-current="!current ? 'page' : undefined">
          <UIcon name="i-lucide-book-open" class="size-4 shrink-0" />
          Overview
        </NuxtLink>
        <div v-for="group in toc.groups" :key="group.title" class="side__group">
          <p class="side__title">
            {{ group.title }}
          </p>
          <ul>
            <li v-for="page in group.pages" :key="page.slug">
              <NuxtLink :to="`/docs/${page.slug}/`" class="side__link" :aria-current="page.slug === current ? 'page' : undefined">
                {{ page.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.side {
  position: sticky;
  top: 88px;
  align-self: start;

  @include below(lg) {
    position: static;
  }

  &__toggle {
    display: none;
    width: 100%;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border: 0;
    color: var(--text-primary);
    font: inherit;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    cursor: pointer;

    @include below(lg) {
      display: flex;
    }

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: 2px;
    }
  }

  &__toggle-label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__chev {
    color: var(--text-muted);
    transition: transform 0.2s var(--ease);

    .is-open & {
      transform: rotate(180deg);
    }
  }

  &__panel {
    display: grid;
    gap: 14px;
    max-height: calc(100vh - 112px);
    padding: 12px;
    overflow-y: auto;
    overscroll-behavior: contain;

    @include below(lg) {
      display: none;
      max-height: none;
      margin-top: 8px;

      .is-open & {
        display: grid;
      }
    }
  }

  &__search {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: var(--radius);
    background: var(--surface-hover);
    color: var(--text-muted);
    box-shadow: inset 0 0 0 1px var(--border);

    &:focus-within {
      box-shadow: inset 0 0 0 1px var(--accent), 0 0 0 3px var(--accent-ring);
    }

    input {
      flex: 1;
      min-width: 0;
      height: 36px;
      border: 0;
      background: none;
      color: var(--text-primary);
      font: inherit;
      font-size: 14px;
      outline: none;

      &::placeholder {
        color: var(--text-muted);
      }
    }
  }

  &__group ul,
  &__results {
    display: grid;
    gap: 1px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__title {
    margin: 0 0 4px;
    padding: 0 10px;
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__link {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 6px 10px;
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.35;
    text-decoration: none;

    small {
      color: var(--text-muted);
      font-size: 12px;
    }

    &:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }

    &[aria-current='page'] {
      background: var(--accent-soft);
      color: var(--accent-text);
      font-weight: 600;
    }

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: -2px;
    }
  }

  &__home {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }

  &__empty {
    padding: 6px 10px;
    color: var(--text-muted);
    font-size: 14px;
  }
}
</style>
