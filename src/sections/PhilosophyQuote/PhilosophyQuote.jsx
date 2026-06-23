import { portfolioData } from '../../data/portfolioData'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import './PhilosophyQuote.css'

function PhilosophyQuote() {
  const { philosophy } = portfolioData

  return (
    <section className="philosophy-quote section" aria-labelledby="philosophy-heading">
      <div className="container">
        <MotionReveal>
          <h2 id="philosophy-heading" className="sr-only">
            Philosophy
          </h2>
          <MotionItem className="philosophy-quote__label mono-text">{philosophy.label}</MotionItem>
          <div className="philosophy-quote__text display-text display-text--sm">
            {philosophy.lines.map((line, i) => {
              if (typeof line === 'object' && line.accent) {
                return (
                  <MotionItem key={i} className="philosophy-quote__line">
                    <span className="script-accent">{line.accent}</span>
                  </MotionItem>
                )
              }
              return (
                <MotionItem key={i} className="philosophy-quote__line">
                  {line}
                </MotionItem>
              )
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}

export default PhilosophyQuote
