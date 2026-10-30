import { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioData } from '../../data/portfolioData'
import { caseStudyPath } from '../../data/caseStudies'
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import { bySortDateDesc } from '../ProjectsGrid/sortProjects'
import './MoreWork.css'

const moreProjects = portfolioData.projects.filter((p) => p.tier === 'more').sort(bySortDateDesc)

function MoreWorkRow({ project, onOpen, children }) {
  if (project.caseStudy) {
    return (
      <Link
        to={caseStudyPath(project)}
        className="more-work__row"
        aria-label={`Read case study: ${project.title}`}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      type="button"
      className="more-work__row"
      onClick={() => onOpen(project)}
      aria-label={`View project: ${project.title}`}
    >
      {children}
    </button>
  )
}

function MoreWork() {
  const [selectedProject, setSelectedProject] = useState(null)
  const { projectsSection } = portfolioData

  return (
    <section id="more-work" className="more-work section" aria-labelledby="more-work-heading">
      <div className="container">
        <MotionReveal>
          <MotionItem>
            <h2 id="more-work-heading" className="more-work__heading display-text display-text--sm">
              {projectsSection.moreHeading}
            </h2>
            <p className="more-work__subtext">{projectsSection.moreSubtext}</p>
          </MotionItem>

          <ul className="more-work__list">
            {moreProjects.map((project) => (
              <MotionItem key={project.id} as="li" className="more-work__item">
                <MoreWorkRow project={project} onOpen={setSelectedProject}>
                  <span className="more-work__date mono-text">{project.date}</span>
                  <span className="more-work__main">
                    <span className="more-work__title">{project.title}</span>
                    <span className="more-work__desc">{project.cardDescription}</span>
                  </span>
                  <span className="more-work__tags" aria-hidden="true">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="more-work__tag">
                        {tech}
                      </span>
                    ))}
                  </span>
                  <span className="more-work__arrow" aria-hidden="true">
                    →
                  </span>
                </MoreWorkRow>
              </MotionItem>
            ))}
          </ul>
        </MotionReveal>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default MoreWork
