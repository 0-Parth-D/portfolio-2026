import { portfolioData } from '../../data/portfolioData'
import './Contact.css'

function Contact() {
  const { personal } = portfolioData

  return (
    <main className="page contact-page" id="contact" role="main">
      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-header">
          <h1 id="contact-heading" className="contact-title">
            Get in <span className="contact-title-highlight">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Let's connect and collaborate on your next project
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-side">
            <div className="contact-info-card">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-description">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">✉️</div>
                  <div className="contact-method-content">
                    <h3 className="contact-method-label">Email</h3>
                    <a 
                      href={`mailto:${personal.email}`} 
                      className="contact-method-value"
                      aria-label={`Send email to ${personal.email}`}
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">📱</div>
                  <div className="contact-method-content">
                    <h3 className="contact-method-label">Phone</h3>
                    <a 
                      href={`tel:${personal.phone}`} 
                      className="contact-method-value"
                      aria-label={`Call ${personal.phone}`}
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">📍</div>
                  <div className="contact-method-content">
                    <h3 className="contact-method-label">Location</h3>
                    <p className="contact-method-value">{personal.location}</p>
                  </div>
                </div>
              </div>

              <nav className="contact-social" aria-label="Social media links">
                <h3 className="contact-social-title">Connect</h3>
                <div className="contact-social-links">
                  {personal.website && (
                    <a
                      href={personal.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Visit portfolio website (opens in new tab)"
                    >
                      Website
                    </a>
                  )}
                  {personal.linkedin && (
                    <a 
                      href={personal.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                      aria-label="Visit LinkedIn profile (opens in new tab)"
                    >
                      LinkedIn
                    </a>
                  )}
                  {personal.github && (
                    <a 
                      href={personal.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                      aria-label="Visit GitHub profile (opens in new tab)"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
