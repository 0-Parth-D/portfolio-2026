/** Newest first by `sortDate` (YYYY-MM); ties keep data-file order. */
export function bySortDateDesc(a, b) {
  return (b.sortDate ?? '').localeCompare(a.sortDate ?? '')
}
