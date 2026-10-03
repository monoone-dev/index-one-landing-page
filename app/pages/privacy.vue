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
    <CtaSection />
  </main>
</template>
