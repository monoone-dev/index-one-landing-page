import type { ComparisonRowId, DifferentiatorId, FeatureId, PlanId, PrivacyCardId, ProviderId } from '~~/i18n/content/types'
import { site } from './site'

export interface Screenshot {
  src: string
  width: number
  height: number
}

export type Support = 'yes' | 'partial' | 'no' | 'unknown' | 'info'

const shot = (name: string, width: number, height: number): Screenshot => ({ src: `/assets/screens/${name}.webp`, width, height })

export const trustIcons = ['i-lucide-lock', 'i-lucide-shield', 'i-lucide-eye-off', 'i-lucide-file-text'] as const

export const differentiators: { id: DifferentiatorId, icon: string, to: string, ivy?: boolean }[] = [
  { id: 'live', icon: 'i-lucide-message-circle-question', to: '/features#ivy', ivy: true },
  { id: 'capture', icon: 'i-lucide-audio-lines', to: '/features#transcription' },
  { id: 'receipts', icon: 'i-lucide-audio-waveform', to: '/features#receipts' },
  { id: 'security', icon: 'i-lucide-shield-check', to: '/privacy' },
  { id: 'locks', icon: 'i-lucide-fingerprint', to: '/privacy' },
  { id: 'markdown', icon: 'i-lucide-file-code', to: '/features#markdown' },
]

export const privacyCards: { id: PrivacyCardId, icon: string, tone?: 'safe', wide?: boolean }[] = [
  { id: 'offline', icon: 'i-lucide-eye-off', tone: 'safe' },
  { id: 'at-rest', icon: 'i-lucide-lock' },
  { id: 'gated', icon: 'i-lucide-shield-check' },
  { id: 'seals', icon: 'i-lucide-hard-drive-download' },
  { id: 'screen-share', icon: 'i-lucide-monitor-off' },
  { id: 'firewall', icon: 'i-lucide-shield-plus', tone: 'safe' },
  { id: 'update-check', icon: 'i-lucide-refresh-cw', wide: true },
]

export const providers: { id: ProviderId, leaves: boolean }[] = [
  { id: 'on-device', leaves: false },
  { id: 'ollama', leaves: false },
  { id: 'claude-code', leaves: true },
  { id: 'codex', leaves: true },
  { id: 'anthropic', leaves: true },
  { id: 'gateway', leaves: true },
]

export const privacyShot = shot('settings-privacy', 1600, 1111)

export const features: { id: FeatureId, shot: Screenshot }[] = [
  { id: 'workspaces', shot: shot('hero-spaces', 1600, 1000) },
  { id: 'dashboards', shot: shot('dashboard', 1600, 955) },
  { id: 'imports', shot: shot('settings-imports', 1600, 1000) },
  { id: 'ivy', shot: shot('record-ivy', 1600, 1000) },
  { id: 'ask', shot: shot('ask', 1600, 866) },
  { id: 'transcription', shot: shot('transcript', 1600, 1000) },
  { id: 'memory', shot: shot('ivy-graph', 1600, 1200) },
  { id: 'receipts', shot: shot('detail-receipts', 1600, 911) },
  { id: 'markdown', shot: shot('detail-note', 1600, 1111) },
  { id: 'notes', shot: shot('notes-editor-ivy-menu', 1600, 1000) },
  { id: 'shared-ivy', shot: shot('shared-ivys', 1600, 800) },
]

export const ivyFeatureIds: FeatureId[] = ['ivy', 'ask', 'notes', 'shared-ivy']

export const highlightedFeatureIds: FeatureId[] = ['ivy', 'receipts']

export const plans: { id: PlanId, available: boolean, href: string }[] = [
  { id: 'free', available: true, href: site.links.download },
  { id: 'pro', available: false, href: site.links.repo },
  { id: 'team', available: false, href: site.links.discussions },
]

export const competitors = ['IndexOne', 'Obsidian', 'Notion', 'Evernote', 'Bear', 'Amie'] as const

export const comparisonCheckedOn = '2026-10'

export const comparison: { id: ComparisonRowId, values: [Support, Support, Support, Support, Support, Support] }[] = [
  { id: 'capture', values: ['yes', 'partial', 'yes', 'yes', 'no', 'yes'] },
  { id: 'local-transcription', values: ['yes', 'no', 'no', 'no', 'no', 'no'] },
  { id: 'local-ai', values: ['yes', 'no', 'no', 'no', 'no', 'no'] },
  { id: 'ask-all', values: ['yes', 'no', 'yes', 'partial', 'no', 'partial'] },
  { id: 'local-data', values: ['yes', 'yes', 'no', 'no', 'yes', 'no'] },
  { id: 'markdown', values: ['yes', 'yes', 'no', 'no', 'no', 'unknown'] },
  { id: 'encryption', values: ['yes', 'partial', 'no', 'partial', 'partial', 'unknown'] },
  { id: 'platforms', values: ['info', 'info', 'info', 'info', 'info', 'info'] },
  { id: 'price', values: ['info', 'info', 'info', 'info', 'info', 'info'] },
]
