import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenisInstance } from '../../context/LenisContext'
import { scrollToSection } from '../../hooks/useLenis'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenisRef = useLenisInstance()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        scrollToSection(lenisRef, hash)
      }, 100)
      return () => window.clearTimeout(timer)
    }

    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    return undefined
  }, [pathname, hash, lenisRef])

  return null
}

export default ScrollToTop
