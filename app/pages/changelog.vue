<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

const c = useContent()
const { locale } = useI18n()

usePageSeo({
  path: '/changelog',
  meta: () => c.value.meta.changelog,
})

const versionUi = {
  root: 'flex items-start scroll-mt-24',
  container: 'max-w-xl min-w-0 flex-1',
  header: 'border-b border-default pb-4',
  title: 'text-3xl',
  date: 'text-xs/9 text-highlighted font-mono',
  indicator: 'sticky top-24 shrink-0',
}
</script>

<template>
  <main id="main" class="changelog">
    <header class="changelog__hero">
      <div class="changelog__glow" aria-hidden="true" />
      <div class="changelog__intro">
        <span class="eyebrow">{{ c.changelog.eyebrow }}</span>
        <h1>{{ c.changelog.title }}</h1>
        <p>{{ c.changelog.lead }}</p>
        <div class="changelog__actions">
          <UButton :to="site.links.download" external size="lg" icon="i-lucide-arrow-down-to-line" :label="c.changelog.download" />
          <UButton :to="site.links.releases" external size="lg" color="neutral" variant="outline" icon="i-simple-icons-github" :label="c.changelog.github" />
        </div>
        <p v-if="locale !== 'en'" class="changelog__note">
          <UIcon name="i-lucide-languages" class="size-4 shrink-0" />
          {{ c.changelog.englishNote }}
        </p>
      </div>
    </header>

    <section class="changelog__list" lang="en">
      <UChangelogVersions :ui="{ root: 'py-14 sm:py-20', indicator: 'inset-y-0' }">
        <UChangelogVersion
          v-for="(note, index) in notes"
          :id="note.tag"
          :key="note.tag"
          :title="note.tag"
          :date="note.date"
          :badge="index === 0 ? { label: c.changelog.latest, color: 'primary', variant: 'subtle' } : undefined"
          :ui="versionUi"
        >
          <template #body>
            <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's release-notes/*.md -->
            <div class="release-notes" v-html="note.html" />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.changelog {
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  }

  &__hero {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 64px 24px 56px;
    border-bottom: 1px solid var(--border);

    @include below(xs) {
      padding: 44px 16px 40px;
    }

    @media (min-width: 1280px) {
      position: sticky;
      top: 64px;
      height: calc(100vh - 64px);
      padding: 0 56px;
      border-bottom: 0;
      border-right: 1px solid var(--border);
    }
  }

  &__glow {
    position: absolute;
    top: 50%;
    right: -30%;
    z-index: -1;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.22;
    filter: blur(140px);
    transform: translateY(-50%);
    pointer-events: none;
  }

  &__intro {
    max-width: 520px;
    margin: 0 auto;

    @media (min-width: 1280px) {
      margin: 0 0 0 auto;
    }

    h1 {
      margin: 14px 0 16px;
      font-size: clamp(34px, 5vw, 52px);
      line-height: 1.08;
      letter-spacing: -0.03em;
    }

    > p {
      color: var(--text-secondary);
      font-size: clamp(16px, 1.8vw, 17px);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: var(--text-muted);
    font-size: 14px;
  }

  &__list {
    padding: 0 24px;

    @include below(xs) {
      padding: 0 16px;
    }

    @media (min-width: 1280px) {
      padding: 0 56px 0 24px;
    }
  }
}

.release-notes {
  margin-top: 20px;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.65;
  overflow-wrap: anywhere;

  :deep(h3),
  :deep(h4) {
    margin: 28px 0 10px;
    color: var(--text-primary);
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  :deep(h4) {
    font-size: 16px;
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
    margin: 4px 0;

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
