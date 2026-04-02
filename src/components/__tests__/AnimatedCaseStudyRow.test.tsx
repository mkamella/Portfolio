import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import AnimatedCaseStudyRow from '../AnimatedCaseStudyRow'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

const mockCs = {
  slug: 'test-project',
  title: 'Test Project',
  tags: ['Mobile'],
  year: 2024,
  role: 'Lead UX Designer',
  duration: '3 months',
  team: '2 designers',
  thumbnail: '/images/test-thumb.jpg',
  heroImage: '/images/test-hero.jpg',
  overview: { headline: 'Test', body: 'Body' },
  problem: { body: 'Problem' },
  research: { body: 'Research' },
  solution: { body: 'Solution' },
  impact: { body: 'Impact' },
}

describe('AnimatedCaseStudyRow', () => {
  it('renders title', () => {
    render(<AnimatedCaseStudyRow caseStudy={mockCs} index={0} />)
    expect(screen.getByText('TEST PROJECT')).toBeInTheDocument()
  })
})
