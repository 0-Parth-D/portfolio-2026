import { StrictMode } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { caseStudies, caseStudyPath } from './data/caseStudies'

export { SITE_ORIGIN } from './data/portfolioData'

export const routes = ['/', '/about', '/work', '/contact', ...caseStudies.map(caseStudyPath)]

/** Rendered to 404.html; not listed in the sitemap. */
export const NOT_FOUND_ROUTE = '/404'

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <HelmetProvider context={{}}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
    // Large boundaries are otherwise outlined behind their fallback and revealed by
    // an inline script; static pages should ship the content inline.
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  )

  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}
