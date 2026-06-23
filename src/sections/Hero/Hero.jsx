import { portfolioData } from '../../data/portfolioData'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import './Hero.css'

function Hero() {
  const { hero } = portfolioData

  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="container">
        <MotionReveal className="hero__content">
          <MotionItem className="hero__pills">
            {hero.pills.map((pill) => (
              <span key={pill} className="hero__pill">
                {pill}
              </span>
            ))}
          </MotionItem>

          <h1 id="hero-heading" className="hero__headline display-text">
            {hero.lines.map((line, lineIndex) => (
              <span key={lineIndex} className="hero__line">
                {line.parts.map((part, partIndex) => (
                  <span
                    key={partIndex}
                    className={
                      part.highlight
                        ? 'hero__highlight'
                        : part.muted
                          ? 'hero__muted'
                          : undefined
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
            <span className="hero__line">
              <span className="script-accent">{hero.accent}</span>
            </span>
          </h1>

          <MotionItem>
            <p className="hero__subtext">{hero.subtext}</p>
          </MotionItem>
        </MotionReveal>
      </div>
    </section>
  )
}

export default Hero
