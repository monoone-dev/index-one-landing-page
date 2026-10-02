<script setup lang="ts">
import { features } from '~/data/shared'

const c = useContent()

usePageSeo({
  path: '/features',
  meta: () => c.value.meta.features,
  schema: () => [softwareApplicationSchema({ featureList: features.map(f => c.value.features.items[f.id].title) })],
})
</script>

<template>
  <main id="main">
    <FeatureList :level="1" />
    <CtaSection />
  </main>
</template>
