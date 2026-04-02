# Mikey Amella Portfolio — Design Spec

**Date:** 2026-04-01
**Status:** Approved
**Goal:** Rebuild portfolio to land a UX design job with a strong personal brand

---

## Overview

A personal portfolio website for Mikey Amella, UX Designer. Inspired by the editorial boldness of therawmaterials.com. The site tells a story — first who Mikey is, then the work. 6 case studies presented as narrative-driven scrollable pages.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Deployment | Vercel (auto-deploy from GitHub) |
| Fonts | Inter (via Google Fonts) |

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F5F0EB` | Page background |
| `cream-dark` | `#EDE8E2` | Left panel background |
| `ink` | `#1A1A1A` | Primary text, headlines |
| `muted` | `#888888` | Secondary text, body copy |
| `subtle` | `#D5CFC8` | Dividers, borders |
| `accent` | `#C0654A` | Active nav, hover states, arrows, progress dots |
| `accent-light` | `#E8A090` | Tag borders, tag backgrounds tint |
| `white` | `#FFFFFF` | Right panel background |

### Typography

| Role | Font | Weight | Style |
|---|---|---|---|
| Hero headline | Inter | 900 | Uppercase, letter-spacing: −5px, ~80px |
| Section headline | Inter | 900 | Uppercase, letter-spacing: −2px, ~36px |
| Case study title | Inter | 900 | Uppercase, letter-spacing: −1.5px, ~32px |
| Nav items | Inter | 400/700 | Normal case, 11px |
| Body copy | Inter | 400 | Normal, line-height: 1.7, 13px |
| Labels / eyebrows | Inter | 500 | Uppercase, letter-spacing: +2px, 9px |

---

## Layout

Split-panel layout used across all pages:

```
┌─────────────────────────────────────────────────────┐
│  Left Panel (240px, fixed)  │  Right Panel (flex-1)  │
│  background: cream-dark     │  background: white      │
│                             │  overflow-y: scroll     │
│  - Brand name               │                         │
│  - Role                     │  Page content here      │
│  - Nav links                │                         │
│  - Context (varies)         │                         │
└─────────────────────────────────────────────────────┘
```

- Left panel is sticky/fixed — never scrolls
- Right panel scrolls independently
- On mobile: left panel collapses to a top nav bar

---

## Pages

### 1. Home (Hero)

**Left panel:** Brand name, role, nav, "Available for hire" status
**Right panel:**
- Eyebrow: `UX DESIGNER — PORTFOLIO 2024`
- Massive headline: `MIKEY` / `AMELLA` (Inter Black, ~80px, letter-spacing: −5px)
- One-liner: "Crafting human-centered digital experiences that bridge complexity and clarity."
- Scroll hint: `Scroll ↓`

---

### 2. About

**Left panel:** Brand name, role, nav, tools list (Figma, Notion, Maze, Miro, Framer — as tags)
**Right panel:**
- Bold statement headline (e.g. "I MAKE COMPLEX THINGS FEEL SIMPLE.")
- Divider
- Personal story paragraph — who Mikey is, design philosophy, what drives the work
- 3 stat blocks: Years Experience · Projects Shipped · Case Studies

---

### 3. Work Index

**Left panel:** Brand name, role, nav (Work active)
**Right panel:**
- Eyebrow: `SELECTED WORK — 6 PROJECTS`
- Numbered editorial rows, one per case study:
  ```
  01   PROJECT NAME                    [thumb]  →
       Mobile App · UX Research · 2024
  ```
- Hover state: title color shifts to `accent`, arrow animates right
- Each row links to `/work/[slug]`

---

### 4. Case Study Page (`/work/[slug]`)

**Left panel:**
- Project name (bold)
- Tags (type, platform, year)
- Metadata: Role, Duration, Team
- Story Progress tracker — dot list for each narrative section, dots fill terracotta as user scrolls

**Right panel (narrative scroll):**
Each section flows continuously, tracked by scroll position:

1. **Overview** — Hook headline + compelling opening paragraph + hero image
2. **The Problem** — What wasn't working and why it mattered
3. **Research** — How insights were gathered; key findings
4. **Solution** — Design decisions, wireframes/mockups, rationale
5. **Impact** — Metrics, outcomes, what shipped

**Stat blocks** used to highlight key metrics (e.g. ↑38% engagement, ↓61% drop-off).

---

### 5. Contact

**Left panel:** Brand name, role, nav (Contact active)
**Right panel:**
- Bold headline (e.g. "LET'S WORK TOGETHER.")
- Email link (styled with terracotta underline)
- LinkedIn link
- Resume download button

---

## Animations (Framer Motion)

| Trigger | Animation |
|---|---|
| Page load / route change | Fade in + translateY(+16px → 0), 0.4s ease |
| Case study rows (Work page) | Stagger in on scroll, 0.05s delay between rows |
| Active nav item change | Background/color transition, 0.2s |
| Story progress dots | Fill color transitions to `accent` on section enter |
| Case study row hover | Title + arrow shift right 4px, color → `accent`, 0.15s |
| Case study row click | Slight scale down (0.98) before navigation |

---

## Content Structure

Case study data stored as TypeScript objects in `/src/data/case-studies.ts`:

```ts
type CaseStudy = {
  slug: string
  title: string
  tags: string[]
  year: number
  role: string
  duration: string
  team: string
  thumbnail: string  // image path
  heroImage: string
  overview: { headline: string; body: string }
  problem: { body: string }
  research: { body: string; insights?: string[] }
  solution: { body: string; images?: string[] }
  impact: { body: string; stats?: { value: string; label: string }[] }
}
```

All 6 case studies defined here — adding or editing a case study requires only editing this file.

---

## File Structure

```
/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Hero / Home
│   │   ├── about/page.tsx        # About
│   │   ├── work/
│   │   │   ├── page.tsx          # Work index
│   │   │   └── [slug]/page.tsx   # Case study page
│   │   └── contact/page.tsx      # Contact
│   ├── components/
│   │   ├── LeftPanel.tsx         # Fixed left nav (shared)
│   │   ├── SplitLayout.tsx       # Split-panel wrapper
│   │   ├── CaseStudyRow.tsx      # Work index row
│   │   ├── StoryProgress.tsx     # Scroll progress tracker
│   │   └── StatBlock.tsx         # Impact stat card
│   └── data/
│       └── case-studies.ts       # All case study content
├── public/
│   └── images/                   # Project thumbnails + hero images
└── docs/
    └── superpowers/specs/
        └── 2026-04-01-portfolio-design.md
```

---

## Deployment

- GitHub repo: `mkamella/Portfolio`
- Connect to Vercel — auto-deploys `main` branch
- Custom domain: `mikeyamella.com` (point DNS to Vercel)
