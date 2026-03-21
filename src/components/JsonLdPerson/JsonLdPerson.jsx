import { Helmet } from 'react-helmet-async'
import { portfolioData } from '../../data/portfolioData'

export function JsonLdPerson() {
  const { personal } = portfolioData
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.fullName,
    url: personal.website,
    jobTitle: personal.title,
    email: personal.email,
    sameAs: [personal.linkedin, personal.github].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: personal.location,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
