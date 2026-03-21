import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import SkillsModal from '../../components/SkillsModal/SkillsModal'
import PortfolioModal from '../../components/PortfolioModal/PortfolioModal'
import Button from '../../components/Button/Button'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import {
  IconBackground,
  IconDrive,
  IconVision,
  IconInterest,
  IconValue,
} from '../../components/icons/AboutDecorIcons'
import './About.css'

function About() {
  const aboutMeRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const personalRef = useRef(null)

  // Scroll animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const allElements = [
        aboutMeRef.current, experienceRef.current, skillsRef.current, personalRef.current
      ].filter(Boolean)
      allElements.forEach(el => {
        el.classList.add('animate-in')
        el.querySelectorAll('.scroll-animate-item').forEach(item => item.classList.add('animate-in'))
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
          const items = entry.target.querySelectorAll('.scroll-animate-item')
          items.forEach((item, index) => {
            item.style.setProperty('--animation-delay', `${index * 0.1}s`)
            item.classList.add('animate-in')
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const sections = [aboutMeRef.current, experienceRef.current, skillsRef.current, personalRef.current].filter(Boolean)
    
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

  const { personal, experience, education, skills, seo } = portfolioData
  const defaultDesc = seo?.defaultDescription ?? ''
  
  // Skills modal state
  const [modalState, setModalState] = useState({
    isOpen: false,
    categoryTitle: '',
    skills: []
  })
  
  // Portfolio modal state
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false)
  
  const MAX_VISIBLE_SKILLS = 6
  
  const handleShowMore = (categoryTitle, allSkills) => {
    setModalState({
      isOpen: true,
      categoryTitle,
      skills: allSkills
    })
  }
  
  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      categoryTitle: '',
      skills: []
    })
  }
  
  // Combine experience and education for timeline
  const timeline = [
    ...education.map(edu => ({ ...edu, type: 'education' })),
    ...experience.map(exp => ({ ...exp, type: 'experience' }))
  ].sort((a, b) => {
    // Sort by end date (most recent first)
    const aDate = parseInt(a.endDate) || new Date().getFullYear()
    const bDate = parseInt(b.endDate) || new Date().getFullYear()
    return bDate - aDate
  })

  // Personal interests/hobbies (you can customize this)
  const personalInfo = {
    // hobbies: [
    //   "Photography",
    //   "Reading Tech Blogs",
    //   "Open Source Contributions",
    //   "Traveling & Cultural Exploration"
    // ],
    interests: [
      "Human-Computer Interaction Research",
      "AI/ML Ethics",
      "Accessible Design",
      "Data Visualization"
    ],
    values: [
      "Continuous Learning",
      "User-Centered Design",
      "Collaboration & Teamwork",
      "Ethical Technology"
    ]
  }

  return (
    <main className="page about-page" id="about" role="main">
      <PageMeta
        title="About"
        description={`Background, experience, and skills — ${personal.title}. ${defaultDesc}`}
      />
      {/* About Me Section */}
      <section className="about-me-section scroll-animate" ref={aboutMeRef} aria-labelledby="about-me-heading">
        {/* Hero Intro */}
        <div className="about-intro scroll-animate-item">
          <h1 id="about-me-heading" className="about-intro-title">
            About <span className="heading-highlight">Me</span>
          </h1>
          <p className="about-intro-subtitle">
            {personal.tagline}
          </p>
          <p className="about-intro-lead">
            Strongest technical signals: end-to-end ML and RAG systems, computer vision pipelines, reproducible packaging
            (Docker, CI/CD, PyPI/Conda), plus research-grade data visualization and analytics UI from IIT Bombay and
            internships.
          </p>
          <div className="about-intro-actions" id="resume-cta">
            <Button
              type="primary"
              onClick={() => {
                const resumeUrl = personal.resumeUrl || '/resume.pdf'
                const link = document.createElement('a')
                link.href = resumeUrl
                link.download = 'Parth_Deshmukh_Resume_DS.pdf'
                link.target = '_blank'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              aria-label="Download resume"
            >
              Download Resume
            </Button>
            {personal.portfolioUrl ? (
              <Button
                type="secondary"
                onClick={() => setPortfolioModalOpen(true)}
                aria-label="View portfolio PDF"
              >
                View Portfolio
              </Button>
            ) : null}
          </div>
        </div>

        {/* Background - Left Aligned */}
        <div className="about-split about-split-1 scroll-animate-item">
          <div className="about-split-content">
            <div className="about-split-left">
              <div className="about-split-number">01</div>
              <h2 className="about-split-title">Background</h2>
              <div className="about-split-divider"></div>
              <p className="about-split-text">
                M.S. Computer Science at Texas A&M (expected May 2027), focused on AI, algorithms, and data mining.
                B.Tech in Information Technology from VIIT, Pune (May 2024), GPA 9.12/10.00.
              </p>
              <p className="about-split-text-secondary">
                Research intern at IIT Bombay on analytics dashboards and reporting tooling; UI/UX intern at HTS Tech
                Solutions. Publications with Springer and IEEE; led the UI/UX team at OIR, VIIT.
              </p>
            </div>
            <div className="about-split-visual">
              <div className="split-visual-content split-visual-1">
                <div className="visual-icon-large" aria-hidden="true">
                  <IconBackground />
                </div>
                <div className="visual-pattern"></div>
              </div>
            </div>
          </div>
        </div>

        {/* What Drives Me - Right Aligned */}
        <div className="about-split about-split-2 scroll-animate-item">
          <div className="about-split-content">
            <div className="about-split-visual">
              <div className="split-visual-content split-visual-2">
                <div className="visual-icon-large" aria-hidden="true">
                  <IconDrive />
                </div>
                <div className="visual-pattern"></div>
              </div>
            </div>
            <div className="about-split-right">
              <div className="about-split-number">02</div>
              <h2 className="about-split-title">What Drives Me</h2>
              <div className="about-split-divider"></div>
              <p className="about-split-text">
                Making complex data accessible drives me. I start with user needs whether developing platforms, 
                designing interfaces, or building ML models.
              </p>
              <p className="about-split-text-secondary">
                Technology should feel intuitive. I understand problems deeply before proposing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Vision - Left Aligned */}
        <div className="about-split about-split-3 scroll-animate-item">
          <div className="about-split-content">
            <div className="about-split-left">
              <div className="about-split-number">03</div>
              <h2 className="about-split-title">Vision</h2>
              <div className="about-split-divider"></div>
              <p className="about-split-text">
                Exploring AI, data visualization, and human-centered design. Building systems that augment 
                human capabilities while remaining transparent, ethical, and accessible.
              </p>
              <p className="about-split-text-secondary">
                Bridging technical excellence with practical applications to improve how people interact with information.
              </p>
            </div>
            <div className="about-split-visual">
              <div className="split-visual-content split-visual-3">
                <div className="visual-icon-large" aria-hidden="true">
                  <IconVision />
                </div>
                <div className="visual-pattern"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Snapshot Section */}
      <section className="about-section experience-snapshot-section scroll-animate" ref={experienceRef} aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="section-heading">
          Experience <span className="heading-highlight">Snapshot</span>
        </h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item scroll-animate-item">
              <div className="timeline-marker"></div>
              <div className="timeline-date">
                <div className="timeline-date-text">
                  {item.startDate}
                  <br />
                  {item.endDate}
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">
                    {item.type === 'education' ? item.degree : item.position}
                  </h3>
                  <span className="timeline-type-badge">{item.type === 'education' ? 'Education' : 'Work'}</span>
                </div>
                <h4 className="timeline-organization">
                  {item.type === 'education' ? item.institution : item.company}
                </h4>
                <p className="timeline-location">{item.location}</p>
                {item.type === 'education' && item.field && (
                  <p className="timeline-field">{item.field}</p>
                )}
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="timeline-technologies">
                    {item.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-small">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toolstack & Skills Section */}
      <section className="about-section skills-section scroll-animate" ref={skillsRef} aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="section-heading">
          Toolstack & <span className="heading-highlight">Skills</span>
        </h2>
        <div className="skills-grid">
          <div className="skill-category-card">
            <h3 className="skill-category-title">Programming Languages</h3>
            <div className="skill-tags">
              {skills.programming.slice(0, MAX_VISIBLE_SKILLS).map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
              {skills.programming.length > MAX_VISIBLE_SKILLS && (
                <button
                  className="skill-tag skill-tag-more"
                  onClick={() => handleShowMore('Programming Languages', skills.programming)}
                  aria-label={`Show ${skills.programming.length - MAX_VISIBLE_SKILLS} more programming languages`}
                >
                  ...
                </button>
              )}
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.slice(0, MAX_VISIBLE_SKILLS).map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
              {skills.frameworks.length > MAX_VISIBLE_SKILLS && (
                <button
                  className="skill-tag skill-tag-more"
                  onClick={() => handleShowMore('Frameworks & Libraries', skills.frameworks)}
                  aria-label={`Show ${skills.frameworks.length - MAX_VISIBLE_SKILLS} more frameworks & libraries`}
                >
                  ...
                </button>
              )}
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Tools & Platforms</h3>
            <div className="skill-tags">
              {skills.tools.slice(0, MAX_VISIBLE_SKILLS).map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
              {skills.tools.length > MAX_VISIBLE_SKILLS && (
                <button
                  className="skill-tag skill-tag-more"
                  onClick={() => handleShowMore('Tools & Platforms', skills.tools)}
                  aria-label={`Show ${skills.tools.length - MAX_VISIBLE_SKILLS} more tools & platforms`}
                >
                  ...
                </button>
              )}
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Design & Research</h3>
            <div className="skill-tags">
              {(() => {
                const designSkills = [
                  ...skills.tools.filter(tool => ['Figma'].includes(tool)),
                  ...['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
                ]
                return (
                  <>
                    {designSkills.slice(0, MAX_VISIBLE_SKILLS).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                    {designSkills.length > MAX_VISIBLE_SKILLS && (
                      <button
                        className="skill-tag skill-tag-more"
                        onClick={() => handleShowMore('Design & Research', designSkills)}
                        aria-label={`Show ${designSkills.length - MAX_VISIBLE_SKILLS} more design & research skills`}
                      >
                        ...
                      </button>
                    )}
                  </>
                )
              })()}
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Methodologies</h3>
            <div className="skill-tags">
              {skills.methodologies.slice(0, MAX_VISIBLE_SKILLS).map((methodology, index) => (
                <span key={index} className="skill-tag">{methodology}</span>
              ))}
              {skills.methodologies.length > MAX_VISIBLE_SKILLS && (
                <button
                  className="skill-tag skill-tag-more"
                  onClick={() => handleShowMore('Methodologies', skills.methodologies)}
                  aria-label={`Show ${skills.methodologies.length - MAX_VISIBLE_SKILLS} more methodologies`}
                >
                  ...
                </button>
              )}
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Domain Expertise</h3>
            <div className="skill-tags">
              {skills.domains.slice(0, MAX_VISIBLE_SKILLS).map((domain, index) => (
                <span key={index} className="skill-tag">{domain}</span>
              ))}
              {skills.domains.length > MAX_VISIBLE_SKILLS && (
                <button
                  className="skill-tag skill-tag-more"
                  onClick={() => handleShowMore('Domain Expertise', skills.domains)}
                  aria-label={`Show ${skills.domains.length - MAX_VISIBLE_SKILLS} more domain expertise areas`}
                >
                  ...
                </button>
              )}
            </div>
          </div>
        </div>
        
        <SkillsModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          categoryTitle={modalState.categoryTitle}
          skills={modalState.skills}
        />
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        isOpen={portfolioModalOpen}
        onClose={() => setPortfolioModalOpen(false)}
        portfolioUrl={personal.portfolioUrl}
      />

      {/* Outside of Work / Personal Section */}
      <section className="about-section personal-section scroll-animate" ref={personalRef} aria-labelledby="personal-heading">
        <h2 id="personal-heading" className="section-heading">
          Outside of <span className="heading-highlight">Work</span>
        </h2>
        <p className="about-personal-lead">
          A short snapshot of research interests and values — secondary to shipping reliable models and tools.
        </p>
        <div className="personal-content">
          {/* <div className="personal-category">
            <h3 className="personal-category-title">Hobbies & Interests</h3>
            <div className="personal-items">
              {personalInfo.hobbies.map((hobby, index) => (
                <div key={index} className="personal-item">
                  <span className="personal-icon">🎨</span>
                  <span className="personal-text">{hobby}</span>
                </div>
              ))}
            </div>
          </div> */}

          <div className="personal-category">
            <h3 className="personal-category-title">Areas of Interest</h3>
            <div className="personal-items">
              {personalInfo.interests.map((interest, index) => (
                <div key={index} className="personal-item">
                  <span className="personal-icon" aria-hidden="true">
                    <IconInterest />
                  </span>
                  <span className="personal-text">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="personal-category">
            <h3 className="personal-category-title">Values</h3>
            <div className="personal-items">
              {personalInfo.values.map((value, index) => (
                <div key={index} className="personal-item">
                  <span className="personal-icon" aria-hidden="true">
                    <IconValue />
                  </span>
                  <span className="personal-text">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
