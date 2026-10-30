import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import './ProjectModal.css'

function ModalSection({ title, children }) {
  return (
    <section className="project-modal__section">
      <h3 className="project-modal__section-title mono-text">{title}</h3>
      <div className="project-modal__section-body">{children}</div>
    </section>
  )
}

function projectSections(project) {
  if (project.isPublication) {
    return [
      project.abstract && { title: 'Abstract', body: <p>{project.abstract}</p> },
      project.problem && { title: 'Context', body: <p>{project.problem}</p> },
      project.outcome && { title: 'Publication', body: <p>{project.outcome}</p> },
    ]
  }
  return [
    project.role && { title: 'Role', body: <p>{project.role}</p> },
    project.approach && { title: 'Approach', body: <p>{project.approach}</p> },
    project.contributions?.length > 0 && {
      title: 'What I built',
      body: (
        <ul className="project-modal__list">
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    project.outcome && { title: 'Outcome', body: <p>{project.outcome}</p> },
  ]
}

function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null)
  const scrollRef = useRef(null)

  useModal(isOpen, onClose, modalRef, scrollRef)

  if (!isOpen || !project) return null

  const lede = project.isPublication ? null : (project.problem ?? project.cardDescription)
  const sections = projectSections(project).filter(Boolean)
  const eyebrow = project.isPublication
    ? project.category
    : [project.category, project.date].filter(Boolean).join(' · ')

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <div className="project-modal-overlay" onClick={handleBackdropClick} data-lenis-prevent>
      <div
        className="project-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal__bar">
          <p className="project-modal__eyebrow mono-text">{eyebrow}</p>
          <button
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <span className="project-modal__close-label mono-text">Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="project-modal__scroll" ref={scrollRef} data-modal-scroll>
          <header className="project-modal__header">
            <h2 id="modal-title" className="project-modal__title display-text display-text--sm">
              {project.title}
            </h2>
            {lede && <p className="project-modal__lede">{lede}</p>}

            <div className="project-modal__meta-row">
              {project.technologies?.length > 0 && (
                <ul className="project-modal__tags" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="project-modal__tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              {(project.link || project.github) && (
                <div className="project-modal__links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__cta"
                    >
                      {project.isPublication ? 'Read paper' : 'Live demo'}{' '}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__cta"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {project.metrics?.length > 0 && (
              <dl className="project-modal__metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="project-modal__metric">
                    <dt className="project-modal__metric-value display-text">{metric.value}</dt>
                    <dd className="project-modal__metric-label mono-text">{metric.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </header>

          {project.image && (
            <figure className="project-modal__figure">
              <img src={project.image} alt={project.imageAlt ?? ''} />
            </figure>
          )}

          {sections.length > 0 && (
            <div className="project-modal__sections">
              {sections.map((section) => (
                <ModalSection key={section.title} title={section.title}>
                  {section.body}
                </ModalSection>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
