export interface Stat {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  title: string
  tags: string[]
  year: number
  role: string
  duration: string
  team: string
  thumbnail: string
  heroImage: string
  overview: {
    headline: string
    body: string
  }
  problem: {
    body: string
  }
  research: {
    body: string
    insights?: string[]
  }
  solution: {
    body: string
    images?: string[]
  }
  impact: {
    body: string
    stats?: Stat[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    tags: ['Mobile App', 'UX Research'],
    year: 2024,
    role: 'Lead UX Designer',
    duration: '3 months',
    team: '2 designers · 4 engineers',
    thumbnail: '/images/project-one-thumb.jpg',
    heroImage: '/images/project-one-hero.jpg',
    overview: {
      headline: 'The problem nobody talked about.',
      body: 'Replace this with the real story of what you were trying to solve and why it mattered to real people.',
    },
    problem: {
      body: 'Replace with the specific problem, who was affected, and the business context.',
    },
    research: {
      body: 'Replace with how you gathered insights — interviews, surveys, analytics.',
      insights: [
        'Key insight one',
        'Key insight two',
        'Key insight three',
      ],
    },
    solution: {
      body: 'Replace with the design decisions you made and why.',
      images: ['/images/project-one-solution-1.jpg'],
    },
    impact: {
      body: 'Replace with what shipped and how it performed.',
      stats: [
        { value: '↑ 38%', label: 'Engagement' },
        { value: '↓ 61%', label: 'Drop-off Rate' },
      ],
    },
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    tags: ['Web Platform', 'UI Design'],
    year: 2023,
    role: 'UX Designer',
    duration: '4 months',
    team: '1 designer · 3 engineers',
    thumbnail: '/images/project-two-thumb.jpg',
    heroImage: '/images/project-two-hero.jpg',
    overview: {
      headline: 'When users give up, that is a design problem.',
      body: 'Replace this with the real story.',
    },
    problem: { body: 'Replace with the specific problem.' },
    research: { body: 'Replace with research approach.' },
    solution: { body: 'Replace with the solution.' },
    impact: {
      body: 'Replace with outcomes.',
      stats: [{ value: '↑ 22%', label: 'Conversion' }],
    },
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    tags: ['Dashboard', 'Systems Design'],
    year: 2023,
    role: 'Lead UX Designer',
    duration: '6 months',
    team: '3 designers · 8 engineers',
    thumbnail: '/images/project-three-thumb.jpg',
    heroImage: '/images/project-three-hero.jpg',
    overview: {
      headline: 'Complexity is not a feature.',
      body: 'Replace this with the real story.',
    },
    problem: { body: 'Replace with the specific problem.' },
    research: { body: 'Replace with research approach.' },
    solution: { body: 'Replace with the solution.' },
    impact: { body: 'Replace with outcomes.' },
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    tags: ['Branding', 'Identity'],
    year: 2022,
    role: 'UX Designer',
    duration: '2 months',
    team: '2 designers',
    thumbnail: '/images/project-four-thumb.jpg',
    heroImage: '/images/project-four-hero.jpg',
    overview: {
      headline: 'A brand is a promise.',
      body: 'Replace this with the real story.',
    },
    problem: { body: 'Replace with the specific problem.' },
    research: { body: 'Replace with research approach.' },
    solution: { body: 'Replace with the solution.' },
    impact: { body: 'Replace with outcomes.' },
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    tags: ['Research', 'Strategy'],
    year: 2022,
    role: 'UX Researcher',
    duration: '3 months',
    team: '1 designer · 2 PMs',
    thumbnail: '/images/project-five-thumb.jpg',
    heroImage: '/images/project-five-hero.jpg',
    overview: {
      headline: 'Nobody reads instructions.',
      body: 'Replace this with the real story.',
    },
    problem: { body: 'Replace with the specific problem.' },
    research: { body: 'Replace with research approach.' },
    solution: { body: 'Replace with the solution.' },
    impact: { body: 'Replace with outcomes.' },
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    tags: ['Mobile', 'Accessibility'],
    year: 2021,
    role: 'UX Designer',
    duration: '5 months',
    team: '2 designers · 5 engineers',
    thumbnail: '/images/project-six-thumb.jpg',
    heroImage: '/images/project-six-hero.jpg',
    overview: {
      headline: 'Design for everyone, or design for no one.',
      body: 'Replace this with the real story.',
    },
    problem: { body: 'Replace with the specific problem.' },
    research: { body: 'Replace with research approach.' },
    solution: { body: 'Replace with the solution.' },
    impact: {
      body: 'Replace with outcomes.',
      stats: [{ value: '4.8★', label: 'App Store Rating' }],
    },
  },
]
