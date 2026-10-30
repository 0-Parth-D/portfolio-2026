import { useEffect, useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import { portfolioData } from '../../data/portfolioData'
import './ContactPage.css'

const { personal, about, seo } = portfolioData

const handleFromUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const LINKS = [
  { label: 'LinkedIn', handle: handleFromUrl(personal.linkedin), href: personal.linkedin },
  { label: 'GitHub', handle: handleFromUrl(personal.github), href: personal.github },
  { label: 'Hugging Face', handle: handleFromUrl(personal.huggingface), href: personal.huggingface },
]

function ContactPage() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${personal.email}`
    }
  }

  return (
    <PageLayout>
      <PageMeta
        title={`Contact · ${seo.siteName}`}
        description={`Email, LinkedIn, GitHub, and resumes for ${personal.fullName}. ${about.lookingFor}`}
        path="/contact"
      />
      <main id="main-content" className="contact-page">
        <header className="contact-page__hero section">
          <div className="container">
            <p className="contact-page__eyebrow mono-text">Contact</p>
            <h1 className="contact-page__title display-text">
              LET&apos;S TALK<span className="contact-page__dot">.</span>
            </h1>
            <p className="contact-page__lede">{about.lookingFor}</p>
          </div>
        </header>

        <section className="contact-page__body section" aria-label="Contact links">
          <div className="container">
            <MotionReveal>
              <MotionItem className="contact-page__email-block">
                <p className="contact-page__label mono-text">Email is the fastest way to reach me</p>
                <div className="contact-page__email-row">
                  <a className="contact-page__email" href={`mailto:${personal.email}`}>
                    {personal.email}
                  </a>
                  <button type="button" className="contact-page__copy" onClick={copyEmail}>
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <span className="sr-only" role="status" aria-live="polite">
                    {copied ? 'Email address copied' : ''}
                  </span>
                </div>
              </MotionItem>

              <div className="contact-page__columns">
                <MotionItem className="contact-page__group">
                  <h2 className="contact-page__label mono-text">Elsewhere</h2>
                  <ul className="contact-page__list">
                    {LINKS.map((link) => (
                      <li key={link.label}>
                        <a
                          className="contact-page__row"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="contact-page__row-label">{link.label}</span>
                          <span className="contact-page__row-meta mono-text">{link.handle}</span>
                          <span className="contact-page__arrow" aria-hidden="true">↗</span>
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </MotionItem>

                <MotionItem className="contact-page__group">
                  <h2 className="contact-page__label mono-text">Resume</h2>
                  <ul className="contact-page__list">
                    {personal.resumes.map((resume) => (
                      <li key={resume.id}>
                        <a className="contact-page__row" href={resume.href} download>
                          <span className="contact-page__row-label">{resume.label}</span>
                          <span className="contact-page__row-meta mono-text">PDF</span>
                          <span className="contact-page__arrow" aria-hidden="true">↓</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </MotionItem>
              </div>

              <MotionItem>
                <p className="contact-page__meta mono-text">
                  {personal.location} · {personal.relocation} · graduating May 2027
                </p>
              </MotionItem>
            </MotionReveal>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default ContactPage
