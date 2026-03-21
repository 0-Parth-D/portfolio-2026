/**
 * Resolves the live accent color from CSS for Three.js / R3F.
 * --color-accent may be color-mix(...), so we resolve via computed style.
 */
const FALLBACK = '#b12b97'

/**
 * @returns {string} Color string Three.js accepts (`#hex` or `rgb(...)` / `rgba(...)`).
 */
export function getAccentColorHex() {
  if (typeof document === 'undefined') return FALLBACK
  const probe = document.createElement('span')
  probe.setAttribute('aria-hidden', 'true')
  probe.style.cssText =
    'position:fixed;left:-9999px;top:0;visibility:hidden;color:var(--color-accent)'
  document.body.appendChild(probe)
  const resolved = getComputedStyle(probe).color
  document.body.removeChild(probe)
  if (resolved && resolved !== 'rgba(0, 0, 0, 0)') {
    return resolved
  }
  return FALLBACK
}
