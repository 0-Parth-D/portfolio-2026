import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import './SkillsModal.css'

function SkillsModal({ isOpen, onClose, categoryTitle, skills }) {
  const modalContentRef = useRef(null)
  
  // Use the custom modal hook for scroll lock, Lenis, and scroll restoration
  useModal(isOpen, onClose, modalContentRef)

  if (!isOpen) return null

  return createPortal(
    <div 
      className="skills-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skills-modal-title"
    >
      <div 
        className="skills-modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalContentRef}
      >
        <div className="skills-modal-header">
          <h2 id="skills-modal-title" className="skills-modal-title">
            {categoryTitle}
          </h2>
          <button
            className="skills-modal-close"
            onClick={onClose}
            aria-label="Close modal"
            tabIndex={0}
          >
            ×
          </button>
        </div>
        
        <div className="skills-modal-body">
          <div className="skills-modal-tags">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag-modal">
                {skill}
              </span>
            ))}
          </div>
          <p className="skills-modal-count">
            Total: {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default SkillsModal

