const repo = 'https://github.com/monoone-dev/index-one-landing-page'

export const site = {
  name: 'IndexOne',
  assistant: 'Ivy',
  organization: 'MonoOne',
  organizationUrl: 'https://github.com/monoone-dev',
  url: 'https://index-one.io',
  title: 'IndexOne — meeting notes and transcription for Mac, with Ivy',
  description:
    'Record and transcribe meetings on your Mac, then ask Ivy, its on-device AI, live or across every call. For you alone or your whole organization.',
  ogImage: '/og-image.png',
  ogImageAlt: 'IndexOne — meeting notes and transcription for Mac, with Ivy',
  themeColor: '#0862f6',
  minMacOS: '13.4',
  links: {
    repo,
    download: `${repo}/releases/latest`,
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
