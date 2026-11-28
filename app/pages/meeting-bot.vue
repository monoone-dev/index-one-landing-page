<script setup lang="ts">
import type { MeetingBotCardId, MeetingBotRightId } from '~~/i18n/content/types'

const c = useContent()

// The IndexOne privacy policy names the provider, the contact and how long data is kept.
const legal = useLegalDocs()

// The fixed chat notice the bot posts after it is admitted (meet-chat-notice-v1). Shown verbatim, in English,
// so a participant recognizes the message that brought them here.
const chatNotice = 'This meeting is being recorded and transcribed by the IndexOne notetaker bot in this call, on behalf of the organization shown in the bot\'s name. The recording is kept in that organization\'s IndexOne workspace. If you do not want to be recorded, ask the host to remove the bot, or leave the call. More information: https://index-one.io/meeting-bot'

const cards: { id: MeetingBotCardId, icon: string }[] = [
  { id: 'bot', icon: 'i-lucide-bot' },
  { id: 'controller', icon: 'i-lucide-building-2' },
  { id: 'processor', icon: 'i-lucide-server' },
  { id: 'recorded', icon: 'i-lucide-mic' },
  { id: 'purpose', icon: 'i-lucide-notebook-pen' },
  { id: 'storage', icon: 'i-lucide-archive' },
]

const rights: { id: MeetingBotRightId, icon: string }[] = [
  { id: 'object', icon: 'i-lucide-hand' },
  { id: 'access', icon: 'i-lucide-eye' },
  { id: 'erasure', icon: 'i-lucide-trash-2' },
  { id: 'complaint', icon: 'i-lucide-scale' },
]

usePageSeo({
  path: '/meeting-bot',
  meta: () => c.value.meta.meetingBot,
})
</script>

<template>
  <main id="main">
    <section class="section" aria-labelledby="meeting-bot-title">
      <div class="wrap">
        <SectionHead id="meeting-bot-title" :level="1" :eyebrow="c.meetingBot.eyebrow" :title="c.meetingBot.title">
          {{ c.meetingBot.lead }}
        </SectionHead>

        <figure v-reveal class="notice island">
          <figcaption class="notice__label">
            <UIcon name="i-lucide-message-square-text" aria-hidden="true" />
            {{ c.meetingBot.noticeLabel }}
          </figcaption>
          <blockquote lang="en">{{ chatNotice }}</blockquote>
          <p class="notice__note">{{ c.meetingBot.noticeNote }}</p>
        </figure>

        <ul class="cards">
          <li v-for="card in cards" :key="card.id" v-reveal class="card island">
            <span class="card__icon" aria-hidden="true"><UIcon :name="card.icon" /></span>
            <h2 class="card__title">{{ c.meetingBot.cards[card.id].title }}</h2>
            <p>{{ c.meetingBot.cards[card.id].body }}</p>
            <a v-if="card.id === 'storage' || card.id === 'processor'" class="card__link" :href="legal.privacy" hreflang="pl">
              {{ c.meetingBot.policyLink }}
              <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="meeting-bot-rights">
      <div class="wrap">
        <SectionHead id="meeting-bot-rights" :eyebrow="c.meetingBot.rights.eyebrow" :title="c.meetingBot.rights.title" tone="safe">
          {{ c.meetingBot.rights.lead }}
        </SectionHead>

        <ul class="cards cards--rights">
          <li v-for="right in rights" :key="right.id" v-reveal class="card card--safe island">
            <span class="card__icon" aria-hidden="true"><UIcon :name="right.icon" /></span>
            <h3 class="card__title">{{ c.meetingBot.rights.items[right.id].title }}</h3>
            <p>{{ c.meetingBot.rights.items[right.id].body }}</p>
          </li>
        </ul>

        <div v-reveal class="steps island">
          <h3 class="steps__title">{{ c.meetingBot.steps.title }}</h3>
          <ol>
            <li v-for="(step, index) in c.meetingBot.steps.items" :key="step.title" class="step">
              <span class="step__number" aria-hidden="true">{{ index + 1 }}</span>
              <div>
                <h4>{{ step.title }}</h4>
                <p>{{ step.body }}</p>
                <a v-if="index === 2" class="card__link" :href="legal.privacy" hreflang="pl">
                  {{ c.meetingBot.policyLink }}
                  <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </li>
          </ol>
        </div>

        <p v-reveal class="note">{{ c.meetingBot.note }}</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.notice {
  max-width: 780px;
  margin: 0 auto 56px;
  padding: 22px 24px;
  border-left: 3px solid var(--accent);

  &__label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--accent-text);
    font-size: 13px;
    font-weight: 500;
  }

  blockquote {
    margin: 12px 0 0;
    color: var(--text-primary);
    font-size: 15.5px;
    line-height: 1.6;
  }

  &__note {
    margin-top: 12px;
    color: var(--text-muted);
    font-size: 13.5px;
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  &--rights {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @include below(lg) {
    &,
    &--rights {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @include below(sm) {
    &,
    &--rights {
      grid-template-columns: 1fr;
    }
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 22px;

  &__icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
    border-radius: 10px;
    background: var(--accent-soft);
    color: var(--accent-text);
    font-size: 21px;
  }

  &--safe &__icon {
    background: var(--safe-soft);
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

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 12px;
    color: var(--accent-text);
    font-size: 14.5px;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;

    &:hover {
      text-decoration-thickness: 2px;
    }
  }
}

.steps {
  margin-top: var(--gap);
  padding: 28px;

  &__title {
    font-size: 18px;
  }

  ol {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;

    @include below(md) {
      grid-template-columns: 1fr;
    }
  }

  @include below(sm) {
    padding: 22px;
  }
}

.step {
  display: flex;
  gap: 14px;

  &__number {
    display: grid;
    flex: none;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: var(--round-pill);
    background: var(--accent);
    color: var(--text-on-accent);
    font-size: 14px;
    font-weight: 600;
  }

  h4 {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    font-size: 14.5px;
  }
}

.note {
  max-width: 640px;
  margin: 40px auto 0;
  color: var(--text-muted);
  font-size: 13.5px;
  text-align: center;
}
</style>
