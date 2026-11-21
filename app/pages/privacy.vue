<script setup lang="ts">
const c = useContent()

usePageSeo({
  path: '/privacy',
  meta: () => c.value.meta.privacy,
})
</script>

<template>
  <main id="main">
    <PrivacySection :level="1" />
    <OfferContext />
    <section class="section" aria-labelledby="lifecycle-title">
      <div class="wrap">
        <h2 id="lifecycle-title">{{ c.privacy.lifecycle.title }}</h2>
        <div class="lifecycle">
          <article v-for="item in c.privacy.lifecycle.items" :key="item.title" class="island">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>
    <CtaSection />
  </main>
</template>

<style scoped>
.lifecycle { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
article { padding: 24px; }
p { color: var(--text-secondary); margin-top: 12px; }
@media (max-width: 800px) { .lifecycle { grid-template-columns: 1fr; } }
</style>
