import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LenisContext } from './context/LenisContext'
import { useLenis } from './hooks/useLenis'
import './App.css'

const Landing = lazy(() => import('./pages/Landing/Landing'))
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const WorkPage = lazy(() => import('./pages/Work/WorkPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
const CaseStudyPage = lazy(() => import('./pages/CaseStudy/CaseStudyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'))
const CustomCursor = lazy(() => import('./components/CustomCursor/CustomCursor'))

function PageFallback() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      Loading…
    </div>
  )
}

function App() {
  const lenisRef = useLenis()

  return (
    <LenisContext.Provider value={lenisRef}>
      <div className="app">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      </div>
    </LenisContext.Provider>
  )
}

export default App
