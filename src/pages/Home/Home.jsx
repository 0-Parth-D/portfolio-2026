import { useEffect, useRef, useState, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { portfolioData } from '../../data/portfolioData'
import Button from '../../components/Button/Button'
import HighlightModal from '../../components/HighlightModal/HighlightModal'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { JsonLdPerson } from '../../components/JsonLdPerson/JsonLdPerson'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const { personal, projects, skills, awards, seo } = portfolioData

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

  const expertiseAreas = useMemo(() => skills.domains || [], [skills.domains])

  const recentHighlights = [...awards]
    .sort((a, b) => {
      if (a.date && b.date) {
        return parseInt(b.date, 10) - parseInt(a.date, 10)
      }
      if (a.date) return -1
      if (b.date) return 1
      return 0
    })
    .slice(0, 3)

  const heroSectionRef = useRef(null)
  const caseStudiesSectionRef = useRef(null)
  const expertiseSectionRef = useRef(null)
  const highlightsSectionRef = useRef(null)
  const pillRefs = useRef([])
  const highlightItemRefs = useRef([])

  const [highlightModal, setHighlightModal] = useState({
    isOpen: false,
    highlight: null,
  })

  const handleHighlightClick = (highlight) => {
    if (window.innerWidth <= 767) {
      setHighlightModal({
        isOpen: true,
        highlight,
      })
    }
  }

  const handleCloseHighlightModal = () => {
    setHighlightModal({
      isOpen: false,
      highlight: null,
    })
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (heroSectionRef.current) {
      heroSectionRef.current.classList.add('animate-in')
    }

    const sections = [
      caseStudiesSectionRef.current,
      expertiseSectionRef.current,
      highlightsSectionRef.current,
    ].filter(Boolean)

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    const observeItems = (items, baseDelay = 0) => {
      items.forEach((item, index) => {
        if (item) {
          item.style.setProperty('--animation-delay', `${baseDelay + index * 0.1}s`)
          observer.observe(item)
        }
      })
    }

    observeItems(pillRefs.current)
    observeItems(highlightItemRefs.current, 0.2)

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
      observer.disconnect()
    }
  }, [expertiseAreas, recentHighlights])

  const defaultDesc = seo?.defaultDescription ?? ''

  return (
    <main className="page home-page" id="home" role="main">
      <PageMeta
        title="Home"
        description={`${personal.tagline} ${personal.heroSubtitle ?? ''}`.trim() || defaultDesc}
      />
      <JsonLdPerson />

      <section
        className="hero-section scroll-animate"
        ref={heroSectionRef}
        aria-labelledby="hero-heading"
      >
        <div className="hero-left">
          <div className="profile-image-wrapper">
            <img
              src={personal.profileImage}
              alt={`Profile picture of ${personal.fullName}`}
              className="profile-image"
              onError={(e) => {
                const fallbackImage = '/1720902504174.jpg'
                const currentSrc = e.target.src
                if (!currentSrc.includes('1720902504174.jpg') && !currentSrc.includes('placeholder')) {
                  e.target.src = fallbackImage
                } else {
                  e.target.onerror = null
                  e.target.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProfile Image%3C/text%3E%3C/svg%3E'
                }
              }}
            />
          </div>
          <h1 id="hero-heading" className="hero-name">
            Howdy! I&apos;m <span className="name-highlight">{personal.firstName}</span>{' '}
            {personal.lastName}
          </h1>
        </div>

        <div className="hero-right">
          <div className="hero-title-section">
            <h2 className="hero-title">{personal.title}</h2>
            <p className="hero-location" aria-label={`Location: ${personal.location}`}>
              {personal.location}
            </p>
          </div>
          <p className="hero-tagline">{personal.tagline}</p>
          {personal.heroSubtitle && (
            <p className="hero-subtitle-secondary">{personal.heroSubtitle}</p>
          )}
          <div className="hero-buttons" role="group" aria-label="Call to action buttons">
            <Button type="primary" onClick={() => navigate('/work')} aria-label="Navigate to work page">
              View Work
            </Button>
            <Button type="secondary" onClick={() => navigate('/about')} aria-label="Navigate to about page">
              About Me
            </Button>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section
          className="case-studies-section scroll-animate"
          ref={caseStudiesSectionRef}
          aria-labelledby="case-studies-heading"
        >
          <h2 id="case-studies-heading" className="section-heading">
            Featured Projects
          </h2>
          <div className="case-studies-grid">
            {featuredProjects.map((project) => {
              const thumb = project.image || '/project-card-placeholder.svg'
              const hasExternal = Boolean(project.link || project.github)
              return (
                <article key={project.title} className="case-study-card">
                  <div className="case-study-card-thumb-wrap">
                    <img
                      src={thumb}
                      alt=""
                      className="case-study-card-thumb"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="case-study-title">{project.title}</h3>
                  <p className="case-study-description">
                    {project.homeSummary ?? project.description}
                  </p>
                  <div className="case-study-tech">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="case-study-links">
                    {hasExternal && (
                      <>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study-link"
                            aria-label={`View ${project.title} project`}
                          >
                            View Project →
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study-link"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            GitHub →
                          </a>
                        )}
                      </>
                    )}
                    <Link
                      to="/work"
                      className="case-study-link case-study-link-internal"
                      aria-label={`Open full case study for ${project.title} on Work page`}
                    >
                      Full case study →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      )}

      {expertiseAreas.length > 0 && (
        <section
          className="expertise-section scroll-animate"
          ref={expertiseSectionRef}
          aria-labelledby="expertise-heading"
        >
          <h2 id="expertise-heading" className="section-heading">
            What I Do
          </h2>
          <div className="expertise-pills">
            {expertiseAreas.map((area, index) => (
              <span
                key={area}
                className="expertise-pill scroll-animate-item"
                ref={(el) => {
                  pillRefs.current[index] = el
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </section>
      )}

      {recentHighlights.length > 0 && (
        <section
          className="highlights-section scroll-animate"
          ref={highlightsSectionRef}
          aria-labelledby="highlights-heading"
        >
          <h2 id="highlights-heading" className="section-heading">
            Recent Highlights
          </h2>
          <div className="highlights-grid">
            {recentHighlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="highlight-item scroll-animate-item"
                ref={(el) => {
                  highlightItemRefs.current[index] = el
                }}
                onClick={() => handleHighlightClick(highlight)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleHighlightClick(highlight)
                  }
                }}
                aria-label={`View details for ${highlight.title}`}
              >
                <div className="highlight-header">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  {highlight.date && <span className="highlight-date">{highlight.date}</span>}
                </div>
                <p className="highlight-issuer">{highlight.issuer}</p>
                {highlight.description && (
                  <p className="highlight-description">{highlight.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <HighlightModal
        isOpen={highlightModal.isOpen}
        onClose={handleCloseHighlightModal}
        highlight={highlightModal.highlight}
      />
    </main>
  )
}

export default Home
