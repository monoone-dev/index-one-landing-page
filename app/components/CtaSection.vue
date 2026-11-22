<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
const legacy = computed(() => fill(c.value.cta.legacyHtml, { download: site.links.latestRelease }))
const copied = ref(false)
async function copyBrew() {
  try {
    await navigator.clipboard.writeText(site.brew)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  }
  catch {
    // Clipboard blocked: the command stays selectable with one click.
  }
}
</script>

<template>
  <section class="section cta" aria-labelledby="cta-title">
    <div class="wrap">
      <div v-reveal class="cta__card island framed">
        <h2 id="cta-title">{{ c.cta.title }}</h2>
        <p>
          {{ c.cta.lead }}
          <NuxtLink :to="to('/pricing#comparison')" class="cta__compare">{{ c.cta.compare }}</NuxtLink>
        </p>
        <div class="cta__actions">
          <UButton :to="site.links.download" external size="xl" icon="i-lucide-arrow-down-to-line" :label="c.cta.download" />
          <UButton :to="site.links.signup" external size="xl" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-up-right" :label="c.cta.signup" />
        </div>
        <p class="cta__brew">
          <span>{{ c.cta.brew }}</span>
          <code>{{ site.brew }}</code>
          <UButton size="xs" color="neutral" variant="ghost" :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'" :aria-label="c.cta.brewCopy" @click="copyBrew" />
        </p>
        <p class="cta__legacy" v-html="legacy" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  text-align: center;

  &__card {
    padding: 64px 32px;

    h2 {
      margin-bottom: 16px;
      font-size: clamp(28px, 4vw, 44px);
      line-height: 1.08;
    }

    > p:not(.cta__legacy, .cta__brew) {
      max-width: 30em;
      margin: 0 auto 30px;
      color: var(--text-secondary);
      font-size: clamp(16px, 2vw, 18px);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  &__compare {
    display: block;
    margin-top: 8px;
    color: var(--accent-text);
    font-size: 15px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &__brew {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 20px auto 0;
    color: var(--text-muted);
    font-size: 14px;

    code {
      padding: 2px 8px;
      border-radius: 6px;
      background: var(--surface-sunken);
      font-size: 13px;
      user-select: all;
      overflow-wrap: anywhere;
    }
  }

  &__legacy {
    max-width: 46em;
    margin: 22px auto 0;
    color: var(--text-muted);
    font-size: 13.5px;

    :deep(a) {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
