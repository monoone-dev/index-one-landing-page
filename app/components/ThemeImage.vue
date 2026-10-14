<script setup lang="ts">
type Mode = 'light' | 'dark'

// `priority` marks an above-the-fold image (the LCP candidate): fetched at once, not lazily.
const props = defineProps<{ dark: string, light: string, width: number, height: number, alt: string, priority?: boolean }>()
const colorMode = useColorMode()
const root = useTemplateRef('root')
const active = ref<Mode>()
const previous = ref<Mode>()
let revision = 0

async function switchTo(mode: Mode) {
  const request = ++revision
  previous.value = undefined
  if (mode === active.value) return
  const current = root.value?.querySelector<HTMLImageElement>(`img[data-mode="${active.value}"]`)
  if (current?.complete && current.naturalWidth) {
    const image = new Image()
    image.src = props[mode]
    try {
      await image.decode()
    }
    catch {
      return
    }
    if (request !== revision) return
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) previous.value = active.value
  }
  active.value = mode
}

onMounted(() => {
  active.value = document.documentElement.classList.contains('light') ? 'light' : 'dark'
})
watch(() => colorMode.value, (mode) => {
  if (active.value && (mode === 'light' || mode === 'dark')) void switchTo(mode)
})
onBeforeUnmount(() => { revision++ })
</script>

<template>
  <span ref="root" class="theme-image" :data-active="active">
    <img
      v-for="mode in (['dark', 'light'] as const)"
      :key="mode"
      :src="props[mode]"
      :data-mode="mode"
      :class="{ 'is-previous': previous === mode, 'is-entering': previous && active === mode }"
      :width="width"
      :height="height"
      :alt="alt"
      :aria-hidden="previous === mode ? true : undefined"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
      @animationend="previous = undefined"
    >
  </span>
</template>

<style lang="scss" scoped>
.theme-image {
  position: relative;
  display: block;

  img {
    display: none;
    width: 100%;
    height: auto;
  }

  &:not([data-active]) img[data-mode='dark'],
  &[data-active='dark'] img[data-mode='dark'],
  &[data-active='light'] img[data-mode='light'] {
    display: block;
  }

  img.is-previous {
    display: block;
    position: absolute;
    inset: 0;
  }

  img.is-entering {
    position: relative;
    z-index: 1;
    animation: media-enter 250ms ease;
  }
}

html.light .theme-image:not([data-active]) {
  img[data-mode='dark'] { display: none; }
  img[data-mode='light'] { display: block; }
}

@keyframes media-enter {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .theme-image img.is-entering { animation: none; }
  .theme-image img.is-previous { display: none; }
}
</style>
