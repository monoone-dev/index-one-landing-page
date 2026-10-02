<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: 'ivy' | 'index-one'
  size?: number
  tile?: boolean
  label?: string
}>(), { size: 32, tile: true })

const uid = useId()
const id = (part: string) => `${uid}-${part}`
const url = (part: string) => `url(#${id(part)})`

const viewBox = computed(() => {
  if (props.name === 'ivy') return props.tile ? '64 64 384 384' : '136 136 240 240'
  return props.tile ? '106.5 92 1039 1039' : '306 295 640 640'
})
</script>

<template>
  <svg
    class="brand-icon"
    :class="{ 'brand-icon--tile': tile }"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    focusable="false"
  >
    <template v-if="name === 'ivy'">
      <defs>
        <linearGradient :id="id('tile')" x1="100" y1="64" x2="420" y2="448" gradientUnits="userSpaceOnUse">
          <stop style="stop-color: var(--icon-tile-from)" />
          <stop offset="1" style="stop-color: var(--icon-tile-to)" />
        </linearGradient>
        <linearGradient :id="id('top')" x1="501" y1="306" x2="829" y2="565" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0066FF" />
          <stop offset=".42" stop-color="#60A5FA" />
          <stop offset=".77" stop-color="#A5DCFB" />
          <stop offset="1" stop-color="#D9F3FF" stop-opacity=".84" />
        </linearGradient>
        <linearGradient :id="id('left')" x1="426" y1="778" x2="561" y2="481" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0064FF" />
          <stop offset=".4" stop-color="#2588FF" />
          <stop offset="1" stop-color="#A6D9FF" stop-opacity=".9" />
        </linearGradient>
        <linearGradient :id="id('right')" x1="677" y1="598" x2="917" y2="759" gradientUnits="userSpaceOnUse">
          <stop stop-color="#7DD3FC" stop-opacity=".94" />
          <stop offset=".52" stop-color="#A9DDFB" stop-opacity=".88" />
          <stop offset="1" stop-color="#D4EBFF" stop-opacity=".82" />
        </linearGradient>
        <linearGradient :id="id('center')" x1="560" y1="477" x2="669" y2="677" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EFF8FF" stop-opacity=".8" />
          <stop offset="1" stop-color="#BFDBFE" stop-opacity=".52" />
        </linearGradient>
        <linearGradient :id="id('rear')" x1="481" y1="388" x2="485" y2="503" gradientUnits="userSpaceOnUse">
          <stop stop-color="#60A5FA" stop-opacity=".78" />
          <stop offset="1" stop-color="#BAE6FD" stop-opacity=".56" />
        </linearGradient>
        <linearGradient :id="id('fold')" x1="600" y1="720" x2="687" y2="785" gradientUnits="userSpaceOnUse">
          <stop stop-color="#7DC4FB" stop-opacity=".72" />
          <stop offset="1" stop-color="#D3EEFF" stop-opacity=".58" />
        </linearGradient>
      </defs>
      <template v-if="tile">
        <path :fill="url('tile')" d="M184 64H328C405 64 448 107 448 184V328C448 405 405 448 328 448H184C107 448 64 405 64 328V184C64 107 107 64 184 64Z" />
        <path class="brand-icon__edge" stroke-width="1" d="M184 64.5H328C404.7 64.5 447.5 107.3 447.5 184V328C447.5 404.7 404.7 447.5 328 447.5H184C107.3 447.5 64.5 404.7 64.5 328V184C64.5 107.3 107.3 64.5 184 64.5Z" />
      </template>
      <g transform="translate(256 256) scale(.38) translate(-628.5 -530.5)">
        <path :fill="url('rear')" d="M484 376C477 422 460 462 435 500C464 481 494 470 529 473C502 449 482 422 484 376Z" />
        <path :fill="url('top')" d="M484 376C494 306 552 249 626 249C695 247 750 295 769 357C786 413 800 465 834 510C853 536 878 560 902 584C875 563 839 550 801 539C698 511 598 474 529 473C500 447 482 417 484 376Z" />
        <path :fill="url('left')" d="M529 473C493 470 463 480 435 500C374 540 322 592 323 667C322 743 376 805 449 805C493 806 536 781 578 748C599 732 617 714 634 697C617 655 604 606 587 564C571 524 552 491 529 473Z" />
        <path :fill="url('center')" d="M529 473C598 474 698 511 801 539C752 562 696 635 634 697C617 655 604 606 587 564C571 524 552 491 529 473Z" />
        <path :fill="url('fold')" d="M578 748C599 732 617 714 634 697C649 734 668 764 697 784C659 764 619 755 578 748Z" />
        <path :fill="url('right')" d="M634 697C696 635 752 562 801 539C839 550 875 563 902 584C924 606 934 636 934 667C934 747 868 812 786 812C752 812 722 802 697 784C668 764 649 734 634 697Z" />
        <path d="M435 500C463 480 493 470 529 473C598 474 698 511 801 539C839 550 875 563 902 584M529 473C552 491 571 524 587 564C604 606 617 655 634 697C649 734 668 764 697 784M578 748C599 732 617 714 634 697C696 635 752 562 801 539" stroke="#FFFFFF" stroke-opacity=".68" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </template>

    <template v-else>
      <defs>
        <linearGradient :id="id('tile')" x1="0" y1="0" x2="1" y2="1">
          <stop style="stop-color: var(--icon-tile-from)" />
          <stop offset="1" style="stop-color: var(--icon-tile-to)" />
        </linearGradient>
        <linearGradient :id="id('rear')" gradientUnits="userSpaceOnUse" x1="587" y1="300" x2="838" y2="465">
          <stop stop-color="#258aff" />
          <stop offset=".52" stop-color="#acd3ff" />
          <stop offset="1" stop-color="#eff7ff" />
        </linearGradient>
        <linearGradient :id="id('rolled')" gradientUnits="userSpaceOnUse" x1="351" y1="493" x2="661" y2="353">
          <stop stop-color="#098aff" />
          <stop offset="1" stop-color="#0862f6" />
        </linearGradient>
        <linearGradient :id="id('left')" gradientUnits="userSpaceOnUse" x1="366" y1="533" x2="658" y2="761">
          <stop stop-color="#c6e9fb" />
          <stop offset=".31" stop-color="#4da7fa" />
          <stop offset=".68" stop-color="#1c78fc" />
          <stop offset="1" stop-color="#0348ed" />
        </linearGradient>
        <linearGradient :id="id('right')" gradientUnits="userSpaceOnUse" x1="636" y1="620" x2="907" y2="554">
          <stop stop-color="#a9cfff" />
          <stop offset=".58" stop-color="#d6eaff" />
          <stop offset="1" stop-color="#f5faff" />
        </linearGradient>
      </defs>
      <template v-if="tile">
        <path :fill="url('tile')" d="M378 92H873C1045 92 1143 197 1143 362V860C1143 1035 1048 1131 874 1131H379C200 1131 109 1037 109 861V364C109 198 204 92 378 92Z" />
        <path class="brand-icon__edge" stroke-width="3" d="M378 93.5H873C1044 93.5 1141.5 198 1141.5 362V860C1141.5 1034 1047 1129.5 874 1129.5H379C201 1129.5 110.5 1036 110.5 861V364C110.5 199 205 93.5 378 93.5Z" />
      </template>
      <g transform="translate(-3.5 93.5)">
        <path :fill="url('rear')" d="M345 540V498C345 467 359 443 386 426L743 220C776 201 809 219 809 258V482L661 379V823H406C372 823 345 797 345 763Z" />
        <path :fill="url('rolled')" d="M345 541V496C345 465 359 442 386 426L540 337C576 329 608 334 630 348C651 362 661 386 661 417L661 823H406C372 823 345 797 345 763Z" />
        <path :fill="url('right')" d="M635 353 882 534C903 550 914 570 914 599V754C914 797 887 823 844 823H661V417C661 389 653 369 635 353Z" />
        <path :fill="url('left')" d="M345 541C350 535 357 530 368 523L595 383C617 369 638 366 654 379C659 390 661 403 661 417V823H406C372 823 345 797 345 763Z" />
        <path d="M345 541C350 535 357 530 368 523L595 383" stroke="#e3f5ff" stroke-width="1.3" opacity=".8" />
        <path d="M635 353 882 534C903 550 914 570 914 599V754C914 797 887 823 844 823H406" stroke="#ffffff" stroke-width="1.6" opacity=".9" />
        <path d="M661 417V823" stroke="#d9ecff" stroke-width="1.3" opacity=".8" />
      </g>
    </template>
  </svg>
</template>

<style lang="scss" scoped>
.brand-icon {
  display: inline-block;
  flex: none;
  vertical-align: middle;

  &--tile {
    filter: var(--icon-shadow);
  }

  &__edge {
    stroke: var(--icon-edge);
  }
}
</style>
