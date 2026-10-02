<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  eyebrow: string
  title: string
  tone?: 'safe'
  level?: 1 | 2
}>(), { level: 2 })
</script>

<template>
  <header v-reveal class="section-head" :class="{ 'section-head--page': level === 1 }">
    <span class="eyebrow" :class="{ 'eyebrow--safe': tone === 'safe' }">{{ eyebrow }}</span>
    <component :is="`h${level}`" :id="id">{{ title }}</component>
    <p><slot /></p>
  </header>
</template>
