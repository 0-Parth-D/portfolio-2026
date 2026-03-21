import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import './App.css'

const Home = lazy(() => import('./pages/Home/Home'))
const Work = lazy(() => import('./pages/Work/Work'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))

function PageFallback() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      Loading…
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Menu />
      <div id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App
