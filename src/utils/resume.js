import { useEffect, useState } from 'react'

/** Served from `public/resume.pdf` at build/dev time */
export const RESUME_PATH = '/resume.pdf'

let availabilityCache = null

export async function checkResumeAvailable() {
  if (availabilityCache !== null) return availabilityCache
  try {
    const res = await fetch(RESUME_PATH, { method: 'HEAD' })
    availabilityCache = res.ok
  } catch {
    availabilityCache = false
  }
  return availabilityCache
}

export function downloadResume() {
  const link = document.createElement('a')
  link.href = RESUME_PATH
  link.download = 'resume.pdf'
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function useResumeAvailable() {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    let cancelled = false
    checkResumeAvailable().then((ok) => {
      if (!cancelled) setAvailable(ok)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return available
}
