import { portfolioData } from '../../data/portfolioData'
import './SpecialtyTags.css'

function SpecialtyTags() {
  const { specialties } = portfolioData

  return (
    <section className="specialty-tags" aria-label="Specialties">
      <div className="container specialty-tags__inner">
        <span className="specialty-tags__label mono-text">Specialties</span>
        <div className="specialty-tags__row">
          {specialties.map((tag, i) => (
            <span key={tag} className="specialty-tags__item">
              {i > 0 && <span className="specialty-tags__sep" aria-hidden="true">·</span>}
              <span className="specialty-tags__pill">{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialtyTags
