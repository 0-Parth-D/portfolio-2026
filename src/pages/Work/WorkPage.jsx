import PageLayout from '../../components/PageLayout/PageLayout'
import StatsBlock from '../../sections/StatsBlock/StatsBlock'
import ExperienceTicker from '../../sections/ExperienceTicker/ExperienceTicker'
import ProjectsGrid from '../../sections/ProjectsGrid/ProjectsGrid'
import SpecialtyTags from '../../sections/SpecialtyTags/SpecialtyTags'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { portfolioData } from '../../data/portfolioData'
import './WorkPage.css'

function WorkPage() {
  const { personal, work } = portfolioData

  return (
    <PageLayout>
      <PageMeta
        title={`Work · ${personal.displayName}`}
        description="Research metrics, experience timeline, and a full archive of ML projects and publications."
        path="/work"
      />
      <main id="main-content" className="work-page">
        <header className="work-page__hero section">
          <div className="container">
            <p className="work-page__eyebrow mono-text">Work</p>
            <h1 className="work-page__title display-text">RESEARCH THAT SHIPS</h1>
            <p className="work-page__lede">{work.pageLede}</p>
          </div>
        </header>
        <ExperienceTicker />
        <StatsBlock variant="full" />
        <ProjectsGrid variant="asymmetric" embedded />
        <SpecialtyTags />
      </main>
    </PageLayout>
  )
}

export default WorkPage
