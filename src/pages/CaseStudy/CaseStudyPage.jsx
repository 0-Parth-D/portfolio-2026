import { Link, useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { JsonLdCaseStudy } from '../../components/JsonLdCaseStudy/JsonLdCaseStudy'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import NotFoundPage from '../NotFound/NotFoundPage'
import { portfolioData } from '../../data/portfolioData'
import { caseStudies, caseStudyPath } from '../../data/caseStudies'
import './CaseStudyPage.css'

function CaseSection({ title, children }) {
  return (
    <MotionItem as="section" className="case-study__section">
      <h2 className="case-study__section-title mono-text">{title}</h2>
      <div className="case-study__section-body">{children}</div>
    </MotionItem>
  )
}

function CaseStudyPage() {
  const { slug } = useParams()
  const index = caseStudies.findIndex((p) => p.id === slug)
  if (index === -1) return <NotFoundPage />

  const project = caseStudies[index]
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <PageLayout>
      <PageMeta
        title={`${project.title} · ${portfolioData.seo.siteName}`}
        description={`${project.title}: ${project.problem} ${project.outcome}`}
        path={caseStudyPath(project)}
      />
      <JsonLdCaseStudy project={project} />
      <main id="main-content" className="case-study">
        <header className="case-study__hero section">
          <div className="container">
            <Link to="/work" className="case-study__back mono-text">
              <span aria-hidden="true">←</span> All work
            </Link>
            <p className="case-study__eyebrow mono-text">
              {project.category} · {project.date}
            </p>
            <h1 className="case-study__title display-text display-text--sm">{project.title}</h1>
            <p className="case-study__lede">{project.problem}</p>

            <div className="case-study__meta-row">
              <ul className="case-study__tags" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech} className="case-study__tag">
                    {tech}
                  </li>
                ))}
              </ul>
              {(project.github || project.link) && (
                <div className="case-study__links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="case-study__cta">
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="case-study__cta">
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {project.metrics?.length > 0 && (
              <dl className="case-study__metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="case-study__metric">
                    <dt className="case-study__metric-value display-text">{metric.value}</dt>
                    <dd className="case-study__metric-label mono-text">{metric.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </header>

        {project.image && (
          <figure className="case-study__figure container">
            <img src={project.image} alt={project.imageAlt ?? ''} />
          </figure>
        )}

        <div className="case-study__body section">
          <MotionReveal className="container case-study__sections">
            <CaseSection title="Role">
              <p>{project.role}</p>
            </CaseSection>
            <CaseSection title="Approach">
              <p>{project.approach}</p>
            </CaseSection>
            <CaseSection title="What I built">
              <ul className="case-study__list">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection title="Outcome">
              <p>{project.outcome}</p>
            </CaseSection>
          </MotionReveal>
        </div>

        {next.id !== project.id && (
          <nav className="case-study__next container" aria-label="Next case study">
            <Link to={caseStudyPath(next)} className="case-study__next-link">
              <span className="case-study__next-label mono-text">Next case study</span>
              <span className="case-study__next-title display-text display-text--sm">
                {next.title} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </nav>
        )}
      </main>
    </PageLayout>
  )
}

export default CaseStudyPage
