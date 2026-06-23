import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Global Lenis smooth scroll — single instance for the page.
 * Respects prefers-reduced-motion.
 */
export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}

export function scrollToSection(lenisRef, target, offset = -80) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const el = typeof target === 'string' ? document.querySelector(target) : target

  if (!el) return

  if (prefersReducedMotion || !lenisRef?.current) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  lenisRef.current.scrollTo(el, { offset, duration: 1.2 })
}
