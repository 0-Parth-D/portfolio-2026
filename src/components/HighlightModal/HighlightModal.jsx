import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import './HighlightModal.css'

function HighlightModal({ isOpen, onClose, highlight }) {
  const modalContentRef = useRef(null)
  
  // Use the custom modal hook for scroll lock, Lenis, and scroll restoration
  useModal(isOpen, onClose, modalContentRef)

  if (!isOpen || !highlight) return null

  return createPortal(
    <div 
      className="highlight-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="highlight-modal-title"
    >
      <div 
        className="highlight-modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalContentRef}
      >
        <div className="highlight-modal-header">
          <div className="highlight-modal-header-content">
            <h2 id="highlight-modal-title" className="highlight-modal-title">
              {highlight.title}
            </h2>
            {highlight.date && (
              <span className="highlight-modal-date">{highlight.date}</span>
            )}
          </div>
          <button
            className="highlight-modal-close"
            onClick={onClose}
            aria-label="Close modal"
            tabIndex={0}
          >
            ×
          </button>
        </div>
        
        <div className="highlight-modal-body">
          {highlight.issuer && (
            <div className="highlight-modal-info">
              <span className="highlight-modal-label">Issuer:</span>
              <span className="highlight-modal-value">{highlight.issuer}</span>
            </div>
          )}
          
          {highlight.description && (
            <div className="highlight-modal-description">
              <p>{highlight.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default HighlightModal

