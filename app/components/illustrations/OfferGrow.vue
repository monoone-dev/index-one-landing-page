<script setup lang="ts">
// Three columns that grow like the plans: room to spare, an Ivy spark and an open-ended
// transcription sign over the tallest. Decorative.
const id = useId()
</script>

<template>
  <svg class="art" viewBox="0 0 320 160" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient :id="`${id}-grow`" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" class="art__stop-a" />
        <stop offset="1" class="art__stop-b" />
      </linearGradient>
    </defs>
    <line x1="56" y1="138" x2="264" y2="138" class="art__ground" />

    <rect x="76" y="104" width="48" height="34" rx="6" class="art__panel" />
    <line x1="76" y1="121" x2="124" y2="121" class="art__ground" style="stroke-width: 1" />

    <rect x="136" y="72" width="48" height="66" rx="6" class="art__tint-strong" />
    <line x1="136" y1="94" x2="184" y2="94" class="art__divider" />
    <line x1="136" y1="116" x2="184" y2="116" class="art__divider" />

    <rect x="196" y="40" width="48" height="98" rx="6" :fill="`url(#${id}-grow)`" />
    <line x1="196" y1="62" x2="244" y2="62" class="art__divider" />
    <line x1="196" y1="84" x2="244" y2="84" class="art__divider" />
    <line x1="196" y1="106" x2="244" y2="106" class="art__divider" />

    <path d="M160 46l2.6 5.9 5.9 2.6-5.9 2.6-2.6 5.9-2.6-5.9-5.9-2.6 5.9-2.6z" class="art__ivy" />
    <path d="M220 22c-3-4-6-6-9-6a6 6 0 0 0 0 12c3 0 6-2 9-6s6-6 9-6a6 6 0 0 1 0 12c-3 0-6-2-9-6z" class="art__stroke" />
    <circle cx="100" cy="90" r="9" class="art__badge" />
    <path d="M96 90.5l3 3 5-6" class="art__check" style="stroke-width: 2" />
  </svg>
</template>
