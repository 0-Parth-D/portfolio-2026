import { portfolioData } from '../../data/portfolioData'
import './Footer.css'

function Footer({ onNavigate }) {
  const { personal } = portfolioData

  const handleDownloadCV = () => {
    // Navigate to About page
    if (onNavigate) {
      onNavigate('ABOUT')
      // Small delay to ensure page has rendered, then scroll to download button
      setTimeout(() => {
        const downloadButton = document.querySelector('.about-intro-actions .btn')
        if (downloadButton) {
          downloadButton.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }

  const displayName = `${personal.firstName} ${personal.lastName}`

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">CONTACT</h2>
          <div className="footer-contact-info">
            <a 
              href={`tel:${personal.phone}`} 
              className="footer-link"
              aria-label={`Call ${personal.phone}`}
            >
              {personal.phone}
            </a>
            <span className="footer-separator">|</span>
            <a 
              href={`mailto:${personal.email}`} 
              className="footer-link"
              aria-label={`Send email to ${personal.email}`}
            >
              {personal.email}
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">SOCIAL</h2>
          <nav className="footer-social" aria-label="Social media links">
            {personal.linkedin && (
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                LINKEDIN
              </a>
            )}
            {personal.github && (
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                GITHUB
              </a>
            )}
          </nav>
        </div>

        <div className="footer-download-section">
          <button 
            className="footer-download-btn"
            onClick={handleDownloadCV}
            aria-label="Download resume"
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>

      <div className="footer-watermark">
        <span className="footer-name-watermark">{displayName.toUpperCase()}</span>
      </div>
    </footer>
  )
}

export default Footer

