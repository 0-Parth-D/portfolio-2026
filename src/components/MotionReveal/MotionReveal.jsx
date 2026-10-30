import { useEffect, useRef } from 'react'
import './MotionReveal.css'

const STAGGER_SECONDS = 0.1

/**
 * Reveals its MotionItem descendants (fade + rise, staggered) the first time it scrolls
 * into view. Visibility is toggled with a class on the DOM node, not React state, so the
 * prerendered markup and the first client render stay identical.
 */
export function MotionReveal({ children, className, as = 'div', delay = 0 }) {
  const ref = useRef(null)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const ownItems = [...el.querySelectorAll('[data-reveal-item]')].filter(
      (item) => item.closest('[data-reveal]') === el
    )
    ownItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${delay + index * STAGGER_SECONDS}s`)
    })

    const show = () => el.classList.add('reveal--visible')
    // Keyboard focus must never land on an item that is still faded out.
    const showNow = () => {
      el.classList.add('reveal--instant')
      show()
    }
    el.addEventListener('focusin', showNow, { once: true })

    if (!('IntersectionObserver' in window)) {
      show()
      return () => el.removeEventListener('focusin', showNow)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
      },
      { rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      el.removeEventListener('focusin', showNow)
    }
  }, [delay])

  return (
    <Tag ref={ref} className={className} data-reveal="">
      {children}
    </Tag>
  )
}

export function MotionItem({ children, className, as = 'div', style }) {
  const Tag = as
  return (
    <Tag className={className} style={style} data-reveal-item="">
      {children}
    </Tag>
  )
}
