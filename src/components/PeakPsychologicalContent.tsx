'use client'

import { useEffect, useState } from 'react'
import { caseStudies } from '@/data/case-studies'

const ACCENT = '#4A90B8'

const DESKTOP_SLIDES = [
  { src: '/images/Peak/desktop ui 1.png', label: 'Desktop UI: Homepage' },
  { src: '/images/Peak/desktop ui 2.png', label: 'Desktop UI: Marketing Page' },
]

function IMacCarousel() {
  const [index, setIndex] = useState(0)
  const slide = DESKTOP_SLIDES[index]

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={() => setIndex((i) => (i - 1 + DESKTOP_SLIDES.length) % DESKTOP_SLIDES.length)}
          className="shrink-0 w-10 h-10 rounded-full border border-subtle bg-white shadow flex items-center justify-center hover:bg-cream transition-colors"
          aria-label="Previous"
        >←</button>

        <div className="flex-1 flex flex-col items-center">
          <div className="w-full rounded-2xl border-[10px] border-[#c8c8c8] bg-[#c8c8c8] shadow-2xl">
            <div className="w-full bg-white rounded-lg overflow-y-auto" style={{ height: 580 }}>
              <img src={slide.src} alt={slide.label} className="w-full h-auto block" />
            </div>
          </div>
          <div className="w-full h-6 bg-[#d4d4d4] rounded-b-2xl -mt-1" />
          <div className="bg-[#c0c0c0]" style={{ width: 80, height: 40, clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
          <div className="h-3 bg-[#b8b8b8] rounded-full" style={{ width: 200 }} />
        </div>

        <button
          onClick={() => setIndex((i) => (i + 1) % DESKTOP_SLIDES.length)}
          className="shrink-0 w-10 h-10 rounded-full border border-subtle bg-white shadow flex items-center justify-center hover:bg-cream transition-colors"
          aria-label="Next"
        >→</button>
      </div>

      <p className="text-sm font-medium text-ink">{slide.label}</p>

      <div className="flex gap-3">
        {DESKTOP_SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-16 h-10 rounded overflow-hidden border-2 transition-colors ${i === index ? 'border-ink' : 'border-transparent opacity-50 hover:opacity-75'}`}
          >
            <img src={s.src} alt={s.label} className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>
    </div>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ background: ACCENT }}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full text-white flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
      aria-label="Back to top"
    >↑</button>
  )
}

function BrowserFrame({ src, alt, height = 520 }: { src: string; alt: string; height?: number }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-black/10 w-full">
      <div className="bg-[#E2E2E2] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white rounded h-5 flex items-center px-3">
          <span className="text-[9px] text-gray-400 truncate">peakpsychologicalservice.com</span>
        </div>
      </div>
      <div className="overflow-y-auto bg-white" style={{ height }}>
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  )
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[260px] rounded-[40px] border-[10px] border-[#1a1a1a] shadow-2xl bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-b-xl z-10" />
      <div className="h-[540px] overflow-y-auto">
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  )
}

const PROCESS_STEPS = [
  'Setting Goals / Before',
  'Research',
  'Wireframes',
  'Final UI',
  'Business Impact',
]

export default function PeakPsychologicalContent() {
  const relatedStudies = caseStudies.filter((c) => c.slug !== 'peak-psychological').slice(0, 3)

  return (
    <div className="flex flex-col text-ink">
      <ScrollToTop />

      {/* ── HERO ── */}
      <section className="px-11 py-16 border-b border-subtle flex flex-col md:flex-row items-center gap-12" style={{ background: '#EEF5FB' }}>
        <div className="flex-1 min-w-0">
<p className="text-[10px] uppercase tracking-widest mb-4 font-semibold" style={{ color: ACCENT }}>Case Study: Healthcare</p>
          <h1 className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-5">
            Designing the First Step Toward Therapy
          </h1>
          <p className="text-sm text-ink/70 leading-relaxed mb-8">
            Redesigned the Peak Psychological homepage to help prospective clients find the right care and reach out with confidence. Delivered clean handoff designs that improved clarity, credibility, and new client inquiries.
          </p>
          <a
            href="#desktop-ui"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
            style={{ background: ACCENT }}
          >
            See Final Results ↓
          </a>
        </div>
        <div className="w-full md:w-[42%] flex-shrink-0">
          <img src="/images/Peak/Header.png" alt="Peak Psychological header" className="w-full h-auto block" />
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Overview</p>
        <h2 className="font-black text-2xl mb-5">About the Project</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          Peak Psychological Service needed a homepage and marketing landing page that actually matched the quality of care they provide. The existing page made it hard for visitors to understand what was offered, trust the clinic, or take any next step. I led the redesign as the sole UX Designer, owning the process from early exploration through final UI and handoff. My focus was turning anxious, information-seeking visitors into confident prospective clients by clarifying offerings, strengthening trust signals, and making it easier to get in touch. I also produced developer-ready screens and specs so the team could build with fewer questions. The work resulted in a cleaner homepage and a measurable lift in new client inquiries.
        </p>
      </section>

      {/* ── PROBLEM + SOLUTION ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-7 border-t-4" style={{ borderColor: '#E05C5C' }}>
          <p className="text-[9px] uppercase tracking-widest font-semibold text-[#E05C5C] mb-2">Problem</p>
          <h2 className="font-black text-xl mb-4">What wasn't working</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Prospective clients arrived on the homepage feeling uncertain, and the page gave them little to work with. Key information was easy to miss: what the clinic offers, who it helps, and how to get started. There were not enough trust signals for a decision that is already hard to make. Visitors left without taking action, and the clinic missed potential inquiries.
          </p>
        </div>
        <div className="bg-white rounded-xl p-7 border-t-4" style={{ borderColor: ACCENT }}>
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Solution</p>
          <h2 className="font-black text-xl mb-4">How I fixed it</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            I redesigned the homepage and landing page around a clearer decision path: what Peak offers, who it is for, and how to book or contact. I introduced stronger information hierarchy, scannable sections, and clearer calls to action so users could act without hunting. I added credibility cues (team highlights, reassuring microcopy, and proof points) to reduce anxiety and build trust. I delivered developer-ready designs and handoff notes so the team could build accurately.
          </p>
        </div>
      </section>

      {/* ── GOALS ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Goals</p>
        <h2 className="font-black text-2xl mb-5">What success looked like</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          The clinic wanted these pages to do more than look polished. They needed to help real people take a hard first step toward care. I worked with stakeholders to make the page easier to scan, easier to understand, and easier to act on across devices. I focused on building credibility quickly, since trust is a big part of whether someone decides to reach out. I also aimed to deliver clean, implementation-ready designs to cut down on dev back-and-forth.
        </p>
      </section>

      {/* ── META ROW ── */}
      <section className="px-11 py-10 border-b border-subtle grid grid-cols-2 md:grid-cols-4 gap-8" style={{ background: '#EEF5FB' }}>
        {[
          { label: 'Role', value: 'UX Designer' },
          { label: 'Tools', value: 'Figma, Affinity' },
          { label: 'Team', value: 'UX Designer (me), Project Manager' },
          { label: 'Timeline', value: '4 weeks (design to handoff)' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[9px] uppercase tracking-widest font-semibold mb-1" style={{ color: ACCENT }}>{label}</p>
            <p className="text-sm font-medium text-ink">{value}</p>
          </div>
        ))}
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-8 text-center" style={{ color: ACCENT }}>Design Process</p>
        <div className="overflow-x-auto">
          <div className="flex items-start w-fit mx-auto">
            {PROCESS_STEPS.map((label, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center gap-3 w-36">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-lg shadow-md" style={{ background: ACCENT }}>
                    {i + 1}
                  </div>
                  <p className="text-[10px] text-center text-muted leading-snug px-1">{label}</p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="h-px w-10 flex-shrink-0 mb-8" style={{ background: ACCENT, opacity: 0.3 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOAL CARDS ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-6" style={{ color: ACCENT }}>Project Goals</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { label: 'Goal 1', text: 'Increase homepage-to-inquiry conversion by making the primary calls to action clearer and easier to find.' },
            { label: 'Goal 2', text: 'Cut confusion by making services and next steps scannable within the first screen.' },
            { label: 'Goal 3', text: 'Build perceived trust and professionalism, validated through stakeholder feedback and fewer clarification questions from prospects.' },
          ].map(({ label, text }, i) => (
            <div key={label} className="bg-white rounded-xl p-6 shadow-sm border border-subtle flex flex-col gap-3">
              <div className="w-8 h-8 rounded-full text-white text-sm font-black flex items-center justify-center" style={{ background: ACCENT }}>
                {i + 1}
              </div>
              <p className="text-[9px] uppercase tracking-widest font-semibold text-muted">{label}</p>
              <p className="text-sm text-ink/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── USER JOURNEY ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Research</p>
        <h2 className="font-black text-2xl mb-5">User Journey</h2>
        <div className="max-w-2xl border-l-4 pl-6 py-1" style={{ borderColor: ACCENT }}>
          <p className="text-sm text-ink/70 leading-relaxed">
            The journey usually started with a search, then a quick scan of the homepage to judge fit in a matter of seconds. Visitors looked for reassurance first, then practical answers: what services are offered, who the clinic works with, whether insurance is accepted, and how easy booking is. When those answers were not easy to find, people left or put the decision off. I used that journey to shape a homepage flow that prioritized immediate clarity, then layered in detail for visitors who needed more before reaching out.
          </p>
        </div>
      </section>

      {/* ── ORIGINAL LANDING PAGE ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Before</p>
          <h2 className="font-black text-2xl mb-4">Original Landing Page</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            This was the landing page we started with. It did its job, but it was hard to tell at a glance what the product was and what someone should do next. This baseline helped me spot the gaps and set clear priorities for what to improve.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <BrowserFrame src="/images/Peak/PS Landing Page 1.png" alt="Original PS landing page" />
        </div>
      </section>

      {/* ── ORIGINAL MARKETING LANDING PAGE ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Before</p>
          <h2 className="font-black text-2xl mb-4">Original Marketing Landing Page</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Starting as a simple marketing landing page, I used it to focus on what matters most: a clear message, a smooth flow, and easy next steps. I tested different lengths and layouts until the content felt natural to scan, whether someone reads every line or just skims. The goal was simple: make the page look good, read well, and guide people to click.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <BrowserFrame src="/images/Peak/Peak Marketing Page BEFORE 1.jpg" alt="Original marketing landing page" />
        </div>
      </section>

      {/* ── COMPETITIVE RESEARCH ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-2/5 flex-shrink-0 rounded-full overflow-hidden">
          <img src="/images/Peak/girl therapy.png" alt="Girl in therapy" className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Research</p>
          <h2 className="font-black text-2xl mb-4">Competitive Research</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            We looked at four direct competitors and built a comparison matrix across 45 criteria, including Nielsen&apos;s heuristics. The goal was to understand what was working elsewhere so we could find the gaps and design around them.
          </p>
        </div>
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Design</p>
        <h2 className="font-black text-2xl mb-4">Wireframes</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-8">
          I started with low fidelity wireframes to lock in structure before any visual decisions were made. I explored multiple above-the-fold layouts to find the right balance between empathy and clarity, testing different headline approaches, service entry points, and contact actions. The middle sections were built for scanning: short blocks for services, approach, and credibility rather than long paragraphs. Once the structure held up in stakeholder reviews, I moved into detailed layouts for handoff.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <BrowserFrame src="/images/Peak/Wireframe 1.png" alt="Wireframe 1" />
          <BrowserFrame src="/images/Peak/wireframe 2.png" alt="Wireframe 2" />
        </div>
      </section>

      {/* ── UI DESIGN ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Final UI</p>
          <h2 className="font-black text-2xl mb-4">UI Design</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            The final UI was designed to feel calm, professional, and approachable, matching the clinic&apos;s tone while making everything easier to read. I used clear type hierarchy and generous spacing so someone in a stressful moment could scan without feeling overwhelmed. I placed consistent calls to action (book, contact, request a consult) after key reassurance content so users could act when they were ready. Trust-focused components included clearer service summaries, clinic proof points, and microcopy that made starting therapy feel less daunting.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex-shrink-0 flex flex-col items-center gap-3">
          <PhoneFrame src="/images/Peak/mobile ui 1.png" alt="Mobile UI design" />
          <p className="text-[9px] text-muted uppercase tracking-widest italic">Homepage Final UI</p>
        </div>
      </section>

      {/* ── DESKTOP UI ── */}
      <section id="desktop-ui" className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Final UI</p>
        <h2 className="font-black text-2xl mb-8">Desktop UI</h2>
        <IMacCarousel />
      </section>

      {/* ── LEARNINGS + NEXT STEPS ── */}
      <section className="px-11 py-12 border-b border-subtle grid md:grid-cols-2 gap-6" style={{ background: '#EEF5FB' }}>
        <div>
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-5" style={{ color: ACCENT }}>Learnings</p>
          <div className="flex flex-col gap-3">
            {[
              <span key="l1">Designing for mental health requires paying attention to <strong>emotional state</strong>, not just tasks and clicks.</span>,
              <span key="l2">Small hierarchy choices, like how sections are ordered and where CTAs land, have real impact on whether someone feels ready to reach out.</span>,
              <span key="l3">Clean specs and states up front protect design intent and prevent rework during implementation.</span>,
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-lg px-5 py-4 shadow-sm border border-subtle">
                <span className="text-sm font-black shrink-0 mt-0.5" style={{ color: ACCENT }}>0{i + 1}</span>
                <p className="text-sm text-ink/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-5" style={{ color: ACCENT }}>Next Steps</p>
          <div className="flex flex-col gap-3">
            {[
              'Run usability testing with first-time visitors to see how quickly they grasp the services and next steps.',
              'Add lightweight analytics events (CTA clicks, scroll depth, form starts) to understand what drives inquiries.',
              'Extend the redesign to service detail pages so the homepage promise carries through.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-lg px-5 py-4 shadow-sm border border-subtle">
                <span className="text-sm font-black shrink-0 mt-0.5" style={{ color: ACCENT }}>0{i + 1}</span>
                <p className="text-sm text-ink/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS IMPACT ── */}
      <section className="px-11 py-16 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Results</p>
        <h2 className="font-black text-2xl mb-5">Business Impact</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-12">
          The redesigned homepage made it easier for visitors to understand the clinic and know what to do next. Stronger trust cues and a clearer first step helped more people move from browsing to reaching out. The development team also worked with cleaner deliverables, which cut down on back-and-forth during implementation. The homepage contributed to a meaningful increase in new client inquiries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: '18%', bold: 'increase in inquiries', rest: 'from the homepage' },
            { value: '22%', bold: 'increase in CTA clicks', rest: '(contact, booking)' },
            { value: '15%', bold: 'reduction in bounce rate', rest: 'on the homepage' },
          ].map(({ value, bold, rest }) => (
            <div key={value} className="rounded-xl p-7 border border-subtle flex flex-col gap-2" style={{ borderTopWidth: 4, borderTopColor: ACCENT }}>
              <p className="font-black text-5xl" style={{ color: ACCENT }}>{value}</p>
              <p className="text-sm text-ink/70"><strong className="text-ink">{bold}</strong> {rest}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DROP ME A MESSAGE ── */}
      <section className="px-11 py-16 border-b border-subtle flex flex-col items-center text-center gap-4" style={{ background: ACCENT }}>
        <h2 className="font-black text-4xl text-white">Drop me a message</h2>
        <p className="text-sm text-white/80">Let&apos;s share ideas &amp; discuss ways to collaborate!</p>
        <a
          href="mailto:mkdamella@gmail.com"
          className="mt-2 bg-white font-bold text-sm px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          style={{ color: ACCENT }}
        >
          Contact me
        </a>
      </section>

      {/* ── READ MORE ── */}
      <section className="px-11 py-12 bg-white">
        <p className="font-black text-xl text-ink uppercase tracking-tight mb-6">Read more of my case studies</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedStudies.map((related) => (
            <a
              key={related.slug}
              href={`/work/${related.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden border border-subtle bg-white hover:shadow-md transition-shadow"
            >
              <div className="h-36 overflow-hidden">
                <img src={related.thumbnail} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex flex-wrap gap-1">
                  {related.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <p className="text-xs font-black text-ink uppercase tracking-tight leading-snug">{related.title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}
