import { useRef, useEffect, useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import './Work.css'

const PLACEHOLDER_IMG = '/project-card-placeholder.svg'

const processSteps = [
  {
    step: '01',
    title: 'DATA & PROBLEM',
    description:
      'Clarify objectives, data sources, labels, and constraints (latency, memory, privacy). Define baselines and success metrics before building.',
  },
  {
    step: '02',
    title: 'MODEL & PIPELINE',
    description:
      'Implement training and inference pipelines, feature and retrieval design for RAG, and integration points with sensible defaults for reproducibility.',
  },
  {
    step: '03',
    title: 'EVALUATE & HARDEN',
    description:
      'Offline metrics, error analysis, stress tests on edge cases, and profiling for GPU/CPU bottlenecks. Iterate until the system meets the bar.',
  },
  {
    step: '04',
    title: 'DEPLOY & SHIP',
    description:
      'Package (Docker, PyPI/Conda), CI/CD, monitoring hooks, and documentation so others can run, extend, and trust the system.',
  },
]

function Work() {
  const { projects, skills, seo } = portfolioData
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const overviewRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const processRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const sections = [overviewRef.current, caseStudiesRef.current, processRef.current, skillsRef.current].filter(
        Boolean
      )
      sections.forEach((section) => {
        if (section) section.classList.add('animate-in')
      })
      return undefined
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          const items = entry.target.querySelectorAll('.scroll-animate-item')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in')
            }, index * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const sections = [overviewRef.current, caseStudiesRef.current, processRef.current, skillsRef.current].filter(
      Boolean
    )

    sections.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          section.classList.add('animate-in')
          const items = section.querySelectorAll('.scroll-animate-item')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in')
            }, index * 50)
          })
        } else {
          observer.observe(section)
        }
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
      observer.disconnect()
    }
  }, [])

  const defaultDesc = seo?.defaultDescription ?? ''

  return (
    <main className="page work-page" id="work" role="main">
      <PageMeta
        title="Work"
        description={`Projects and case studies: RAG, computer vision, data engineering, and shipping with Docker and CI/CD. ${defaultDesc}`}
      />

      <section
        className="work-overview scroll-animate"
        ref={overviewRef}
        aria-labelledby="work-overview-heading"
      >
        <div className="work-overview-left">
          <h1 id="work-overview-heading" className="work-overview-title">
            <span className="highlight">Work</span>
          </h1>
          <p className="work-overview-subtitle">
            Recent work spans satellite image segmentation with SAM3, a LangChain and ChromaDB RAG assistant over
            large documentation sets, and production-minded packaging with Docker and CI/CD — alongside earlier
            data-visualization and analytics UI experience from research and internships.
          </p>
        </div>

        <div className="work-overview-right">
          <div className="work-overview-visual">
            <div className="work-overview-glow"></div>
            <div className="work-overview-shape work-overview-shape-1" style={{ '--rotate': '15deg' }}></div>
            <div className="work-overview-shape work-overview-shape-2" style={{ '--rotate': '-25deg' }}></div>
            <div className="work-overview-shape work-overview-shape-3" style={{ '--rotate': '45deg' }}></div>
          </div>
        </div>
      </section>

      <section
        className="case-studies-list scroll-animate"
        ref={caseStudiesRef}
        aria-labelledby="case-studies-heading"
      >
        <h2 id="case-studies-heading" className="section-heading">
          Projects
        </h2>
        <div className="case-studies-container">
          {projects.map((project) => {
            const desc = project.description || ''
            const shortDescription =
              desc.length > 120 ? `${desc.substring(0, 120).trim()}...` : desc
            const thumb = project.image || PLACEHOLDER_IMG

            return (
              <article
                key={project.title}
                className="case-study-card scroll-animate-item"
                onClick={() => handleCardClick(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardClick(project)
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className="case-study-image">
                  <img src={thumb} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="case-study-card-content">
                  <h3 className="case-study-card-title">{project.title}</h3>
                  <div className="case-study-card-tech">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-small">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="case-study-card-description">{shortDescription}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />

      <section className="process-section scroll-animate" ref={processRef} aria-labelledby="process-heading">
        <h2 id="process-heading" className="section-heading">
          ML &amp; software lifecycle
        </h2>
        <p className="process-intro">
          How I approach end-to-end ML and software work: from data and modeling through evaluation, packaging, and
          deployment — with clear metrics and reproducible tooling.
        </p>
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.title} className="process-step scroll-animate-item">
              <div className="process-step-number">{step.step}</div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="skills-action-section scroll-animate"
        ref={skillsRef}
        aria-labelledby="skills-action-heading"
      >
        <h2 id="skills-action-heading" className="section-heading">
          Skills in Action
        </h2>
        <div className="skills-mapping">
          <div className="skill-category">
            <h3 className="skill-category-title">Technical Skills</h3>
            <div className="skills-list">
              {[...skills.programming, ...skills.frameworks].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Tools & Platforms</h3>
            <div className="skills-list">
              {skills.tools.map((tool) => (
                <span key={tool} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Methodologies</h3>
            <div className="skills-list">
              {skills.methodologies.map((methodology) => (
                <span key={methodology} className="skill-tag">
                  {methodology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work
