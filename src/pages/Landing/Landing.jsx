import PageLayout from '../../components/PageLayout/PageLayout'
import Hero from '../../sections/Hero/Hero'
import ExperienceTicker from '../../sections/ExperienceTicker/ExperienceTicker'
import AboutBlurb from '../../sections/AboutBlurb/AboutBlurb'
import ProjectsGrid from '../../sections/ProjectsGrid/ProjectsGrid'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { JsonLdPerson } from '../../components/JsonLdPerson/JsonLdPerson'
import './Landing.css'

function Landing() {
  return (
    <PageLayout>
      <PageMeta path="/" />
      <JsonLdPerson />
      <main id="main-content" className="landing">
        <Hero />
        <ExperienceTicker />
        <ProjectsGrid variant="preview" />
        <AboutBlurb variant="preview" />
      </main>
    </PageLayout>
  )
}

export default Landing
