<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()

const links = computed(() => [
  { label: c.value.nav.features, to: to('/features') },
  { label: c.value.nav.privacy, to: to('/privacy') },
  { label: c.value.nav.pricing, to: to('/pricing') },
  { label: c.value.nav.compare, to: to('/pricing#compare') },
  { label: c.value.nav.changelog, to: to('/changelog') },
  { label: c.value.nav.docs, to: site.links.docs, external: true },
])

const language = useLanguageMenu()
const theme = useThemeMenu()

const menuItems = computed<DropdownMenuItem[][]>(() => [links.value.map(link => ({ label: link.label, to: link.to, external: link.external }))])

// On phones the language, theme and download buttons live in the menu instead of the header.
const mobileMenuItems = computed<DropdownMenuItem[][]>(() => [
  [...menuItems.value[0]!, { label: c.value.nav.github, icon: 'i-simple-icons-github', to: site.links.repo, external: true }],
  [
    { label: c.value.common.language, icon: language.icon.value, children: language.items.value },
    { label: c.value.theme.label, icon: theme.icon.value, children: theme.items.value },
  ],
  [{ label: c.value.nav.download, icon: 'i-lucide-arrow-down-to-line', to: site.links.download, external: true }],
])
</script>

<template>
  <header class="nav">
    <div class="wrap">
      <div class="nav__inner glass">
        <BrandMark />
        <nav class="nav__links" :aria-label="c.common.primaryNav">
          <NuxtLink v-for="link in links" :key="link.label" :to="link.to" :external="link.external" class="nav__link" :data-anchor="String(link.to).includes('#') || undefined">
            {{ link.label }}
          </NuxtLink>
        </nav>
        <div class="nav__cta">
          <UDropdownMenu :items="menuItems" :content="{ align: 'end' }" :ui="{ content: 'min-w-48' }">
            <UButton color="neutral" variant="outline" icon="i-lucide-menu" :aria-label="c.common.primaryNav" class="nav__menu" />
          </UDropdownMenu>
          <UDropdownMenu :items="mobileMenuItems" :content="{ align: 'end' }" :ui="{ content: 'min-w-56' }">
            <UButton color="neutral" variant="outline" icon="i-lucide-menu" :aria-label="c.common.primaryNav" class="nav__menu-mobile" />

            <template #item-leading="{ item }">
              <UIcon v-if="item.icon" :name="item.icon" class="size-5 shrink-0" />
            </template>
          </UDropdownMenu>
          <div class="nav__desktop-only">
            <UButton :to="site.links.repo" external color="neutral" variant="ghost" icon="i-simple-icons-github" :aria-label="c.hero.githubAria" />
            <LanguageSelect />
            <ThemeMenu />
            <UButton :to="site.links.download" external icon="i-lucide-arrow-down-to-line" :label="c.nav.download" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// Surface's page bar: a glass strip floating over the sky, an island gap from the top.
.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  padding-top: var(--gap);

  > .wrap {
    padding: 0 calc(var(--gap) * 2);

    @include below(xs) {
      padding: 0 var(--gap);
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    height: 56px;
    padding: 0 8px 0 14px;
    border-radius: var(--radius);
    box-shadow: 0 0 0 1px var(--border), 0 14px 36px -18px rgb(16 24 40 / 0.35);

    > :first-child {
      flex: none;
    }
  }

  &__links {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 2px;
    min-width: 0;

    @include below(lg) {
      display: none;
    }
  }

  &__link {
    padding: 7px 12px;
    border-radius: 10px;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    transition: background 0.14s var(--ease), color 0.14s var(--ease);

    &:hover {
      background: var(--fill-2);
      color: var(--text-primary);
    }

    // A link to a section of a page (Compare) is never the current page.
    &.router-link-exact-active:not([data-anchor]) {
      background: var(--fill-2);
      color: var(--text-primary);
    }
  }

  &__cta {
    display: flex;
    flex: none;
    align-items: center;
    gap: 6px;
  }

  &__menu {
    @media (min-width: 941px) {
      display: none;
    }

    @include below(sm) {
      display: none;
    }
  }

  &__menu-mobile {
    @media (min-width: 641px) {
      display: none;
    }
  }

  &__desktop-only {
    display: flex;
    align-items: center;
    gap: 6px;

    @include below(sm) {
      display: none;
    }
  }
}
</style>
