import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'WORK', path: '/work' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
]

function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleHamburgerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((o) => !o)
    }
  }

  const navLinkClass = ({ isActive }) =>
    `menu-link${isActive ? ' active' : ''}`

  const mobileNavLinkClass = ({ isActive }) =>
    `mobile-menu-link${isActive ? ' active' : ''}`

  return (
    <>
      <button
        type="button"
        className="hamburger-button"
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={handleHamburgerKeyDown}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <nav className="menu-nav" aria-label="Main navigation" id="desktop-menu">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={navLinkClass}
            aria-label={`Navigate to ${item.label} page`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <nav
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        id="mobile-menu"
        aria-label="Main navigation"
      >
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          role="presentation"
        />
        <div className="mobile-menu-content">
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={mobileNavLinkClass}
              onClick={closeMenu}
              aria-label={`Navigate to ${item.label} page`}
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Menu
