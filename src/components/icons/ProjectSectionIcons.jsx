/** Minimal stroke icons for project modal sections (24x24 viewBox). */

const svgAttrs = {
  viewBox: '0 0 24 24',
  className: 'modal-section-icon-svg',
  'aria-hidden': true,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconRole() {
  return (
    <svg {...svgAttrs}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function IconLayers() {
  return (
    <svg {...svgAttrs}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  )
}

export function IconDocument() {
  return (
    <svg {...svgAttrs}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6M8 9h4" />
    </svg>
  )
}

export function IconTarget() {
  return (
    <svg {...svgAttrs}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export function IconSettings() {
  return (
    <svg {...svgAttrs}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

export function IconOutcome() {
  return (
    <svg {...svgAttrs}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m22 4-10 10-3-3" />
    </svg>
  )
}
