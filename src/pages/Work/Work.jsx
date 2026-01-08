import { useRef, useEffect, useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import './Work.css'

function Work() {
  const { projects, skills } = portfolioData
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

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "RESEARCH",
      description: "Understanding user needs and uncovering insights within each challenge, shaping strategy to guide."
    },
    {
      step: "02",
      title: "DESIGN",
      description: "Shaping insights into experiences that feel intuitive, thoughtful, and leave lasting impressions on people."
    },
    {
      step: "03",
      title: "TEST",
      description: "Testing, learning, and iterating — refining experiences that adapt, delight, and evolve with every user interaction."
    }
  ]

  // Section refs for scroll animations
  const overviewRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const processRef = useRef(null)
  const skillsRef = useRef(null)

  // Scroll animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // Make all sections visible immediately if reduced motion is preferred
      const sections = [overviewRef.current, caseStudiesRef.current, processRef.current, skillsRef.current].filter(Boolean)
      sections.forEach((section) => {
        if (section) section.classList.add('animate-in')
      })
      return
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Also animate child items
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

    const sections = [overviewRef.current, caseStudiesRef.current, processRef.current, skillsRef.current].filter(Boolean)
    
    // Check if sections are already in viewport on mount
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


  return (
    <main className="page work-page" id="work" role="main">
      {/* Work Overview Section */}
      <section className="work-overview scroll-animate" ref={overviewRef} aria-labelledby="work-overview-heading">
        
        <div className="work-overview-left">
          <h1 className="work-overview-title">
            <span className="highlight">Work</span>
          </h1>
          <p className="work-overview-subtitle">
            I approach every project with a user-centered mindset, combining technical expertise with design thinking 
            to solve complex problems. My work spans software engineering, data science, and human-computer interaction, 
            where I focus on building scalable systems and intuitive experiences that make a meaningful impact.
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

      {/* Case Studies List Section */}
      <section className="case-studies-list scroll-animate" ref={caseStudiesRef} aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading" className="section-heading">Projects</h2>
        <div className="case-studies-container">
          {projects.map((project, index) => {
            const shortDescription = project.description.length > 120 
              ? project.description.substring(0, 120).trim() + '...' 
              : project.description

            return (
              <article 
                key={index} 
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
                {project.image && (
                  <div className="case-study-image">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                )}
                <div className="case-study-card-content">
                  <h3 className="case-study-card-title">{project.title}</h3>
                  <div className="case-study-card-tech">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-small">{tech}</span>
                    ))}
                  </div>
                  <p className="case-study-card-description">{shortDescription}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Process & Approach Section */}
      <section className="process-section scroll-animate" ref={processRef} aria-labelledby="process-heading">
        <h2 id="process-heading" className="section-heading">Process & Approach</h2>
        <p className="process-intro">
          My methodology combines UX design principles, software engineering best practices, and data-driven decision making 
          to deliver solutions that are both technically sound and user-friendly.
        </p>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-step scroll-animate-item"
            >
              <div className="process-step-number">{step.step}</div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills in Action Section */}
      <section className="skills-action-section scroll-animate" ref={skillsRef} aria-labelledby="skills-action-heading">
        <h2 id="skills-action-heading" className="section-heading">Skills in Action</h2>
        <div className="skills-mapping">
          <div className="skill-category">
            <h3 className="skill-category-title">Technical Skills</h3>
            <div className="skills-list">
              {[...skills.programming, ...skills.frameworks].map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Tools & Platforms</h3>
            <div className="skills-list">
              {skills.tools.map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Methodologies</h3>
            <div className="skills-list">
              {skills.methodologies.map((methodology, index) => (
                <span key={index} className="skill-tag">{methodology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work
