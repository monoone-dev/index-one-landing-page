const localeFile = { path: 'bundled.ts', cache: false }

const locales = [
  { code: 'en', language: 'en-US', name: 'English', file: localeFile },
  { code: 'pl', language: 'pl-PL', name: 'Polski', file: localeFile },
  { code: 'es', language: 'es-ES', name: 'Español', file: localeFile },
  { code: 'it', language: 'it-IT', name: 'Italiano', file: localeFile },
  { code: 'fr', language: 'fr-FR', name: 'Français', file: localeFile },
  { code: 'pt', language: 'pt-BR', name: 'Português', file: localeFile },
  { code: 'de', language: 'de-DE', name: 'Deutsch', file: localeFile },
  { code: 'zh', language: 'zh-CN', name: '简体中文', file: localeFile },
  { code: 'ja', language: 'ja-JP', name: '日本語', file: localeFile },
]

const pages = ['/', '/features/', '/privacy/', '/pricing/']
const localizedRoutes = locales.flatMap(({ code }) =>
  pages.map(page => (code === 'en' ? page : `/${code}${page}`)),
)

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  devtools: { enabled: false },
  telemetry: false,

  ui: {
    fonts: false,
    theme: { colors: ['primary', 'neutral'] },
    experimental: { componentDetection: true },
  },

  i18n: {
    baseUrl: 'https://index-one.io',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    trailingSlash: true,
    locales,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'index-one-locale',
      cookieCrossOrigin: false,
      redirectOn: 'all',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'index-one-theme',
  },

  icon: {
    mode: 'svg',
    provider: 'none',
    fallbackToApi: false,
    serverBundle: 'local',
    clientBundle: {
      scan: { globInclude: ['app/**/*.{vue,ts}'] },
      sizeLimitKb: 0,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/icon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/assets/fonts/figtree.woff2', crossorigin: '' },
      ],
      meta: [
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  experimental: {
    appManifest: false,
    payloadExtraction: false,
  },

  features: {
    inlineStyles: true,
  },

  nitro: {
    prerender: {
      routes: [...localizedRoutes, '/sitemap.xml'],
      crawlLinks: false,
      failOnError: true,
    },
  },

  vite: {
    build: { assetsInlineLimit: 0 },
  },

  typescript: { strict: true },
})
