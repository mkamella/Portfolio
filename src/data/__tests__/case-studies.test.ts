import { describe, it, expect } from 'vitest'
import { caseStudies, type CaseStudy } from '../case-studies'

describe('case-studies data', () => {
  it('exports exactly 6 case studies', () => {
    expect(caseStudies).toHaveLength(6)
  })

  it('every case study has required fields', () => {
    caseStudies.forEach((cs: CaseStudy) => {
      expect(cs.slug).toBeTruthy()
      expect(cs.title).toBeTruthy()
      expect(cs.tags).toBeInstanceOf(Array)
      expect(cs.tags.length).toBeGreaterThan(0)
      expect(cs.year).toBeGreaterThan(2000)
      expect(cs.role).toBeTruthy()
      expect(cs.duration).toBeTruthy()
      expect(cs.team).toBeTruthy()
      expect(cs.overview.headline).toBeTruthy()
      expect(cs.overview.body).toBeTruthy()
      expect(cs.problem.body).toBeTruthy()
      expect(cs.research.body).toBeTruthy()
      expect(cs.solution.body).toBeTruthy()
      expect(cs.impact.body).toBeTruthy()
    })
  })

  it('all slugs are unique', () => {
    const slugs = caseStudies.map((cs: CaseStudy) => cs.slug)
    expect(new Set(slugs).size).toBe(caseStudies.length)
  })

  it('slug format is kebab-case', () => {
    caseStudies.forEach((cs: CaseStudy) => {
      expect(cs.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    })
  })
})
