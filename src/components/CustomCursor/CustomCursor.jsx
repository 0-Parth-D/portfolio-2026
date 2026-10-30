import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import './CustomCursor.css'

const CURSOR_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

function subscribe(onChange) {
  const mql = window.matchMedia(CURSOR_QUERY)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

const getSnapshot = () => window.matchMedia(CURSOR_QUERY).matches
const getServerSnapshot = () => false

function CustomCursor() {
  const dotRef = useRef(null)
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [enlarged, setEnlarged] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const visible = useRef(false)

  useEffect(() => {
    if (!enabled) return undefined

    document.body.classList.add('has-custom-cursor')

    const setVisible = (next) => {
      visible.current = next
      if (dotRef.current) dotRef.current.style.opacity = next ? '1' : '0'
    }

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      // Snap instead of easing in from wherever the dot last was (or from 0,0).
      if (!visible.current) {
        pos.current = { ...target.current }
        setVisible(true)
      }
    }

    const handleLeave = () => setVisible(false)

    const handleOver = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], .project-card, .project-modal__close, .project-modal__cta'
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
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      cancelAnimationFrame(rafId)
      document.body.classList.remove('has-custom-cursor')
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [enabled])

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
