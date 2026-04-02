import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StoryProgress from '../StoryProgress'

const SECTIONS = ['Overview', 'The Problem', 'Research', 'Solution', 'Impact']

describe('StoryProgress', () => {
  it('renders all section labels', () => {
    render(<StoryProgress sections={SECTIONS} activeIndex={0} />)
    SECTIONS.forEach((s) => {
      expect(screen.getByText(s)).toBeInTheDocument()
    })
  })

  it('marks the active section with filled dot', () => {
    const { container } = render(
      <StoryProgress sections={SECTIONS} activeIndex={2} />
    )
    const dots = container.querySelectorAll('[data-dot]')
    expect(dots[2]).toHaveAttribute('data-active', 'true')
    expect(dots[0]).toHaveAttribute('data-active', 'false')
  })
})
