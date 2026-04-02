import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('HomePage', () => {
  it('renders the brand name', () => {
    render(<HomePage />)
    expect(screen.getByText('MIKEY')).toBeInTheDocument()
    expect(screen.getByText('AMELLA')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<HomePage />)
    expect(screen.getByText(/crafting human-centered/i)).toBeInTheDocument()
  })

  it('renders the scroll hint', () => {
    render(<HomePage />)
    expect(screen.getByText(/scroll/i)).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<HomePage />)
    expect(screen.getByText(/designing seamless experiences/i)).toBeInTheDocument()
    expect(screen.getByText(/years/i)).toBeInTheDocument()
  })

  it('renders the work section with case study rows', () => {
    render(<HomePage />)
    expect(screen.getByText(/\d+ projects/i)).toBeInTheDocument()
    expect(screen.getByText('DESIGNING THE FIRST STEP TOWARD THERAPY')).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<HomePage />)
    expect(screen.getByText(/let's work/i)).toBeInTheDocument()
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink.getAttribute('href')).toMatch(/^mailto:/)
  })
})
