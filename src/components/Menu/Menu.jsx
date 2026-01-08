import { useState } from 'react'
import './Menu.css'

function Menu({ activeItem, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ['HOME', 'WORK', 'ABOUT', 'CONTACT']

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onItemClick(item)
      setIsOpen(false)
    }
  }

  const handleMenuClick = (item) => {
    onItemClick(item)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleHamburgerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleMenu()
    }
  }

  return (
    <>
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        onKeyDown={handleHamburgerKeyDown}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <nav 
        className="menu-nav" 
        aria-label="Main navigation"
        id="desktop-menu"
      >
        {menuItems.map((item) => (
          <button
            key={item}
            className={`menu-link ${activeItem === item ? 'active' : ''}`}
            onClick={() => onItemClick(item)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            aria-current={activeItem === item ? 'page' : undefined}
            aria-label={`Navigate to ${item} page`}
          >
            {item}
          </button>
        ))}
      </nav>
      <nav
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        id="mobile-menu"
        aria-label="Main navigation"
      >
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}></div>
        <div className="mobile-menu-content">
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={`mobile-menu-link ${activeItem === item ? 'active' : ''}`}
              onClick={() => handleMenuClick(item)}
              onKeyDown={(e) => handleKeyDown(e, item)}
              aria-current={activeItem === item ? 'page' : undefined}
              aria-label={`Navigate to ${item} page`}
              style={{
                '--animation-delay': `${index * 0.1}s`
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Menu
