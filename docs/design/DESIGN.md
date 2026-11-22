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
  filary); starsze bloki (cennik, `OfferContext`, cykl życia danych) mają 24 px.
- Wypełnienie kart: 22–28 px (karta planu 28, karta prywatności 22, `OfferContext` 24); CTA 64/32 px.
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
| `OfferContext` | `h2` z `pricing.lead` (22–28 px) + trzy wyspy (Free every month / Unlimited cloud transcription z linkiem do regulaminu / Local and cloud are different) + opcjonalna notka o statusie sprzedaży z linkiem „Compare the plans” | `/`, `/pricing`, `/privacy`, `/features` |
| `CtaSection` | wyśrodkowana wyspa `.framed` (64/32 px): `h2`, lead, link „Compare the plans”, Download (primary `xl`) + Create a free account (outline), drobna notka o starych wersjach | koniec każdej strony |
| `PricingSection` | notka statusu (wyspa z lewym paskiem akcentu 3 px) → trzy plany → nota o uczciwym korzystaniu z linkiem do regulaminu → nota o VAT → tabela porównawcza w wyspie → link do docs. Bez liczb godzin transkrypcji: Free „miesięczny przydział”, płatne „bez limitu · uczciwe korzystanie” (limity są w regulaminie) | `/pricing` |
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

- **Strona główna `/`** (`app/pages/index.vue`): `HeroSection` → `TrustStrip` → `PillarsSection` →
  `StatsBand` → `ShowcaseTabs` → `UniqueSection` → `SecurityBand` → `WhatsNew` → `OfferContext` →
  `CtaSection`. JSON-LD `SoftwareApplication` z listą funkcji i zrzutami.
- **Cennik `/pricing`**: `PricingSection :level="1"` (nagłówek strony „Choose where your work
  lives.”, eyebrow „Monthly, in PLN”) → `OfferContext` bez statusu → `FaqSection` → `CtaSection`.
  Plany: Free (PLN 0, przycisk Download for macOS), Personal (PLN 49, `.framed`, Buy in the web app),
  Team (PLN 75 netto / miejsce / miesiąc). Kwoty i limity z `billing-catalog.v1.json`, formatowane
  `Intl.NumberFormat` w języku strony. Na telefonie tabela porównawcza zmienia się w siatkę: nazwa
  wiersza nad trzema kolumnami wartości. JSON-LD `FAQPage`.
- **Prywatność `/privacy`**: `PrivacySection :level="1"` (eyebrow „Security & Privacy”, nagłówek
  „Privacy isn't a setting. It's the architecture.”) → `OfferContext` → sekcja „Data lifecycle”:
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
6. Stopka nie ma linków prawnych ani kontaktu (zob. `docs/launch/2026-11-22/legal-and-claims.md`, A-01).
