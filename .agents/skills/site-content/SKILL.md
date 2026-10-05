---
name: site-content
description: Change what the IndexOne website says or shows — page copy in any of the nine languages, features, privacy cards, pricing and the competitor comparison, the IndexOne and Ivy icons, or the theme — following the content rules (brand names, no personal names, true privacy claims, nothing private, no third-party requests). Use whenever the user asks to change text on the site, add a feature or a language, replace a logo or tweak colors.
---

# /site-content — editing the site

## Where things live

| What | Where |
| --- | --- |
| All visible text, per language | `i18n/content/{en,pl,es,it,fr,pt,de,zh,ja}.ts` (typed by `types.ts`) |
| What is not translated: links, icons, screenshots, comparison values | `app/data/shared.ts`, `app/data/site.ts` |
| Languages, default, browser detection | `i18n` block in `nuxt.config.ts`; flags in `app/data/site.ts` |
| Language picker (flag button) | `app/components/LanguageSelect.vue` |
| Pages | `app/pages/{index,features,privacy,pricing,changelog}.vue`; one component per section in `app/components/` |
| Changelog entries (English only) | `release-notes/vX.Y.Z.md`, turned into HTML at build time by `modules/release-notes.ts`; each file starts with `*Originally released on YYYY-MM-DD.*` |
| SEO: meta, Open Graph, JSON-LD | `app/composables/usePageSeo.ts`; `hreflang` and canonical come from `@nuxtjs/i18n` |
| Sitemap | `server/routes/sitemap.xml.ts` |
| IndexOne and Ivy icons (theme-aware inline SVG) | `app/components/BrandIcon.vue`; tile colours in `--icon-*` in `app/assets/scss/_base.scss`; source files in `public/assets/{icon,logo,ivy}.svg` |
| Skins (Studio / Paper / Minimalist) and light/dark tokens | `app/assets/scss/_themes.scss`, `app/app.config.ts` |
| Documentation (English only, static) | `public/docs.html` |

## Content rules

- **Brand names.** `IndexOne`, `MonoOne` and `Ivy` — one word, never translated, never with a space.
  Ivy is a proper name: no article ("ask Ivy", not "ask the Ivy"), pronoun "it". The shipped app
  files follow the same rule (`/Applications/IndexOne.app`, `IndexOne-<version>.dmg`).
- **No personal names.** No people, authors, founders or team members — on the page, in alt text or
  in metadata. Authorship is MonoOne.
- **Nothing private.** Link only public repositories and public sites; never internal paths or
  private repo names.
- **Privacy claims must be true of the shipped app.** "Nothing leaves your Mac" needs its qualifier
  when a feature can send data (opt-in cloud AI, end-to-end encrypted sharing, the update check).
- **Competitor facts** come from the vendor's own pages, with the month they were checked; mark what
  cannot be verified as "Not stated" instead of guessing.
- Short sentences, no marketing superlatives. In-app UI labels ("Settings → Privacy") stay in English.
- **No third-party requests.** No analytics, no CDN fonts or scripts, no runtime `fetch`, no `data:` URIs.

## Translations

- English (`en.ts`) is the source and the fallback; `types.ts` makes every other language fail the
  typecheck until it has every key. Change all nine files in the same change.
- Do not use `|`, `@`, `{` or `}` in copy except the existing placeholders (`{download}`, `{year}`, …).
- Chinese is Simplified (`zh` → `zh-CN`); Japanese headings break at phrase boundaries
  (`word-break: auto-phrase`) and CJK headings drop negative letter-spacing.
- Adding a language: a content file, an entry in `locales` in `nuxt.config.ts` and in
  `server/routes/sitemap.xml.ts`, a flag in `flags` (`i-circle-flags-<country>`), the
  `@nuxt/ui/locale` mapping in `app/app.vue`, and the language list in the `build` check.

## Logos

Use the official SVG; do not redraw a brand mark by eye. Inline it in `BrandIcon.vue`, keep gradient
ids prefixed with `useId()` so two copies on a page do not collide, and read the tile colours from
`--icon-*` so it follows light and dark mode.

## Verify

`npm run typecheck && npm run generate` at the repo root, then check the pages in light and dark mode at
375px and desktop width, with no horizontal scroll — in every language (German and Polish words are
the longest).
