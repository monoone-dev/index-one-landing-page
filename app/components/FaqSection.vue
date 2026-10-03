<script setup lang="ts">
defineProps<{ level?: 1 | 2 }>()

const c = useContent()
const items = computed(() => c.value.faq.items.map((f, i) => ({ label: f.question, content: f.answer, value: `faq-${i}` })))
</script>

<template>
  <section id="faq" class="section section--ruled" aria-labelledby="faq-title">
    <div class="wrap faq">
      <SectionHead id="faq-title" :level="level" :eyebrow="c.faq.eyebrow" :title="c.faq.title">
        <span v-html="c.faq.leadHtml" />
      </SectionHead>
      <UAccordion
        v-reveal
        :items="items"
        type="multiple"
        :unmount-on-hide="false"
        :ui="{ trigger: 'text-base font-semibold text-highlighted py-4', body: 'text-[15px] text-toned pb-5' }"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  max-width: 780px;

  :deep(.section-head a) {
    color: var(--accent-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
