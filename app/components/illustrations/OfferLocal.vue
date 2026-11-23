<script setup lang="ts">
// A Mac recording a call: two waveforms (you and everyone else), a transcript taking shape, and a
// green check for "free on your Mac". Decorative; the card text carries the meaning.
const me = [6, 10, 16, 9, 13, 18, 8, 5, 3, 2, 3, 2, 4, 3, 7, 14, 17, 11, 7, 4, 3, 2]
const others = [2, 3, 2, 3, 2, 4, 8, 15, 19, 13, 16, 10, 12, 6, 3, 2, 3, 2, 3, 2, 2, 3]
</script>

<template>
  <svg class="art" viewBox="0 0 320 160" aria-hidden="true" focusable="false">
    <rect x="68" y="16" width="184" height="114" rx="10" class="art__device" />
    <rect x="76" y="24" width="168" height="98" rx="5" class="art__screen" />
    <path d="M44 132h232a4 4 0 0 1-4 6H48a4 4 0 0 1-4-6z" class="art__device" />
    <circle cx="86" cy="33" r="2.5" class="art__dot" />
    <circle cx="94" cy="33" r="2.5" class="art__dot" />
    <circle cx="102" cy="33" r="2.5" class="art__dot" />
    <rect x="196" y="28" width="40" height="11" rx="5.5" class="art__device" />
    <circle cx="203" cy="33.5" r="2.5" class="art__live" />
    <rect x="209" y="32" width="21" height="3" rx="1.5" class="art__line" />
    <rect v-for="(h, i) in me" :key="`me-${i}`" :x="88 + i * 7" :y="58 - h" width="4" :height="h * 2" rx="2" class="art__accent" />
    <rect v-for="(h, i) in others" :key="`ot-${i}`" :x="88 + i * 7" :y="82 - h / 1.4" width="4" :height="h / 0.7" rx="2" class="art__ivy" />
    <rect x="88" y="102" width="98" height="4" rx="2" class="art__line" />
    <rect x="88" y="111" width="64" height="4" rx="2" class="art__line" />
    <circle cx="252" cy="22" r="15" class="art__badge" />
    <path d="M245 22.5l4.5 4.5 9-9" class="art__check" />
  </svg>
</template>
