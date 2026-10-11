<script setup lang="ts">
type Mode = 'light' | 'dark'

const c = useContent()
const colorMode = useColorMode()
const players: (HTMLVideoElement | null)[] = [null, null]
const loaded: (Mode | undefined)[] = []
const front = ref(0)
const previous = ref<number>()
const started = ref(false)
const posterVisible = ref(true)
let pending: AbortController | undefined
let releaseTimer: ReturnType<typeof setTimeout> | undefined
let disposed = false

function release(index: number) {
  const video = players[index]
  if (!video) return
  video.pause()
  video.removeAttribute('src')
  video.load()
  loaded[index] = undefined
}

function load(index: number, mode: Mode) {
  const video = players[index]!
  const suffix = mode === 'light' ? '-light' : ''
  const extension = video.canPlayType('video/webm; codecs="vp9"') ? 'webm' : 'mp4'
  loaded[index] = mode
  video.src = `/assets/promo-web${suffix}.${extension}`
  video.load()
  return video
}

function waitFor(video: HTMLVideoElement, event: string, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timeout)
      video.removeEventListener(event, success)
      video.removeEventListener('error', failure)
      signal.removeEventListener('abort', failure)
    }
    const success = () => { cleanup(); resolve() }
    const failure = () => { cleanup(); reject(new Error('Media unavailable')) }
    const timeout = setTimeout(failure, 15000)
    video.addEventListener(event, success, { once: true })
    video.addEventListener('error', failure, { once: true })
    signal.addEventListener('abort', failure, { once: true })
    if (signal.aborted) failure()
  })
}

async function play() {
  if (started.value) return
  const mode = document.documentElement.classList.contains('light') ? 'light' : 'dark'
  started.value = true
  const video = load(front.value, mode)
  try {
    await video.play()
    if (!disposed) posterVisible.value = false
  }
  catch {
    if (!disposed && !pending) {
      started.value = false
      release(front.value)
    }
  }
}

async function switchTo(mode: Mode) {
  pending?.abort()
  clearTimeout(releaseTimer)
  previous.value = undefined
  const from = front.value
  const to = 1 - from
  release(to)
  pending = undefined
  if (loaded[from] === mode) return
  const controller = new AbortController()
  pending = controller
  const current = players[from]!
  const next = players[to]!
  let resume = false
  try {
    const ready = waitFor(next, 'loadeddata', controller.signal)
    load(to, mode)
    await ready
    if (controller.signal.aborted) return
    next.volume = current.volume
    next.muted = current.muted
    next.playbackRate = current.playbackRate
    resume = !current.paused
    current.pause()
    const time = Math.min(current.currentTime, Math.max(0, next.duration - 0.05))
    if (time > 0) {
      const sought = waitFor(next, 'seeked', controller.signal)
      next.currentTime = time
      await sought
    }
    if (controller.signal.aborted) return
    if (resume) await next.play()
    if (controller.signal.aborted) return
    posterVisible.value = false
    front.value = to
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) release(from)
    else {
      previous.value = from
      releaseTimer = setTimeout(() => {
        previous.value = undefined
        release(from)
      }, 250)
    }
  }
  catch {
    if (!controller.signal.aborted) release(to)
  }
  finally {
    if (resume && front.value === from && !disposed) {
      // Keep the original player usable if loading or seeking its replacement fails.
      await current.play().catch(() => {})
    }
    if (pending === controller) pending = undefined
  }
}

watch(() => colorMode.value, (mode) => {
  if (started.value && (mode === 'light' || mode === 'dark')) void switchTo(mode)
})

onBeforeUnmount(() => {
  disposed = true
  pending?.abort()
  clearTimeout(releaseTimer)
  players.forEach((_, index) => release(index))
})
</script>

<template>
  <div class="hero-video">
    <video
      v-for="index in [0, 1]"
      :id="index === front ? 'hero-video' : undefined"
      :key="index"
      :ref="el => { players[index] = el as HTMLVideoElement | null }"
      class="hero-video__player"
      :class="{ 'is-front': index === front, 'is-previous': index === previous, 'is-entering': previous !== undefined && index === front }"
      width="1920"
      height="1080"
      preload="none"
      playsinline
      :controls="started && index === front"
      :aria-hidden="index !== front ? true : undefined"
      :tabindex="index === front ? undefined : -1"
      :aria-label="c.hero.videoLabel"
    />
    <ThemeImage
      v-if="posterVisible"
      class="hero-video__poster"
      dark="/assets/promo-poster.webp"
      light="/assets/promo-poster-light.webp"
      :width="1920"
      :height="1080"
      alt=""
      aria-hidden="true"
    />
    <button v-if="!started" class="hero-video__play" type="button" aria-controls="hero-video" @click="play">
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

  &__player,
  &__poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  &__player {
    opacity: 0;
    pointer-events: none;

    &:first-child {
      position: relative;
      display: block;
      height: auto;
    }

    &.is-front {
      opacity: 1;
      z-index: 1;
      pointer-events: auto;
    }

    &.is-previous { opacity: 1; }
    &.is-entering { animation: video-enter 250ms ease; }
  }

  &__poster { z-index: 2; }

  &__play {
    position: absolute;
    inset: 0;
    z-index: 3;
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

@keyframes video-enter {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-video__player.is-entering { animation: none; }
  .hero-video__player.is-previous { opacity: 0; }
}
</style>
