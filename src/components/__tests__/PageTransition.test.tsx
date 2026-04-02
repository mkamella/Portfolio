import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PageTransition from '../PageTransition'

describe('PageTransition', () => {
  it('renders its children', () => {
    render(<PageTransition><div>Hello</div></PageTransition>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
