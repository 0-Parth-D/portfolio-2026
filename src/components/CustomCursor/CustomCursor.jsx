import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [enlarged, setEnlarged] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (prefersReducedMotion || !isFinePointer) return undefined

    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const handleOver = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], .project-card, .sticky-nav__resume, .project-modal__close, .project-modal__cta'
      )
      setEnlarged(!!interactive)
    }

    let rafId
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2
      pos.current.y += (target.current.y - pos.current.y) * 0.2
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)

    return () => {
      cancelAnimationFrame(rafId)
      document.body.classList.remove('has-custom-cursor')
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className={`custom-cursor${enlarged ? ' custom-cursor--enlarged' : ''}`}
      aria-hidden="true"
    />
  )
}

export default CustomCursor
