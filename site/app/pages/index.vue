<script setup lang="ts">
import { absoluteUrl } from '~/data/site'
import { differentiators, features } from '~/data/shared'

const c = useContent()

usePageSeo({
  path: '/',
  meta: () => c.value.meta.home,
  schema: () => [
    softwareApplicationSchema({
      description: c.value.meta.home.description,
      featureList: differentiators.map(d => c.value.unique.items[d.id].title),
      screenshot: features.slice(0, 4).map(f => ({
        '@type': 'ImageObject',
        'url': absoluteUrl(f.shot.src),
        'width': f.shot.width,
        'height': f.shot.height,
        'caption': c.value.features.items[f.id].alt,
      })),
    }),
  ],
})
</script>

<template>
  <main id="main">
    <HeroSection />
    <TrustStrip />
    <UniqueSection />
    <HowItWorks />
    <CtaSection />
  </main>
</template>
