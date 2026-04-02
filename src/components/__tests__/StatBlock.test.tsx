import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatBlock from '../StatBlock'

describe('StatBlock', () => {
  it('renders value and label', () => {
    render(<StatBlock value="↑ 38%" label="Engagement" />)
    expect(screen.getByText('↑ 38%')).toBeInTheDocument()
    expect(screen.getByText('Engagement')).toBeInTheDocument()
  })
})
