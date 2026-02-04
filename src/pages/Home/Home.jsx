import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Button from '../../components/Button/Button'
import HighlightModal from '../../components/HighlightModal/HighlightModal'
import './Home.css'

function Home({ navigate }) {
  const { personal, projects, skills, experience, education, awards } = portfolioData

  // Get featured projects (3 only)
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  // Get expertise areas from domains
  const expertiseAreas = skills.domains || []

  // Recent highlights (from awards) - sorted chronologically (newest first)
  const recentHighlights = [...awards]
    .sort((a, b) => {
      // Sort by date (newest first), if dates are equal, maintain original order
      if (a.date && b.date) {
        return parseInt(b.date) - parseInt(a.date)
      }
      if (a.date) return -1
      if (b.date) return 1
      return 0
    })
    .slice(0, 3) // Show top 3 highlights

  const profileImageRef = useRef(null)
  const cardRefs = useRef([])
  
  // Refs for scroll animations
  const heroSectionRef = useRef(null)
  const caseStudiesSectionRef = useRef(null)
  const expertiseSectionRef = useRef(null)
  const experienceSectionRef = useRef(null)
  const highlightsSectionRef = useRef(null)
  const pillRefs = useRef([])
  const experienceItemRefs = useRef([])
  const highlightItemRefs = useRef([])
  
  // Highlight modal state
  const [highlightModal, setHighlightModal] = useState({
    isOpen: false,
    highlight: null
  })
  
  const handleHighlightClick = (highlight) => {
    // Only open modal on mobile devices
    if (window.innerWidth <= 767) {
      setHighlightModal({
        isOpen: true,
        highlight
      })
    }
  }
  
  const handleCloseHighlightModal = () => {
    setHighlightModal({
      isOpen: false,
      highlight: null
    })
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Hero section appears immediately (no scroll animation needed)
    if (heroSectionRef.current) {
      heroSectionRef.current.classList.add('animate-in')
    }

    // Observe sections (excluding hero)
    const sections = [
      caseStudiesSectionRef.current,
      expertiseSectionRef.current,
      experienceSectionRef.current,
      highlightsSectionRef.current
    ].filter(Boolean)

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Observe individual items with stagger delay
    const observeItems = (items, baseDelay = 0) => {
      items.forEach((item, index) => {
        if (item) {
          item.style.setProperty('--animation-delay', `${baseDelay + index * 0.1}s`)
          observer.observe(item)
        }
      })
    }

    observeItems(pillRefs.current)
    observeItems(experienceItemRefs.current)
    observeItems(highlightItemRefs.current, 0.2)

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
      observer.disconnect()
    }
  }, [expertiseAreas, experience, recentHighlights])

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Handle profile image mouse tracking
    const profileElement = profileImageRef.current
    if (profileElement) {
      const handleProfileMouseMove = (e) => {
        const rect = profileElement.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        const rotateX = (y / (rect.height / 2)) * -10
        const rotateY = (x / (rect.width / 2)) * 10
        
        profileElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
      }

      const handleProfileMouseLeave = () => {
        profileElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      }

      profileElement.addEventListener('mousemove', handleProfileMouseMove)
      profileElement.addEventListener('mouseleave', handleProfileMouseLeave)

      return () => {
        profileElement.removeEventListener('mousemove', handleProfileMouseMove)
        profileElement.removeEventListener('mouseleave', handleProfileMouseLeave)
      }
    }
  }, [])

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Handle project cards mouse tracking
    const cleanupFunctions = cardRefs.current.map((card) => {
      if (!card) return null

      const handleCardMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        const rotateX = (y / (rect.height / 2)) * -8
        const rotateY = (x / (rect.width / 2)) * 8
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
      }

      const handleCardMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      }

      card.addEventListener('mousemove', handleCardMouseMove)
      card.addEventListener('mouseleave', handleCardMouseLeave)

      return () => {
        card.removeEventListener('mousemove', handleCardMouseMove)
        card.removeEventListener('mouseleave', handleCardMouseLeave)
      }
    }).filter(Boolean)

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup())
    }
  }, [featuredProjects])

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="page home-page" id="home" role="main">
      {/* Hero / Intro Section */}
      <section className="hero-section scroll-animate" ref={heroSectionRef} aria-labelledby="hero-heading">
        <div className="hero-left">
          <div className="profile-image-wrapper" ref={profileImageRef}>
            <img 
              src={personal.profileImage}
              alt={`Profile picture of ${personal.fullName}`}
              className="profile-image"
              onError={(e) => {
                // Fallback to a default placeholder if the image fails to load
                const fallbackImage = '/profile.jpg'
                const currentSrc = e.target.src
                // Only try fallback if we haven't already tried it
                if (!currentSrc.includes('profile.jpg') && !currentSrc.includes('placeholder')) {
                  e.target.src = fallbackImage
                } else {
                  // If fallback also fails, use a data URI placeholder or hide
                  e.target.onerror = null // Prevent infinite loop
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProfile Image%3C/text%3E%3C/svg%3E'
                }
              }}
            />
          </div>
          <h1 id="hero-heading" className="hero-name">
            Howdy! I'm <span className="name-highlight">{personal.firstName}</span> {personal.lastName}
          </h1>
        </div>

        <div className="hero-right">
          <div className="hero-title-section">
            <h2 className="hero-title">{personal.title}</h2>
            <p className="hero-location" aria-label={`Location: ${personal.location}`}>
              {personal.location}
            </p>
          </div>
          <p className="hero-tagline">
            {personal.tagline}
          </p>
          <div className="hero-buttons" role="group" aria-label="Call to action buttons">
            <Button 
              type="primary" 
              onClick={() => navigate && navigate('WORK')}
              aria-label="Navigate to work page"
            >
              View Work
            </Button>
            <Button 
              type="secondary" 
              onClick={() => navigate && navigate('ABOUT')}
              aria-label="Navigate to about section"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Highlighted Case Studies Section */}
      {featuredProjects.length > 0 && (
        <section className="case-studies-section scroll-animate" ref={caseStudiesSectionRef} aria-labelledby="case-studies-heading">
          <h2 id="case-studies-heading" className="section-heading">Featured Projects</h2>
          <div className="case-studies-grid">
            {featuredProjects.map((project, index) => (
              <article 
                key={index} 
                className="case-study-card"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <h3 className="case-study-title">{project.title}</h3>
                <p className="case-study-description">{project.description}</p>
                <div className="case-study-tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {(project.link || project.github) && (
                  <div className="case-study-links">
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
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Expertise / What I Do Section */}
      {expertiseAreas.length > 0 && (
        <section className="expertise-section scroll-animate" ref={expertiseSectionRef} aria-labelledby="expertise-heading">
          <h2 id="expertise-heading" className="section-heading">What I Do</h2>
          <div className="expertise-pills">
            {expertiseAreas.map((area, index) => (
              <span 
                key={index} 
                className="expertise-pill scroll-animate-item"
                ref={(el) => (pillRefs.current[index] = el)}
              >
                {area}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Education & Work Section */}
      <section className="experience-section scroll-animate" ref={experienceSectionRef} aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="section-heading">Background</h2>
        <div className="experience-grid">
          {/* Education Subsection */}
          {education && education.length > 0 && (
            <div className="experience-subsection">
              <h3 className="subsection-heading">Education</h3>
              <div className="experience-list">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="experience-item scroll-animate-item"
                    ref={(el) => (experienceItemRefs.current[index] = el)}
                  >
                    <h4 className="experience-title">{edu.institution}</h4>
                    <p className="experience-role">{edu.degree} in {edu.field}</p>
                    <p className="experience-location">{edu.location}</p>
                    <p className="experience-dates">{edu.startDate} - {edu.endDate}</p>
                    {edu.gpa && (
                      <p className="experience-gpa">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="experience-divider"></div>

          {/* Work Subsection */}
          {experience && experience.length > 0 && (
            <div className="experience-subsection">
              <h3 className="subsection-heading">Work Experience</h3>
              <div className="experience-list">
                {experience.slice(0, 2).map((exp, index) => {
                  // Summarize description to first 120 characters
                  const summarizedDescription = exp.description 
                    ? (exp.description.length > 120 
                        ? exp.description.substring(0, 120).trim() + '...' 
                        : exp.description)
                    : null
                  
                  const itemIndex = (education?.length || 0) + index
                  return (
                    <div 
                      key={index} 
                      className="experience-item scroll-animate-item"
                      ref={(el) => (experienceItemRefs.current[itemIndex] = el)}
                    >
                      <h4 className="experience-title">{exp.company}</h4>
                      <p className="experience-role">{exp.position}</p>
                      <p className="experience-location">{exp.location}</p>
                      <p className="experience-dates">{exp.startDate} - {exp.endDate}</p>
                      {summarizedDescription && (
                        <p className="experience-description">{summarizedDescription}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recent Highlights Section */}
      {recentHighlights.length > 0 && (
        <section className="highlights-section scroll-animate" ref={highlightsSectionRef} aria-labelledby="highlights-heading">
          <h2 id="highlights-heading" className="section-heading">Recent Highlights</h2>
          <div className="highlights-grid">
            {recentHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="highlight-item scroll-animate-item"
                ref={(el) => (highlightItemRefs.current[index] = el)}
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
                  {highlight.date && (
                    <span className="highlight-date">{highlight.date}</span>
                  )}
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
