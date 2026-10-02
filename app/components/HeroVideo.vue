<script setup lang="ts">
const c = useContent()
const video = useTemplateRef('video')
const playing = ref(false)

async function play() {
  if (!video.value) return
  playing.value = true
  try {
    await video.value.play()
  }
  catch {
    playing.value = false
  }
}
</script>

<template>
  <div class="hero-video">
    <video
      id="hero-video"
      ref="video"
      poster="/assets/promo-poster.webp"
      width="1920"
      height="1080"
      preload="none"
      playsinline
      :controls="playing"
      :aria-label="c.hero.videoLabel"
    >
      <source src="/assets/promo-web.webm" type="video/webm">
      <source src="/assets/promo-web.mp4" type="video/mp4">
    </video>
    <button v-if="!playing" class="hero-video__play" type="button" aria-controls="hero-video" @click="play">
      <span class="hero-video__disc"><UIcon name="i-lucide-play" /></span>
      <span>{{ c.hero.play }}</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.hero-video {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--round-lg);
  background: var(--surface-solid);
  box-shadow: var(--shadow-md);

  video {
    display: block;
    width: 100%;
    height: auto;
    background: #000;
  }

  &__play {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    border: 0;
    cursor: pointer;
    color: #fff;
    font: inherit;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 14px rgb(0 0 0 / 0.8);
    background: linear-gradient(to top, rgb(4 4 8 / 0.55), rgb(4 4 8 / 0.12) 46%, rgb(4 4 8 / 0));
    transition: opacity 0.18s ease;

    &:hover {
      opacity: 0.88;
    }
  }

  &__disc {
    display: grid;
    place-items: center;
    width: 62px;
    height: 62px;
    padding-left: 4px;
    border-radius: var(--round-pill);
    color: var(--text-on-accent);
    background: var(--accent);
    box-shadow: 0 12px 34px rgb(0 0 0 / 0.55);
    font-size: 26px;
  }
}
</style>
