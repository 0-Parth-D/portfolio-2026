import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import './ProjectModal.css'

function ProjectModal({ project, isOpen, onClose }) {
  const modalContentRef = useRef(null)
  
  // Use the custom modal hook for scroll lock, Lenis, and scroll restoration
  useModal(isOpen, onClose, modalContentRef)

  if (!isOpen || !project) return null

  const handleBackdropClick = (e) => {
    // Only close if clicking the overlay itself, not the content
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleContentClick = (e) => {
    // Prevent clicks inside modal from closing it
    e.stopPropagation()
  }

  return createPortal(
    <div 
      className="project-modal-overlay" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="project-modal-content" 
        ref={modalContentRef}
        onClick={handleContentClick}
        >
          <button 
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>

        {project.image && (
          <div className="project-modal-image">
            <img 
              src={project.image} 
              alt={project.title} 
            />
          </div>
        )}

        <div className="project-modal-header">
          <h2 id="modal-title" className="project-modal-title">{project.title}</h2>
          <div className="project-modal-tech-badges">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-section">
            <div className="modal-section-icon">📋</div>
            <div className="modal-section-content-wrapper">
              <h3 className="modal-section-title">Overview</h3>
              <p className="modal-section-content">{project.description}</p>
            </div>
          </div>

          <div className="project-modal-section">
            <div className="modal-section-icon">🎯</div>
            <div className="modal-section-content-wrapper">
              <h3 className="modal-section-title">Problem</h3>
              <p className="modal-section-content">
                {project.problem || `Addressing the challenge of ${project.title.toLowerCase()} through data-driven insights and user-centered design.`}
              </p>
            </div>
          </div>

          <div className="project-modal-section">
            <div className="modal-section-icon">⚙️</div>
            <div className="modal-section-content-wrapper">
              <h3 className="modal-section-title">Approach</h3>
              <p className="modal-section-content">
                {project.approach || `Leveraged ${project.technologies.join(', ')} to build a solution that prioritizes usability, performance, and scalability.`}
              </p>
            </div>
          </div>

          <div className="project-modal-section">
            <div className="modal-section-icon">✨</div>
            <div className="modal-section-content-wrapper">
              <h3 className="modal-section-title">Outcome</h3>
              <p className="modal-section-content">
                {project.outcome || `Delivered a robust solution that effectively addresses the core requirements and provides a solid foundation for future enhancements.`}
              </p>
            </div>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="project-modal-section project-modal-metrics">
              <h3 className="modal-section-title">Key Metrics</h3>
              <div className="modal-metrics-grid">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="modal-metric-item">
                    <span className="modal-metric-value">{metric.value}</span>
                    <span className="modal-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="project-modal-footer">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-modal-link"
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
              className="project-modal-link"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal

