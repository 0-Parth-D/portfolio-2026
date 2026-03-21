import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { portfolioData } from '../../data/portfolioData'

const { siteName, defaultDescription } = portfolioData.seo

/**
 * Per-route title, description, canonical, Open Graph, and Twitter cards.
 */
export function PageMeta({ title, description }) {
  const { pathname } = useLocation()
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const pageTitle = title ? `${title} · ${siteName}` : `${siteName} · ML & Software Portfolio`
  const desc = description || defaultDescription
  const url = `${origin}${pathname}`
  const imageUrl = `${origin}/og-image.png`

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
