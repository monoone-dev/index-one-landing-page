import type { ShallowRef } from 'vue'
import type { SiteContent } from '~~/i18n/content/types'

export function useContent() {
  return useNuxtApp().$content as ShallowRef<SiteContent>
}

export function useLocalLink() {
  const localePath = useLocalePath()
  return (target: string) => {
    const [path = '/', hash] = target.split('#')
    return hash ? { path: localePath(path), hash: `#${hash}` } : localePath(path)
  }
}

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`))
}
