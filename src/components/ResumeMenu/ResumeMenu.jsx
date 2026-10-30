import { useEffect, useId, useRef, useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import './ResumeMenu.css'

/**
 * Disclosure menu with one real download link per resume.
 * variant: 'nav' (outline, small) | 'hero' (filled) | 'mobile' (large, stacked links, no toggle)
 */
function ResumeMenu({ variant = 'nav', label = 'Resume', onNavigate }) {
  const { resumes } = portfolioData.personal
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return undefined

    const handlePointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        rootRef.current?.querySelector('button')?.focus()
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const handleLinkClick = () => {
    setOpen(false)
    onNavigate?.()
  }

  if (variant === 'mobile') {
    return (
      <div className="resume-menu resume-menu--mobile">
        <span className="resume-menu__mobile-label mono-text">{label}</span>
        {resumes.map((resume) => (
          <a
            key={resume.id}
            href={resume.href}
            download
            className="resume-menu__mobile-link"
            onClick={handleLinkClick}
          >
            {resume.label} ↓
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={`resume-menu resume-menu--${variant}`} ref={rootRef}>
      <button
        type="button"
        className="resume-menu__toggle"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className="resume-menu__caret" aria-hidden="true">
          ▾
        </span>
      </button>
      <ul id={menuId} className="resume-menu__list" hidden={!open}>
        {resumes.map((resume) => (
          <li key={resume.id}>
            <a
              href={resume.href}
              download
              className="resume-menu__link"
              onClick={handleLinkClick}
            >
              <span>{resume.label}</span>
              <span className="resume-menu__ext mono-text">PDF ↓</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeMenu
