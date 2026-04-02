import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CaseStudyRow from '../CaseStudyRow'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

const mockCs = {
  slug: 'test-project',
  title: 'Test Project',
  tags: ['Mobile', 'UX Research'],
  year: 2024,
  role: 'Lead UX Designer',
  duration: '3 months',
  team: '2 designers',
  thumbnail: '/images/test-thumb.jpg',
  heroImage: '/images/test-hero.jpg',
  overview: { headline: 'Test', body: 'Test body' },
  problem: { body: 'Problem' },
  research: { body: 'Research' },
  solution: { body: 'Solution' },
  impact: { body: 'Impact' },
}

describe('CaseStudyRow', () => {
  it('renders title and tags', () => {
    render(<CaseStudyRow caseStudy={mockCs} index={0} />)
    expect(screen.getByText('TEST PROJECT')).toBeInTheDocument()
    expect(screen.getByText(/Mobile/i)).toBeInTheDocument()
  })

  it('renders the 1-based index number', () => {
    render(<CaseStudyRow caseStudy={mockCs} index={0} />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('links to the correct case study URL', () => {
    render(<CaseStudyRow caseStudy={mockCs} index={0} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/work/test-project')
  })
})
