import { portfolioData } from '../../data/portfolioData'
import './ExperienceTicker.css'

function ExperienceTicker() {
  const { items } = portfolioData.ticker
  const track = [...items, ...items]

  return (
    <section className="experience-ticker" aria-hidden="true">
      <div className="experience-ticker__label mono-text">∞ Scroll</div>
      <div className="experience-ticker__viewport">
        <div className="experience-ticker__track">
          {track.map((item, i) => (
            <div key={`${item.company}-${i}`} className="experience-ticker__item">
              <span className="experience-ticker__company">{item.company}</span>
              <span className="experience-ticker__role">{item.role}</span>
              <span className="experience-ticker__sep" aria-hidden="true">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTicker
