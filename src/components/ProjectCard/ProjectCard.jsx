import './ProjectCard.css'

function ProjectCard({ project, onClick, compact = false, sizeVariant }) {
  const cardClass = [
    'project-card',
    project.featuredSpan && 'project-card--featured',
    compact && 'project-card--compact',
    sizeVariant && `project-card--${sizeVariant}`,
    sizeVariant && 'project-card--bento',
  ]
    .filter(Boolean)
    .join(' ')

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
      <div className="project-card__image-wrap">
        <img src={project.image} alt="" className="project-card__image" loading="lazy" />
        <span className="project-card__date">{project.date}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
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
    </article>
  )
}

export default ProjectCard
