<script setup lang="ts">
import { plans } from '~/data/shared'

const c = useContent()

usePageSeo({
  path: '/pricing',
  meta: () => c.value.meta.pricing,
  schema: () => [
    softwareApplicationSchema({
      offers: plans.filter(p => p.available).map(p => ({
        '@type': 'Offer',
        'name': c.value.pricing.plans[p.id].name,
        'price': '0',
        'priceCurrency': 'USD',
        'description': c.value.pricing.plans[p.id].tagline,
      })),
    }),
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
    <CompetitionSection />
    <FaqSection />
    <CtaSection />
  </main>
</template>
