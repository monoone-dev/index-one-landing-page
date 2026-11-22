<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const route = useRoute()
const isPricing = computed(() => /\/pricing\/?$/.test(route.path))
const to = useLocalLink()

const links = computed(() => [
  { label: c.value.nav.features, to: to('/features') },
  { label: c.value.nav.privacy, to: to('/privacy') },
  { label: c.value.nav.pricing, to: to('/pricing') },
  { label: c.value.offer.web, to: site.links.web },
  { label: c.value.nav.faq, to: to('/pricing#faq') },
  { label: c.value.nav.docs, to: site.links.docs },
  { label: c.value.nav.changelog, to: to('/changelog') },
  { label: c.value.nav.github, to: site.links.repo, external: true },
  { label: c.value.nav.download, to: site.links.download, external: true },
])

const legalBase = site.links.legal

const legalLinks = computed(() => [
  { label: c.value.footer.terms, to: site.links.terms, external: true },
  { label: c.value.footer.privacyPolicy, to: `${legalBase}polityka-prywatnosci.html`, external: true },
  { label: c.value.footer.withdrawal, to: `${legalBase}odstapienie.html`, external: true },
  { label: c.value.footer.dpa, to: `${legalBase}dpa.html`, external: true },
  { label: c.value.footer.meetingBot, to: to('/meeting-bot') },
  { label: c.value.footer.contact, to: `${site.links.discussions}/categories/q-a`, external: true },
])

const legal = computed(() => fill(c.value.footer.legalHtml, { year: 2026, authors: site.links.authors, license: site.links.license }))
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div class="foot__panel glass">
      <div class="foot__inner">
        <BrandMark :size="26" />
        <nav class="foot__links" :aria-label="c.common.footerNav">
          <NuxtLink v-for="link in links" :key="link.label" :to="link.to" :external="link.external">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
      <nav class="foot__docs" :aria-label="c.footer.legalNav">
        <NuxtLink v-for="link in legalLinks" :key="link.label" :to="link.to" :external="link.external">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <p class="foot__legal"><NuxtLink to="/docs/plans-and-billing/">{{ c.offer.docs }}</NuxtLink><template v-if="!isPricing"> · {{ c.offer.status }}</template></p>
      <p class="foot__legal" v-html="legal" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.foot {
  position: relative;
  z-index: 1;
  padding: 48px 0 var(--gap);

  &__panel {
    padding: 28px 24px 22px;
    border-radius: var(--radius);
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;

    a {
      padding: 8px 0;
      color: var(--text-secondary);
      font-size: 14.5px;
      transition: color 0.15s;

      &:hover {
        color: var(--text-primary);
      }

      @include coarse-pointer {
        padding: 12px 4px;
      }
    }
  }

  &__docs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 20px;
    margin-top: 22px;
    padding-top: 16px;
    border-top: 1px solid var(--border);

    a {
      padding: 6px 0;
      color: var(--text-secondary);
      font-size: 13.5px;
      transition: color 0.15s;

      &:hover {
        color: var(--text-primary);
      }

      @include coarse-pointer {
        padding: 10px 4px;
      }
    }
  }

  &__legal {
    margin-top: 22px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;

    :deep(a) {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
