# IndexOne — projekt landingu (stan na 2026-11-22)

Opis tego, jak dziś wygląda i jest zbudowana strona index-one.io (Nuxt 4 + Nuxt UI 4 + Tailwind 4 +
SCSS). Spisane z kodu na commicie `6f8dfef` i ze zrzutów z działającej strony (`npm run dev`).
Służy jako punkt odniesienia dla nowych stron (np. `/meeting-bot`) i zmian w stopce: nowa rzecz ma
wyglądać jak te, które już są.

Źródła prawdy (gdy ten dokument i kod się różnią, rację ma kod):

| Co | Plik |
| --- | --- |
| Tokeny jasny/ciemny, most do Nuxt UI | `app/assets/scss/_themes.scss` |
| Bazowe klasy (`.wrap`, `.section`, `.section-head`, `.island`, `.framed`, `.glass`, `.reveal`) | `app/assets/scss/_base.scss` |
| Breakpointy i mixiny | `app/assets/scss/_mixins.scss` |
| Proza dokumentacji (`.doc-prose`) | `app/assets/scss/_docs.scss` |
| Fonty dla Tailwinda | `app/assets/css/main.css` |
| Kolory Nuxt UI (`primary: blue`, `neutral: zinc`) | `app/app.config.ts` |
| Tryb kolorów, ikony, head, prerender | `nuxt.config.ts` |
| Treść we wszystkich językach | `i18n/content/{en,pl,es,it,fr,pt,de,zh,ja}.ts` (typy w `types.ts`) |
| Dane, których się nie tłumaczy (linki, ikony, plany, zrzuty) | `app/data/site.ts`, `app/data/shared.ts`, `app/data/billing-catalog.v1.json` |

## Zrzuty referencyjne

Zrobione 2026-11-22 z `npm run dev` (angielski, motyw jasny, czyli `colorScheme: light`;
Chromium headless, przewinięte do końca, żeby odsłonić bloki `v-reveal`, potem zrzut całej strony).
Na żadnej stronie nie ma przewijania w poziomie (`scrollWidth - innerWidth = 0`).

| Plik | Strona | Okno |
| --- | --- | --- |
| [`references/home-desktop.png`](references/home-desktop.png) | `/` | 1440 × 900, 1× (cała strona 1440 × 7098) |
| [`references/home-mobile.png`](references/home-mobile.png) | `/` | 390 × 844, 1×, mobile + touch (390 × 10587) |
| [`references/pricing-desktop.png`](references/pricing-desktop.png) | `/pricing/` | 1440 × 900 (1440 × 4437) |
| [`references/pricing-mobile.png`](references/pricing-mobile.png) | `/pricing/` | 390 × 844 (390 × 6739) |
| [`references/privacy-desktop.png`](references/privacy-desktop.png) | `/privacy/` | 1440 × 900 (1440 × 4509) |
| [`references/privacy-mobile.png`](references/privacy-mobile.png) | `/privacy/` | 390 × 844 (390 × 6702) |

Uwaga o zrzutach: tło „niebo” (`body::before`) ma `position: fixed`, więc na zrzucie całej strony
gradient widać tylko w pierwszym ekranie, a niżej jest jednolity `--sky-base`. W przeglądarce
gradient jest za treścią na każdej wysokości. Motywu ciemnego nie zrzucano; jego tokeny są niżej.

## Kierunek: skórka „Surface”

Jedna skórka, wspólna z aplikacją IndexOne (komentarz na górze `_themes.scss`): **białe wyspy na
malowanym niebie, szkło na paskach, jeden promień 12 px dla wysp i kontrolek, niebieski IndexOne
jako akcent.** Spokojnie, dużo powietrza, mało ozdobników; jedyny głośny pas to ticker statystyk.

Trzy powierzchnie (klasy globalne w `_base.scss`):

- `.island` — biała (w ciemnym grafitowa) karta: `background: var(--surface-raised)`,
  `border-radius: var(--radius)`, `box-shadow: var(--island-shadow)` (linia 1 px + miękki cień).
  Podstawowy pojemnik na treść.
- `.framed` — wyróżniona wyspa: dookoła rama ze szkła o grubości `--gap` (8 px) plus `--pop`
  (duży cień). Używane przez plan Personal, kartę CTA, `SecurityBand`, ramki zrzutów aplikacji.
- `.glass` — półprzezroczyste szkło z `backdrop-filter: blur(28px) saturate(1.6)` i obwódką 1 px.
  Pasek nawigacji, stopka, pigułki w `TrustStrip`, ogłoszenie w hero, zakładki `ShowcaseTabs`.

## Kolory i motywy

Tryb: `colorMode.preference: 'system'`, `fallback: 'dark'`, zapis w `localStorage` pod
`index-one-theme`. Przełącznik w nagłówku (`ThemeMenu`): system / jasny / ciemny. Klasa
`html.dark` / `html.light`. `meta theme-color` = `#0862f6`, `color-scheme: light dark`.

Zawsze używaj zmiennych CSS, nie wartości hex. Tabela pokazuje, czemu odpowiadają.

| Token | Jasny | Ciemny | Do czego |
| --- | --- | --- | --- |
| `--sky-base` | `#b9cde3` | `#14172c` | tło `body` pod gradientem |
| `--sky` | radialne: biel, błękit, fiolet, akcent na `#cfe0e8 → #b9cde3 → #a9b6dc` | radialne: akcent 24%, granat, fiolet na `#12172a → #14172c → #1a172e` | `body::before`, stałe |
| `--surface-raised` / `-base` / `-solid` | `#ffffff` | `#1b1b1f` | wyspy, tło za zrzutami |
| `--surface-overlay` | `#ffffff` | `#222227` | menu, popovery |
| `--surface-sunken` | `#f5f5f6` | `#141417` | nagłówki tabel, `pre` |
| `--surface-hover` / `-active` | `#f4f4f5` / `#ececee` | `#24242a` / `#2c2c33` | hover, `code`, `th` w docs |
| `--text-primary` | `#18181b` | `#f4f4f5` | nagłówki, `strong` |
| `--text-secondary` | `#4a4a52` | `#c4c4cc` | tekst akapitów |
| `--text-muted` | `#63636a` | `#a1a1aa` | przypisy, stopka, meta |
| `--border` / `-subtle` / `-strong` | `rgb(24 24 27 / .08)` / `.08` / `.14` | `rgb(255 255 255 / .08)` / `.08` / `.14` | linie |
| `--fill-1` / `--fill-2` | `rgb(24 24 27 / .04)` / `.07` | `rgb(255 255 255 / .05)` / `.08` | hover linków w nawigacji |
| `--accent` | `#0862f6` | `#5ea2ff` | przyciski, plakietki, focus |
| `--accent-hover` | `#0650cf` | `#84b8ff` | |
| `--accent-text` | `#0756d8` | `#84b8ff` | eyebrow, linki, ikony |
| `--text-on-accent` | `#ffffff` | `#06142e` | tekst na akcencie |
| `--accent-soft` / `--accent-ring` | akcent 10% / 34% | to samo, liczone z ciemnego akcentu | kafelki ikon / obwódka hover |
| `--ivy` | `#7a55e6` | `#9d7bff` | drugi koniec gradientu (tytuł hero, ticker) |
| `--safe-text` / `--safe-soft` | `#13733a` / `#e8f3ec` | `#6ee7a0` / `rgb(74 222 128 / .14)` | „zostaje na Macu”, ptaszki, eyebrow prywatności |
| `--warn-text` / `--warn-soft` | `#9a4f06` / `#faf0e2` | `#f5b14c` / `rgb(245 177 76 / .14)` | „wychodzi z Maca”, ostrzeżenia w docs |
| `--live` / `--live-text` | `#ff7a5c` / `#a8401c` | — / `#ff7a5c` | kropka nagrywania w makietach |
| `--chart-*` (teal, blue, violet, amber, pink, olive) | stonowane | jaśniejsze | makiety, wykresy |
| `--glass` / `--glass-frame` | `rgb(255 255 255 / .6)` / `.55` | `rgb(20 20 26 / .46)` / `rgb(255 255 255 / .12)` | szkło, rama `.framed` |
| `--island-shadow`, `--pop`, `--shadow-sm`, `--shadow-md` | jasne cienie | czarne, mocniejsze | |
| `--icon-tile-from/-to`, `--icon-edge`, `--icon-shadow` | `#fff → #f1f6fc` | z `--surface-overlay` | kafelki `BrandIcon` (w `_base.scss`) |

Most do Nuxt UI (`nuxt-ui-bridge`): `--ui-primary: var(--accent)`, `--ui-bg*` i `--ui-text*` na
tokenach powierzchni i tekstu, `--ui-radius: calc(var(--radius) * 0.5)` (6 px). Dzięki temu
`UButton`, `UDropdownMenu` i `UAccordion` przełączają motyw razem ze stroną.

Kolory znaczeniowe: niebieski = akcja i nawigacja; zielony (`safe`) = dane zostają lokalnie, coś
jest zawarte w planie; bursztynowy (`warn`) = dane wychodzą do chmury, ostrzeżenie; fiolet (`ivy`)
tylko w gradiencie z akcentem.

## Typografia

Wyłącznie fonty systemowe; żadnych fontów z CDN (`ui.fonts: false`).

- `--font`: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, 'Segoe UI', sans-serif` — tekst.
- `--font-display`: to samo z `'SF Pro Display'` — `h1`–`h3`, liczby w tickerze.
- `--font-mono`: `ui-monospace, 'SF Mono', Menlo, Consolas, monospace`.
- Chiński i japoński: `--font-cjk` (PingFang SC / Hiragino Sans GB…, Hiragino Sans / Yu Gothic…)
  doklejane do `--font`; nagłówki CJK bez ujemnego `letter-spacing`; japońskie z
  `word-break: auto-phrase`.

Skala (wartości z kodu):

| Element | Rozmiar | Interlinia / inne |
| --- | --- | --- |
| Tytuł hero `h1` | `clamp(38px, 7vw, 80px)` | 1.02, `letter-spacing: -0.04em`, druga część gradientem akcent → ivy, max 15em |
| `h1` strony (`.section-head--page`) | `clamp(34px, 5vw, 56px)` | -0.03em |
| `h2` sekcji (`.section-head`), CTA | `clamp(28px, 4vw, 44px)` | 1.1 (CTA 1.08) |
| `h3` kart | 18 px | waga 600 |
| Lead pod nagłówkiem sekcji | `clamp(16px, 1.8vw, 17px)` | `--text-secondary` |
| Lead hero | `clamp(16.5px, 2vw, 19px)` | max 40em |
| Tekst | 16 px (body), 14.5 px w kartach | `line-height: 1.6` |
| Eyebrow | 13 px, waga 500 | `--accent-text` lub `--safe-text` |
| Link w nawigacji | 14 px, waga 500 | |
| Przypis, stopka, notka | 13–13.5 px | `--text-muted` |
| Cena planu | 40 px | -0.035em |
| Liczba w tickerze | 34 px, waga 700 | |
| Docs: `h2` / `h3` / tekst | 24 / 18 / 16 px | 1.7, `h2` z linią nad |

Wszystkie `h1`–`h3`: waga 600, `letter-spacing: -0.03em`, `text-wrap: balance`, kolor
`--text-primary`. Akapity bez marginesów; odstępy daje układ.

## Odstępy, siatka, promienie, ruch

- Kontener `.wrap`: `max-width: var(--maxw)` = **1120 px**, `padding: 0 24px`, wyśrodkowany.
  Wyjątki: docs `max-width: 82rem` (trzy kolumny), strona główna docs i changelog `68rem`,
  scena hero 1040 px, FAQ 780 px, `.section-head` 640 px.
- Sekcja `.section`: `padding: 96px 0`, poniżej 640 px `64px 0`. Nagłówek sekcji: odstęp 56 px pod
  spodem, eyebrow → `h2` 14 px, `h2` → lead 16 px.
- Rytm: `--gap` = 8 px. Siatki kart w nowszych sekcjach mają przerwę `var(--gap)` (prywatność,
  filary); oferta ma 16 px, plany 24 px (16 px w jednej kolumnie), cykl życia danych 24 px.
- Wypełnienie kart: 22–28 px (karta planu 28 / telefon 24, karta prywatności 22, `OfferContext` 8 wokół sceny + 16 tekst); CTA 64/32 px.
- Promienie: `--radius` = 12 px (wyspy, przyciski strony, pasek nawigacji, zrzuty);
  `--round-sm/md/lg/xl` = 0.6/0.8/1/1.4 × radius; `--round-pill` = 999 px (pigułki, ogłoszenie);
  kafelek ikony 10 px; tag 6 px; kontrolki Nuxt UI 6 px.
- Breakpointy (`_mixins.scss`, `@include below(...)` = `max-width`): `xs` 460, `sm` 640, `md` 820,
  `lg` 940 px. Plus `coarse-pointer` (większe cele dotyku: 44 px w logo, 12 px wypełnienia linków
  stopki) i `reduced-motion`.
- Siatki: karty 3 kolumny → 2 poniżej `lg` → 1 poniżej `sm`; plany 3 kolumny → 1 (max 520 px)
  poniżej 940 px; docs `15.5rem | treść | 13rem` → bez spisu treści poniżej 1180 px → jedna kolumna
  poniżej `lg`.
- Ruch: `--ease: cubic-bezier(0.32, 0.72, 0, 1)`, przejścia 0.14–0.25 s. `v-reveal`
  (`app/plugins/reveal.ts`): bloki poniżej pierwszego ekranu wjeżdżają o 14 px i pojawiają się
  (0.18 s) przy przewinięciu; przy `prefers-reduced-motion` nic się nie animuje, a ticker się
  zawija. Płynne przewijanie z `scroll-padding-top: 80px` (pod lepki pasek).
- Dostępność: link „przejdź do treści” (`.skip-link`), `:focus-visible` = obwódka 2 px akcentu,
  odstęp 3 px; każda sekcja ma `aria-labelledby`, tabele mają `caption` (czasem `.sr-only`).

## Komponenty (`app/components`)

Układ każdej strony (`app/app.vue`): `UApp` → `.skip-link` → `AppHeader` → `<NuxtPage>` (`<main id="main">`) → `AppFooter`.

### Nagłówek — `AppHeader.vue`

Lepki (`position: sticky; top: 0`), odsunięty od góry o `--gap`. Wewnątrz szklany pasek
`.nav__inner.glass`, wysokość 56 px, promień 12 px, cień `0 14px 36px -18px`. Od lewej:
`BrandMark` (ikona IndexOne 30 px + „IndexOne”, 18 px, 600) → linki wyśrodkowane (Features,
Privacy, Pricing, Open web app, Changelog, Docs; 14 px, aktywny i hover z tłem `--fill-2`,
promień 10 px) → po prawej GitHub (ghost), wybór języka (flaga), motyw, przycisk **Download**
(primary z ikoną strzałki w dół).

- Poniżej 940 px linki chowają się do menu `UDropdownMenu` (ikona hamburgera, outline).
- Poniżej 640 px zostaje tylko logo i drugie menu, w którym są też GitHub, język, motyw i Download.

### Stopka — `AppFooter.vue`

`padding: 48px 0 8px`, szklany panel `.foot__panel.glass` (28/24/22 px, promień 12 px). Pierwszy
rząd: `BrandMark` 26 px po lewej, linki po prawej, z zawijaniem (Features, Privacy, Pricing, Open
web app, FAQ, Docs, Changelog, GitHub, Download; 14.5 px, `--text-secondary`). Pod spodem dwie
wyśrodkowane linie `.foot__legal` (13 px, `--text-muted`, linia nad, linki podkreślone):
„Plans and billing · English docs” (+ status sprzedaży poza `/pricing`) i nota prawna
`footer.legalHtml` (rok, MonoOne, licencja CC BY 4.0).

Dziś w stopce **nie ma linków prawnych** (regulamin, polityka prywatności, odstąpienie, DPA,
kontakt). Pasują jako osobna linia `.foot__legal` albo osobna grupa linków w tym samym stylu, z
tekstem w `i18n/content/*.ts` (zajmuje się tym inne zadanie).

### Bloki treści

| Komponent | Wygląd | Gdzie |
| --- | --- | --- |
| `SectionHead` | wyśrodkowany eyebrow + `h1`/`h2` (prop `level`) + lead w `<p>`, `v-reveal`; `tone="safe"` daje zielony eyebrow | prawie każda sekcja |
| `HeroSection` | ogłoszenie-pigułka (szkło, plakietka `home.announce.badge` na akcencie, wersja z release notes) → `h1` w dwóch częściach → lead → dwa przyciski `xl` (Download primary, „Create a free account” outline neutral, do strony logowania aplikacji web, gdzie każdy zakłada konto e-mailem) → notka z zielonym ptaszkiem → scena 1040 px z poświatą akcentu i `HeroVideo` | `/` |
| `HeroVideo` | wideo 16:9 z plakatem `ThemeImage` (`/assets/promo-poster[-light].webp`) i okrągłym przyciskiem odtwarzania; `preload="none"` | hero |
| `TrustStrip` | rząd szklanych pigułek 36 px z ikoną akcentu (bot-off, audio-lines, fingerprint, monitor-smartphone): bez bota, transkrypcja na urządzeniu, blokady Touch ID, platformy | pod hero |
| `PillarsSection` | trzy wyspy z makietą narysowaną w CSS (fale „Me/Others”, czat z Ivy, foldery z zamkiem) i tekstem pod spodem | `/` |
| `StatsBand` | pełnej szerokości pas w gradiencie akcent → ivy, przewijający się ticker liczb (34 px) z etykietami, wygaszane brzegi | `/` |
| `ShowcaseTabs` | szklany pasek zakładek (numer 01–03, ikona, etykieta; aktywna = akcent) + panel: tekst z ptaszkami po lewej, zrzut aplikacji po prawej | `/` |
| `UniqueSection` | siatka 3 × 2 wysp: kafelek ikony (`--accent-soft`) lub `BrandIcon` Ivy, `h3`, tekst, link z strzałką; pod spodem przycisk outline „See every feature” | `/` |
| `SecurityBand` | jedna duża wyspa `.framed`: po lewej eyebrow safe + `h2` + przycisk do `/privacy`, po prawej trzy karty z ikonami | `/` |
| `WhatsNew` | nagłówek po lewej (eyebrow, `h2`, lead) z przyciskiem ghost „All releases”; trzy karty-linki do changelogu (rodzaj wydania, data, wersja, streszczenie) | `/` |
| `OfferContext` | `SectionHead` („Free to start” / „Turn meetings into answers.”) → trzy wyspy z ilustracją SVG nad tekstem (`illustrations/OfferLocal`, `OfferSync`, `OfferGrow`) → rząd CTA: Download free (primary + podpis „For Macs with Apple Silicon”), Open web app (outline), See plans (ghost) | `/` (pod `TrustStrip`), `/features` |
| `CtaSection` | wyśrodkowana wyspa `.framed` (64/32 px): `h2`, lead, link „Compare the plans”, Download (primary `xl`) + Create a free account (outline), drobna notka o starych wersjach | koniec każdej strony |
| `PricingSection` | `SectionHead` → trzy karty planów (Personal wyróżniony) → nota o uczciwym korzystaniu z linkiem do regulaminu → nota o VAT i minimum Team; prop `compact` kończy tu z linkiem do `/pricing#comparison`, pełny wariant dodaje tabelę porównania i wyspę „Plan details” z zastrzeżeniami. Bez liczb godzin transkrypcji: Free „miesięczny przydział”, płatne „w cenie · obowiązują limity” (wartości pul podaje regulamin i strona dokumentacji o planach) | `/` (`compact`), `/pricing` |
| `FaqSection` | `SectionHead` + `UAccordion` (multiple) w wyspie, kolumna 780 px | `/pricing#faq` |
| `PrivacySection` | `SectionHead` safe → siatka kart z kafelkiem ikony (zielony dla `safe`, karta `wide` na całą szerokość) → wyspa z tabelą dostawców (tagi zielony „no”/bursztynowy „yes”), zrzutem i przypisem | `/privacy` |
| `FeatureList` / `FeatureRow` | naprzemienne wiersze: tekst (eyebrow, tytuł, opis, ptaszki) i zrzut w ramie; co drugi odwrócony | `/features` |
| `CompetitionSection` | tabela porównania z konkurencją (ikony check/minus, „Not stated”), kolumna IndexOne wyróżniona | obecnie nieużywana na stronach |
| `ScreenShot` / `ThemeImage` | zrzut aplikacji w ramie `.framed` (promień 12 px); para obrazów ciemny/jasny przełączana z motywem, z przenikaniem | funkcje, prywatność, zakładki |
| `BrandIcon` / `BrandMark` | oficjalne SVG IndexOne i Ivy inline, kafelek z `--icon-*`, identyfikatory gradientów z `useId()` | wszędzie |
| `LanguageSelect`, `ThemeMenu` | `UButton` ghost z ikoną + `UDropdownMenu` (flagi `i-circle-flags-*`) | nagłówek |
| `DocsSidebar` | wyspa z wyszukiwarką, „Overview” i grupami stron; na telefonie zwinięta pod przyciskiem z bieżącym tytułem | `/docs/*` |

### Przyciski i drobne elementy

- Wszystkie przyciski to `UButton` z Nuxt UI. **Primary** (solid, `--accent`, biały tekst) = jedna
  główna akcja w bloku (Download, Buy in the web app). **Secondary** = `color="neutral"
  variant="outline"` (Open web app, View on GitHub, See every feature, link do docs w planie
  niedostępnym). **Ghost** = ikony w nagłówku, „All releases”. Rozmiary: `xl` w hero i CTA, `lg` w
  sekcjach i planach (`block`), domyślny w nagłówku. Ikony z lucide (`i-lucide-arrow-down-to-line`
  dla pobrania, `arrow-up-right` dla zewnętrznej aplikacji, `arrow-right` dla „dalej”).
- Ptaszek listy: `i-lucide-check` w `--safe-text`, 3 px w dół względem pierwszej linii.
- Kafelek ikony: 40 × 40 px, promień 10 px, `--accent-soft` + `--accent-text` (albo safe).
- Tag/plakietka: 12–12.5 px, waga 500–600, promień 6 px lub pigułka.
- Linki w tekście: `--accent-text`, podkreślenie 1 px, offset 3 px (hover 2 px w docs).
- Ikony: tylko zbundlowane kolekcje Iconify (`lucide`, `simple-icons`, `circle-flags`), tryb SVG,
  bez API (`icon.provider: 'none'`).

## Wzorce stron

Strony marketingowe istnieją w 9 językach (`/`, `/pl/`, …; `prefix_except_default`, ukośnik na
końcu). Każda strona: `<main id="main">`, `usePageSeo({ path, meta, schema })` z tekstami z
`c.meta.<strona>`, sekcje jako komponenty, na końcu `CtaSection`. Nowa trasa musi trafić do
`pages` w `nuxt.config.ts` (prerender) i do `server/routes/sitemap.xml.ts`.

- **Strona główna `/`** (`app/pages/index.vue`): `HeroSection` → `TrustStrip` → `OfferContext` → `PillarsSection` →
  `StatsBand` → `ShowcaseTabs` → `UniqueSection` → `SecurityBand` → `WhatsNew` → `PricingSection compact` →
  `CtaSection`. JSON-LD `SoftwareApplication` z listą funkcji i zrzutami.
- **Cennik `/pricing`**: `PricingSection :level="1"` (eyebrow „Pricing”, nagłówek „Start free. Make
  room for more.”; karty → tabela → „Plan details”) → `FaqSection` → `CtaSection`.
  Plany: Free (PLN 0, przycisk Download for macOS), Personal (PLN 49, `.framed`, Buy in the web app),
  Team (PLN 75 netto / miejsce / miesiąc). Kwoty i limity z `billing-catalog.v1.json`, formatowane
  `Intl.NumberFormat` w języku strony. Na telefonie tabela porównawcza zmienia się w siatkę: nazwa
  wiersza nad trzema kolumnami wartości. JSON-LD `FAQPage`.
- **Prywatność `/privacy`**: `PrivacySection :level="1"` (eyebrow „Security & Privacy”, nagłówek
  „Privacy isn't a setting. It's the architecture.”) → wyspa „Plan details” (zastrzeżenia, linki do
  porównania, docs i regulaminu) → sekcja „Data lifecycle”:
  `h2` + trzy wyspy w siatce 3 → 1 (poniżej 800 px) → `CtaSection`. To strona marketingowa o
  architekturze, nie dokument prawny (polityki prywatności jako dokumentu prawnego dziś na stronie
  nie ma).
- **Funkcje `/features`**: `FeatureList :level="1"` → `OfferContext` → `CtaSection`.
- **Changelog `/changelog`**: oś czasu z listą wersji po lewej (9rem), paskiem narzędzi z
  przełącznikiem segmentowym i kartami wydań; treść z `release-notes/*.md`, tylko po angielsku.
- **Docs `/docs/` i `/docs/<slug>/`**: tylko po angielsku (z `user-docs/*.md` przez
  `modules/user-docs.ts`, kolejność w `user-docs/nav.json`). Strona główna docs: hero z wersją
  aplikacji, wyszukiwarka, siatka kart startowych 4 → 2 → 1. Strona: `DocsSidebar` | artykuł
  (okruszki, `h1`, lede, „checked against version”, `.doc-prose`, pager poprzednia/następna jako
  wyspy, pomoc) | spis treści „On this page”. Proza: `h2` z linią nad, kotwice `#` na hover,
  tabele w wyspie, callouty z lewym paskiem (note = akcent, tip = safe, warning = warn), zrzuty
  `shot:` w ramie `.framed` z podpisem i wersją jasną/ciemną.

Szablon nowej strony (np. `/meeting-bot`) w stylu prywatności: `SectionHead :level="1"` (eyebrow,
`h1`, lead) w `.section > .wrap`, potem karty `.island` w siatce `repeat(3, minmax(0, 1fr))` →
1 kolumna na wąskim ekranie (`@include below(sm)` albo `md`), tekst w `--text-secondary`, na końcu
`CtaSection` lub prosty blok kontaktu. Bez nowych kolorów i fontów; tylko tokeny z tabeli.

## Zasady treści (z `AGENTS.md`, `CLAUDE.md` = `@AGENTS.md`, skill `site-content`)

- **Marki:** `IndexOne`, `MonoOne`, `Ivy` — jedno słowo, bez tłumaczenia, bez spacji. Ivy to imię:
  bez przedimka, zaimek „it”.
- **Bez nazwisk:** żadnych ludzi, autorów, założycieli w treści, alt ani metadanych; autor to MonoOne.
- **Nic prywatnego:** tylko publiczne repozytoria i strony; żadnych ścieżek, maili, treści spotkań.
  Przykłady zmyślone. Repozytorium jest publiczne od razu.
- **Prawdziwe twierdzenia o prywatności:** „nic nie opuszcza Twojego Maca” tylko z zastrzeżeniem,
  gdy funkcja może wysłać dane (chmura AI, udostępnianie, sprawdzanie aktualizacji).
- **Konkurencja:** fakty ze stron producenta z miesiącem sprawdzenia; czego nie da się sprawdzić,
  to „Not stated”.
- **Ton:** krótkie zdania, bez marketingowych superlatywów; etykiety z aplikacji („Settings →
  Privacy”) zostają po angielsku.
- **Tłumaczenia:** `en.ts` jest źródłem; każda zmiana tekstu we wszystkich 9 plikach naraz
  (`types.ts` i `npm test` pilnują kluczy, placeholderów i form liczby mnogiej). W tekstach nie
  używać `|`, `@`, `{`, `}` poza istniejącymi placeholderami. Chiński uproszczony.
- **Bez zapytań do stron trzecich:** bez analityki, fontów i skryptów z CDN, bez `fetch` w
  przeglądarce, bez `data:` URI (`vite.build.assetsInlineLimit: 0`). Fonty, ikony i komunikaty są w
  paczce.
- **Nie edytować tutaj:** `docs/use-with-your-agent.md` i `vault-skills/` (kopiowane z aplikacji).
- **Sprawdzenie zmian wyglądu:** `npm ci && npm test && npm run typecheck && npm run generate`, potem
  strony w jasnym i ciemnym motywie przy 375 px i na desktopie, bez przewijania w poziomie, w każdym
  języku (najdłuższe słowa: niemiecki i polski).

## Niespójności zauważone przy spisywaniu

Do rozważenia przy odświeżaniu landingu; tu tylko opisane, kod niezmieniony.

1. `OfferContext` (`app/components/OfferContext.vue:9`) i „Data lifecycle” na `/privacy`
   (`app/pages/privacy.vue:16`) mają gołe `<h2>` bez `SectionHead` i bez rozmiaru, więc wyglądają
   jak mały pogrubiony tekst (widać na `pricing-desktop.png` i `privacy-*.png`), zupełnie inaczej
   niż reszta nagłówków sekcji. `OfferContext` dodatkowo powtarza jako nagłówek `pricing.lead`,
   ten sam tekst co lead nad nim.
2. Bloki dodane ostatnio (`PricingSection`, `OfferContext`, cykl życia w `privacy.vue`) mają
   zwykły scoped CSS z odstępem 24 px i własnymi progami 600/800/940 px, a reszta strony używa
   `var(--gap)` i mixinów `below(xs|sm|md|lg)`.
3. Na stronie głównej `OfferContext` stoi tuż przed CTA i powtarza
   notkę o statusie sprzedaży, która jest też w stopce; na `/privacy` ta sama sekcja cenowa stoi
   między prywatnością a cyklem życia danych.
4. `CompetitionSection.vue` jest w repozytorium, ale żadna strona go nie używa.
5. `DocsSidebar` i strony docs mają teksty interfejsu na sztywno po angielsku („Search docs”,
   „Previous”, „On this page”); to świadome, bo docs są tylko po angielsku, ale nagłówek i stopka
   wokół nich są w języku wybranym przez użytkownika.
6. Stopka ma już linki prawne i kontakt (#77).

## Oferta i plany — specyfikacja dla autora (2026-11-23)

**Status: wdrożone 2026-11-23, z odstępstwami opisanymi w „Wzorce oferty i cennika” niżej.** Punkt wyjścia:
`5ed017530a0b091a4c771e34022d8cf6b5ca4933`. Cel: odwiedzający rozumie darmowy start i wartość
Personal, po czym pobiera aplikację albo przechodzi do zakupu w aplikacji web.
Przejrzano kod, referencje `home-desktop.png`, `home-mobile.png`, `pricing-desktop.png` oraz
publiczne strony poniżej w przeglądarce, przy 1440 × 1000. Nie badano ich konwersji.

### Wzorce ze stron producentów

Stan sprawdzenia: listopad 2026. To obserwacje interfejsu; przewidywana korzyść dla IndexOne
jest wnioskiem projektowym, nie dowodem skuteczności sprzedażowej.

| Źródło | Konkretny wzorzec | Zastosowanie w IndexOne |
| --- | --- | --- |
| [Linear: pricing](https://linear.app/pricing), [oferta](https://linear.app/) | Spokojne kolumny, cienkie separatory, ptaszki, CTA na wspólnej linii; duże fragmenty produktu zamiast dekoracji. Cena zajmuje mało miejsca. | Równa linia CTA i krótka lista różnic. Zachować białe wyspy, zamiast kopiować czarną skórkę. |
| [ClickUp: pricing](https://clickup.com/pricing), [oferta](https://clickup.com/) | Business ma ciemną powierzchnię i plakietkę popularności. Duża cena, okres obok, informacja o braku karty dla Free. Ilustracje problemu i podglądy produktu na stronie głównej. | Jedno wyróżnienie Personal; własne ilustracje wyniku pracy. Plakietka „Polecany”, bez nieudowodnionego „najpopularniejszy”. |
| [Notion: pricing](https://www.notion.com/pricing), [oferta](https://www.notion.com/) | Plany grupowane według zastosowania, Business oznaczony rekomendacją, prosta ilustracja i mocniejszy przycisk. Sekcje produktu prowadzą od czynności do wyniku. | Opis „dla kogo” nad listą korzyści, trzy sceny: nagraj → zapytaj → wróć do notatek. |
| [Granola: pricing](https://www.granola.ai/pricing), [oferta](https://www.granola.ai/) | Trzy karty, krótki opis odbiorcy, duża cena, oliwkowe CTA i okrągłe ptaszki. Podgląd notatki obok krótkiej listy korzyści. | Konkretna notatka jako ilustracja; jeden kolor CTA z własnego motywu. |
| [Fathom: pricing](https://www.fathom.ai/pricing), [oferta](https://www.fathom.ai/) | Oddzielone zastosowania indywidualne i zespołowe, minimum miejsc przy cenie, linia gwarancji zaraz pod CTA, kolorowe obwódki kart. | Minimum dwóch miejsc przy cenie Team. Krótka prawdziwa linia zaufania pod przyciskiem. Nie przenosić gwarancji Fathom. |
| [tl;dv: pricing](https://tldv.io/app/pricing/), [oferta](https://tldv.io/) | Business ma tint, obwódkę i plakietkę; wielka cena i pełnoszeroki przycisk. Free pokazuje brak karty. Oferta pokazuje nagranie, notatkę i odpowiedź w miniaturze produktu. | Personal: tint + rama + podpis. Pokazać efekt użycia, bez kopiowania ich grafik, promocji i dowodów społecznych. |

### Układ i język wizualny

- Na `/`: przenieść `OfferContext` bezpośrednio pod `TrustStrip`, przed `PillarsSection`.
  W dotychczasowym miejscu pod `WhatsNew` wstawić `PricingSection` w wariancie skróconym:
  nagłówek, trzy karty, krótka informacja o podatkach i link do pełnego `/pricing#comparison`.
  Pełna tabela i zastrzeżenia tylko na `/pricing`. Nie dublować oferty przed końcowym CTA.
- `OfferContext`: `SectionHead` z osobnym tytułem i leadem → trzy ilustrowane wyspy → rząd CTA.
  Bez `offer.status`, UTC, fair use i akapitów prawnych. Zachować te fakty w cenniku i prywatności.
  Bez stałego `min-height` sekcji; padding 64 px desktop / 40 px telefon, nagłówek–karty 32 px,
  karty–CTA 24 px. Łączny odstęp do następnej treści najwyżej 80 px, nie suma dwóch dużych paddingów.
- Kontener 1120 px, rytm 8 px, promień `--radius`. Wyspy `--surface-raised`, tekst
  `--text-primary/secondary`; ilustracje na `--accent-soft` lub `--surface-sunken`.
  Własne niebo pozostaje tłem. Szkło wyłącznie jako rama; nie kłaść drobnego tekstu na gradiencie.
- Personal: `.framed`, obwódka `--accent-ring`, delikatny tint `--accent-soft`, plakietka
  `--accent` + `--text-on-accent`. Free i Team zwykłe `.island`, CTA neutral outline;
  Personal primary solid. Rekomendacja także tekstem, nie samym kolorem.
- `--ivy` tylko jako drugi koniec dekoracyjnej poświaty przy scenie Ivy. `--safe-text` dla
  ptaszków zawartości; nie używać zamka ani zielonej tarczy jako symbolu standardowej chmury.

### Trzy własne ilustracje SVG i gotowe copy

Sceny dekoracyjne, `viewBox="0 0 320 160"`, responsywna szerokość i proporcje 2:1, bez rasteryzacji,
fontów i zewnętrznych zasobów. Osobne komponenty w `app/components/illustrations/`.
`aria-hidden="true"`, `focusable="false"`; korzyść wyjaśnia tekst obok. Bez istotnych napisów
wewnątrz SVG; gradienty z `useId()`. Żadnych cudzych znaków, realnych nazw i treści spotkań.

| Element | English | Polski | Ilustracja |
| --- | --- | --- | --- |
| Nagłówek | Turn meetings into answers. | Zamień spotkania w odpowiedzi. | — |
| Lead | Record on your Mac. Ask Ivy. Keep your notes together. | Nagrywaj na Macu. Pytaj Ivy. Miej notatki w jednym miejscu. | — |
| Korzyść 1 | Keep the conversation. | Zachowaj rozmowę. | Dwie fale audio przechodzą w kartę transkrypcji, akcent niebieski. |
| Opis 1 | Capture both sides of the call and return to the transcript. | Nagraj obie strony rozmowy i wracaj do transkrypcji. | — |
| Korzyść 2 | Find the answer with Ivy. | Znajdź odpowiedź z Ivy. | Dymek pytania, krótka karta odpowiedzi i znaczek odnośnika do źródła; akcent → ivy. |
| Opis 2 | Ask about your meeting and follow the answer back to its source. | Zapytaj o spotkanie i przejdź od odpowiedzi do źródła. | — |
| Korzyść 3 | Keep notes within reach. | Miej notatki pod ręką. | Trzy karty dokumentów w folderze, bez zamka i obietnicy E2E. |
| Opis 3 | Organize your notes and find what matters later. | Uporządkuj notatki i wróć do ważnych ustaleń. | — |

CTA pod ofertą: **Download free / Pobierz za darmo** (primary, istniejący `site.links.download`),
**Open web app / Otwórz aplikację web** (outline, `site.links.web`),
**See plans / Zobacz plany** (link do lokalizowanego `/pricing`).
Nie zmieniać adresów zakupu, sposobu logowania ani zachowania pobierania. Etykieta pobierania
zachowuje kontekst macOS, np. krótki podpis „For macOS / Na macOS”.

### Karty planów

Nagłówek EN: **Start free. Make room for more.** PL: **Zacznij za darmo. Zyskaj więcej możliwości.**
Lead EN: **Local Mac tools are free. Choose a cloud plan when you need more.**
PL: **Lokalne narzędzia na Macu są darmowe. Wybierz plan chmurowy, gdy potrzebujesz więcej.**

Kolejność: plakietka (Personal „Recommended / Polecany”) → nazwa → jedno zdanie „dla kogo” →
cena 48–56 px, okres i podatek 14 px → 3–5 korzyści z lucide-check → jeden przycisk → linia zaufania
13–14 px. Usunąć obecną powtarzalną ilustrację nad ceną; ilustracje mają przekonać w ofercie.
Na desktopie CTA wyrównać przez flex, bez stałej wysokości całej karty.

| Plan | Cena i jednostka | Dla kogo EN / PL | Korzyści EN / PL (każda para to jeden punkt) | CTA EN / PL; linia zaufania |
| --- | --- | --- | --- | --- |
| Free | 0 PLN miesięcznie | Your first meeting notes. / Twoje pierwsze notatki ze spotkań. | Local Mac tools / Lokalne narzędzia na Macu; Cloud notes and sync / Notatki w chmurze i synchronizacja; 200,000 Ivy units per month / 200 000 jednostek Ivy miesięcznie; 1 GB cloud storage / 1 GB w chmurze | Download free / Pobierz za darmo; No card required / Bez karty płatniczej |
| Personal | 49 PLN brutto miesięcznie | More room for your work. / Więcej miejsca na Twoją pracę. | Everything in Free / Wszystko z Free; More cloud transcription / Więcej transkrypcji w chmurze; 1,200,000 Ivy units per month / 1 200 000 jednostek Ivy miesięcznie; 20 GB cloud storage / 20 GB w chmurze | Choose Personal / Wybierz Personal; Cancel anytime / Anuluj w dowolnej chwili |
| Team | 75 PLN netto za miejsce miesięcznie, od 2 miejsc | A shared space for your team. / Wspólna przestrzeń dla zespołu. | Shared notes and workspace / Wspólne notatki i przestrzeń zespołu; Cloud transcription for every seat / Transkrypcja w chmurze dla każdego miejsca; 2,500,000 Ivy units per seat per month / 2 500 000 jednostek Ivy na miejsce miesięcznie; 50 GB cloud storage per seat / 50 GB w chmurze na miejsce; Google Meet bot / Bot Google Meet | Choose Team / Wybierz Team; Manage your plan in the web app / Zarządzaj planem w aplikacji web |

Kwoty w tabeli są opisem aktualnego katalogu, nie wartościami do przepisania do tłumaczeń.
W UI wszystkie ceny, Ivy, GB, minimum miejsc oraz łączny koszt minimum wyliczać z
`billing-catalog.v1.json` i formatować przez `Intl.NumberFormat(locale)`; dopisać do typu treści
etykiety i placeholdery, bez drugiego źródła liczb w `points`. Zastąpić stare `pricing.plans.*.price`,
nie używać ich do renderowania. Team: łączny budżet zawiera pulę automatyzacji; nie obiecywać
2,5 mln jednostek interaktywnych. Szczegóły podziału zostawić pod porównaniem / w dokumentacji.
Nie wyświetlać godzin ani przeliczać `asrMs`; nie pisać o transkrypcji „bez limitu” (tryb ekonomiczny też ma pułap).

Pod kartami także na stronie głównej zachować zwięzłą informację: Personal zawiera VAT,
Team od 2 miejsc — łącznie 150 PLN netto miesięcznie; podatki i końcowa cena w aplikacji przed zakupem.
Nie ukrywać minimum i netto w przypisie. Nie dodawać przełącznika rocznego, rabatu, checkoutu
na landingu ani ogólnej obietnicy 14 dni zwrotu bez potwierdzenia warunków dokumentu prawnego.

### Zastrzeżenia i współdzielenie komponentu

Na `/pricing` bez drugiego `OfferContext`; pod tabelą porównania zwięzły blok „Plan details /
Szczegóły planów”, a na `/privacy` odpowiadający blok przed cyklem życia danych.
Treść EN: **The Free allowance renews at the start of each calendar month in UTC. Personal and Team
allowances renew at the start of each billing period. Recordings that do not fit in the remaining
fast allowance may go into the slower economy queue. When a recording does not fit in the remaining
economy allowance, the service does not accept it for transcription. You can submit it again after
the allowance renews. The Terms of
Service set out how use is counted and how large each allowance is. Standard account cloud is not
end-to-end encrypted: the operator can read stored and processed content. Pattern masking is not
full anonymization. Local processing on your Mac stays on your Mac.**
PL: **Pula Free odnawia się z początkiem miesiąca kalendarzowego w UTC. W planach Personal i Team
pule odnawiają się z początkiem okresu rozliczeniowego. Nagrania, które nie mieszczą się w
pozostałej puli szybkiej, mogą trafić do wolniejszej kolejki w trybie ekonomicznym. Gdy nagranie nie
mieści się w pozostałej puli ekonomicznej, serwis odmawia przyjęcia go do transkrypcji. Możesz
zgłosić je ponownie po odnowieniu puli. Szczegóły naliczania
i wartości pul podaje regulamin. Standardowa chmura konta nie jest szyfrowana end-to-end: operator
może odczytać przechowywane i przetwarzane treści. Maskowanie wzorców nie jest pełną anonimizacją.
Lokalne przetwarzanie na Macu pozostaje na Macu.**

Linki: lokalizowany `/privacy`, istniejące `/docs/plans-and-billing/` (oznaczyć English),
`https://app.index-one.io/legal/regulamin.html` (oznaczyć PL, jak w obecnym `AppFooter.vue`).
To zwykłe linki, bez pobierania dokumentów w tle. Zachować pozostałe fakty o dostępie, retencji
i rozliczeniach w FAQ / dokumentacji. `OfferContext` występuje też na `/features`: nowy wariant
ma tam pozostać sensowny, bez powielania identyfikatorów, a zastrzeżenia muszą nadal być osiągalne.
Historyczna uwaga nr 6 wyżej opisuje starszy stan; aktualny kod stopki już ma linki prawne.

### Stany, dostępność i odbiór implementacji

- Treść i katalog są statyczne: render SSR od razu, bez skeletonu, pustej karty lub wywołania API.
  Nie ma tu stanu zalogowania, płatności, spinnera zakupu ani błędu checkoutu — te obsługuje web app.
  Błąd lub brak wpisu katalogu nie może oznaczać ceny 0; ma zatrzymać generowanie strony.
  Brak ilustracji nie może ukryć tekstu lub CTA. Wszystkie nazwy CTA niepuste (obecnie Free ma pusty tekst).
- `section` z unikalnym `aria-labelledby`; h2 na stronie głównej, h1 cennika, nazwy planów o poziom niżej.
  Linki i `UButton`, bez klikalnych całych kart. Tab w kolejności wizualnej, Enter aktywuje link;
  focus 2 px `--accent`, offset 3 px, nieucięty przez ramę. Cele dotykowe co najmniej 44 px.
- Tekst co najmniej 4,5:1, duża cena 3:1; sprawdzić rzeczywiste złożenie tokenów w obu motywach.
  Nie używać `--ivy` jako drobnego tekstu. Brak automatycznej animacji SVG; respektować reduced motion.
- 1440 px: trzy kolumny korzyści i planów. 768 px: trzy korzyści z tekstem pod ilustracją,
  plany zgodnie z obecnym progiem 940 px w jednej kolumnie do 520 px. 390 px: wszystko w jednej
  kolumnie, CTA oferty pełnej szerokości, odstępy między kartami 16 px, padding kart 24 px.
  Zachować kolejność Free → Personal → Team także na telefonie, bez karuzeli.
- Wszystkie dziewięć języków w jednej zmianie: en, pl, es, it, fr, pt, de, zh, ja oraz `types.ts`.
  Bez stałych wysokości tekstu, ellipsis i ręcznych `<br>`; `min-width: 0`, zawijanie przycisków.
  Sprawdzić PL/DE oraz CJK, powiększenie tekstu 200%, długie jednostki przy cenie i brak overflow
  przy 390/768/1440 px. Utrzymać semantykę tabeli i nazwy kolumn na telefonie.
- Autor implementacji uruchamia istniejące sprawdzenia zgodności tłumaczeń, typów i generowania
  przez zatwierdzone kontrole hosta; nie dodaje testów ani bibliotek. Późniejszy etap workflow
  wykonuje odbiór runtime. Statyczny landing nie potrzebuje backendu do cen; nie przedstawiać
  jego zrzutu jako dowodu zakupu ani działania płatności.
- Dowody implementacji: PNG całego viewportu 1440 × 900 oraz 390 × 844, oba motywy, `/`
  przewinięte osobno do oferty i do planów oraz `/pricing` do kart; dodatkowo `/privacy` do
  zmienionego bloku. Pełna strona może być dodatkiem, nie zamiennikiem czytelnego viewportu.
  Sprawdzić 768 px i porównanie/zastrzeżenia przez przewinięcie. Zapisać do `design/` w folderze
  dowodów autora, z `design/screens.json` (`file`, `screen`, `place` według briefu). Serwer dev
  uruchomić tylko na czas weryfikacji i zatrzymać. Ten etap dostarcza specyfikację, bez zmian ekranów.

## Wzorce oferty i cennika (wdrożone 2026-11-23)

Krótko, co dodała implementacja specyfikacji wyżej; szczegóły w kodzie.

- **Ilustracja oferty** (`app/components/illustrations/Offer*.vue`, style w
  `app/assets/scss/_illustrations.scss`): inline SVG `viewBox="0 0 320 160"`, `aria-hidden`, bez
  tekstu, kolory wyłącznie z tokenów przez klasy `.art__*`. Nieprzezroczyste wypełnienia liczone
  `color-mix(…, var(--surface-raised))`, żeby nachodzące kształty nie dawały ciemniejszych szwów.
  Gradient tylko akcent → ivy, z `useId()`. Scena leży na „scenie” karty: `--surface-sunken` z
  radialną poświatą akcentu (sync: akcent + teal, grow: akcent + ivy), promień `radius − 4px`,
  karta z wewnętrznym marginesem `--gap`.
- **Sekcja oferty**: `padding: 64px 0 0` (telefon 40), nagłówek → karty 32 px, karty → CTA 24 px;
  odstęp w dół daje górny padding następnej sekcji, bez sumy dwóch paddingów. Drobny tekst na niebie
  (podpis pod CTA) w `--text-secondary`, bo `--text-muted` na jasnym niebie ma ok. 3,6:1.
- **Karta planu**: nagłówek (nazwa + plakietka „Recommended” na `--accent`) → zdanie „dla kogo” →
  cena: liczba 52 px (telefon 46), waluta 22 px w kolejności z `Intl.NumberFormat.formatToParts`,
  okres 14 px, linia pod ceną → punkty z ptaszkiem w kółku 20 px (`--safe-soft`; w Personal
  `--accent-soft`) → jeden `UButton` `xl` `block` (Personal primary, reszta outline neutral) →
  linia zaufania 13,5 px z ikoną. Personal: tint 7% akcentu od góry, obwódka `--accent-ring` +
  rama `.framed`. Kolejność Free → Personal → Team na każdej szerokości.
- **Skrót Personal nad kartami** (`.peek`, tylko poniżej 940 px): na telefonie pierwsze miejsce
  zajmuje karta Free, więc między nagłówkiem a kartami stoi jedna wyspa: „✦ Personal” w
  `--accent-text`, cena 20 px z katalogu + okres z `pricing.plans.personal.period`, korzyść
  `pricing.peek.benefit` z ptaszkiem i podkreślony link `pricing.peek.link` do `#plan-card-personal`.
  Tło: `--accent-soft` na nieprzezroczystym `--surface-raised` (na jasnym niebie przezroczysty tint
  dawał linkowi poniżej 4,5:1), obwódka `--accent-ring`, promień 16 px. Dwa wiersze `flex-wrap`,
  bez przycisku, żeby nie konkurować z CTA kart. Na desktopie ukryty, bo trzy karty mieszczą się
  w pierwszym widoku.
- **Liczby w copy**: placeholdery `{ivy}`, `{storage}`, `{seats}`, `{total}` w `pricing.*`
  wypełniane z `billing-catalog.v1.json`; brak wpisu w katalogu przerywa render. Jednostka GB w
  tabeli z `offer.gb` (francuski „Go”).
- **Tabela porównania**: kolumna Personal z tintem 5% akcentu i nagłówkiem w `--accent-text`;
  wiersz Google Meet bot z `meetBotAvailable`. Na telefonie nazwa wiersza nad trzema wartościami,
  pierwsza komórka nagłówka ukryta.
- **Wyspa „Plan details”**: lewy pasek akcentu 3 px, `h2` 17 px z ikoną info, akapit zastrzeżeń,
  `<details>` „More billing details” (Free, Team, retencja, jednostki Ivy), linki podkreślone
  w `--accent-text`. Na `/pricing` pod tabelą, na `/privacy` przed cyklem życia danych.
- **Odstępstwo od copy ze specyfikacji**: trzy korzyści oferty mówią o tym, co się dostaje
  (za darmo na Macu / w przeglądarce / więcej miejsca w planie płatnym), a nie o nagrywaniu, Ivy i
  notatkach, bo te trzy tematy pokazuje `PillarsSection` tuż pod ofertą. Klucze `offer.trial*`,
  `meter*`, `privacy*` zostały, bo budują pytania FAQ.
- **Połączenie z `main` (2026-11-23)**: hero, meta, leady sekcji, CTA, FAQ i twierdzenia o planach
  pochodzą z `main` (#78), więc `offer.summary` i `offer.localNote` usunięto. Teksty `offer.trial`,
  `meter*`, `team`, `lifecycle`, `basics`, `asrUnlimited` („Unlimited · fair use”) i `asrBasic`
  („Monthly allowance”) są w brzmieniu z #78. Pod kartami, przed notą o VAT, stoi zdanie
  `offer.fairUse` z linkiem `offer.fairUseLink` do regulaminu (styl `.pricing__note`), na `/` i na
  `/pricing`: „bez limitu” zawsze z uczciwym korzystaniem, przydział Free tylko w regulaminie.
- **Fakty o limitach i serwerach (2026-11-28)**: zastępuje zdanie wyżej. Strona nie pisze o
  transkrypcji „bez limitu” ani nie obiecuje natychmiastowości; `offer.fairUse` mówi o wolniejszej
  kolejce i limitach z regulaminu, klucz `asrUnlimited` to teraz `asrPaid`. Na `/privacy` blok
  `privacy.hosting` stoi przed „Plan details”: lokalizacja serwerów i bazy zawsze w jednym akapicie
  z informacją, że domyślna Ivy w chmurze może przetwarzać tekst poza EOG.
