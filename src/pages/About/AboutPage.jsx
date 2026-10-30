import PageLayout from '../../components/PageLayout/PageLayout'
import AboutBlurb from '../../sections/AboutBlurb/AboutBlurb'
import PhilosophyQuote from '../../sections/PhilosophyQuote/PhilosophyQuote'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { JsonLdPerson } from '../../components/JsonLdPerson/JsonLdPerson'
import { portfolioData } from '../../data/portfolioData'
import './AboutPage.css'

function AboutPage() {
  const { about } = portfolioData

  return (
    <PageLayout>
      <PageMeta
        title={`About · ${portfolioData.seo.siteName}`}
        description="Education, skills, publications, and the story behind how I build backend and AI systems."
        path="/about"
      />
      <JsonLdPerson />
      <main id="main-content" className="about-page">
        <header className="about-page__hero section">
          <div className="container">
            <p className="about-page__eyebrow mono-text">About</p>
            <h1 className="about-page__title display-text">THE JOURNEY</h1>
            <p className="about-page__lede">{about.pageLede}</p>
          </div>
        </header>
        <AboutBlurb variant="full" />
        <PhilosophyQuote />
      </main>
    </PageLayout>
  )
}

export default AboutPage
