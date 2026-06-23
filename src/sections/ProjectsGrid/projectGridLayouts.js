/**
 * Bento grid placement — explicit column/row spans per project.
 * Desktop: 12-column staggered masonry-like layout.
 * Tablet (810–1199px): simplified 6-column bento.
 * Mobile (<810px): single column (handled in CSS).
 *
 * Variants: hero | wide | tall | square | compact
 */

export const PREVIEW_PROJECT_IDS = [
  'llm-fine-tuning',
  'rag-assistant',
  'multi-agent',
  'satellite-segmentation',
]

/** Home preview — 4-card staggered bento */
export const PREVIEW_LAYOUT = {
  'llm-fine-tuning': {
    gridColumn: '1 / 6',
    gridRow: '1 / 3',
    tabletColumn: '1 / 4',
    tabletRow: '1 / 3',
    variant: 'tall',
  },
  'rag-assistant': {
    gridColumn: '6 / 13',
    gridRow: '1 / 2',
    tabletColumn: '4 / 7',
    tabletRow: '1 / 2',
    variant: 'wide',
  },
  'multi-agent': {
    gridColumn: '6 / 10',
    gridRow: '2 / 4',
    tabletColumn: '4 / 6',
    tabletRow: '2 / 4',
    variant: 'square',
  },
  'satellite-segmentation': {
    gridColumn: '10 / 13',
    gridRow: '2 / 4',
    tabletColumn: '6 / 7',
    tabletRow: '2 / 4',
    variant: 'tall',
  },
}

/** Full /work page — all 7 projects in staggered bento */
export const BENTO_LAYOUT = {
  'llm-fine-tuning': {
    gridColumn: '1 / 5',
    gridRow: '1 / 3',
    tabletColumn: '1 / 3',
    tabletRow: '1 / 3',
    variant: 'tall',
  },
  'rag-assistant': {
    gridColumn: '5 / 13',
    gridRow: '1 / 2',
    tabletColumn: '3 / 7',
    tabletRow: '1 / 2',
    variant: 'wide',
  },
  'multi-agent': {
    gridColumn: '5 / 9',
    gridRow: '2 / 4',
    tabletColumn: '3 / 5',
    tabletRow: '2 / 4',
    variant: 'square',
  },
  'satellite-segmentation': {
    gridColumn: '9 / 13',
    gridRow: '2 / 4',
    tabletColumn: '5 / 7',
    tabletRow: '2 / 4',
    variant: 'tall',
  },
  'iit-bombay-analytics': {
    gridColumn: '1 / 13',
    gridRow: '4 / 6',
    tabletColumn: '1 / 7',
    tabletRow: '4 / 6',
    variant: 'hero',
  },
  'gui-testing-survey': {
    gridColumn: '1 / 7',
    gridRow: '6 / 7',
    tabletColumn: '1 / 4',
    tabletRow: '6 / 7',
    variant: 'compact',
  },
  'blockchain-donation': {
    gridColumn: '7 / 13',
    gridRow: '6 / 7',
    tabletColumn: '4 / 7',
    tabletRow: '6 / 7',
    variant: 'compact',
  },
}

/** @deprecated Use BENTO_LAYOUT */
export const ASYMMETRIC_LAYOUT = BENTO_LAYOUT

export function getBentoPlacementStyle(layout) {
  if (!layout) return undefined
  return {
    '--bento-col': layout.gridColumn,
    '--bento-row': layout.gridRow,
    '--bento-col-tablet': layout.tabletColumn,
    '--bento-row-tablet': layout.tabletRow,
  }
}
