import type { ShallowRef } from 'vue'
import type { SiteContent } from '~~/i18n/content/types'

const modules = import.meta.glob<{ default: SiteContent }>(['../../i18n/content/*.ts', '!../../i18n/content/types.ts'])

const loaders = Object.fromEntries(
  Object.entries(modules).map(([path, load]) => [path.split('/').pop()!.replace('.ts', ''), load]),
) as Record<string, () => Promise<{ default: SiteContent }>>

async function load(locale: string) {
  const loader = loaders[locale] ?? loaders.en!
  return (await loader()).default
}

export default defineNuxtPlugin({
  name: 'site-content',
  dependsOn: ['i18n:plugin'],
  async setup(nuxtApp): Promise<{ provide: { content: ShallowRef<SiteContent> } }> {
    const locale: string = (nuxtApp.$i18n as { locale: { value: string } }).locale.value
    const content: ShallowRef<SiteContent> = shallowRef(await load(locale))

    nuxtApp.hook('i18n:beforeLocaleSwitch', async ({ newLocale }) => {
      content.value = await load(newLocale)
    })

    return { provide: { content } }
  },
})
