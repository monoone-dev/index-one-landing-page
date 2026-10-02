import type { Directive } from 'vue'

let observer: IntersectionObserver | undefined

function getObserver() {
  observer ??= new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-in')
      observer?.unobserve(entry.target)
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
  return observer
}

const reveal: Directive<HTMLElement> = {
  getSSRProps: () => ({}),
  mounted(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
