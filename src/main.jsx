import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

document.head.querySelectorAll('[data-prerender]').forEach((el) => el.remove())

// Hosts may serve index.html for unknown URLs, so only hydrate markup rendered for this URL.
// 404.html is only ever served for unknown URLs, which the router also renders as not found.
const prerenderedRoute = container.dataset.route
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const canHydrate = prerenderedRoute === currentPath || prerenderedRoute === '/404'

if (container.firstElementChild && canHydrate) {
  hydrateRoot(container, app)
} else {
  container.replaceChildren()
  createRoot(container).render(app)
}
