import { portfolioData } from './portfolioData'

export const caseStudies = portfolioData.projects.filter((p) => p.caseStudy)

export const caseStudyPath = (project) => `/work/${project.id}`
