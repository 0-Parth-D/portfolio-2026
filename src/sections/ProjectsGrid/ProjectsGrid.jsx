import { useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import SectionCta from '../../components/SectionCta/SectionCta'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import {
  PREVIEW_PROJECT_IDS,
  PREVIEW_LAYOUT,
  BENTO_LAYOUT,
  getBentoPlacementStyle,
} from './projectGridLayouts'
import './ProjectsGrid.css'

function ProjectsGrid({ variant = 'full', embedded = false }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const { projectsSection, projects } = portfolioData
  const isPreview = variant === 'preview'
  const isBento = variant === 'asymmetric' || variant === 'bento'

  const visibleProjects = isPreview
    ? projects.filter((p) => PREVIEW_PROJECT_IDS.includes(p.id))
    : projects

  const gridClass = [
    'projects-grid__grid',
    (isPreview || isBento) && 'projects-grid__grid--bento',
    isPreview && 'projects-grid__grid--preview',
    isBento && 'projects-grid__grid--full',
  ]
    .filter(Boolean)
    .join(' ')

  const layoutMap = isPreview ? PREVIEW_LAYOUT : isBento ? BENTO_LAYOUT : null

  const content = (
        <MotionReveal>
          <MotionItem>
            {!isBento && (
              embedded && isPreview ? (
                <h3 className="projects-grid__heading display-text display-text--sm">
                  FEATURED WORK
                </h3>
              ) : (
                <h2 id="projects-heading" className="projects-grid__heading display-text display-text--sm">
                  {isPreview ? 'FEATURED WORK' : projectsSection.heading}
                </h2>
              )
            )}
            {isBento && !embedded && (
              <h2 id="projects-heading" className="sr-only">
                All projects
              </h2>
            )}
            {isBento && embedded && (
              <h2 id="projects-heading" className="projects-grid__heading display-text display-text--sm">
                {projectsSection.heading}
              </h2>
            )}
            <p className={`projects-grid__subtext${isBento ? ' projects-grid__subtext--wide' : ''}`}>
              {isPreview
                ? 'Recent builds — LLM fine-tuning, RAG, multi-agent research, and computer vision.'
                : projectsSection.subtext}
            </p>
          </MotionItem>

          <div className={gridClass}>
            {visibleProjects.map((project) => {
              const layout = layoutMap?.[project.id]
              const itemClass = [
                layout && 'projects-grid__item--placed',
                layout && `projects-grid__item--${project.id}`,
                isPreview && 'projects-grid__item--preview',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <MotionItem
                  key={project.id}
                  className={itemClass || undefined}
                  style={getBentoPlacementStyle(layout)}
                >
                  <ProjectCard
                    project={project}
                    onClick={setSelectedProject}
                    compact={isPreview && layout?.variant === 'compact'}
                    sizeVariant={layout?.variant}
                  />
                </MotionItem>
              )
            })}
          </div>

          {isPreview && !embedded && <SectionCta to="/work">View work →</SectionCta>}
        </MotionReveal>
  )

  const modal = (
    <ProjectModal
      project={selectedProject}
      isOpen={!!selectedProject}
      onClose={() => setSelectedProject(null)}
    />
  )

  if (embedded) {
    return (
      <section
        id="projects"
        className="projects-grid section projects-grid--embedded"
        aria-labelledby="projects-heading"
      >
        <div className="container">
          {content}
        </div>
        {modal}
      </section>
    )
  }

  return (
    <section
      id="projects"
      className={`projects-grid section${isPreview ? ' section--preview' : ''}`}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        {content}
      </div>
      {modal}
    </section>
  )
}

export default ProjectsGrid
