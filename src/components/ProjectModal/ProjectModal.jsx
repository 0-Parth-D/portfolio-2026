import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import {
  IconRole,
  IconLayers,
  IconDocument,
  IconTarget,
  IconSettings,
  IconOutcome,
} from '../icons/ProjectSectionIcons'
import './ProjectModal.css'

function getPublicationBadge(project) {
  if (!project?.isPublication) return null
  const date = project.date || ''
  if (date.includes('Springer')) return 'Springer'
  if (date.includes('IEEE')) return 'IEEE'
  const publisher = project.technologies?.find(
    (t) => t.includes('Springer') || t.includes('IEEE')
  )
  if (publisher?.includes('Springer')) return 'Springer'
  if (publisher?.includes('IEEE')) return 'IEEE'
  return null
}

function ModalSection({ icon: Icon, title, children }) {
  return (
    <section className="project-modal-section">
      {Icon && (
        <div className="project-modal-section__icon" aria-hidden="true">
          <Icon />
        </div>
      )}
      <div className="project-modal-section__body">
        <h3 className="project-modal-section__title">{title}</h3>
        {children}
      </div>
    </section>
  )
}

function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null)
  const scrollRef = useRef(null)

  useModal(isOpen, onClose, modalRef, scrollRef)

  if (!isOpen || !project) return null

  const publicationBadge = getPublicationBadge(project)

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <div
      className="project-modal-overlay"
      onClick={handleBackdropClick}
      data-lenis-prevent
    >
      <div
        className="project-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <span aria-hidden="true">×</span>
        </button>

        {project.image && (
          <div className="project-modal__hero">
            <img src={project.image} alt="" />
          </div>
        )}

        <header className="project-modal__header">
          <div className="project-modal__meta">
            {project.category && (
              <span className="project-modal__category">{project.category}</span>
            )}
            {project.date && (
              <span className="project-modal__date">{project.date}</span>
            )}
          </div>

          <h2 id="modal-title" className="project-modal__title">
            {project.title}
          </h2>

          {publicationBadge && (
            <span className="project-modal__publisher-badge">{publicationBadge}</span>
          )}

          {project.technologies?.length > 0 && (
            <ul className="project-modal__tags" aria-label="Technologies">
              {project.technologies.map((tech) => (
                <li key={tech} className="project-modal__tag">
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div className="project-modal__scroll" ref={scrollRef} data-modal-scroll>
          <div className="project-modal__body">
            {project.isPublication ? (
              <>
                {project.abstract && (
                  <ModalSection title="Abstract">
                    <p className="project-modal__text">{project.abstract}</p>
                  </ModalSection>
                )}
                {project.problem && (
                  <ModalSection icon={IconTarget} title="Context">
                    <p className="project-modal__text">{project.problem}</p>
                  </ModalSection>
                )}
                {project.outcome && (
                  <ModalSection icon={IconOutcome} title="Publication">
                    <p className="project-modal__text">{project.outcome}</p>
                  </ModalSection>
                )}
              </>
            ) : (
              <>
                {project.role && (
                  <ModalSection icon={IconRole} title="Role">
                    <p className="project-modal__text">{project.role}</p>
                  </ModalSection>
                )}

                {project.contributions?.length > 0 && (
                  <ModalSection icon={IconLayers} title="What I built">
                    <ul className="project-modal__list">
                      {project.contributions.map((item) => (
                        <li key={item} className="project-modal__text">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </ModalSection>
                )}

                {(project.description || project.cardDescription) && (
                  <ModalSection icon={IconDocument} title="Overview">
                    <p className="project-modal__text">
                      {project.description || project.cardDescription}
                    </p>
                  </ModalSection>
                )}

                {project.problem && (
                  <ModalSection icon={IconTarget} title="Problem">
                    <p className="project-modal__text">{project.problem}</p>
                  </ModalSection>
                )}

                {project.approach && (
                  <ModalSection icon={IconSettings} title="Approach">
                    <p className="project-modal__text">{project.approach}</p>
                  </ModalSection>
                )}

                {project.outcome && (
                  <ModalSection icon={IconOutcome} title="Outcome">
                    <p className="project-modal__text">{project.outcome}</p>
                  </ModalSection>
                )}

                {project.metrics?.length > 0 && (
                  <section className="project-modal-section project-modal-section--metrics">
                    <h3 className="project-modal-section__title">Key metrics</h3>
                    <dl className="project-modal__metrics">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="project-modal__metric">
                          <dt className="project-modal__metric-value">{metric.value}</dt>
                          <dd className="project-modal__metric-label">{metric.label}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                )}
              </>
            )}
          </div>
        </div>

        {(project.link || project.github) && (
          <footer className="project-modal__footer">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal__cta"
              >
                {project.isPublication ? 'Read publication' : 'View project'}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal__cta"
              >
                GitHub
              </a>
            )}
          </footer>
        )}
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
