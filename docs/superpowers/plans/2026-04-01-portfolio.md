# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Mikey Amella's personal UX portfolio — a Next.js site with a fixed split-panel layout, editorial warm-cream + terracotta design, and narrative case study pages.

**Architecture:** Next.js App Router with a shared `SplitLayout` component wrapping every page. Left panel is fixed nav, right panel scrolls. Case study content lives in a single typed data file (`case-studies.ts`). Framer Motion handles all transitions and scroll-linked animations.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v3, Framer Motion, Vitest + React Testing Library, Vercel

**Spec:** `docs/superpowers/specs/2026-04-01-portfolio-design.md`

---

## Chunk 1: Project Setup + Layout Shell

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json` (generated)
- Create: `tailwind.config.ts`
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Scaffold the project**

Run from inside `/Users/mikeyamella/Projects/Portfolio`:

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack
```

When prompted, accept all defaults. This will overwrite the empty repo with the Next.js scaffold.

- [ ] **Step 2: Install additional dependencies**

`create-next-app` installs Tailwind v4 by default. This plan uses Tailwind v3, so downgrade it first:

```bash
npm install tailwindcss@^3 postcss autoprefixer
npm install framer-motion
npm install --save-dev vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 3: Configure Vitest**

Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

- [ ] **Step 4: Create test setup file**

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Add test script to package.json**

In `package.json`, add to `"scripts"`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 6: Configure Tailwind design tokens**

Replace the contents of `tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        'cream-dark': '#EDE8E2',
        ink: '#1A1A1A',
        muted: '#888888',
        subtle: '#D5CFC8',
        accent: '#C0654A',
        'accent-light': '#E8A090',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 7: Set up global styles**

`create-next-app` places globals.css inside `src/app/`. Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-cream text-ink;
  }
}
```

- [ ] **Step 8: Set up root layout with Inter font**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Mikey Amella — UX Designer',
  description: 'UX Designer crafting human-centered digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

Note: if `create-next-app` put globals.css inside `src/app/`, update the import path to `'./globals.css'`.

- [ ] **Step 9: Write a smoke test**

Create `src/test/smoke.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'

describe('smoke', () => {
  it('passes', () => {
    expect(true).toBe(true)
  })
})
```

- [ ] **Step 10: Run the smoke test**

```bash
npm test
```

Expected output: `1 test passed`

- [ ] **Step 11: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — should show default Next.js page. Stop with Ctrl+C.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js project with Tailwind, Framer Motion, Vitest"
```

---

### Task 2: SplitLayout component

**Files:**
- Create: `src/components/SplitLayout.tsx`
- Create: `src/components/__tests__/SplitLayout.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/SplitLayout.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- SplitLayout
```

Expected: FAIL — `Cannot find module '../SplitLayout'`

- [ ] **Step 3: Implement SplitLayout**

Create `src/components/SplitLayout.tsx`:

```tsx
interface SplitLayoutProps {
  left: React.ReactNode
  right: React.ReactNode
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        data-panel="left"
        className="w-60 flex-shrink-0 bg-cream-dark flex flex-col overflow-y-auto"
      >
        {left}
      </aside>
      <main
        data-panel="right"
        className="flex-1 bg-white overflow-y-auto"
      >
        {right}
      </main>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- SplitLayout
```

Expected: 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/SplitLayout.tsx src/components/__tests__/SplitLayout.test.tsx
git commit -m "feat: add SplitLayout component"
```

---

### Task 3: LeftPanel component

**Files:**
- Create: `src/components/LeftPanel.tsx`
- Create: `src/components/__tests__/LeftPanel.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/LeftPanel.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LeftPanel from '../LeftPanel'

// Next.js Link requires a router — mock it
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
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
    expect(workLink).toHaveClass('text-ink', 'font-bold')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- LeftPanel
```

Expected: FAIL — `Cannot find module '../LeftPanel'`

- [ ] **Step 3: Implement LeftPanel**

Create `src/components/LeftPanel.tsx`:

```tsx
import Link from 'next/link'

const NAV_ITEMS = [
  { num: '01', label: 'Home', href: '/' },
  { num: '02', label: 'About', href: '/about' },
  { num: '03', label: 'Work', href: '/work' },
  { num: '04', label: 'Contact', href: '/contact' },
] as const

type Section = 'home' | 'about' | 'work' | 'contact'

interface LeftPanelProps {
  activeSection: Section
  footer?: React.ReactNode
}

export default function LeftPanel({ activeSection, footer }: LeftPanelProps) {
  return (
    <div className="flex flex-col h-full p-7">
      {/* Brand */}
      <Link href="/" className="block">
        <div className="font-black text-base uppercase tracking-tighter leading-none text-ink">
          Mikey<br />Amella
        </div>
      </Link>

      {/* Role */}
      <p className="mt-2 text-[9px] text-muted uppercase tracking-widest">
        UX Designer
      </p>

      {/* Divider */}
      <div className="my-4 h-px bg-subtle" />

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ num, label, href }) => {
          const isActive = activeSection === label.toLowerCase()
          return (
            <Link
              key={label}
              href={href}
              className={`text-[11px] py-1 transition-colors duration-150 ${
                isActive
                  ? 'text-ink font-bold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <span className="text-subtle text-[9px] mr-1.5">{num}</span>
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer slot */}
      {footer && <div className="mt-auto">{footer}</div>}
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- LeftPanel
```

Expected: 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/LeftPanel.tsx src/components/__tests__/LeftPanel.test.tsx
git commit -m "feat: add LeftPanel nav component"
```

---

## Chunk 2: Data Layer + Static Pages

### Task 4: Case study data types and seed data

**Files:**
- Create: `src/data/case-studies.ts`
- Create: `src/data/__tests__/case-studies.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/data/__tests__/case-studies.test.ts`:

```ts
import { describe, it, expect } from 'vitest'
import { caseStudies, type CaseStudy } from '../case-studies'

describe('case-studies data', () => {
  it('exports exactly 6 case studies', () => {
    expect(caseStudies).toHaveLength(6)
  })

  it('every case study has required fields', () => {
    caseStudies.forEach((cs: CaseStudy) => {
      expect(cs.slug).toBeTruthy()
      expect(cs.title).toBeTruthy()
      expect(cs.tags).toBeInstanceOf(Array)
      expect(cs.tags.length).toBeGreaterThan(0)
      expect(cs.year).toBeGreaterThan(2000)
      expect(cs.role).toBeTruthy()
      expect(cs.duration).toBeTruthy()
      expect(cs.team).toBeTruthy()
      expect(cs.overview.headline).toBeTruthy()
      expect(cs.overview.body).toBeTruthy()
      expect(cs.problem.body).toBeTruthy()
      expect(cs.research.body).toBeTruthy()
      expect(cs.solution.body).toBeTruthy()
      expect(cs.impact.body).toBeTruthy()
    })
  })

  it('all slugs are unique', () => {
    const slugs = caseStudies.map((cs: CaseStudy) => cs.slug)
    expect(new Set(slugs).size).toBe(caseStudies.length)
  })

  it('slug format is kebab-case', () => {
    caseStudies.forEach((cs: CaseStudy) => {
      expect(cs.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- case-studies
```

Expected: FAIL — `Cannot find module '../case-studies'`

- [ ] **Step 3: Implement data file**

Create `src/data/case-studies.ts`:

```ts
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
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- case-studies
```

Expected: 4 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/data/case-studies.ts src/data/__tests__/case-studies.test.ts
git commit -m "feat: add case study data types and seed data"
```

---

### Task 5: StatBlock component

**Files:**
- Create: `src/components/StatBlock.tsx`
- Create: `src/components/__tests__/StatBlock.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/StatBlock.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- StatBlock
```

Expected: FAIL

- [ ] **Step 3: Implement StatBlock**

Create `src/components/StatBlock.tsx`:

```tsx
interface StatBlockProps {
  value: string
  label: string
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="flex-1 bg-cream rounded-md border border-subtle p-4">
      <p className="font-black text-2xl text-ink tracking-tighter">{value}</p>
      <p className="text-[9px] text-muted uppercase tracking-widest mt-1">{label}</p>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- StatBlock
```

Expected: 1 test passed

- [ ] **Step 5: Commit**

```bash
git add src/components/StatBlock.tsx src/components/__tests__/StatBlock.test.tsx
git commit -m "feat: add StatBlock component"
```

---

### Task 6: Home page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/app/__tests__/page.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- "app/__tests__/page"
```

Expected: FAIL

- [ ] **Step 3: Implement Home page**

Replace `src/app/page.tsx` with:

```tsx
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'

export default function HomePage() {
  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="home"
          footer={
            <p className="text-[9px] text-muted uppercase tracking-widest">
              Available for hire
            </p>
          }
        />
      }
      right={
        <div className="flex flex-col justify-between h-full px-11 py-12">
          {/* Eyebrow */}
          <p className="text-[9px] text-muted uppercase tracking-widest">
            UX Designer — Portfolio 2024
          </p>

          {/* Hero name */}
          <div>
            <h1 className="font-black text-[80px] text-ink uppercase leading-none tracking-[-0.05em]">
              MIKEY<br />AMELLA
            </h1>
          </div>

          {/* Footer row */}
          <div className="flex justify-between items-end">
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Crafting human-centered digital experiences that bridge complexity and clarity.
            </p>
            <p className="text-[10px] text-muted uppercase tracking-widest">
              Scroll ↓
            </p>
          </div>
        </div>
      }
    />
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- "app/__tests__/page"
```

Expected: 3 tests passed

- [ ] **Step 5: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000`. Should show the split layout with the massive MIKEY AMELLA headline on a warm cream background.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/app/__tests__/page.test.tsx
git commit -m "feat: implement home/hero page"
```

---

### Task 7: About page

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/app/about/__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/app/about/__tests__/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('AboutPage', () => {
  it('renders the headline', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the tools section', () => {
    render(<AboutPage />)
    expect(screen.getByText('Figma')).toBeInTheDocument()
  })

  it('renders stat blocks', () => {
    render(<AboutPage />)
    expect(screen.getByText(/years/i)).toBeInTheDocument()
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
    expect(screen.getByText(/case studies/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- "about/__tests__/page"
```

Expected: FAIL

- [ ] **Step 3: Implement About page**

Create `src/app/about/page.tsx`:

```tsx
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StatBlock from '@/components/StatBlock'

const TOOLS = ['Figma', 'Notion', 'Maze', 'Miro', 'Framer']

export default function AboutPage() {
  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="about"
          footer={
            <div>
              <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Tools</p>
              <div className="flex flex-wrap gap-1">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-white rounded px-2 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          }
        />
      }
      right={
        <div className="flex flex-col gap-6 px-11 py-10 h-full">
          {/* Headline */}
          <h1 className="font-black text-4xl text-ink uppercase tracking-tighter leading-tight">
            I make complex things feel simple.
          </h1>

          <div className="h-px bg-cream" />

          {/* Bio — replace placeholder with real text */}
          <p className="text-sm text-muted leading-relaxed max-w-lg">
            Replace this with your real story. Who are you, how do you think about design,
            what drives you? This is where recruiters decide if they like you as a person
            before they look at your work.
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-auto pb-10">
            <StatBlock value="5+" label="Years Experience" />
            <StatBlock value="20+" label="Projects Shipped" />
            <StatBlock value="6" label="Case Studies" />
          </div>
        </div>
      }
    />
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- "about/__tests__/page"
```

Expected: 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/app/about/page.tsx src/app/about/__tests__/page.test.tsx
git commit -m "feat: implement about page"
```

---

### Task 8: CaseStudyRow component

**Files:**
- Create: `src/components/CaseStudyRow.tsx`
- Create: `src/components/__tests__/CaseStudyRow.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/CaseStudyRow.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CaseStudyRow from '../CaseStudyRow'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

const mockCs = {
  slug: 'test-project',
  title: 'Test Project',
  tags: ['Mobile', 'UX Research'],
  year: 2024,
  role: 'Lead UX Designer',
  duration: '3 months',
  team: '2 designers',
  thumbnail: '/images/test-thumb.jpg',
  heroImage: '/images/test-hero.jpg',
  overview: { headline: 'Test', body: 'Test body' },
  problem: { body: 'Problem' },
  research: { body: 'Research' },
  solution: { body: 'Solution' },
  impact: { body: 'Impact' },
}

describe('CaseStudyRow', () => {
  it('renders title and tags', () => {
    render(<CaseStudyRow caseStudy={mockCs} index={0} />)
    expect(screen.getByText('TEST PROJECT')).toBeInTheDocument()
    expect(screen.getByText(/Mobile/i)).toBeInTheDocument()
  })

  it('renders the 1-based index number', () => {
    render(<CaseStudyRow caseStudy={mockCs} index={0} />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('links to the correct case study URL', () => {
    render(<CaseStudyRow caseStudy={mockCs} index={0} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/work/test-project')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- CaseStudyRow
```

Expected: FAIL

- [ ] **Step 3: Implement CaseStudyRow**

Create `src/components/CaseStudyRow.tsx`:

```tsx
import Link from 'next/link'
import type { CaseStudy } from '@/data/case-studies'

interface CaseStudyRowProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseStudyRow({ caseStudy, index }: CaseStudyRowProps) {
  const num = String(index + 1).padStart(2, '0')
  const metaString = [...caseStudy.tags, String(caseStudy.year)].join(' · ')

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex items-center justify-between py-4 border-b border-cream last:border-b-0 transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] text-subtle tracking-wider w-6">{num}</span>
        <div>
          <h2 className="font-black text-[15px] text-ink uppercase tracking-tight group-hover:text-accent transition-colors">
            {caseStudy.title.toUpperCase()}
          </h2>
          <p className="text-[9px] text-muted mt-0.5 tracking-wide">{metaString}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-9 bg-cream rounded-sm" />
        <span className="text-sm text-subtle group-hover:text-accent group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
    </Link>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- CaseStudyRow
```

Expected: 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/CaseStudyRow.tsx src/components/__tests__/CaseStudyRow.test.tsx
git commit -m "feat: add CaseStudyRow component"
```

---

### Task 9: Work index page

**Files:**
- Create: `src/app/work/page.tsx`
- Create: `src/app/work/__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/app/work/__tests__/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WorkPage from '../page'
import { caseStudies } from '@/data/case-studies'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('WorkPage', () => {
  it('renders eyebrow with case study count', () => {
    render(<WorkPage />)
    expect(screen.getByText(/6 projects/i)).toBeInTheDocument()
  })

  it('renders a row for each case study', () => {
    render(<WorkPage />)
    caseStudies.forEach((cs) => {
      expect(screen.getByText(cs.title.toUpperCase())).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- "work/__tests__/page"
```

Expected: FAIL

- [ ] **Step 3: Implement Work index page**

Create `src/app/work/page.tsx`:

```tsx
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import CaseStudyRow from '@/components/CaseStudyRow'
import { caseStudies } from '@/data/case-studies'

export default function WorkPage() {
  return (
    <SplitLayout
      left={<LeftPanel activeSection="work" />}
      right={
        <div className="px-11 py-10">
          <p className="text-[9px] text-muted uppercase tracking-widest mb-6">
            Selected Work — {caseStudies.length} Projects
          </p>
          <div className="border-t border-cream">
            {caseStudies.map((cs, i) => (
              <CaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      }
    />
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- "work/__tests__/page"
```

Expected: 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/app/work/page.tsx src/app/work/__tests__/page.test.tsx
git commit -m "feat: implement work index page"
```

---

### Task 10: Contact page

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/app/contact/__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/app/contact/__tests__/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- "contact/__tests__/page"
```

Expected: FAIL

- [ ] **Step 3: Implement Contact page**

Create `src/app/contact/page.tsx`:

```tsx
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'

export default function ContactPage() {
  return (
    <SplitLayout
      left={<LeftPanel activeSection="contact" />}
      right={
        <div className="flex flex-col justify-between h-full px-11 py-12">
          <div className="flex flex-col gap-8">
            <h1 className="font-black text-5xl text-ink uppercase tracking-tighter leading-tight">
              Let's work<br />together.
            </h1>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:mikey@mikeyamella.com"
                aria-label="Email Mikey"
                className="text-base font-medium text-ink border-b-2 border-accent pb-0.5 w-fit hover:text-accent transition-colors"
              >
                mikey@mikeyamella.com
              </a>

              <a
                href="https://linkedin.com/in/mikeyamella"
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-muted hover:text-ink transition-colors w-fit"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider border border-accent px-6 py-3 rounded hover:bg-accent hover:text-white transition-colors w-fit"
          >
            Download Resume ↓
          </a>
        </div>
      }
    />
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- "contact/__tests__/page"
```

Expected: 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/app/contact/page.tsx src/app/contact/__tests__/page.test.tsx
git commit -m "feat: implement contact page"
```

---

## Chunk 3: Case Study Page + Animations + Deployment

### Task 11: StoryProgress component

**Files:**
- Create: `src/components/StoryProgress.tsx`
- Create: `src/components/__tests__/StoryProgress.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/StoryProgress.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- StoryProgress
```

Expected: FAIL

- [ ] **Step 3: Implement StoryProgress**

Create `src/components/StoryProgress.tsx`:

```tsx
'use client'

interface StoryProgressProps {
  sections: string[]
  activeIndex: number
}

export default function StoryProgress({ sections, activeIndex }: StoryProgressProps) {
  return (
    <div>
      <p className="text-[8px] text-muted uppercase tracking-widest mb-3">
        Story Progress
      </p>
      <div className="flex flex-col gap-2">
        {sections.map((section, i) => {
          const isActive = i === activeIndex
          const isPast = i < activeIndex
          return (
            <div key={section} className="flex items-center gap-2">
              <div
                data-dot
                data-active={isActive}
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                  isActive || isPast ? 'bg-accent' : 'bg-subtle'
                }`}
              />
              <span
                className={`text-[9px] tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-ink font-bold' : 'text-muted'
                }`}
              >
                {section}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- StoryProgress
```

Expected: 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/StoryProgress.tsx src/components/__tests__/StoryProgress.test.tsx
git commit -m "feat: add StoryProgress component"
```

---

### Task 12: Case study page

**Files:**
- Create: `src/app/work/[slug]/page.tsx`
- Create: `src/app/work/[slug]/__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/app/work/[slug]/__tests__/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CaseStudyPage, { generateStaticParams } from '../page'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- "slug/__tests__/page"
```

Expected: FAIL

- [ ] **Step 3: Implement Case Study page**

Create `src/app/work/[slug]/page.tsx`:

```tsx
import { notFound } from 'next/navigation'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StoryProgress from '@/components/StoryProgress'
import StatBlock from '@/components/StatBlock'
import { caseStudies } from '@/data/case-studies'

const STORY_SECTIONS = ['Overview', 'The Problem', 'Research', 'Solution', 'Impact']

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    notFound()
  }

  const metaString = [...cs.tags, String(cs.year)].join(' · ')

  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="work"
          footer={
            <div className="flex flex-col gap-4">
              {/* Project meta */}
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Role</p>
                <p className="text-[11px] text-ink">{cs.role}</p>
              </div>
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Duration</p>
                <p className="text-[11px] text-ink">{cs.duration}</p>
              </div>
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Team</p>
                <p className="text-[11px] text-ink">{cs.team}</p>
              </div>
              {/* Story progress — static at Overview for now; animated in Task 13 */}
              <StoryProgress sections={STORY_SECTIONS} activeIndex={0} />
            </div>
          }
        />
      }
      right={
        <article className="px-11 py-10 flex flex-col gap-14">
          {/* Project header */}
          <header>
            <div className="flex flex-wrap gap-1 mb-3">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-1"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-1">
                {cs.year}
              </span>
            </div>
            <h1 className="font-black text-2xl text-ink uppercase tracking-tight">
              {cs.title}
            </h1>
            <p className="text-[9px] text-muted mt-1 tracking-wider">{metaString}</p>
          </header>

          {/* Overview */}
          <section id="overview">
            <h2 className="font-black text-3xl text-ink uppercase tracking-tighter leading-tight mb-4">
              {cs.overview.headline}
            </h2>
            <div className="bg-gradient-to-br from-cream to-cream-dark rounded-lg h-48 flex items-center justify-center text-[9px] text-muted uppercase tracking-widest mb-4">
              Hero Image
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-lg">{cs.overview.body}</p>
          </section>

          {/* The Problem */}
          <section id="problem">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">The Problem</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg">{cs.problem.body}</p>
          </section>

          {/* Research */}
          <section id="research">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Research</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg mb-4">{cs.research.body}</p>
            {cs.research.insights && (
              <ul className="flex flex-col gap-2">
                {cs.research.insights.map((insight) => (
                  <li key={insight} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-0.5">—</span>
                    {insight}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Solution */}
          <section id="solution">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Solution</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg mb-4">{cs.solution.body}</p>
            {cs.solution.images?.map((src) => (
              <div
                key={src}
                className="bg-cream rounded-lg h-48 flex items-center justify-center text-[9px] text-muted uppercase tracking-widest mb-3"
              >
                Solution Image
              </div>
            ))}
          </section>

          {/* Impact */}
          <section id="impact" className="pb-16">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Impact</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg mb-6">{cs.impact.body}</p>
            {cs.impact.stats && cs.impact.stats.length > 0 && (
              <div className="flex gap-4">
                {cs.impact.stats.map((stat) => (
                  <StatBlock key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            )}
          </section>
        </article>
      }
    />
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- "slug/__tests__/page"
```

Expected: 4 tests passed

- [ ] **Step 5: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000/work/project-one` — should show the full case study narrative layout.

- [ ] **Step 6: Commit**

```bash
git add src/app/work/[slug]/page.tsx src/app/work/[slug]/__tests__/page.test.tsx
git commit -m "feat: implement case study page with narrative sections"
```

---

### Task 13: Framer Motion animations

**Files:**
- Create: `src/components/PageTransition.tsx`
- Create: `src/components/AnimatedCaseStudyRow.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/work/page.tsx`

**Note:** Framer Motion components must use `'use client'`. Server components (pages) wrap them as needed.

- [ ] **Step 1: Write tests for PageTransition**

Create `src/components/__tests__/PageTransition.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PageTransition from '../PageTransition'

describe('PageTransition', () => {
  it('renders its children', () => {
    render(<PageTransition><div>Hello</div></PageTransition>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- PageTransition
```

Expected: FAIL

- [ ] **Step 3: Implement PageTransition**

Create `src/components/PageTransition.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- PageTransition
```

Expected: 1 test passed

- [ ] **Step 5: Write test for AnimatedCaseStudyRow**

Create `src/components/__tests__/AnimatedCaseStudyRow.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AnimatedCaseStudyRow from '../AnimatedCaseStudyRow'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

const mockCs = {
  slug: 'test-project',
  title: 'Test Project',
  tags: ['Mobile'],
  year: 2024,
  role: 'Lead UX Designer',
  duration: '3 months',
  team: '2 designers',
  thumbnail: '/images/test-thumb.jpg',
  heroImage: '/images/test-hero.jpg',
  overview: { headline: 'Test', body: 'Body' },
  problem: { body: 'Problem' },
  research: { body: 'Research' },
  solution: { body: 'Solution' },
  impact: { body: 'Impact' },
}

describe('AnimatedCaseStudyRow', () => {
  it('renders title', () => {
    render(<AnimatedCaseStudyRow caseStudy={mockCs} index={0} />)
    expect(screen.getByText('TEST PROJECT')).toBeInTheDocument()
  })
})
```

- [ ] **Step 6: Run test to verify it fails**

```bash
npm test -- AnimatedCaseStudyRow
```

Expected: FAIL

- [ ] **Step 7: Implement AnimatedCaseStudyRow**

Create `src/components/AnimatedCaseStudyRow.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import CaseStudyRow from './CaseStudyRow'
import type { CaseStudy } from '@/data/case-studies'

interface Props {
  caseStudy: CaseStudy
  index: number
}

export default function AnimatedCaseStudyRow({ caseStudy, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
    >
      <CaseStudyRow caseStudy={caseStudy} index={index} />
    </motion.div>
  )
}
```

- [ ] **Step 8: Run test to verify it passes**

```bash
npm test -- AnimatedCaseStudyRow
```

Expected: 1 test passed

- [ ] **Step 9: Wire PageTransition into pages**

Add `import PageTransition from '@/components/PageTransition'` to each page file listed below, then wrap the return value as shown. Do this for all five files.

**`src/app/page.tsx`** — wrap the existing `<SplitLayout>` return:
```tsx
import PageTransition from '@/components/PageTransition'
// keep all existing imports

export default function HomePage() {
  return (
    <PageTransition>
      <SplitLayout
        left={<LeftPanel activeSection="home" footer={<p className="text-[9px] text-muted uppercase tracking-widest">Available for hire</p>} />}
        right={
          <div className="flex flex-col justify-between h-full px-11 py-12">
            <p className="text-[9px] text-muted uppercase tracking-widest">UX Designer — Portfolio 2024</p>
            <div><h1 className="font-black text-[80px] text-ink uppercase leading-none tracking-[-0.05em]">MIKEY<br />AMELLA</h1></div>
            <div className="flex justify-between items-end">
              <p className="text-sm text-muted leading-relaxed max-w-xs">Crafting human-centered digital experiences that bridge complexity and clarity.</p>
              <p className="text-[10px] text-muted uppercase tracking-widest">Scroll ↓</p>
            </div>
          </div>
        }
      />
    </PageTransition>
  )
}
```

**`src/app/about/page.tsx`** — wrap the existing `<SplitLayout>` return:
```tsx
import PageTransition from '@/components/PageTransition'
// keep all existing imports

export default function AboutPage() {
  return (
    <PageTransition>
      <SplitLayout
        left={<LeftPanel activeSection="about" footer={<div><p className="text-[8px] text-muted uppercase tracking-widest mb-2">Tools</p><div className="flex flex-wrap gap-1">{TOOLS.map((tool) => (<span key={tool} className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-white rounded px-2 py-1">{tool}</span>))}</div></div>} />}
        right={
          <div className="flex flex-col gap-6 px-11 py-10 h-full">
            <h1 className="font-black text-4xl text-ink uppercase tracking-tighter leading-tight">I make complex things feel simple.</h1>
            <div className="h-px bg-cream" />
            <p className="text-sm text-muted leading-relaxed max-w-lg">Replace this with your real story. Who are you, how do you think about design, what drives you? This is where recruiters decide if they like you as a person before they look at your work.</p>
            <div className="flex gap-4 mt-auto pb-10">
              <StatBlock value="5+" label="Years Experience" />
              <StatBlock value="20+" label="Projects Shipped" />
              <StatBlock value="6" label="Case Studies" />
            </div>
          </div>
        }
      />
    </PageTransition>
  )
}
```

**`src/app/work/page.tsx`** — wrap the existing `<SplitLayout>` return:
```tsx
import PageTransition from '@/components/PageTransition'
// keep all existing imports

export default function WorkPage() {
  return (
    <PageTransition>
      <SplitLayout
        left={<LeftPanel activeSection="work" />}
        right={
          <div className="px-11 py-10">
            <p className="text-[9px] text-muted uppercase tracking-widest mb-6">Selected Work — {caseStudies.length} Projects</p>
            <div className="border-t border-cream">
              {caseStudies.map((cs, i) => (
                <AnimatedCaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
              ))}
            </div>
          </div>
        }
      />
    </PageTransition>
  )
}
```

**`src/app/contact/page.tsx`** — wrap the existing `<SplitLayout>` return:
```tsx
import PageTransition from '@/components/PageTransition'
// keep all existing imports

export default function ContactPage() {
  return (
    <PageTransition>
      <SplitLayout
        left={<LeftPanel activeSection="contact" />}
        right={
          <div className="flex flex-col justify-between h-full px-11 py-12">
            <div className="flex flex-col gap-8">
              <h1 className="font-black text-5xl text-ink uppercase tracking-tighter leading-tight">Let's work<br />together.</h1>
              <div className="flex flex-col gap-4">
                <a href="mailto:mikey@mikeyamella.com" aria-label="Email Mikey" className="text-base font-medium text-ink border-b-2 border-accent pb-0.5 w-fit hover:text-accent transition-colors">mikey@mikeyamella.com</a>
                <a href="https://linkedin.com/in/mikeyamella" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted hover:text-ink transition-colors w-fit">LinkedIn →</a>
              </div>
            </div>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider border border-accent px-6 py-3 rounded hover:bg-accent hover:text-white transition-colors w-fit">Download Resume ↓</a>
          </div>
        }
      />
    </PageTransition>
  )
}
```

**`src/app/work/[slug]/page.tsx`** — `PageTransition` must be a client component, so wrap only the `<article>` content in the right panel (Server Components cannot directly return client wrappers as the outermost element when async). Replace the entire file with:

```tsx
import { notFound } from 'next/navigation'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StoryProgress from '@/components/StoryProgress'
import StatBlock from '@/components/StatBlock'
import PageTransition from '@/components/PageTransition'
import { caseStudies } from '@/data/case-studies'

const STORY_SECTIONS = ['Overview', 'The Problem', 'Research', 'Solution', 'Impact']

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    notFound()
  }

  const metaString = [...cs.tags, String(cs.year)].join(' · ')

  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="work"
          footer={
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Role</p>
                <p className="text-[11px] text-ink">{cs.role}</p>
              </div>
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Duration</p>
                <p className="text-[11px] text-ink">{cs.duration}</p>
              </div>
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Team</p>
                <p className="text-[11px] text-ink">{cs.team}</p>
              </div>
              <StoryProgress sections={STORY_SECTIONS} activeIndex={0} />
            </div>
          }
        />
      }
      right={
        <PageTransition>
          <article className="px-11 py-10 flex flex-col gap-14">
            <header>
              <div className="flex flex-wrap gap-1 mb-3">
                {cs.tags.map((tag) => (
                  <span key={tag} className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
                <span className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-1">
                  {cs.year}
                </span>
              </div>
              <h1 className="font-black text-2xl text-ink uppercase tracking-tight">{cs.title}</h1>
              <p className="text-[9px] text-muted mt-1 tracking-wider">{metaString}</p>
            </header>

            <section id="overview">
              <h2 className="font-black text-3xl text-ink uppercase tracking-tighter leading-tight mb-4">
                {cs.overview.headline}
              </h2>
              <div className="bg-gradient-to-br from-cream to-cream-dark rounded-lg h-48 flex items-center justify-center text-[9px] text-muted uppercase tracking-widest mb-4">
                Hero Image
              </div>
              <p className="text-sm text-muted leading-relaxed max-w-lg">{cs.overview.body}</p>
            </section>

            <section id="problem">
              <p className="text-[8px] text-muted uppercase tracking-widest mb-2">The Problem</p>
              <p className="text-sm text-muted leading-relaxed max-w-lg">{cs.problem.body}</p>
            </section>

            <section id="research">
              <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Research</p>
              <p className="text-sm text-muted leading-relaxed max-w-lg mb-4">{cs.research.body}</p>
              {cs.research.insights && (
                <ul className="flex flex-col gap-2">
                  {cs.research.insights.map((insight) => (
                    <li key={insight} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-0.5">—</span>
                      {insight}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section id="solution">
              <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Solution</p>
              <p className="text-sm text-muted leading-relaxed max-w-lg mb-4">{cs.solution.body}</p>
              {cs.solution.images?.map((src) => (
                <div key={src} className="bg-cream rounded-lg h-48 flex items-center justify-center text-[9px] text-muted uppercase tracking-widest mb-3">
                  Solution Image
                </div>
              ))}
            </section>

            <section id="impact" className="pb-16">
              <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Impact</p>
              <p className="text-sm text-muted leading-relaxed max-w-lg mb-6">{cs.impact.body}</p>
              {cs.impact.stats && cs.impact.stats.length > 0 && (
                <div className="flex gap-4">
                  {cs.impact.stats.map((stat) => (
                    <StatBlock key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </div>
              )}
            </section>
          </article>
        </PageTransition>
      }
    />
  )
}
```

- [ ] **Step 10: Use AnimatedCaseStudyRow in Work page**

Update `src/app/work/page.tsx` to use `AnimatedCaseStudyRow` instead of `CaseStudyRow`:

```tsx
import AnimatedCaseStudyRow from '@/components/AnimatedCaseStudyRow'
// remove CaseStudyRow import

// inside JSX, replace:
// <CaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
// with:
// <AnimatedCaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
```

- [ ] **Step 11: Run all tests**

```bash
npm test
```

Expected: All tests pass

- [ ] **Step 12: Verify animations in browser**

```bash
npm run dev
```

- Navigate to `http://localhost:3000` — page should fade in on load
- Navigate to `/work` — case study rows should stagger in
- Navigate between pages — each should fade + slide up on entry

- [ ] **Step 13: Commit**

```bash
git add \
  src/components/PageTransition.tsx \
  src/components/__tests__/PageTransition.test.tsx \
  src/components/AnimatedCaseStudyRow.tsx \
  src/components/__tests__/AnimatedCaseStudyRow.test.tsx \
  src/app/page.tsx \
  src/app/about/page.tsx \
  src/app/work/page.tsx \
  src/app/contact/page.tsx \
  "src/app/work/[slug]/page.tsx"
git commit -m "feat: add Framer Motion page transitions and stagger animations"
```

---

### Task 14: Vercel deployment

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Add vercel.json**

Create `vercel.json`:

```json
{
  "framework": "nextjs"
}
```

- [ ] **Step 2: Verify production build locally**

Run this before pushing — catch errors before they go live:

```bash
npm run build
npm run start
```

Open `http://localhost:3000` and navigate through all pages. Verify Home, About, Work, each case study, and Contact all load without errors. Stop with Ctrl+C.

- [ ] **Step 3: Push to GitHub**

```bash
git add vercel.json
git commit -m "feat: add Vercel config"
git push origin main
```

- [ ] **Step 4: Connect to Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import `mkamella/Portfolio`
4. Framework preset will auto-detect Next.js — leave all defaults
5. Click **Deploy**

Vercel will build and deploy. Every future `git push` to `main` triggers a new deploy automatically.

- [ ] **Step 5: Add custom domain**

Once deployed:
1. In Vercel project → Settings → Domains
2. Add `mikeyamella.com`
3. Follow Vercel's instructions to update DNS records at your domain registrar
4. Wait for DNS propagation (~5–60 minutes)

---

## Run All Tests

After completing all tasks, run the full test suite to confirm everything passes:

```bash
npm test
```

Expected: All tests pass with no failures.

---

## What's Not In This Plan (fill in later)

These are intentionally deferred — add your real content before launch:

1. **Replace placeholder case study data** in `src/data/case-studies.ts` with your real project titles, descriptions, and outcomes
2. **Add real images** to `public/images/` — thumbnails (160×120px) and hero images (1200×600px) for each project
3. **Update contact email** in `src/app/contact/page.tsx`
4. **Update LinkedIn URL** in `src/app/contact/page.tsx`
5. **Add resume PDF** to `public/resume.pdf`
6. **Update About bio** in `src/app/about/page.tsx`
7. **Scroll-linked StoryProgress** — `StoryProgress` uses `activeIndex` prop; wire up `IntersectionObserver` in the case study page to update it as sections scroll into view
