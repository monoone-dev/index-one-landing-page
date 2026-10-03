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
  | 'memory' | 'receipts' | 'markdown' | 'notes' | 'shared-ivy'

export type DifferentiatorId = 'live' | 'capture' | 'receipts' | 'security' | 'locks' | 'markdown'

export type PrivacyCardId = 'offline' | 'at-rest' | 'gated' | 'seals' | 'screen-share' | 'firewall' | 'update-check'

export type ProviderId = 'on-device' | 'ollama' | 'claude-code' | 'codex' | 'anthropic' | 'gateway'

export type PlanId = 'free' | 'pro' | 'team'

export type ComparisonRowId = 'capture' | 'local-transcription' | 'local-ai' | 'ask-all' | 'local-data' | 'markdown' | 'encryption' | 'platforms' | 'price'

export interface SiteContent {
  meta: {
    home: PageMeta
    features: PageMeta & { breadcrumb: string }
    privacy: PageMeta & { breadcrumb: string }
    pricing: PageMeta & { breadcrumb: string }
    changelog: PageMeta & { breadcrumb: string }
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
    badgeLocal: string
    badgeIvy: string
    badgeStar: string
    githubAria: string
    titleStrong: string
    titleSoft: string
    subHtml: string
    download: string
    privacyCta: string
    note: string
    videoLabel: string
    play: string
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
  how: {
    eyebrow: string
    title: string
    lead: string
    steps: [Card & { label: string }, Card & { label: string }, Card & { label: string }]
  }
  privacy: {
    eyebrow: string
    title: string
    leadHtml: string
    cards: Record<PrivacyCardId, Card>
    tableCaption: string
    tableHeaders: [string, string, string]
    providers: Record<ProviderId, { name: string, note?: string, where: string }>
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
  pricing: {
    eyebrow: string
    title: string
    lead: string
    plans: Record<PlanId, { name: string, badge: string, price: string, per?: string, tagline: string, points: string[], cta: string }>
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
  }
  cta: {
    title: string
    lead: string
    compare: string
    download: string
    github: string
    legacyHtml: string
  }
  footer: {
    legalHtml: string
  }
}
