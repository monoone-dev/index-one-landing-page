export interface PageMeta {
  title: string
  description: string
}

export interface Card {
  title: string
  body: string
}

export interface FeatureCopy {
  eyebrow: string
  title: string
  body: string
  points: string[]
  alt: string
}

export type FeatureId =
  | 'workspaces' | 'dashboards' | 'imports' | 'ivy' | 'ask' | 'transcription'
  | 'memory' | 'receipts' | 'markdown' | 'notes'

export type DifferentiatorId = 'live' | 'capture' | 'receipts' | 'security' | 'locks' | 'markdown'

export type PrivacyCardId = 'offline' | 'at-rest' | 'gated' | 'seals' | 'screen-share' | 'firewall' | 'update-check'

export type ProviderId = 'on-device' | 'ivy-web' | 'claude-code' | 'codex' | 'local-server'

export type PlanId = 'free' | 'personal' | 'team'
export type OfferBenefitId = 'local' | 'sync' | 'grow'

export type ComparisonRowId = 'capture' | 'local-transcription' | 'local-ai' | 'ask-all' | 'local-data' | 'markdown' | 'encryption' | 'platforms' | 'price'

export type PillarId = 'capture' | 'ivy' | 'privacy'

export type ShowcaseTabId = 'record' | 'ask' | 'export'

export type MeetingBotCardId = 'bot' | 'controller' | 'processor' | 'recorded' | 'purpose' | 'storage'

export type MeetingBotRightId = 'object' | 'access' | 'erasure' | 'complaint'

export interface SiteContent {
  meta: {
    home: PageMeta
    features: PageMeta & { breadcrumb: string }
    privacy: PageMeta & { breadcrumb: string }
    pricing: PageMeta & { breadcrumb: string }
    changelog: PageMeta & { breadcrumb: string }
    meetingBot: PageMeta & { breadcrumb: string }
    ogImageAlt: string
  }
  common: {
    skipToContent: string
    homeAria: string
    primaryNav: string
    footerNav: string
    language: string
  }
  nav: {
    features: string
    privacy: string
    pricing: string
    compare: string
    faq: string
    docs: string
    github: string
    changelog: string
    download: string
  }
  theme: {
    label: string
    skinsGroup: string
    modesGroup: string
    skins: Record<'studio' | 'paper' | 'minimalist', { label: string, description: string }>
    modes: Record<'light' | 'dark' | 'system', string>
  }
  hero: {
    githubAria: string
    titleStrong: string
    titleSoft: string
    subHtml: string
    download: string
    /** The second hero button: create an account in the web app. */
    signup: string
    note: string
    videoLabel: string
    play: string
  }
  home: {
    /** The announcement pill above the hero, with a {version} placeholder. */
    announce: { badge: string, text: string }
    pillars: {
      eyebrow: string
      title: string
      lead: string
      items: Record<PillarId, Card & { link: string }>
      mock: {
        question: string
        answer: string
        sources: string
        folders: [string, string, string]
      }
    }
    /** Labels for the facts band; the values live in app/data/shared.ts. */
    stats: { aria: string, labels: [string, string, string, string, string, string] }
    showcase: {
      eyebrow: string
      title: string
      lead: string
      tabsLabel: string
      tabs: Record<ShowcaseTabId, string>
      iphone: { eyebrow: string, title: string, body: string, videoLabel: string }
    }
    security: { more: string }
    news: { eyebrow: string, title: string, lead: string, read: string, all: string }
  }
  trust: {
    aria: string
    items: [string, string, string, string]
  }
  unique: {
    eyebrow: string
    title: string
    lead: string
    items: Record<DifferentiatorId, Card & { link: string }>
    seeAll: string
  }
  privacy: {
    lifecycle: { title: string; items: [Card, Card, Card] }
    eyebrow: string
    title: string
    leadHtml: string
    cards: Record<PrivacyCardId, Card>
    tableCaption: string
    tableHeaders: [string, string, string]
    /** `leaves` overrides leavesYes / leavesNo for one provider. */
    providers: Record<ProviderId, { name: string, note?: string, where: string, leaves?: string }>
    leavesYes: string
    leavesNo: string
    shotAlt: string
    footnote: string
  }
  features: {
    eyebrow: string
    title: string
    lead: string
    items: Record<FeatureId, FeatureCopy>
  }
  offer: {
    eyebrow: string
    title: string
    lead: string
    benefits: Record<OfferBenefitId, { title: string, body: string }>
    download: string
    forMac: string
    plans: string
    web: string
    status: string
    trialTitle: string
    trial: string
    meterTitle: string
    meter: string
    /** Under the plans: fair use of cloud transcription, followed by fairUseLink to the Terms of service. */
    fairUse: string
    fairUseLink: string
    privacyTitle: string
    privacy: string
    detailsTitle: string
    details: string
    more: string
    after: string
    team: string
    lifecycle: string
    docs: string
    comparison: string
    feature: string
    local: string
    basics: string
    ivy: string
    asr: string
    asrUnlimited: string
    asrBasic: string
    storage: string
    /** Gigabyte unit in the comparison table ("GB", in French "Go"). */
    gb: string
    meetBot: string
    included: string
    notIncluded: string
    seat: string
    unit: string
  }
  pricing: {
    eyebrow: string
    title: string
    lead: string
    recommended: string
    /** Under the plan cards, with {seats} and {total} from the billing catalog. */
    note: string
    compareLink: string
    /** Phones only: a one-line Personal summary above the cards, with a link down to its card. */
    peek: { benefit: string, link: string }
    /** `period` may use {seats}; `points` may use {ivy} and {storage}, all from the billing catalog. */
    plans: Record<PlanId, { name: string, audience: string, period: string, points: string[], cta: string, trust: string }>
  }
  compare: {
    eyebrow: string
    title: string
    lead: string
    capability: string
    caption: string
    labels: { yes: string, partial: string, no: string, unknown: string }
    notStated: string
    footnote: string
    rows: Record<ComparisonRowId, { criterion: string, cells: [string, string, string, string, string, string] }>
  }
  faq: {
    eyebrow: string
    title: string
    leadHtml: string
    items: { question: string, answer: string }[]
  }
  changelog: {
    eyebrow: string
    title: string
    lead: string
    download: string
    github: string
    latest: string
    englishNote: string
    versions: string
    filterLabel: string
    filters: Record<'all' | 'features' | 'fixes', string>
    kinds: Record<'major' | 'minor' | 'patch', string>
    /** Plural forms by Intl.PluralRules category, with a {count} placeholder. */
    count: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }
    showOlder: string
    empty: string
  }
  /** /meeting-bot: the notice for people in a meeting recorded by the IndexOne Meet bot. */
  meetingBot: {
    eyebrow: string
    title: string
    lead: string
    /** Label above the bot's chat message, which is shown verbatim in English. */
    noticeLabel: string
    noticeNote: string
    cards: Record<MeetingBotCardId, Card>
    /** Link text for the IndexOne privacy policy, which is in Polish. */
    policyLink: string
    rights: { eyebrow: string, title: string, lead: string, items: Record<MeetingBotRightId, Card> }
    steps: { title: string, items: [Card, Card, Card] }
    note: string
  }
  cta: {
    title: string
    lead: string
    compare: string
    download: string
    signup: string
    legacyHtml: string
  }
  footer: {
    legalHtml: string
    legalNav: string
    terms: string
    privacyPolicy: string
    withdrawal: string
    dpa: string
    meetingBot: string
    contact: string
  }
}
