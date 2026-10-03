import { absoluteUrl, site } from '~/data/site'

export interface PageSeo {
  path: string
  title: string
  description: string
  breadcrumb?: string
  schema?: Record<string, unknown>[]
}

export interface SeoInput {
  path: string
  meta: () => { title: string, description: string, breadcrumb?: string }
  schema?: () => Record<string, unknown>[]
}

export const stripTags = (html: string) => html.replace(/<[^>]+>/g, '')

export const organizationId = absoluteUrl('/#organization')
export const appId = absoluteUrl('/#app')

export function usePageSeo(input: SeoInput) {
  const localePath = useLocalePath()
  const c = useContent()
  const { locale } = useI18n()
  const image = absoluteUrl(site.ogImage)

  useSeoMeta({
    title: () => input.meta().title,
    description: () => input.meta().description,
    robots: 'index, follow, max-image-preview:large',
    author: site.organization,
    applicationName: site.name,
    ogType: 'website',
    ogSiteName: site.name,
    ogUrl: () => absoluteUrl(localePath(input.path)),
    ogTitle: () => input.meta().title,
    ogDescription: () => input.meta().description,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/png',
    ogImageAlt: () => c.value.meta.ogImageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: () => input.meta().title,
    twitterDescription: () => input.meta().description,
    twitterImage: image,
    twitterImageAlt: () => c.value.meta.ogImageAlt,
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
            '@graph': buildGraph({ ...page, path: input.path, schema: input.schema?.() }, url, locale.value, absoluteUrl(localePath('/'))),
          }),
        },
      ],
    }
  })
}

function buildGraph(page: PageSeo, url: string, language: string, homeUrl: string) {

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      'name': site.organization,
      'url': site.organizationUrl,
      'logo': absoluteUrl('/icon-512.png'),
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      'url': url,
      'name': page.title,
      'description': page.description,
      'inLanguage': language,
      'isPartOf': { '@type': 'WebSite', '@id': absoluteUrl('/#website'), 'name': site.name, 'url': absoluteUrl('/') },
      'about': { '@id': appId },
    },
    ...(page.schema ?? []),
  ]

  if (page.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': site.name, 'item': homeUrl },
        { '@type': 'ListItem', 'position': 2, 'name': page.breadcrumb, 'item': url },
      ],
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
    'downloadUrl': site.links.download,
    'releaseNotes': absoluteUrl('/changelog/'),
    'isAccessibleForFree': true,
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
    'publisher': { '@id': organizationId },
    ...extra,
  }
}
