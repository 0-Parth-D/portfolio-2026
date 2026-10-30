import { Helmet } from 'react-helmet-async'
import { portfolioData, SITE_ORIGIN } from '../../data/portfolioData'
import { caseStudyPath } from '../../data/caseStudies'

export function JsonLdCaseStudy({ project }) {
  const { personal } = portfolioData
  const url = `${SITE_ORIGIN}${caseStudyPath(project)}`

  const work = {
    '@context': 'https://schema.org',
    '@type': project.github ? 'SoftwareSourceCode' : 'CreativeWork',
    name: project.title,
    description: `${project.problem} ${project.outcome}`,
    url,
    keywords: project.technologies.join(', '),
    author: { '@type': 'Person', name: personal.fullName, url: personal.website },
    ...(project.image && { image: `${SITE_ORIGIN}${project.image}` }),
    ...(project.github && { codeRepository: project.github }),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { name: 'Home', item: `${SITE_ORIGIN}/` },
      { name: 'Work', item: `${SITE_ORIGIN}/work` },
      { name: project.title, item: url },
    ].map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(work)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
    </Helmet>
  )
}
