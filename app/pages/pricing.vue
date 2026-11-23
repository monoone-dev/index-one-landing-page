<script setup lang="ts">

const c = useContent()

usePageSeo({
  path: '/pricing',
  meta: () => c.value.meta.pricing,
  schema: () => [
    softwareApplicationSchema(),
    {
      '@type': 'FAQPage',
      'mainEntity': c.value.faq.items.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': stripTags(f.answer) },
      })),
    },
  ],
})
</script>

<template>
  <main id="main">
    <PricingSection :level="1" />
    <FaqSection />
    <CtaSection />
  </main>
</template>
