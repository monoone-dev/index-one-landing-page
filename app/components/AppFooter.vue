<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()

const links = computed(() => [
  { label: c.value.nav.features, to: to('/features') },
  { label: c.value.nav.privacy, to: to('/privacy') },
  { label: c.value.nav.pricing, to: to('/pricing') },
  { label: c.value.nav.compare, to: to('/pricing#compare') },
  { label: c.value.nav.faq, to: to('/pricing#faq') },
  { label: c.value.nav.docs, to: site.links.docs, external: true },
  { label: c.value.nav.changelog, to: to('/changelog') },
  { label: c.value.nav.github, to: site.links.repo, external: true },
  { label: c.value.nav.download, to: site.links.download, external: true },
])

const legal = computed(() => fill(c.value.footer.legalHtml, { year: 2026, authors: site.links.authors, license: site.links.license }))
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div class="foot__inner">
        <BrandMark :size="26" />
        <nav class="foot__links" :aria-label="c.common.footerNav">
          <NuxtLink v-for="link in links" :key="link.label" :to="link.to" :external="link.external">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
      <p class="foot__legal" v-html="legal" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.foot {
  position: relative;
  z-index: 1;
  padding: 44px 0 56px;
  border-top: 1px solid var(--border-subtle);

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

  &__legal {
    margin-top: 24px;
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
