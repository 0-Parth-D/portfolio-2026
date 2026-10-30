import PageLayout from '../../components/PageLayout/PageLayout'
import StatsBlock from '../../sections/StatsBlock/StatsBlock'
import ExperienceTicker from '../../sections/ExperienceTicker/ExperienceTicker'
import ProjectsGrid from '../../sections/ProjectsGrid/ProjectsGrid'
import MoreWork from '../../sections/MoreWork/MoreWork'
import SpecialtyTags from '../../sections/SpecialtyTags/SpecialtyTags'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { portfolioData } from '../../data/portfolioData'
import './WorkPage.css'

function WorkPage() {
  const { work } = portfolioData

  return (
    <PageLayout>
      <PageMeta
        title={`Work · ${portfolioData.seo.siteName}`}
        description="Experience, featured backend and applied AI projects with measured results, more work, and publications."
        path="/work"
      />
      <main id="main-content" className="work-page">
        <header className="work-page__hero section">
          <div className="container">
            <p className="work-page__eyebrow mono-text">Work</p>
            <h1 className="work-page__title display-text">{work.title}</h1>
            <p className="work-page__lede">{work.pageLede}</p>
          </div>
        </header>
        <ExperienceTicker />
        <StatsBlock />
        <ProjectsGrid variant="asymmetric" embedded />
        <MoreWork />
        <SpecialtyTags />
      </main>
    </PageLayout>
  )
}

export default WorkPage
