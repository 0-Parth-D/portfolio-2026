import { portfolioData } from '../../data/portfolioData'
import { MotionReveal, MotionItem } from '../../components/MotionReveal/MotionReveal'
import SectionCta from '../../components/SectionCta/SectionCta'
import NowLine from '../../components/NowLine/NowLine'
import './AboutBlurb.css'

function AboutBlurb({ variant = 'full' }) {
  const { about, education, skills, certifications, publications } = portfolioData
  const isPreview = variant === 'preview'

  if (isPreview) {
    return (
      <section
        id="about"
        className="about-blurb section section--preview"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <h2 id="about-heading" className="about-blurb__heading display-text display-text--sm">
            ABOUT
          </h2>
          <MotionReveal>
            <MotionItem>
              <blockquote className="about-blurb__journey">
                &ldquo;{about.journey}&rdquo;
              </blockquote>
              <SectionCta to="/about">About me →</SectionCta>
            </MotionItem>
          </MotionReveal>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="about-blurb section" aria-labelledby="about-detail-heading">
      <div className="container">
        <h2 id="about-detail-heading" className="sr-only">
          Background
        </h2>
        <MotionReveal className="about-blurb__grid">
          <MotionItem className="about-blurb__left">
            <div className="about-blurb__narrative">
              {about.journeyExpanded.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="about-blurb__narrative-p">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="about-blurb__tagline mono-text">{about.tagline}</p>
            <p className="about-blurb__bio">{about.bio}</p>
            <NowLine className="about-blurb__now" />
          </MotionItem>

          <MotionItem className="about-blurb__right">
            <div className="about-blurb__education">
              {education.map((edu) => (
                <div key={edu.institution} className="about-blurb__edu-row">
                  <div className="about-blurb__edu-main">
                    <span className="about-blurb__edu-school">{edu.institution}</span>
                    <span className="about-blurb__edu-degree">{edu.degree}</span>
                    <span className="about-blurb__edu-meta mono-text">
                      {edu.location} · {edu.startDate}–{edu.endDate}
                    </span>
                  </div>
                  {edu.gpa && <span className="about-blurb__edu-gpa">{edu.gpa}</span>}
                  {edu.achievements?.length > 0 && (
                    <ul className="about-blurb__edu-achievements">
                      {edu.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="about-blurb__skill-groups">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="about-blurb__skill-group">
                  <h3 className="about-blurb__skill-group-label mono-text">{group}</h3>
                  <div className="about-blurb__skills">
                    {items.map((skill) => (
                      <span key={skill} className="about-blurb__skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {certifications.length > 0 && (
              <div className="about-blurb__certs">
                <h3 className="about-blurb__section-label mono-text">Certifications</h3>
                {certifications.map((cert) => (
                  <div key={cert.name} className="about-blurb__cert-row">
                    <span className="about-blurb__cert-name">{cert.name}</span>
                    <span className="about-blurb__cert-issuer">{cert.issuer}</span>
                    <span className="about-blurb__cert-date mono-text">{cert.date}</span>
                  </div>
                ))}
              </div>
            )}

            {publications.length > 0 && (
              <div className="about-blurb__awards">
                <h3 className="about-blurb__section-label mono-text">Publications</h3>
                {publications.map((pub) => (
                  <article key={pub.title} className="about-blurb__award">
                    <div className="about-blurb__award-header">
                      <a
                        href={pub.link}
                        className="about-blurb__award-title about-blurb__award-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pub.title}
                      </a>
                      <span className="about-blurb__award-date mono-text">{pub.date}</span>
                    </div>
                    <p className="about-blurb__award-issuer">
                      {pub.venue} · {pub.role}
                    </p>
                  </article>
                ))}
              </div>
            )}

            {about.lookingFor && (
              <div className="about-blurb__looking">
                <h3 className="about-blurb__section-label mono-text">What I&apos;m looking for</h3>
                <p className="about-blurb__looking-text">{about.lookingFor}</p>
              </div>
            )}
          </MotionItem>
        </MotionReveal>
      </div>
    </section>
  )
}

export default AboutBlurb
