<script setup lang="ts">
const c = useContent()
const video = useTemplateRef<HTMLVideoElement>('video')
const reducedMotion = ref(false)
let observer: IntersectionObserver | undefined

// Muted loop that starts only once it scrolls into view and pauses when it leaves,
// so nothing is downloaded for visitors who never reach it.
onMounted(() => {
  const el = video.value
  if (!el) return
  reducedMotion.value = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value || !('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) el.play().catch(() => {})
    else if (!el.paused) el.pause()
  }, { threshold: 0.35 })
  observer.observe(el)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div v-reveal class="iphone">
    <figure class="iphone__frame">
      <video
        ref="video"
        class="iphone__video"
        width="1920"
        height="1080"
        muted
        loop
        playsinline
        preload="none"
        poster="/assets/promo-iphone-poster.webp"
        :controls="reducedMotion"
        :aria-label="c.home.showcase.iphone.videoLabel"
      >
        <source src="/assets/promo-iphone.webm" type="video/webm">
        <source src="/assets/promo-iphone.mp4" type="video/mp4">
      </video>
    </figure>
    <div class="iphone__text">
      <span class="eyebrow">{{ c.home.showcase.iphone.eyebrow }}</span>
      <h3>{{ c.home.showcase.iphone.title }}</h3>
      <p>{{ c.home.showcase.iphone.body }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.iphone {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
  margin-top: 96px;

  @include below(lg) {
    grid-template-columns: 1fr;
    gap: 36px;
    margin-top: 72px;
  }

  &__frame {
    margin: 0;
    overflow: hidden;
    border-radius: var(--radius);
    background: var(--surface-solid);
    box-shadow: 0 0 0 var(--gap) var(--glass-frame), var(--pop);

    @include below(lg) {
      order: 2;
    }
  }

  &__video {
    display: block;
    width: 100%;
    height: auto;
  }

  &__text {
    h3 {
      margin: 10px 0 14px;
      font-size: clamp(24px, 3vw, 32px);
      line-height: 1.15;
    }

    > p {
      color: var(--text-secondary);
      font-size: 16px;
    }
  }
}
</style>
