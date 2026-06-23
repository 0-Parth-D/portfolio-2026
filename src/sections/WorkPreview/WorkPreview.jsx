import StatsBlock from '../StatsBlock/StatsBlock'
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid'
import SectionCta from '../../components/SectionCta/SectionCta'
import './WorkPreview.css'

function WorkPreview() {
  return (
    <section
      id="work"
      className="work-preview section section--preview"
      aria-labelledby="work-heading"
    >
      <div className="container">
        <StatsBlock variant="preview" embedded />
        <ProjectsGrid variant="preview" embedded />
        <SectionCta to="/work">View all work →</SectionCta>
      </div>
    </section>
  )
}

export default WorkPreview
