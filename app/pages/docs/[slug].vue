<script setup lang="ts">
import { loaders, toc } from '#user-docs'
import { appId, organizationId } from '~/composables/usePageSeo'
import { absoluteUrl, site } from '~/data/site'

defineI18nRoute({ locales: ['en'] })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: page } = await useAsyncData(() => `docs-${slug.value}`, async () => {
  const load = loaders[slug.value]
  if (!load) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  return load()
}, { watch: [slug] })

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const neighbours = computed(() => docsNeighbours(slug.value))
const path = computed(() => `/docs/${slug.value}/`)

usePageSeo({
  path: path.value,
  type: 'article',
  meta: () => ({
    title: `${page.value!.title} — IndexOne docs`,
    description: page.value!.description,
    breadcrumb: page.value!.title,
    trail: [{ name: 'Docs', path: '/docs/' }],
  }),
  image: () => {
    const shot = page.value?.shots[0]
    return shot && { src: shot.src, width: shot.width, height: shot.height, alt: shot.alt }
  },
  schema: () => {
    const p = page.value!
    const url = absoluteUrl(path.value)
    return [{
      '@type': 'TechArticle',
      '@id': `${url}#article`,
      'headline': p.title,
      'description': p.description,
      'url': url,
      'mainEntityOfPage': { '@id': `${url}#webpage` },
      'inLanguage': 'en',
      'articleSection': p.group,
      'keywords': p.keywords.join(', '),
      'dateModified': toc.updated,
      'proficiencyLevel': 'Beginner',
      'author': { '@id': organizationId },
      'publisher': { '@id': organizationId },
      'about': { '@id': appId },
      'isPartOf': { '@type': 'CollectionPage', '@id': `${absoluteUrl('/docs/')}#webpage`, 'name': 'IndexOne documentation', 'url': absoluteUrl('/docs/') },
      ...(p.shots.length && {
        image: p.shots.map(s => ({ '@type': 'ImageObject', 'url': absoluteUrl(s.src), 'width': s.width, 'height': s.height, 'caption': s.alt })),
      }),
      'version': toc.version,
    }]
  },
})

useHead({ meta: [{ property: 'article:modified_time', content: toc.updated }, { property: 'article:section', content: () => page.value?.group ?? '' }] })

// Links inside the page text that point at other docs pages stay inside the app.
async function follow(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const link = (event.target as HTMLElement).closest('a')
  const href = link?.getAttribute('href')
  if (!href || link?.target || !href.startsWith('/') || href.startsWith('//')) return
  if (href.startsWith('/assets/') || href.endsWith('.xml')) return
  event.preventDefault()
  await navigateTo(href)
}

/** The section being read, highlighted in "On this page". */
const active = ref('')
const body = useTemplateRef<HTMLElement>('body')
let observer: IntersectionObserver | null = null
watch([body, page], () => {
  observer?.disconnect()
  if (typeof IntersectionObserver === 'undefined' || !body.value) return
  active.value = page.value?.headings[0]?.id ?? ''
  observer = new IntersectionObserver((entries) => {
    const hit = entries.find(e => e.isIntersecting)
    if (hit) active.value = hit.target.id
  }, { rootMargin: '-88px 0px -70% 0px' })
  body.value.querySelectorAll('h2[id], h3[id]').forEach(el => observer?.observe(el))
}, { flush: 'post' })
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <main v-if="page" id="main" class="docs">
    <div class="docs__layout">
      <DocsSidebar :current="page.slug" />

      <article class="doc" aria-labelledby="doc-title">
        <nav class="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><NuxtLink to="/docs/">Docs</NuxtLink></li>
            <li aria-hidden="true">
              <UIcon name="i-lucide-chevron-right" class="size-3.5" />
            </li>
            <li><span>{{ page.group }}</span></li>
          </ol>
        </nav>

        <header class="doc__head">
          <h1 id="doc-title">
            {{ page.title }}
          </h1>
          <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's user-docs/*.md -->
          <p v-if="page.lede" class="doc__lede" v-html="page.lede" />
          <p class="doc__version">
            <UIcon name="i-lucide-badge-check" class="size-4 shrink-0" />
            <span>Checked against IndexOne <b>{{ toc.version }}</b>, released {{ docsVersionDate(toc.released) }}.</span>
          </p>
        </header>

        <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's user-docs/*.md -->
        <div ref="body" class="doc-prose" @click="follow" v-html="page.html" />

        <nav class="pager" aria-label="Previous and next page">
          <NuxtLink v-if="neighbours.prev" :to="`/docs/${neighbours.prev.slug}/`" class="pager__link island" rel="prev">
            <small><UIcon name="i-lucide-arrow-left" class="size-3.5" /> Previous</small>
            <span>{{ neighbours.prev.title }}</span>
          </NuxtLink>
          <span v-else />
          <NuxtLink v-if="neighbours.next" :to="`/docs/${neighbours.next.slug}/`" class="pager__link pager__link--next island" rel="next">
            <small>Next <UIcon name="i-lucide-arrow-right" class="size-3.5" /></small>
            <span>{{ neighbours.next.title }}</span>
          </NuxtLink>
        </nav>

        <p class="doc__help">
          Something missing or out of date?
          <a :href="site.links.discussions" target="_blank" rel="noopener">Tell us in GitHub Discussions</a>,
          or send a report from IndexOne with <b>Send feedback</b>.
        </p>
      </article>

      <aside v-if="page.headings.length > 1" class="toc" aria-labelledby="toc-title">
        <p id="toc-title" class="toc__title">
          On this page
        </p>
        <ol>
          <li v-for="h in page.headings" :key="h.id" :class="`toc__item--${h.depth}`">
            <a :href="`#${h.id}`" :aria-current="active === h.id ? 'location' : undefined">{{ h.text }}</a>
          </li>
        </ol>
      </aside>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.docs {
  padding: 40px 24px 80px;

  @include below(xs) {
    padding: 24px 16px 64px;
  }

  &__layout {
    display: grid;
    grid-template-columns: 15.5rem minmax(0, 1fr) 13rem;
    align-items: start;
    gap: 2.5rem;
    max-width: 82rem;
    margin-inline: auto;

    @media (max-width: 1180px) {
      grid-template-columns: 15rem minmax(0, 1fr);
      gap: 2rem;
    }

    @include below(lg) {
      grid-template-columns: minmax(0, 1fr);
      gap: 20px;
    }
  }
}

.doc {
  min-width: 0;
  max-width: 46rem;

  &__head {
    display: grid;
    gap: 12px;
    margin-bottom: 32px;

    h1 {
      margin: 0;
      font-size: clamp(30px, 4.2vw, 42px);
      line-height: 1.1;
      letter-spacing: -0.03em;
    }
  }

  &__lede {
    margin: 0;
    color: var(--text-secondary);
    font-size: clamp(17px, 1.9vw, 19px);
    line-height: 1.55;
  }

  &__version {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0 0;
    color: var(--text-muted);
    font-size: 13px;

    b {
      color: var(--text-primary);
      font-family: var(--font-mono);
      font-weight: 600;
    }
  }

  &__help {
    margin: 32px 0 0;
    color: var(--text-muted);
    font-size: 14px;

    a {
      color: var(--accent-text);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}

.crumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0 0 16px;
  padding: 0;
  color: var(--text-muted);
  font-size: 13px;
  list-style: none;

  a {
    color: var(--accent-text);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    display: flex;
    align-items: center;
  }
}

.pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 48px;

  @include below(xs) {
    grid-template-columns: 1fr;
  }

  &__link {
    display: grid;
    gap: 4px;
    padding: 14px 16px;
    color: var(--text-primary);
    font-weight: 600;
    text-decoration: none;
    transition: box-shadow 0.2s var(--ease);

    small {
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--text-muted);
      font-size: 12px;
      font-weight: 500;
    }

    &:hover {
      box-shadow: 0 0 0 1px var(--accent), var(--shadow-md);
    }

    &--next {
      text-align: right;

      small {
        justify-content: flex-end;
      }
    }
  }
}

.toc {
  position: sticky;
  top: 88px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;

  @media (max-width: 1180px) {
    display: none;
  }

  &__title {
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
  }

  ol {
    margin: 0;
    padding: 0;
    border-left: 1px solid var(--border-strong);
    list-style: none;
  }

  a {
    display: block;
    margin-left: -1px;
    padding: 4px 12px;
    border-left: 2px solid transparent;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.4;
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
    }

    &[aria-current='location'] {
      border-left-color: var(--accent);
      color: var(--accent-text);
    }
  }

  &__item--3 a {
    padding-left: 24px;
    font-size: 12.5px;
  }
}
</style>
