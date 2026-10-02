<script setup lang="ts">
import { features } from '~/data/shared'

const props = defineProps<{ level?: 1 | 2 }>()
const c = useContent()
</script>

<template>
  <section id="features" class="section" aria-labelledby="features-title">
    <div class="wrap">
      <SectionHead id="features-title" :level="level" :eyebrow="c.features.eyebrow" :title="c.features.title">
        {{ c.features.lead }}
      </SectionHead>
      <FeatureRow v-for="(feature, i) in features" :key="feature.id" :feature-id="feature.id" :shot="feature.shot" :flip="i % 2 === 1" :heading="props.level === 1 ? 'h2' : 'h3'" />
    </div>
  </section>
</template>
