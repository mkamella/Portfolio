import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WorkPage from '../page'
import { caseStudies } from '@/data/case-studies'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('WorkPage', () => {
  it('renders eyebrow with case study count', () => {
    render(<WorkPage />)
    expect(screen.getByText(/6 projects/i)).toBeInTheDocument()
  })

  it('renders a row for each case study', () => {
    render(<WorkPage />)
    caseStudies.forEach((cs) => {
      expect(screen.getByText(cs.title.toUpperCase())).toBeInTheDocument()
    })
  })
})
