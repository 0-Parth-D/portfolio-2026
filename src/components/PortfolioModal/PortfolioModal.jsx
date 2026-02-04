import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import './PortfolioModal.css'

function PortfolioModal({ portfolioUrl, isOpen, onClose }) {
  const modalContentRef = useRef(null)
  
  // Use the custom modal hook for scroll lock, Lenis, and scroll restoration
  useModal(isOpen, onClose, modalContentRef)

  if (!isOpen || !portfolioUrl) return null

  // Determine if it's a local file or external (Google Drive)
  const isLocalFile = portfolioUrl.startsWith('/')
  
  // Get the preview URL
  const getPreviewUrl = (url) => {
    if (!url) return ''
    
    // If it's a local file, use it directly
    if (isLocalFile) {
      return url
    }
    
    // Convert Google Drive link to preview format
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
    }
    
    // If already in preview format or different format, return as is
    return url
  }

  const previewUrl = getPreviewUrl(portfolioUrl)
  
  // For local files, the download link is the same as the preview
  const downloadUrl = isLocalFile ? portfolioUrl : portfolioUrl

  const handleBackdropClick = (e) => {
    // Only close if clicking the overlay itself, not the content
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleContentClick = (e) => {
    // Prevent clicks inside modal from closing it
    e.stopPropagation()
  }

  return createPortal(
    <div 
      className="portfolio-modal-overlay" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      <div 
        className="portfolio-modal-content" 
        ref={modalContentRef}
        onClick={handleContentClick}
      >
        <button 
          className="portfolio-modal-close"
          onClick={onClose}
          aria-label="Close portfolio modal"
        >
          ×
        </button>

        <div className="portfolio-modal-header">
          <h2 id="portfolio-modal-title" className="portfolio-modal-title">Portfolio</h2>
        </div>

        <div className="portfolio-modal-body">
          <div className="portfolio-pdf-container">
            <iframe
              src={previewUrl}
              className="portfolio-pdf-iframe"
              title="Portfolio PDF Preview"
              type="application/pdf"
              allow="autoplay"
            />
          </div>
        </div>

        <div className="portfolio-modal-footer">
          <a 
            href={downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="portfolio-modal-link"
            aria-label={isLocalFile ? "Download portfolio PDF" : "Open portfolio in new tab"}
            download={isLocalFile ? "portfolio.pdf" : undefined}
          >
            {isLocalFile ? "Download PDF →" : "Open in New Tab →"}
          </a>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default PortfolioModal
