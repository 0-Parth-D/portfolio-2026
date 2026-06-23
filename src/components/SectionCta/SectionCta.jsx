import { Link } from 'react-router-dom'
import './SectionCta.css'

function SectionCta({ to, children = 'View more →' }) {
  return (
    <Link to={to} className="section-cta">
      <span>{children}</span>
      <span className="section-cta__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}

export default SectionCta
