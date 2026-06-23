import { lazy, Suspense } from 'react'
import SkipLink from '../SkipLink/SkipLink'
import StickyNav from '../StickyNav/StickyNav'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const CustomCursor = lazy(() => import('../CustomCursor/CustomCursor'))

function PageLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <StickyNav />
      {children}
      <Footer />
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
    </>
  )
}

export default PageLayout
