<script setup lang="ts">
withDefaults(defineProps<{ showStatus?: boolean }>(), { showStatus: true })
const c = useContent()
</script>

<template>
  <section class="section" aria-labelledby="offer-context">
    <div class="wrap">
      <h2 id="offer-context">{{ c.pricing.lead }}</h2>
      <div class="offer-context">
        <article v-for="part in ['trial', 'meter', 'privacy'] as const" :key="part" class="island">
          <h3>{{ c.offer[`${part}Title`] }}</h3>
          <p>{{ c.offer[part] }}</p>
        </article>
      </div>
      <p v-if="showStatus" class="offer-note">{{ c.offer.status }}</p>
    </div>
  </section>
</template>

<style scoped>
.offer-context { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
article { padding: 24px; }
p { color: var(--text-secondary); margin-top: 12px; }
.offer-note { font-size: 14px; }
@media (max-width: 800px) { .offer-context { grid-template-columns: 1fr; } }
</style>
