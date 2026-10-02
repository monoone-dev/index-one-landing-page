<script setup lang="ts">
const c = useContent()
</script>

<template>
  <section class="section" aria-labelledby="how-title">
    <div class="wrap">
      <SectionHead id="how-title" :eyebrow="c.how.eyebrow" :title="c.how.title">
        {{ c.how.lead }}
      </SectionHead>
      <ol class="steps">
        <li v-for="(step, i) in c.how.steps" :key="step.label" v-reveal class="steps__item">
          <span class="steps__n">
            <BrandIcon v-if="i === 1" name="ivy" :tile="false" :size="18" />
            {{ step.label }}
          </span>
          <h3>{{ step.title }}</h3>
          <p v-html="step.body" />
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 28px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(md) {
    grid-template-columns: 1fr;
  }

  &__item {
    padding-top: 22px;
    border-top: 1px solid var(--border);

    &:first-child .steps__n {
      color: var(--live-text);
    }

    h3 {
      margin: 12px 0 8px;
      font-size: 20px;
    }

    p {
      color: var(--text-secondary);
      font-size: 15px;
    }
  }

  &__n {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 12.5px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--text-muted);
  }
}
</style>
