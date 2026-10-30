/**
 * Bento grid placement — explicit column/row spans per project.
 * Desktop: 12-column grid in two-row bands so every image card gets enough height.
 * Tablet (810–1199px): 6-column grid, two cards per band.
 * Mobile (<810px): single column in layout order (handled in CSS).
 *
 * Variants: hero | wide | tall | square | compact
 * Key order is the reading order on mobile and for screen readers, and matches
 * the visual order on desktop.
 */

const FEATURED_BANDS = {
  'dream-lab': {
    gridColumn: '1 / 6',
    gridRow: '1 / 3',
    tabletColumn: '1 / 4',
    tabletRow: '1 / 3',
    variant: 'square',
  },
  'realtime-kg': {
    gridColumn: '6 / 13',
    gridRow: '1 / 3',
    tabletColumn: '4 / 7',
    tabletRow: '1 / 3',
    variant: 'wide',
  },
  'rag-assistant': {
    gridColumn: '1 / 8',
    gridRow: '3 / 5',
    tabletColumn: '1 / 4',
    tabletRow: '3 / 5',
    variant: 'wide',
  },
  'clinical-trials': {
    gridColumn: '8 / 13',
    gridRow: '3 / 5',
    tabletColumn: '4 / 7',
    tabletRow: '3 / 5',
    variant: 'square',
  },
}

/** Home preview — top 4 featured projects */
export const PREVIEW_LAYOUT = FEATURED_BANDS

export const PREVIEW_PROJECT_IDS = Object.keys(PREVIEW_LAYOUT)

/** Full /work page — 6 featured projects + 2 publications */
export const BENTO_LAYOUT = {
  ...FEATURED_BANDS,
  'llm-fine-tuning': {
    gridColumn: '1 / 7',
    gridRow: '5 / 7',
    tabletColumn: '1 / 4',
    tabletRow: '5 / 7',
    variant: 'wide',
  },
  'multi-agent': {
    gridColumn: '7 / 13',
    gridRow: '5 / 7',
    tabletColumn: '4 / 7',
    tabletRow: '5 / 7',
    variant: 'wide',
  },
  'gui-testing-survey': {
    gridColumn: '1 / 7',
    gridRow: '7 / 8',
    tabletColumn: '1 / 4',
    tabletRow: '7 / 8',
    variant: 'compact',
  },
  'blockchain-donation': {
    gridColumn: '7 / 13',
    gridRow: '7 / 8',
    tabletColumn: '4 / 7',
    tabletRow: '7 / 8',
    variant: 'compact',
  },
}

export function getBentoPlacementStyle(layout) {
  if (!layout) return undefined
  return {
    '--bento-col': layout.gridColumn,
    '--bento-row': layout.gridRow,
    '--bento-col-tablet': layout.tabletColumn,
    '--bento-row-tablet': layout.tabletRow,
  }
}
