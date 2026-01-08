import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import CursorFollower from './components/CursorFollower/CursorFollower'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('HOME')

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Only initialize Lenis if user doesn't prefer reduced motion
    if (prefersReducedMotion) {
      return
    }

    // Initialize Lenis smooth scroll with momentum
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (higher = slower, more weight)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function with momentum
      orientation: 'vertical', // Vertical scrolling
      gestureOrientation: 'vertical',
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1, // Mouse wheel sensitivity
      touchMultiplier: 2, // Touch scroll sensitivity
      infinite: false,
    })

    // Animation frame function for Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      lenis.destroy()
    }
  }, [])

  const renderPage = (navigate) => {
    switch (activePage) {
      case 'HOME':
        return <Home navigate={navigate} />
      case 'WORK':
        return <Work />
      case 'ABOUT':
        return <About />
      case 'CONTACT':
        return <Contact />
      default:
        return <Home navigate={navigate} />
    }
  }

  return (
    <div className="app">
      <CursorFollower />
      <Menu activeItem={activePage} onItemClick={setActivePage} />
      <div id="main-content">
        {renderPage(setActivePage)}
      </div>
      <Footer onNavigate={setActivePage} />
    </div>
  )
}

export default App
