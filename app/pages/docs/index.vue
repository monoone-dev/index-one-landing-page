<script setup lang="ts">
import { toc } from '#user-docs'
import { organizationId } from '~/composables/usePageSeo'
import { absoluteUrl } from '~/data/site'

defineI18nRoute({ locales: ['en'] })

const { query, results } = useDocsSearch()

const start = [
  { slug: 'first-recording', icon: 'i-lucide-mic' },
  { slug: 'ivy', icon: 'i-lucide-sparkles' },
  { slug: 'organizations', icon: 'i-lucide-users' },
  { slug: 'data-flow', icon: 'i-lucide-shield-check' },
].map(s => ({ ...s, page: docsPages.find(p => p.slug === s.slug)! })).filter(s => s.page)

usePageSeo({
  path: '/docs/',
  meta: () => ({
    title: 'IndexOne documentation — recording, Ivy, organizations and privacy',
    description: `How to record and transcribe meetings, ask Ivy, work in organizations, choose your AI and keep your data private in IndexOne ${toc.version} for macOS.`,
    breadcrumb: 'Docs',
  }),
  schema: () => [{
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl('/docs/')}#collection`,
    'name': 'IndexOne documentation',
    'url': absoluteUrl('/docs/'),
    'inLanguage': 'en',
    'dateModified': toc.updated,
    'publisher': { '@id': organizationId },
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': docsPages.length,
      'itemListElement': docsPages.map((p, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'name': p.title,
        'url': absoluteUrl(`/docs/${p.slug}/`),
      })),
    },
  }],
})
</script>

<template>
  <main id="main" class="docs-home">
    <header class="hero">
      <span class="eyebrow">Documentation</span>
      <h1>How IndexOne works</h1>
      <p class="hero__lead">
        Record and transcribe meetings on your Mac, ask Ivy about them, work with your team in organizations,
        and choose which AI runs where. Every page here describes the app as it ships.
      </p>
      <p class="hero__version">
        <UIcon name="i-lucide-badge-check" class="size-4 shrink-0" />
        <span>Checked against IndexOne <b>{{ toc.version }}</b>, released {{ docsVersionDate(toc.released) }}.</span>
        <NuxtLink to="/changelog/">
          Release notes
        </NuxtLink>
      </p>

      <label class="search island">
        <UIcon name="i-lucide-search" class="size-5 shrink-0" />
        <span class="sr-only">Search the documentation</span>
        <input v-model="query" type="search" placeholder="Search the docs — try “organization”, “Ollama” or “Touch ID”" autocomplete="off" spellcheck="false">
      </label>
    </header>

    <section v-if="query" class="results" aria-live="polite" aria-label="Search results">
      <p class="results__count">
        {{ results.length === 1 ? '1 page' : `${results.length} pages` }} match “{{ query }}”.
      </p>
      <ol>
        <li v-for="hit in results" :key="hit.slug">
          <NuxtLink :to="`/docs/${hit.slug}/`" class="result island">
            <small>{{ hit.group }}</small>
            <span>{{ hit.title }}</span>
            <p>{{ hit.description }}</p>
          </NuxtLink>
        </li>
      </ol>
    </section>

    <template v-else>
      <section class="start" aria-labelledby="start-title">
        <h2 id="start-title" class="sr-only">
          Start here
        </h2>
        <NuxtLink v-for="s in start" :key="s.slug" :to="`/docs/${s.slug}/`" class="start__card island">
          <span class="start__icon"><UIcon :name="s.icon" class="size-5" /></span>
          <span class="start__title">{{ s.page.title }}</span>
          <span class="start__desc">{{ s.page.description }}</span>
        </NuxtLink>
      </section>

      <section class="groups" aria-label="All pages">
        <div v-for="group in toc.groups" :key="group.title" class="group island">
          <h2>
            <UIcon :name="group.icon" class="size-5 shrink-0" />
            {{ group.title }}
          </h2>
          <ul>
            <li v-for="page in group.pages" :key="page.slug">
              <NuxtLink :to="`/docs/${page.slug}/`">
                {{ page.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
    </template>

    <p class="more">
      Using Claude Code or another agent with IndexOne? Read the
      <a href="https://github.com/monoone-dev/index-one-landing-page/blob/main/docs/use-with-your-agent.md" target="_blank" rel="noopener">agent guide</a>
      and the
      <a href="https://github.com/monoone-dev/index-one-landing-page/tree/main/vault-skills" target="_blank" rel="noopener">skill pack</a>.
    </p>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.docs-home {
  display: grid;
  gap: 40px;
  max-width: 68rem;
  margin-inline: auto;
  padding: 56px 24px 80px;

  @include below(xs) {
    gap: 28px;
    padding: 40px 16px 64px;
  }
}

.hero {
  display: grid;
  justify-items: center;
  gap: 12px;
  text-align: center;

  h1 {
    margin: 4px 0 0;
    font-size: clamp(34px, 5vw, 54px);
    line-height: 1.06;
    letter-spacing: -0.03em;
  }

  &__lead {
    max-width: 40rem;
    margin: 0;
    color: var(--text-secondary);
    font-size: clamp(16px, 1.8vw, 18px);
  }

  &__version {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6px 8px;
    margin: 0;
    color: var(--text-muted);
    font-size: 13px;

    b {
      color: var(--text-primary);
      font-family: var(--font-mono);
    }

    a {
      color: var(--accent-text);
      font-weight: 600;
      text-decoration: none;
    }
  }
}

.search {
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(100%, 36rem);
  margin-top: 16px;
  padding: 0 16px;
  color: var(--text-muted);

  &:focus-within {
    box-shadow: 0 0 0 1px var(--accent), 0 0 0 4px var(--accent-ring);
  }

  input {
    flex: 1;
    min-width: 0;
    height: 50px;
    border: 0;
    background: none;
    color: var(--text-primary);
    font: inherit;
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: var(--text-muted);
    }
  }
}

.start {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @include below(lg) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include below(xs) {
    grid-template-columns: 1fr;
  }

  &__card {
    display: grid;
    align-content: start;
    gap: 8px;
    padding: 20px;
    color: inherit;
    text-decoration: none;
    transition: box-shadow 0.2s var(--ease), transform 0.2s var(--ease);

    &:hover {
      box-shadow: 0 0 0 1px var(--accent), var(--shadow-md);
      transform: translateY(-1px);
    }
  }

  &__icon {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--accent-soft);
    color: var(--accent-text);
  }

  &__title {
    margin-top: 4px;
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
  }

  &__desc {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
  }
}

.groups {
  columns: 3 18rem;
  column-gap: 16px;
}

.group {
  display: inline-grid;
  width: 100%;
  gap: 10px;
  margin-bottom: 16px;
  padding: 20px;
  break-inside: avoid;

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    font-size: 16px;
    letter-spacing: -0.01em;

    .iconify {
      color: var(--accent-text);
    }
  }

  ul {
    display: grid;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    display: block;
    margin-inline: -8px;
    padding: 5px 8px;
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 15px;
    text-decoration: none;

    &:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }
  }
}

.results {
  display: grid;
  gap: 12px;
  width: min(100%, 46rem);
  margin-inline: auto;

  &__count {
    margin: 0;
    color: var(--text-muted);
    font-size: 14px;
  }

  ol {
    display: grid;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

.result {
  display: grid;
  gap: 4px;
  padding: 16px 18px;
  color: inherit;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 1px var(--accent), var(--shadow-md);
  }

  small {
    color: var(--text-muted);
    font-size: 12px;
  }

  span {
    color: var(--text-primary);
    font-weight: 600;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 14px;
  }
}

.more {
  margin: 0;
  color: var(--text-muted);
  font-size: 14px;
  text-align: center;

  a {
    color: var(--accent-text);
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
