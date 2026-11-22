import latest from '#release-latest'

const repo = 'https://github.com/monoone-dev/index-one-landing-page'
/** The newest release in `release-notes/`, without the leading `v`; its DMG is the download button. */
const version = latest.tag.slice(1)

export const site = {
  name: 'IndexOne',
  assistant: 'Ivy',
  organization: 'MonoOne',
  organizationUrl: 'https://github.com/monoone-dev',
  url: 'https://index-one.io',
  title: 'IndexOne — private AI meeting notes on your Mac, no bot needed',
  description:
    'Record both sides of a call without a bot, transcribe it on your Mac and ask Ivy, with a receipt for every line. Free on the Mac; your cloud spaces open in any browser.',
  ogImage: '/og-image.png',
  ogImageAlt: 'IndexOne — private AI meeting notes on your Mac, no bot needed',
  themeColor: '#0862f6',
  minMacOS: '13.4',
  /** Install command for the Homebrew cask (public tap monoone-dev/homebrew-tap). */
  brew: 'brew install --cask monoone-dev/tap/index-one',
  links: {
    repo,
    web: 'https://app.index-one.io/',
    /** Anyone can create an account with an email address on the web app's sign-in page. */
    signup: 'https://app.index-one.io/login',
    /** The legal documents are published by the web app, in Polish only. */
    legal: 'https://app.index-one.io/legal/',
    terms: 'https://app.index-one.io/legal/regulamin.html',
    /** The DMG itself, not the release page with its five files (same URL pattern as the Homebrew cask). */
    download: `${repo}/releases/download/v${version}/IndexOne-${version}.dmg`,
    /** The release page, for the checksums and the other files. */
    latestRelease: `${repo}/releases/latest`,
    releases: `${repo}/releases`,
    discussions: `${repo}/discussions`,
    authors: `${repo}/blob/main/AUTHORS.md`,
    license: `${repo}/blob/main/LICENSE`,
    docs: '/docs/',
  },
} as const

export const flags: Record<string, string> = {
  en: 'i-circle-flags-gb',
  pl: 'i-circle-flags-pl',
  es: 'i-circle-flags-es',
  it: 'i-circle-flags-it',
  fr: 'i-circle-flags-fr',
  pt: 'i-circle-flags-br',
  de: 'i-circle-flags-de',
  zh: 'i-circle-flags-cn',
  ja: 'i-circle-flags-jp',
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString()
