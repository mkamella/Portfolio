import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LeftPanel from '../LeftPanel'

// Next.js Link requires a router — mock it
vi.mock('next/link', () => ({
  default: ({ children, href, className }: { children: unknown; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))

describe('LeftPanel', () => {
  it('renders brand name and role', () => {
    render(<LeftPanel activeSection="home" />)
    expect(screen.getByText('Mikey')).toBeInTheDocument()
    expect(screen.getByText('Amella')).toBeInTheDocument()
    expect(screen.getByText(/UX Designer/i)).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<LeftPanel activeSection="home" />)
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })

  it('marks the active section', () => {
    render(<LeftPanel activeSection="work" />)
    const workLink = screen.getByText(/Work/i).closest('a')
    expect(workLink).toHaveClass('text-ink', 'font-black')
  })
})
