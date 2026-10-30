import { portfolioData } from '../../data/portfolioData'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import ResumeMenu from '../../components/ResumeMenu/ResumeMenu'
import NowLine from '../../components/NowLine/NowLine'
import './Hero.css'

function Hero() {
  const { hero, personal } = portfolioData

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

          <p className="hero__headline display-text">
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
                {lineIndex === hero.lines.length - 1 && (
                  <>
                    {' '}
                    <span className="script-accent">{hero.accent}</span>
                  </>
                )}
              </span>
            ))}
          </p>

          <MotionItem className="hero__intro">
            <div className="hero__identity">
              <h1 id="hero-heading" className="hero__name">
                {hero.intro.name}
                <span className="hero__role">{hero.intro.role}</span>
              </h1>
              <p className="hero__meta mono-text">{hero.intro.meta}</p>
              <p className="hero__subtext">{hero.subtext}</p>
              <NowLine className="hero__now" />
            </div>

            <div className="hero__ctas">
              <ResumeMenu variant="hero" />
              <a
                href={personal.github}
                className="hero__cta hero__cta--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a href={`mailto:${personal.email}`} className="hero__cta hero__cta--text">
                Email me
              </a>
            </div>
          </MotionItem>
        </MotionReveal>
      </div>
    </section>
  )
}

export default Hero
