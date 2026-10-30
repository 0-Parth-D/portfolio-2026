import { useState, useEffect, useRef, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { portfolioData } from '../../data/portfolioData'
import ResumeMenu from '../ResumeMenu/ResumeMenu'
import './StickyNav.css'

const NAV_LINKS = [
  { label: 'about', to: '/about' },
  { label: 'work', to: '/work' },
  { label: 'contact', to: '/contact' },
]

const HOME_SECTION_FOR_LINK = { '/work': 'projects', '/about': 'about' }
const HOME_SECTION_IDS = Object.values(HOME_SECTION_FOR_LINK)

function StickyNav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // State is keyed by pathname so it resets on navigation without a setState-in-effect.
  const [menuOpenFor, setMenuOpenFor] = useState(null)
  const [visibleSection, setVisibleSection] = useState({ path: null, id: '' })
  const menuOpen = menuOpenFor === pathname
  const activeSection = visibleSection.path === pathname ? visibleSection.id : ''

  const menuRef = useRef(null)

  const closeMenu = useCallback(() => setMenuOpenFor(null), [])

  useEffect(() => {
    if (!isHome) return undefined
    const observers = []

    HOME_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisibleSection({ path: pathname, id })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHome, pathname])

  useEffect(() => {
    if (!menuOpen) return undefined
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen, closeMenu])

  const isLinkActive = (to) =>
    pathname === to ||
    pathname.startsWith(`${to}/`) ||
    (isHome && activeSection === HOME_SECTION_FOR_LINK[to])

  const linkClass = (to) =>
    `sticky-nav__link${isLinkActive(to) ? ' sticky-nav__link--active' : ''}`

  return (
    <header className="sticky-nav" role="banner">
      <div className="sticky-nav__inner container">
        <NavLink to="/" className="sticky-nav__logo" end>
          {portfolioData.personal.displayName}
        </NavLink>

        <nav className="sticky-nav__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sticky-nav__resume-slot">
          <ResumeMenu variant="nav" />
        </div>

        <button
          type="button"
          className="sticky-nav__hamburger"
          onClick={() => setMenuOpenFor(menuOpen ? null : pathname)}
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
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="sticky-nav__mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <ResumeMenu variant="mobile" onNavigate={closeMenu} />
          </nav>
        </div>
      )}
    </header>
  )
}

export default StickyNav
