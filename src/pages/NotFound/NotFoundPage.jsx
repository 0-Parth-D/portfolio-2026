import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageLayout from '../../components/PageLayout/PageLayout'
import { portfolioData } from '../../data/portfolioData'
import './NotFoundPage.css'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function NotFoundPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>{`Page not found · ${portfolioData.seo.siteName}`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main id="main-content" className="not-found section">
        <div className="container">
          <p className="not-found__code mono-text">404</p>
          <h1 className="not-found__title display-text">
            NOTHING <span className="not-found__muted">HERE</span>
            <span className="not-found__dot">.</span>
          </h1>
          <p className="not-found__lede">
            That page doesn&apos;t exist, or it moved. These do:
          </p>
          <ul className="not-found__links">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="not-found__link">
                  {link.label} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageLayout>
  )
}

export default NotFoundPage
