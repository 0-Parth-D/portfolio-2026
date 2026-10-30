import { Link } from 'react-router-dom'
import { caseStudyPath } from '../../data/caseStudies'
import './ProjectCard.css'

function ProjectCard({ project, onClick, compact = false, sizeVariant }) {
  const cardClass = [
    'project-card',
    project.featuredSpan && 'project-card--featured',
    compact && 'project-card--compact',
    sizeVariant && `project-card--${sizeVariant}`,
    sizeVariant && 'project-card--bento',
    !project.image && 'project-card--text',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {project.image && (
        <div className="project-card__image-wrap">
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            className="project-card__image"
            loading="lazy"
            decoding="async"
          />
          <span className="project-card__date">{project.date}</span>
        </div>
      )}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">
            {project.category}
            {!project.image && project.date && ` · ${project.date}`}
          </span>
          <span className="project-card__arrow" aria-hidden="true">
            →
          </span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.cardDescription}</p>
        <div className="project-card__tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (project.caseStudy) {
    return (
      <Link
        to={caseStudyPath(project)}
        className={`${cardClass} project-card--link`}
        aria-label={`Read case study: ${project.title}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <article
      className={cardClass}
      onClick={() => onClick(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(project)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
    >
      {content}
    </article>
  )
}

export default ProjectCard
