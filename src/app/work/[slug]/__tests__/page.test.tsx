import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CaseStudyPage, { generateStaticParams } from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: unknown; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

vi.mock('next/navigation', () => ({
  notFound: () => { throw new Error('NEXT_NOT_FOUND') },
}))

describe('CaseStudyPage', () => {
  it('renders the project title', async () => {
    const Page = await CaseStudyPage({ params: Promise.resolve({ slug: 'project-one' }) })
    render(Page)
    expect(screen.getByText('Project One')).toBeInTheDocument()
  })

  it('renders the overview headline', async () => {
    const Page = await CaseStudyPage({ params: Promise.resolve({ slug: 'project-one' }) })
    render(Page)
    expect(screen.getByText('The problem nobody talked about.')).toBeInTheDocument()
  })

  it('throws notFound for unknown slug', async () => {
    await expect(
      CaseStudyPage({ params: Promise.resolve({ slug: 'does-not-exist' }) })
    ).rejects.toThrow('NEXT_NOT_FOUND')
  })

  it('generateStaticParams returns a path for each case study', async () => {
    const params = await generateStaticParams()
    expect(params).toHaveLength(6)
    expect(params[0]).toHaveProperty('slug')
  })
})
