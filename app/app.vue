<script setup lang="ts">
import * as uiLocales from '@nuxt/ui/locale'
import { skinBootScript } from '~/composables/useSkin'
import { site } from '~/data/site'

const { locale } = useI18n()
const localeHead = useLocaleHead({ dir: false, lang: true, seo: true })
const c = useContent()

// The i18n module writes the English home page as the bare origin; the sitemap, og:url and the
// prerendered page all use the trailing slash, so canonical and hreflang must too.
const withSlash = (href?: string) => (href === site.url ? `${site.url}/` : href)

useHead(() => ({
  htmlAttrs: { lang: localeHead.value.htmlAttrs?.lang },
  link: localeHead.value.link?.map(link => ({ ...link, href: withSlash(link.href) })),
  meta: localeHead.value.meta,
  script: [{ innerHTML: skinBootScript, tagPosition: 'head', tagPriority: 'critical' }],
}))

const uiLocale = computed(() => {
  const code = (locale.value === 'zh' ? 'zh_cn' : locale.value) as keyof typeof uiLocales
  return uiLocales[code] ?? uiLocales.en
})
</script>

<template>
  <UApp :locale="uiLocale">
    <a class="skip-link" href="#main">{{ c.common.skipToContent }}</a>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </UApp>
</template>
