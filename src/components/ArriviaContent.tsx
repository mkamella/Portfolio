'use client'

import { useEffect, useState } from 'react'
import { caseStudies } from '@/data/case-studies'

const ACCENT = '#1A2E5A'
const ACCENT_LIGHT = '#EEF1F8'

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

const ORIGINAL_SLIDES = [
  { src: '/images/Arrivia/Original 1.png', label: 'Original Website' },
  { src: '/images/Arrivia/original 2.png', label: 'Original Website, Page 2' },
]

function OriginalWebsiteCarousel() {
  const [index, setIndex] = useState(0)
  const slide = ORIGINAL_SLIDES[index]

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center w-full">
        <div className="w-full rounded-2xl border-[8px] border-[#c8c8c8] bg-[#c8c8c8] shadow-2xl">
          <div className="w-full bg-white rounded-lg overflow-y-auto aspect-video md:aspect-auto md:h-[560px]">
            <img src={slide.src} alt={slide.label} className="w-full h-auto block" />
          </div>
        </div>
        <div className="w-full h-5 bg-[#d4d4d4] rounded-b-2xl -mt-1" />
        <div className="bg-[#c0c0c0]" style={{ width: 60, height: 30, clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
        <div className="h-2.5 bg-[#b8b8b8] rounded-full" style={{ width: 160 }} />
      </div>

      <p className="text-sm font-medium text-ink">{slide.label}</p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIndex((i) => (i - 1 + ORIGINAL_SLIDES.length) % ORIGINAL_SLIDES.length)}
          className="w-9 h-9 rounded-full border border-subtle bg-white shadow flex items-center justify-center hover:bg-cream transition-colors text-sm"
          aria-label="Previous"
        >←</button>

        <div className="flex gap-3">
          {ORIGINAL_SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-14 h-9 rounded overflow-hidden border-2 transition-all ${i === index ? 'border-ink' : 'border-transparent opacity-50 hover:opacity-75'}`}
            >
              <img src={s.src} alt={s.label} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>

        <button
          onClick={() => setIndex((i) => (i + 1) % ORIGINAL_SLIDES.length)}
          className="w-9 h-9 rounded-full border border-subtle bg-white shadow flex items-center justify-center hover:bg-cream transition-colors text-sm"
          aria-label="Next"
        >→</button>
      </div>
    </div>
  )
}

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-black/10 w-full">
      <div className="bg-[#E2E2E2] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white rounded h-5 flex items-center px-3">
          <span className="text-[9px] text-gray-400 truncate">arrivia.com</span>
        </div>
      </div>
      <div className="overflow-y-auto bg-white aspect-video md:aspect-auto md:h-[520px]">
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

function NumberedCards({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-4 bg-white rounded-lg px-5 py-4 shadow-sm border border-subtle">
          <span className="text-sm font-black shrink-0 mt-0.5" style={{ color: ACCENT }}>0{i + 1}</span>
          <p className="text-sm text-ink/70 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  )
}

const PROCESS_STEPS = ['Discovery', 'Research', 'Define', 'Design', 'Test & Iterate']

export default function ArriviaContent() {
  const relatedStudies = caseStudies.filter((c) => c.slug !== 'arrivia-travel').slice(0, 3)

  return (
    <div className="flex flex-col text-ink">
      <ScrollToTop />

      {/* ── HERO ── */}
      <section className="px-11 py-16 border-b border-subtle flex flex-col md:flex-row items-center gap-12" style={{ background: ACCENT }}>
        <div className="flex-1 min-w-0">
<p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-white/60">Case Study: Travel & Loyalty</p>
          <h1 className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white mb-5">
            Reimagining a Member Booking Experience
          </h1>
          <p className="text-sm text-white/70 leading-relaxed mb-8">
            The UX Design team and I worked with Arrivia&apos;s Fortune 500 partner to reimagine their travel website for members. The existing platform was outdated and overwhelming, and it failed to help members understand or use their benefits. Our redesign was built on two rounds of user research and produced a modern, member-first experience across hotel, air, resort, and cruise booking.
          </p>
          <a
            href="#ongoing-ui"
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
            style={{ background: 'white', color: ACCENT }}
          >
            See Final Results ↓
          </a>
        </div>
        <div className="w-[45%] mx-auto md:mx-0 md:w-[22%] flex-shrink-0">
          <img src="/images/Arrivia/header 2.png" alt="Arrivia" className="w-full h-auto block" />
        </div>
      </section>

      {/* ── PROBLEM + SOLUTION ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-7 border-t-4" style={{ borderColor: '#E05C5C' }}>
          <p className="text-[9px] uppercase tracking-widest font-semibold text-[#E05C5C] mb-2">Problem</p>
          <h2 className="font-black text-xl mb-4">What wasn&apos;t working</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            The partner&apos;s travel website was outdated and lacked the basic UX foundations needed to engage users. Members had a hard time understanding their benefits and figuring out how to apply savings credits to bookings. That was the whole point of the membership, and the original design made it nearly invisible.
          </p>
        </div>
        <div className="bg-white rounded-xl p-7 border-t-4" style={{ borderColor: ACCENT }}>
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Solution</p>
          <h2 className="font-black text-xl mb-4">How we fixed it</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            My team and I stripped things back and started fresh. The original site was overwhelming and failed to build trust, so we focused on clarity. I worked on the deal cards and the welcome experience to surface member value right away. We built a member onboarding flow, redesigned the currency bar to update in real time, and created a benefits library so members could actually understand what they had.
          </p>
        </div>
      </section>

      {/* ── META ROW ── */}
      <section className="px-11 py-10 border-b border-subtle grid grid-cols-2 md:grid-cols-4 gap-8" style={{ background: ACCENT_LIGHT }}>
        {[
          { label: 'Tools', value: 'Figma, Miro, Maze' },
          { label: 'Team', value: '2 UX Designers · 1 UX Researcher · 2 Project Managers' },
          { label: 'My Role', value: 'UX Designer' },
          { label: 'Timeline', value: '20 weeks' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[9px] uppercase tracking-widest font-semibold mb-1" style={{ color: ACCENT }}>{label}</p>
            <p className="text-sm font-medium text-ink">{value}</p>
          </div>
        ))}
      </section>

      {/* ── DESIGN PROCESS ── */}
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

      {/* ── DISCOVERY ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Discovery</p>
        <h2 className="font-black text-2xl mb-6">Understanding the Existing Platform</h2>
        <NumberedCards items={[
          'Audited the existing booking platform to identify usability failures and missed value propositions.',
          'Talked to stakeholders to understand business goals, member segments, and known pain points.',
          'Mapped the member journey from login to booking completion, finding where users dropped off or got confused.',
          'Reviewed competitor travel platforms to understand what was working in deal presentation, onboarding, and benefit communication.',
        ]} />
      </section>

      {/* ── ORIGINAL WEBSITE ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Before</p>
        <h2 className="font-black text-2xl mb-6">Original Website</h2>
        <OriginalWebsiteCarousel />
        <p className="text-[9px] text-muted uppercase tracking-widest text-center mt-4 italic">
          The original platform: outdated, visually overwhelming, and hard to navigate
        </p>
      </section>

      {/* ── INITIAL USABILITY STUDY ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Research</p>
        <h2 className="font-black text-2xl mb-5">Initial Usability Study</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-6">
          Before redesigning, we ran a usability study on the previous team&apos;s designs with 15 participants to understand where the experience was breaking down.
        </p>
        <NumberedCards items={[
          '7 of 15 users could not complete tasks involving member savings credits. The currency bar was a consistent pain point.',
          'The currency bar did not update after bookings and failed to explain different currency types.',
          'Deal cards were frequently missed or ignored when placed below the fold.',
          'Users expressed low confidence when navigating between booking categories (hotel, air, cruise).',
        ]} />
      </section>

      {/* ── DESIGN HEADER BAND ── */}
      <section className="px-11 py-8 border-b border-subtle" style={{ background: ACCENT }}>
        <p className="text-[9px] uppercase tracking-widest font-semibold text-white/60 mb-1">Process</p>
        <h2 className="font-black text-3xl text-white">Design</h2>
      </section>

      {/* ── SKETCHES ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Design</p>
        <h2 className="font-black text-2xl mb-4">Sketches</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-8">
          I began with rapid paper sketches to quickly explore layout directions before committing to digital wireframes. Sketching allowed me to think freely about structure, hierarchy, and user flow without getting caught up in visual details early on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/Arrivia/Sketch 1.png" alt="Sketch 1" className="w-full h-auto rounded-lg shadow" />
          <img src="/images/Arrivia/Sketch 2.png" alt="Sketch 2" className="w-full h-auto rounded-lg shadow" />
          <img src="/images/Arrivia/Sketch 3.png" alt="Sketch 3" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      {/* ── IA / FLOW DIAGRAM ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Design</p>
        <h2 className="font-black text-2xl mb-6">Information Architecture</h2>
        <img src="/images/Arrivia/Map 1.png" alt="Information architecture map" className="w-full h-auto rounded-lg shadow" />
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Design</p>
          <h2 className="font-black text-2xl mb-4">Wireframes</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Low fidelity wireframes helped lock in structure before any visual decisions were made. I focused on surfacing member value above the fold (deal cards, currency balance, booking CTAs) and restructured navigation to cut down the steps between login and booking.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex-shrink-0">
          <PhoneFrame src="/images/Arrivia/Low 1.png" alt="Low fidelity wireframe" />
        </div>
      </section>

      {/* ── MID FIDELITY ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Design</p>
          <h2 className="font-black text-2xl mb-4">Mid Fidelity Designs</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Mid fidelity designs brought structure to life with real content, spacing, and component relationships. These drove our first round of stakeholder reviews and helped us figure out where to focus in high fidelity: the booking flow and member dashboard came first.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <BrowserFrame src="/images/Arrivia/mid 1.png" alt="Mid fidelity designs" />
        </div>
      </section>

      {/* ── HIGH FIDELITY HEADER BAND ── */}
      <section className="px-11 py-8 border-b border-subtle" style={{ background: ACCENT }}>
        <p className="text-[9px] uppercase tracking-widest font-semibold text-white/60 mb-1">Final UI</p>
        <h2 className="font-black text-3xl text-white">High Fidelity Designs</h2>
      </section>

      {/* ── SHOP TRAVEL LANDING PAGE ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Final UI</p>
          <h2 className="font-black text-2xl mb-4">Shop Travel Landing Page</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            The redesigned landing page surfaced deal cards prominently above the fold, with a currency bar that updated in real time. I restructured the page hierarchy so members could quickly understand what they could book and how their credits applied, which cut down the friction that caused drop-off in the original.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <BrowserFrame src="/images/Arrivia/high 1.png" alt="Shop travel landing page" />
        </div>
      </section>

      {/* ── MY BENEFITS PAGE ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Final UI</p>
          <h2 className="font-black text-2xl mb-4">My Benefits Page</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            The benefits page gave members a clear place to understand what they had access to, how their credits worked, and how to use them. In the original product, members rarely understood their membership value. This page fixed that.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex-shrink-0">
          <PhoneFrame src="/images/Arrivia/high 2.png" alt="My benefits page" />
        </div>
      </section>

      {/* ── ONBOARDING ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Final UI</p>
        <h2 className="font-black text-2xl mb-4">The Onboarding Experience</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-8">
          We built a member onboarding experience to introduce users to the platform, covering the types of credits available, how savings apply to bookings, and where to start. The flow landed well in testing: 5 of 9 external users engaged with it and left positive feedback.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <PhoneFrame src="/images/Arrivia/board 1.png" alt="Onboarding screen 1" />
          <PhoneFrame src="/images/Arrivia/board 2.png" alt="Onboarding screen 2" />
          <PhoneFrame src="/images/Arrivia/board 3.png" alt="Onboarding screen 3" />
          <PhoneFrame src="/images/Arrivia/board 4.png" alt="Onboarding screen 4" />
        </div>
      </section>

      {/* ── USABILITY TESTING ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Research</p>
        <h2 className="font-black text-2xl mb-5">Usability Testing</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-6">
          After our first redesign round, we tested with 9 internal travel agents over two weeks. This validated our structural changes and surfaced smaller interaction issues before we moved to external users.
        </p>
        <NumberedCards items={[
          'The updated currency bar was understood immediately by 8 of 9 participants, a significant improvement over baseline.',
          'Deal cards placed above the fold saw strong engagement; participants noticed and interacted with them unprompted.',
          'Navigation between booking categories (hotel, air, cruise) was rated as clear and intuitive by all participants.',
          'Minor issues with the onboarding skip flow were flagged and addressed before external testing.',
        ]} />
      </section>

      {/* ── USABILITY TESTING SECOND ROUND ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Research</p>
        <h2 className="font-black text-2xl mb-5">Usability Testing: Second Round</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-6">
          The second round brought in 9 external users over 3 weeks, giving us real-world feedback from actual members.
        </p>
        <NumberedCards items={[
          'SUS score rose from 62 (original site) to 80 (round 1) to 83 (round 2), approaching the 85.5 benchmark for excellence.',
          '5 of 9 external users engaged with the onboarding experience and provided unprompted positive feedback.',
          'The "My Benefits" page was cited as a valuable addition by 7 of 9 participants who said they had never understood their credits before.',
          'Overall task completion rate reached 70%, up significantly from the baseline.',
        ]} />
      </section>

      {/* ── HIGHEST PRIORITY ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <p className="text-[9px] uppercase tracking-widest font-semibold mb-6" style={{ color: ACCENT }}>Priorities</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { label: 'Priority 1', text: 'Surface member value immediately on login. Credits, deals, and savings should be visible before anything else.' },
            { label: 'Priority 2', text: 'Fix the currency bar: update it in real time and clearly explain each credit type and how it applies to bookings.' },
            { label: 'Priority 3', text: 'Move deal cards above the fold. Every other design decision was measured against whether it served these priorities.' },
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

      {/* ── UI DESIGN (ONGOING) ── */}
      <section id="ongoing-ui" className="px-11 py-12 bg-white border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: ACCENT }}>Final UI</p>
          <h2 className="font-black text-2xl mb-4">UI Design (Ongoing Designs)</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            As the platform evolved, I contributed UI designs across additional booking flows and account management screens. The template was later picked up for other Arrivia client accounts, and I built a design toolkit that let the account management team present the system to new clients on their own.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex-shrink-0">
          <PhoneFrame src="/images/Arrivia/high 3.png" alt="Ongoing UI design" />
        </div>
      </section>

      {/* ── LEARNINGS + NEXT STEPS ── */}
      <section className="px-11 py-12 border-b border-subtle grid md:grid-cols-2 gap-6" style={{ background: ACCENT_LIGHT }}>
        <div>
          <p className="text-[9px] uppercase tracking-widest font-semibold mb-5" style={{ color: ACCENT }}>Learnings</p>
          <div className="flex flex-col gap-3">
            {[
              'Working on a Fortune 500 platform reinforced how much unclear value propositions cost. If users can\'t understand what they have, they disengage regardless of visual polish.',
              'Research-backed iteration saved real time. Validating structural decisions before high fidelity meant we didn\'t have to rebuild work.',
              'A solid onboarding experience doesn\'t just orient users. It sets their expectations and builds the confidence they need for everything that follows.',
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
              'Expand the design system template to additional Arrivia client accounts with brand-specific theming.',
              'Run a third round of usability testing with real booking scenarios to validate the full end-to-end flow.',
              'Build out the service detail pages for hotel, air, cruise, and resort to match the quality of the redesigned landing page.',
              'Introduce A/B testing on deal card layouts to optimize for booking conversion.',
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
          The redesigned platform improved both member engagement and comprehension. SUS scores rose from 62 on the original site to 83 after two rounds of work, approaching the 85.5 benchmark for excellence. The design template was adopted across other Arrivia client accounts, and I built a toolkit that let the account management team present the system to new clients on their own.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: '62 → 83', bold: 'SUS Score improvement', rest: 'approaching excellence benchmark' },
            { value: '70%', bold: 'task completion rate', rest: 'up significantly from baseline' },
            { value: '5 / 9', bold: 'external users praised', rest: 'the onboarding experience' },
          ].map(({ value, bold, rest }) => (
            <div key={value} className="rounded-xl p-7 border border-subtle flex flex-col gap-2" style={{ borderTopWidth: 4, borderTopColor: ACCENT }}>
              <p className="font-black text-4xl leading-tight" style={{ color: ACCENT }}>{value}</p>
              <p className="text-sm text-ink/70"><strong className="text-ink">{bold}</strong> {rest}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DROP ME A MESSAGE ── */}
      <section className="px-11 py-16 border-b border-subtle flex flex-col items-center text-center gap-4" style={{ background: ACCENT }}>
        <h2 className="font-black text-4xl text-white">Thank you for reading my case study!</h2>
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
                <img
                  src={related.thumbnail}
                  alt={related.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex flex-wrap gap-1">
                  {related.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-0.5">
                      {tag}
                    </span>
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
