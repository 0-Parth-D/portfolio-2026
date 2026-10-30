import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes, NOT_FOUND_ROUTE, SITE_ORIGIN } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)
const template = await readFile(path.join(distDir, 'index.html'), 'utf8')

// React 19 emits hoistable <title>/<meta>/<link> tags ahead of the app markup when
// rendering a fragment. They are moved into <head> and tagged so main.jsx can drop
// them before hydration, letting Helmet own head tags on client-side navigation.
const HOISTED = /^(?:<title>[^<]*<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)/

function splitHoisted(html) {
  const tags = []
  let rest = html
  for (let match = rest.match(HOISTED); match; match = rest.match(HOISTED)) {
    tags.push(match[0])
    rest = rest.slice(match[0].length)
  }
  return { tags, body: rest }
}

const markTag = (tag) => tag.replace(/^<(title|meta|link)\b/, '<$1 data-prerender=""')

const fileForRoute = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`)

for (const route of [...routes, NOT_FOUND_ROUTE]) {
  const { tags, body } = splitHoisted(await render(route))
  if (!tags.some((tag) => tag.startsWith('<title'))) {
    throw new Error(`No <title> rendered for ${route}`)
  }

  // data-route lets main.jsx hydrate only when this markup matches the URL it was served at.
  const page = template
    .replace(/<title>[^<]*<\/title>\s*/, '')
    .replace('<!--app-head-->', tags.map(markTag).join('\n    '))
    .replace('<div id="root">', `<div id="root" data-route="${route}">`)
    .replace('<!--app-html-->', body)

  const file = path.join(distDir, fileForRoute(route))
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, page)
  console.log(`prerendered ${route} -> dist/${fileForRoute(route)}`)
}

const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>\n    <loc>${SITE_ORIGIN}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml: ${routes.length} urls`)

await rm(ssrDir, { recursive: true, force: true })
