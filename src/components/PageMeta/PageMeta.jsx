import { Helmet } from 'react-helmet-async'
import { portfolioData, SITE_ORIGIN } from '../../data/portfolioData'

const { siteName, defaultDescription } = portfolioData.seo
const { personal } = portfolioData

export function PageMeta({ title, description, path = '/' }) {
  const pageTitle = title ?? `${siteName} · ${personal.title}`
  const metaDescription = description ?? defaultDescription
  const url = `${SITE_ORIGIN}${path}`
  const imageUrl = `${SITE_ORIGIN}/og-image.png`

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${personal.fullName}, ${personal.title}`} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
