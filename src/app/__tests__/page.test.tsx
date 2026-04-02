import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
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
})
