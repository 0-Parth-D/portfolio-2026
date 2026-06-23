import { portfolioData } from '../../data/portfolioData'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import SectionCta from '../../components/SectionCta/SectionCta'
import './StatsBlock.css'

function StatsBlock({ variant = 'full' }) {
  const { stats, experience, work } = portfolioData
  const isPreview = variant === 'preview'

  if (isPreview) {
    return (
      <section
        id="work"
        className="stats-block section section--preview"
        aria-labelledby="stats-heading"
      >
        <div className="container">
          <MotionReveal>
            <h2 id="stats-heading" className="stats-block__heading display-text display-text--sm">
              WORK
            </h2>
            <MotionItem>
              <p className="stats-block__metrics stats-block__metrics--preview">{stats.metrics}</p>
              <SectionCta to="/work">View work →</SectionCta>
            </MotionItem>
          </MotionReveal>
        </div>
      </section>
    )
  }

  return (
    <section id="work-stats" className="stats-block section" aria-labelledby="stats-detail-heading">
      <div className="container">
        <MotionReveal>
          <h2 id="stats-detail-heading" className="sr-only">
            Research stats
          </h2>
          <div className="stats-block__headline display-text display-text--sm" aria-hidden="true">
            {stats.lines.map((line, i) => {
              if (line.accent) {
                return (
                  <MotionItem key={i} className="stats-block__line">
                    <span className="stats-block__accent">{line.text}</span>
                    {line.suffix}
                  </MotionItem>
                )
              }
              return (
                <MotionItem
                  key={i}
                  className={`stats-block__line${line.dim ? ' stats-block__line--dim' : ''}`}
                >
                  {line.text}
                </MotionItem>
              )
            })}
          </div>
          <MotionItem>
            <p className="stats-block__metrics">{stats.metrics}</p>
          </MotionItem>

          <MotionItem className="stats-block__experience">
            <h3 className="stats-block__subheading mono-text">Experience</h3>
            <div className="stats-block__jobs">
              {experience.map((job) => (
                <article key={`${job.company}-${job.startDate}`} className="stats-block__job">
                  <div className="stats-block__job-top">
                    <span className="stats-block__job-company">{job.company}</span>
                    <span className="stats-block__job-dates mono-text">
                      {job.startDate} – {job.endDate}
                    </span>
                  </div>
                  <p className="stats-block__job-role">{job.position}</p>
                  <p className="stats-block__job-location mono-text">{job.location}</p>
                  <p className="stats-block__job-desc">{job.description}</p>
                  <div className="stats-block__job-tech">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="stats-block__tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </MotionItem>

          <MotionItem className="stats-block__process">
            <h3 className="stats-block__subheading mono-text">How I work</h3>
            <p className="stats-block__process-text">{work.processBlurb}</p>
          </MotionItem>
        </MotionReveal>
      </div>
    </section>
  )
}

export default StatsBlock
