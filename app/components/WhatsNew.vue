<script setup lang="ts">
import notes from '#release-notes'

const c = useContent()
const to = useLocalLink()
const { locale } = useI18n()

const recent = notes.slice(0, 3)
const dateFormat = computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium', timeZone: 'UTC' }))
const formatDate = (date: string) => dateFormat.value.format(new Date(`${date}T00:00:00Z`))
// The summary is HTML from the release note; the card shows it as plain text.
const plain = (html: string | null) => html?.replace(/<[^>]+>/g, '') ?? ''
</script>

<template>
  <section class="section" aria-labelledby="news-title">
    <div class="wrap">
      <div class="news__head">
        <div>
          <span class="eyebrow">{{ c.home.news.eyebrow }}</span>
          <h2 id="news-title">{{ c.home.news.title }}</h2>
          <p>{{ c.home.news.lead }}</p>
        </div>
        <UButton :to="to('/changelog')" color="neutral" variant="ghost" trailing-icon="i-lucide-arrow-right" :label="c.home.news.all" />
      </div>

      <ul class="news">
        <li v-for="note in recent" :key="note.tag" v-reveal>
          <NuxtLink :to="to(`/changelog#${note.tag}`)" class="news__card island">
            <span class="news__meta">
              <span class="news__kind" :class="`is-${note.kind}`">{{ c.changelog.kinds[note.kind] }}</span>
              <time :datetime="note.date">{{ formatDate(note.date) }}</time>
            </span>
            <h3>IndexOne {{ note.tag.slice(1) }}</h3>
            <p v-if="note.summary" lang="en">{{ plain(note.summary) }}</p>
            <span class="news__read">{{ c.home.news.read }} <UIcon name="i-lucide-arrow-right" /></span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.news {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--gap) * 2);
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(md) {
    grid-template-columns: 1fr;
  }

  > li {
    display: flex;
  }

  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 32px;

    h2 {
      margin: 10px 0 8px;
      font-size: clamp(28px, 4vw, 40px);
      line-height: 1.1;
    }

    p {
      max-width: 36em;
      color: var(--text-secondary);
    }
  }

  &__card {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    padding: 22px;
    transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);

    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--pop);
    }

    h3 {
      font-size: 20px;
    }

    p {
      display: -webkit-box;
      flex: 1;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      color: var(--text-secondary);
      font-size: 14.5px;
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
    font-size: 13px;
  }

  &__kind {
    padding: 2px 9px;
    border-radius: var(--round-pill);
    background: var(--fill-2);
    color: var(--text-secondary);
    font-weight: 600;

    &.is-major,
    &.is-minor {
      background: var(--accent-soft);
      color: var(--accent-text);
    }
  }

  &__read {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    color: var(--accent-text);
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
