import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SplitLayout from '../SplitLayout'

describe('SplitLayout', () => {
  it('renders left and right panel content', () => {
    render(
      <SplitLayout
        left={<div>Left content</div>}
        right={<div>Right content</div>}
      />
    )
    expect(screen.getByText('Left content')).toBeInTheDocument()
    expect(screen.getByText('Right content')).toBeInTheDocument()
  })

  it('applies correct panel widths', () => {
    const { container } = render(
      <SplitLayout left={<div />} right={<div />} />
    )
    const panels = container.querySelectorAll('[data-panel]')
    expect(panels[0]).toHaveAttribute('data-panel', 'left')
    expect(panels[1]).toHaveAttribute('data-panel', 'right')
  })
})
