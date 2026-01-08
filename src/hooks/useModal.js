import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Custom hook for modal functionality with scroll lock, Lenis integration, and proper scroll restoration
 */
export function useModal(isOpen, onClose, contentRef) {
  const scrollPositionRef = useRef(0)
  const lenisRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      // Cleanup when modal closes
      if (lenisRef.current) {
        if (lenisRef.current._rafId) {
          cancelAnimationFrame(lenisRef.current._rafId)
        }
        lenisRef.current.destroy()
        lenisRef.current = null
      }

      // Restore body scroll
      const savedScrollY = scrollPositionRef.current
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''

      // Restore scroll position - use the stored value
      requestAnimationFrame(() => {
        window.scrollTo({
          top: savedScrollY,
          behavior: 'instant'
        })
      })

      return
    }

    // Save scroll position before locking
    scrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

    // Lock body scroll
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPositionRef.current}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    // Focus management for accessibility
    const focusTimer = setTimeout(() => {
      if (contentRef?.current) {
        const firstFocusable = contentRef.current.querySelector('[tabindex="0"], button, a, input, textarea, select')
        if (firstFocusable) {
          firstFocusable.focus()
        }
      }
    }, 100)

    // Keyboard handler
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Initialize Lenis for modal content if content ref exists
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenisInitTimer = null
    let rafId = null

    if (!prefersReducedMotion) {
      lenisInitTimer = setTimeout(() => {
        if (!contentRef?.current || !isOpen) return

        // Create Lenis instance for modal content scrolling
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

        // Lenis animation frame
        function raf(time) {
          if (lenisRef.current && isOpen) {
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
      
      // Cleanup Lenis
      if (lenisRef.current) {
        if (lenisRef.current._rafId) {
          cancelAnimationFrame(lenisRef.current._rafId)
        }
        lenisRef.current.destroy()
        lenisRef.current = null
      }

      // Restore body scroll
      const savedScrollY = scrollPositionRef.current
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''

      // Restore scroll position
      requestAnimationFrame(() => {
        window.scrollTo({
          top: savedScrollY,
          behavior: 'instant'
        })
      })

      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, contentRef])

  return { scrollPosition: scrollPositionRef.current }
}

