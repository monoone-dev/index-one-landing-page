<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()

const links = computed(() => [
  { label: c.value.nav.features, to: to('/features') },
  { label: c.value.nav.privacy, to: to('/privacy') },
  { label: c.value.nav.pricing, to: to('/pricing') },
  { label: c.value.nav.compare, to: to('/pricing#compare') },
  { label: c.value.nav.docs, to: site.links.docs, external: true },
  { label: c.value.nav.github, to: site.links.repo, external: true },
])

const menuItems = computed(() => [links.value.map(link => ({ label: link.label, to: link.to, external: link.external }))])
</script>

<template>
  <header class="nav">
    <div class="wrap nav__inner">
      <BrandMark />
      <nav class="nav__links" :aria-label="c.common.primaryNav">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to" :external="link.external" class="nav__link">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="nav__cta">
        <UDropdownMenu :items="menuItems" :content="{ align: 'end' }" :ui="{ content: 'min-w-48' }">
          <UButton color="neutral" variant="outline" icon="i-lucide-menu" :aria-label="c.common.primaryNav" class="nav__menu" />
        </UDropdownMenu>
        <LanguageSelect />
        <ThemeMenu />
        <UButton :to="site.links.download" external icon="i-lucide-arrow-down-to-line" :label="c.nav.download" class="nav__download" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--surface-base);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: 64px;

    > :first-child {
      flex: none;
    }

    @include below(xs) {
      height: 56px;
      padding: 0 16px;
    }
  }

  &__links {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 22px;
    min-width: 0;

    @media (max-width: 1380px) {
      display: none;
    }
  }

  &__link {
    padding: 10px 0;
    color: var(--text-secondary);
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    transition: color 0.15s;

    &:hover,
    &.router-link-exact-active {
      color: var(--text-primary);
    }
  }

  &__cta {
    display: flex;
    flex: none;
    align-items: center;
    gap: 10px;
  }

  &__menu {
    @media (min-width: 1381px) {
      display: none;
    }
  }

  &__download {
    @include below(xs) {
      :deep(span:not([class*='icon'])) {
        display: none;
      }
    }
  }
}
</style>
