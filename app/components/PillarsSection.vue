<script setup lang="ts">
import { pillars } from '~/data/shared'

const c = useContent()
const to = useLocalLink()

// Bar heights for the two waveforms in the capture card, in percent.
const me = [30, 55, 80, 45, 62, 90, 40, 20, 12, 8, 10, 6, 14, 9, 28, 66, 84, 52, 34, 18]
const others = [8, 10, 6, 12, 9, 14, 38, 72, 95, 64, 80, 46, 58, 30, 12, 8, 10, 6, 9, 7]
</script>

<template>
  <section id="why" class="section" aria-labelledby="pillars-title">
    <div class="wrap">
      <SectionHead id="pillars-title" :eyebrow="c.home.pillars.eyebrow" :title="c.home.pillars.title">
        {{ c.home.pillars.lead }}
      </SectionHead>

      <ul class="pillars">
        <li v-for="pillar in pillars" :key="pillar.id" v-reveal class="pillar island">
          <div class="pillar__stage" aria-hidden="true">
            <!-- Capture: two streams, you and everyone else. -->
            <div v-if="pillar.id === 'capture'" class="mock mock--wave">
              <div class="mock__track">
                <span class="mock__who mock__who--me">Me</span>
                <span class="mock__bars">
                  <i v-for="(h, i) in me" :key="i" :style="{ height: `${h}%` }" />
                </span>
              </div>
              <div class="mock__track mock__track--others">
                <span class="mock__who">Others</span>
                <span class="mock__bars">
                  <i v-for="(h, i) in others" :key="i" :style="{ height: `${h}%` }" />
                </span>
              </div>
              <span class="mock__rec"><span class="mock__dot" /> 12:48</span>
            </div>

            <!-- Ivy: a question and a cited answer. -->
            <div v-else-if="pillar.id === 'ivy'" class="mock mock--chat">
              <p class="mock__ask">{{ c.home.pillars.mock.question }}</p>
              <div class="mock__answer">
                <BrandIcon name="ivy" :size="26" />
                <div>
                  <p>{{ c.home.pillars.mock.answer }}</p>
                  <span class="mock__source"><UIcon name="i-lucide-audio-waveform" /> {{ c.home.pillars.mock.sources }}</span>
                </div>
              </div>
            </div>

            <!-- Privacy: folders, one sealed. -->
            <ul v-else class="mock mock--folders">
              <li v-for="(name, i) in c.home.pillars.mock.folders" :key="name" :class="{ 'is-sealed': i === 1 }">
                <UIcon :name="i === 1 ? 'i-lucide-folder-lock' : 'i-lucide-folder'" />
                <span>{{ name }}</span>
                <UIcon v-if="i === 1" name="i-lucide-fingerprint" class="mock__lock" />
                <UIcon v-else name="i-lucide-lock-open" class="mock__open" />
              </li>
            </ul>
          </div>

          <div class="pillar__body">
            <span class="pillar__icon"><UIcon :name="pillar.icon" /></span>
            <h3>{{ c.home.pillars.items[pillar.id].title }}</h3>
            <p>{{ c.home.pillars.items[pillar.id].body }}</p>
            <NuxtLink :to="to(pillar.to)" class="pillar__link">
              {{ c.home.pillars.items[pillar.id].link }} <UIcon name="i-lucide-arrow-right" />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--gap) * 2);
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(lg) {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-inline: auto;
  }
}

.pillar {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--pop);
  }

  &__stage {
    display: grid;
    place-items: center;
    height: 200px;
    padding: 20px;
    background:
      radial-gradient(80% 90% at 50% 0%, var(--accent-soft), transparent 70%),
      var(--surface-sunken);
    border-bottom: 1px solid var(--border);
  }

  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 22px 24px 24px;

    h3 {
      margin-bottom: 8px;
      font-size: 20px;
    }

    p {
      flex: 1;
      color: var(--text-secondary);
      font-size: 15px;
    }
  }

  &__icon {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    margin-bottom: 14px;
    border-radius: 10px;
    background: var(--accent-soft);
    color: var(--accent-text);
    font-size: 19px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    color: var(--accent-text);
    font-size: 14.5px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

// Small, static pictures of the app — drawn in CSS so they follow the theme.
.mock {
  width: 100%;
  max-width: 300px;
  font-size: 12.5px;

  &--wave {
    position: relative;
    display: grid;
    gap: 10px;
    padding: 14px;
    border-radius: var(--radius);
    background: var(--surface-raised);
    box-shadow: var(--island-shadow);
  }

  &__track {
    display: grid;
    grid-template-columns: 48px 1fr;
    align-items: center;
    gap: 8px;
    height: 44px;
  }

  &__who {
    color: var(--text-muted);
    font-weight: 600;

    &--me {
      color: var(--accent-text);
    }
  }

  &__bars {
    display: flex;
    align-items: center;
    gap: 3px;
    height: 100%;

    i {
      flex: 1;
      min-height: 3px;
      border-radius: 2px;
      background: var(--accent);
    }

    .mock__track--others & i {
      background: var(--ivy);
    }
  }

  &__rec {
    position: absolute;
    top: -12px;
    right: 12px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 9px;
    border-radius: var(--round-pill);
    background: var(--surface-overlay);
    box-shadow: var(--island-shadow);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 11.5px;
  }

  &__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--live);
    animation: pulse 1.6s ease-in-out infinite;
  }

  &--chat {
    display: grid;
    gap: 10px;
  }

  &__ask {
    justify-self: end;
    max-width: 85%;
    padding: 8px 12px;
    border-radius: 14px 14px 4px;
    background: var(--accent);
    color: var(--text-on-accent);
  }

  &__answer {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > div {
      padding: 9px 12px;
      border-radius: 14px 14px 14px 4px;
      background: var(--surface-raised);
      box-shadow: var(--island-shadow);
      color: var(--text-primary);
    }
  }

  &__source {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    padding: 2px 8px;
    border-radius: var(--round-pill);
    background: var(--accent-soft);
    color: var(--accent-text);
    font-size: 11.5px;
    font-weight: 600;
  }

  &--folders {
    display: grid;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      border-radius: 10px;
      background: var(--surface-raised);
      box-shadow: var(--island-shadow);
      color: var(--text-secondary);
      font-size: 13.5px;

      span {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &.is-sealed {
        color: var(--text-primary);
        font-weight: 600;
        box-shadow: 0 0 0 1.5px var(--accent-ring), var(--island-shadow);
      }
    }
  }

  &__lock {
    color: var(--accent-text);
    font-size: 17px;
  }

  &__open {
    color: var(--text-muted);
  }
}

@keyframes pulse {
  50% {
    opacity: 0.3;
  }
}
</style>
