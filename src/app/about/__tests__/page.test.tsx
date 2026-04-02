import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('AboutPage', () => {
  it('renders the headline', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the tools section', () => {
    render(<AboutPage />)
    expect(screen.getByText('Figma')).toBeInTheDocument()
  })

  it('renders stat blocks', () => {
    render(<AboutPage />)
    expect(screen.getByText(/years/i)).toBeInTheDocument()
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
    expect(screen.getByText(/case studies/i)).toBeInTheDocument()
  })
})
