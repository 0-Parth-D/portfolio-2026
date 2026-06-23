import { portfolioData } from '../../data/portfolioData'
import './Footer.css'

function Footer() {
  const { personal } = portfolioData

  const socialLinks = [
    { label: 'github', href: personal.github },
    { label: 'huggingface', href: personal.huggingface },
    { label: 'linkedin', href: personal.linkedin },
  ]

  return (
    <footer id="contact" className="site-footer" aria-labelledby="footer-heading">
      <div className="container site-footer__inner">
        <h2 id="footer-heading" className="sr-only">
          Contact
        </h2>
        <div className="site-footer__name display-text display-text--sm">
          <span>PARTH</span>
          <span>DESHMUKH</span>
        </div>
        <div className="site-footer__contact">
          <p className="site-footer__label mono-text">Get in touch</p>
          <nav className="site-footer__links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="site-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${personal.email}`}
            className="site-footer__cta"
            aria-label={`Mail me at ${personal.email}`}
          >
            mail me
          </a>
          <p className="site-footer__email mono-text">{personal.email}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
