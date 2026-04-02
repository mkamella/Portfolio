import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('ContactPage', () => {
  it('renders the headline', () => {
    render(<ContactPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders an email link', () => {
    render(<ContactPage />)
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink.getAttribute('href')).toMatch(/^mailto:/)
  })

  it('renders a LinkedIn link', () => {
    render(<ContactPage />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toBeInTheDocument()
  })
})
