# parthdeshmukh.vercel.app

Personal portfolio for Parth Deshmukh, Software Engineer (backend and applied AI systems), MS Computer Science at Texas A&M, graduating May 2027.

Built with Vite 7, React 19, React Router 7, Framer Motion and Lenis. Deployed on Vercel.

## Develop

```bash
npm ci
npm run dev       # http://localhost:5173
npm run lint
npm run build     # client build + prerender of every route, 404.html and sitemap.xml
npm run preview   # serve dist/ locally
```

## How the build works

`npm run build` runs three steps:

1. `vite build` produces the client bundle in `dist/`.
2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` builds a server render entry.
3. `node scripts/prerender.mjs` renders each route in `routes` (from `src/entry-server.jsx`) to static HTML (`/work` → `dist/work.html`, `/work/dream-lab` → `dist/work/dream-lab.html`), moves the page's `<title>`, meta and canonical tags into `<head>`, writes `dist/404.html` and `dist/sitemap.xml`, and removes `dist-ssr/`.

Routes are `/`, `/about`, `/work`, `/contact`, plus `/work/<id>` for every project with `caseStudy: true`. The client hydrates prerendered markup only when its `data-route` matches the URL (`src/main.jsx`) and otherwise renders from scratch, as in dev. `vercel.json` enables `cleanUrls` so `/work` serves `work.html`, redirects `/projects` to `/work`, and leaves unknown URLs to Vercel's `404.html`.

Code that touches `window` or `document` must run inside effects or `useSyncExternalStore` (see `CustomCursor`) so the server render and first client render match.

## Editing content

All copy lives in `src/data/portfolioData.js`:

- `personal`: name, title, links and the resume PDFs offered in the resume menu (`public/resume/`).
- `hero`, `ticker`, `stats`, `about`, `philosophy`: landing and about page copy.
- `now`: the "Now" line in the hero and on About. Bump `updated` whenever the items change.
- `experience`, `education`, `skills`, `publications`.
- `projects`: each entry has a `tier` (`featured`, `more` or `publication`) and a `sortDate` (`YYYY-MM`). Featured projects use a diagram from `public/projects/<id>.svg` with `imageAlt`.

Grid placement for featured projects and publications is in `src/sections/ProjectsGrid/projectGridLayouts.js` (`PREVIEW_LAYOUT` for the home page, `BENTO_LAYOUT` for `/work`). Projects with `tier: 'more'` appear in the "More work" list on `/work`.

Set `caseStudy: true` on a project to give it a page at `/work/<id>` (built from its `problem`, `approach`, `contributions`, `outcome`, `role` and `metrics`) and its card links straight to that page instead of opening the project modal. When you add a new top-level page, add it to `routes` in `src/entry-server.jsx`; the sitemap is generated from that list.

## Assets

- `public/fonts/`: self-hosted woff2 files (Bebas Neue and Great Vibes latin subsets, Switzer 400/500/700), declared in `src/styles/typography.css`. The two above-the-fold faces are preloaded in `index.html`.

- `public/projects/*.svg`: project diagrams. Use XML entities (`&#183;`, `&#8594;`) for non-ASCII characters.
- `public/og-image.png`: 1200×630 social preview.
- `public/resume/`: downloadable resume PDFs. `public/resume.pdf` is kept as a stable link to the backend resume.
