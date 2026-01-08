import { useEffect, useRef } from 'react'
import './CursorFollower.css'

function CursorFollower() {
  const cursorRef = useRef(null)
  const requestRef = useRef()

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    // If touch device, hide cursor and don't set up event listeners
    if (isTouchDevice) {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none'
      }
      return
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let cursorX = mouseX
    let cursorY = mouseY
    let isInitialized = false

    // Initialize cursor position
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorX}px`
      cursorRef.current.style.top = `${cursorY}px`
      cursorRef.current.style.opacity = '1'
    }

    const updateCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isInitialized) {
        cursorX = mouseX
        cursorY = mouseY
        isInitialized = true
      }
    }

    const animateCursor = () => {
      const ease = 0.15 // Controls lag amount (lower = more lag)
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      
      cursorX += dx * ease
      cursorY += dy * ease
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`
        cursorRef.current.style.top = `${cursorY}px`
      }
      
      requestRef.current = requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', updateCursor)
    requestRef.current = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return <div className="cursor-follower" ref={cursorRef} aria-hidden="true"></div>
}

export default CursorFollower

