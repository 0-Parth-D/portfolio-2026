import { useState, useEffect, useRef, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { portfolioData } from '../../data/portfolioData'
import { useLenisInstance } from '../../context/LenisContext'
import { scrollToSection } from '../../hooks/useLenis'
import { downloadResume, useResumeAvailable } from '../../utils/resume'
import './StickyNav.css'

const NAV_LINKS = [
  { label: 'about', to: '/about' },
  { label: 'work', to: '/work' },
  { label: 'contact', to: '#contact', isContact: true },
]

const HOME_SECTION_IDS = ['work', 'projects', 'about', 'contact']

function StickyNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lenisRef = useLenisInstance()
  const resumeAvailable = useResumeAvailable()
  const menuRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const sectionIds = isHome ? HOME_SECTION_IDS : ['contact']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    if (!isHome) {
      setActiveSection('')
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [isHome, location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const handleContactClick = useCallback(
    (e) => {
      e.preventDefault()
      setMenuOpen(false)
      scrollToSection(lenisRef, '#contact')
    },
    [lenisRef]
  )

  const handleResume = (e) => {
    e.preventDefault()
    if (resumeAvailable) downloadResume()
    else window.open('/resume.pdf', '_blank', 'noopener')
  }

  const isLinkActive = (to) => {
    if (to === '#contact') return activeSection === 'contact'
    if (to === '/about' || to === '/work') {
      return location.pathname === to || (isHome && activeSection === to.slice(1))
    }
    return false
  }

  const linkClass = (to) =>
    `sticky-nav__link${isLinkActive(to) ? ' sticky-nav__link--active' : ''}`

  return (
    <header className="sticky-nav" role="banner">
      <div className="sticky-nav__inner container">
        <NavLink to="/" className="sticky-nav__logo" end>
          {portfolioData.personal.displayName}
        </NavLink>

        <nav className="sticky-nav__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.isContact ? (
              <a
                key={link.to}
                href="#contact"
                className={linkClass(link.to)}
                onClick={handleContactClick}
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          type="button"
          className="sticky-nav__resume"
          onClick={handleResume}
          aria-label="Download resume"
        >
          Resume ↗
        </button>

        <button
          type="button"
          className="sticky-nav__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div
          className="sticky-nav__overlay"
          ref={menuRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="sticky-nav__mobile-links">
            {NAV_LINKS.map((link) =>
              link.isContact ? (
                <a
                  key={link.to}
                  href="#contact"
                  className="sticky-nav__mobile-link"
                  onClick={handleContactClick}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.to} to={link.to} className="sticky-nav__mobile-link">
                  {link.label}
                </NavLink>
              )
            )}
            <button type="button" className="sticky-nav__mobile-resume" onClick={handleResume}>
              Resume ↗
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default StickyNav
