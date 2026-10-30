import SkipLink from '../SkipLink/SkipLink'
import StickyNav from '../StickyNav/StickyNav'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function PageLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <StickyNav />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
