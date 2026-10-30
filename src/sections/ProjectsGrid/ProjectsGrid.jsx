import { useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import SectionCta from '../../components/SectionCta/SectionCta'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import { PREVIEW_LAYOUT, BENTO_LAYOUT, getBentoPlacementStyle } from './projectGridLayouts'
import { bySortDateDesc } from './sortProjects'
import './ProjectsGrid.css'

const projectsById = Object.fromEntries(portfolioData.projects.map((p) => [p.id, p]))

function ProjectsGrid({ variant = 'full', embedded = false }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const { projectsSection, projects, stats } = portfolioData
  const isPreview = variant === 'preview'
  const isBento = variant === 'asymmetric' || variant === 'bento'

  const layoutMap = isPreview ? PREVIEW_LAYOUT : isBento ? BENTO_LAYOUT : null

  const visibleProjects = layoutMap
    ? Object.keys(layoutMap).map((id) => projectsById[id]).filter(Boolean)
    : projects.filter((p) => p.tier !== 'more').sort(bySortDateDesc)

  const gridClass = [
    'projects-grid__grid',
    (isPreview || isBento) && 'projects-grid__grid--bento',
    isPreview && 'projects-grid__grid--preview',
    isBento && 'projects-grid__grid--full',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
        <MotionReveal>
          <MotionItem>
            {!isBento && (
              embedded && isPreview ? (
                <h3 className="projects-grid__heading display-text display-text--sm">
                  {projectsSection.heading}
                </h3>
              ) : (
                <h2 id="projects-heading" className="projects-grid__heading display-text display-text--sm">
                  {projectsSection.heading}
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
              {projectsSection.subtext}
            </p>
            {isPreview && <p className="projects-grid__metrics mono-text">{stats.metrics}</p>}
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
                    compact={layout?.variant === 'compact'}
                    sizeVariant={layout?.variant}
                  />
                </MotionItem>
              )
            })}
          </div>

          {isPreview && !embedded && <SectionCta to="/work">View all work →</SectionCta>}
        </MotionReveal>
  )

  const modal = (
    <ProjectModal
      project={selectedProject}
      isOpen={!!selectedProject}
      onClose={() => setSelectedProject(null)}
    />
  )

  return (
    <section
      id="projects"
      className={[
        'projects-grid section',
        isPreview && !embedded && 'section--preview',
        embedded && 'projects-grid--embedded',
      ]
        .filter(Boolean)
        .join(' ')}
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
