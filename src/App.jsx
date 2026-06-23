import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LenisContext } from './context/LenisContext'
import { useLenis } from './hooks/useLenis'
import './App.css'

const Landing = lazy(() => import('./pages/Landing/Landing'))
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const WorkPage = lazy(() => import('./pages/Work/WorkPage'))
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
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </Suspense>
      </div>
    </LenisContext.Provider>
  )
}

export default App
