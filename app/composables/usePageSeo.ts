import latest from '#release-latest'
import { absoluteUrl, site } from '~/data/site'

export interface Crumb {
  name: string
  path: string
}

export interface PageSeo {
  path: string
  title: string
  description: string
  breadcrumb?: string
  /** Breadcrumbs between the home page and this page, for pages deeper than one level. */
  trail?: Crumb[]
  schema?: Record<string, unknown>[]
}

export interface SeoInput {
  path: string
  meta: () => { title: string, description: string, breadcrumb?: string, trail?: Crumb[] }
  schema?: () => Record<string, unknown>[]
  /** 'article' for documentation pages; everything else is a 'website' page. */
  type?: 'website' | 'article'
  /** A page-specific share image; the site's Open Graph image otherwise. */
  image?: () => { src: string, width: number, height: number, alt: string } | undefined
}

export const stripTags = (html: string) => html.replace(/<[^>]+>/g, '')

export const organizationId = absoluteUrl('/#organization')
export const appId = absoluteUrl('/#app')

export function usePageSeo(input: SeoInput) {
  const localePath = useLocalePath()
  const c = useContent()
  const { locale } = useI18n()
  const shareImage = () => input.image?.()
  const image = () => absoluteUrl(shareImage()?.src ?? site.ogImage)

  useSeoMeta({
    title: () => input.meta().title,
    description: () => input.meta().description,
    robots: 'index, follow, max-image-preview:large',
    author: site.organization,
    applicationName: site.name,
    ogType: input.type ?? 'website',
    ogSiteName: site.name,
    ogUrl: () => absoluteUrl(localePath(input.path)),
    ogTitle: () => input.meta().title,
    ogDescription: () => input.meta().description,
    ogImage: image,
    ogImageWidth: () => shareImage()?.width ?? 1200,
    ogImageHeight: () => shareImage()?.height ?? 630,
    ogImageType: () => (shareImage() ? 'image/webp' : 'image/png'),
    ogImageAlt: () => shareImage()?.alt ?? c.value.meta.ogImageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: () => input.meta().title,
    twitterDescription: () => input.meta().description,
    twitterImage: image,
    twitterImageAlt: () => shareImage()?.alt ?? c.value.meta.ogImageAlt,
  })

  useHead(() => {
    const page = input.meta()
    const url = absoluteUrl(localePath(input.path))
    return {
      script: [
        {
          key: 'ld-json',
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': buildGraph({ ...page, path: input.path, schema: input.schema?.() }, url, locale.value, absoluteUrl(localePath('/')), absoluteUrl),
          }),
        },
      ],
    }
  })
}

function buildGraph(page: PageSeo, url: string, language: string, homeUrl: string, toUrl: (path: string) => string) {

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      'name': site.organization,
      'url': site.organizationUrl,
      'logo': absoluteUrl('/icon-512.png'),
      'sameAs': [site.links.repo],
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      'url': url,
      'name': page.title,
      'description': page.description,
      'inLanguage': language,
      'isPartOf': { '@id': absoluteUrl('/#website') },
      'about': { '@id': appId },
      'publisher': { '@id': organizationId },
      ...(page.breadcrumb && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      'name': site.name,
      'url': absoluteUrl('/'),
      'description': site.description,
      'publisher': { '@id': organizationId },
      'inLanguage': ['en-US', 'pl-PL', 'es-ES', 'it-IT', 'fr-FR', 'pt-BR', 'de-DE', 'zh-CN', 'ja-JP'],
    },
    ...(page.schema ?? []),
  ]

  if (page.breadcrumb) {
    const crumbs = [
      { name: site.name, item: homeUrl },
      ...(page.trail ?? []).map(c => ({ name: c.name, item: toUrl(c.path) })),
      { name: page.breadcrumb, item: url },
    ]
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      'itemListElement': crumbs.map((c, i) => ({ '@type': 'ListItem', 'position': i + 1, 'name': c.name, 'item': c.item })),
    })
  }

  return graph
}

export function softwareApplicationSchema(extra: Record<string, unknown> = {}) {
  return {
    '@type': 'SoftwareApplication',
    '@id': appId,
    'name': site.name,
    'description': site.description,
    'url': absoluteUrl('/'),
    'image': absoluteUrl(site.ogImage),
    'applicationCategory': 'BusinessApplication',
    'applicationSubCategory': 'Meeting notes and transcription',
    'operatingSystem': `macOS ${site.minMacOS} or later`,
    'processorRequirements': 'Apple Silicon (M1 or later)',
    'downloadUrl': site.links.download,
    'softwareVersion': latest.tag.slice(1),
    'datePublished': latest.date,
    'dateModified': latest.date,
    'releaseNotes': absoluteUrl('/changelog/'),
    'softwareHelp': { '@type': 'CreativeWork', 'name': `${site.name} documentation`, 'url': absoluteUrl('/docs/') },
    'isAccessibleForFree': true,
    'publisher': { '@id': organizationId },
    ...extra,
  }
}
