import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusableElements(container) {
  if (!container) return []
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
    if (el.getAttribute('aria-hidden') === 'true') return false
    const rect = el.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0
  })
}

/**
 * Modal: scroll lock, optional Lenis on content, Escape, focus trap, restore focus.
 */
export function useModal(isOpen, onClose, contentRef) {
  const scrollPositionRef = useRef(0)
  const lenisRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    scrollPositionRef.current =
      window.scrollY || window.pageYOffset || document.documentElement.scrollTop

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPositionRef.current}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab' || !contentRef?.current) return

      const items = getFocusableElements(contentRef.current)
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const inside = contentRef.current.contains(document.activeElement)

      if (e.shiftKey) {
        if (!inside || document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (!inside || document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const focusTimer = setTimeout(() => {
      const items = getFocusableElements(contentRef?.current)
      if (items.length > 0) items[0].focus()
    }, 100)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenisInitTimer = null
    let rafId = null

    if (!prefersReducedMotion) {
      lenisInitTimer = setTimeout(() => {
        if (!contentRef?.current || !isOpen) return

        const modalLenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
          wrapper: contentRef.current,
          content: contentRef.current,
        })

        lenisRef.current = modalLenis

        function raf(time) {
          if (lenisRef.current) {
            lenisRef.current.raf(time)
            rafId = requestAnimationFrame(raf)
          }
        }

        rafId = requestAnimationFrame(raf)
        lenisRef.current._rafId = rafId
      }, 150)
    }

    return () => {
      clearTimeout(focusTimer)
      if (lenisInitTimer) clearTimeout(lenisInitTimer)

      if (lenisRef.current) {
        if (lenisRef.current._rafId) {
          cancelAnimationFrame(lenisRef.current._rafId)
        }
        lenisRef.current.destroy()
        lenisRef.current = null
      }

      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''

      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'instant',
        })
      })

      document.removeEventListener('keydown', handleKeyDown)

      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        try {
          previousActiveElement.focus()
        } catch {
          /* ignore focus errors from detached nodes */
        }
      }
    }
  }, [isOpen, onClose, contentRef])
}
