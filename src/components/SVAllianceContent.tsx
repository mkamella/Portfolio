'use client'

import { useEffect, useState } from 'react'
import { caseStudies } from '@/data/case-studies'

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-black/10 w-full">
      <div className="bg-[#E2E2E2] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white rounded h-4 flex items-center px-2">
          <span className="text-[8px] text-gray-400 truncate">southeastvalleyalliance.org</span>
        </div>
      </div>
      <div className="h-[380px] overflow-y-auto bg-white">
        <img src={src} alt={alt} className="w-full h-auto block" />
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
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#1C2B4A] text-white flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default function SVAllianceContent() {
  const relatedStudies = caseStudies.filter((c) => c.slug !== 'southeast-valley-alliance').slice(0, 3)

  return (
    <div className="flex flex-col text-ink">
      <ScrollToTop />

      {/* ── HERO ── */}
      <section
        className="px-11 py-20 flex flex-col justify-end border-b border-white/10 relative min-h-[360px]"
        style={{ background: `linear-gradient(to bottom, rgba(28,43,74,0.55) 0%, rgba(28,43,74,0.92) 100%), url('/images/SEVA/background.jpg') center/cover no-repeat` }}
      >

        <p className="text-white/50 text-[9px] uppercase tracking-widest mb-3">Case Study · Non-Profit</p>
        <h1 className="font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white mb-6">
          Building a Home<br />For Those Who Serve
        </h1>
        <div className="flex flex-wrap gap-3">
          {['UX Research', 'Web Design', 'Squarespace'].map(tag => (
            <span key={tag} className="text-[9px] uppercase tracking-widest text-white/60 border border-white/20 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      {/* ── META ── */}
      <section className="px-11 py-8 bg-white border-b border-subtle grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Tools', value: 'Figma · Squarespace' },
          { label: 'Team', value: '2 UX Designers' },
          { label: 'My Role', value: 'UX Designer · Researcher · PM' },
          { label: 'Timeline', value: '8 weeks' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[9px] text-muted uppercase tracking-widest mb-1">{label}</p>
            <p className="text-sm font-medium text-ink">{value}</p>
          </div>
        ))}
      </section>

      {/* ── OVERVIEW ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-5">Overview</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          The Southeast Valley Alliance is a non-profit in Queen Creek, Arizona that supports U.S. military veterans, active duty service members, their families, and first responders. Our team built a website to help the organization fundraise for a new community center. I came onto the project mid-stream, conducted original user research to validate and improve the existing designs, and delivered a live site built in Squarespace.
        </p>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mt-4">
          The previous team had created initial branding and mockups. My job was to validate those designs with real users, refine what needed fixing, and build and launch the final site in Squarespace.
        </p>
      </section>

      {/* ── PROTOTYPES ── */}
      <section className="px-11 py-12 bg-[#f7f7f7] border-b border-subtle">
        <h2 className="font-black text-2xl mb-2">Prototypes</h2>
        <p className="text-sm text-ink/60 mb-8 max-w-2xl">
          These are the designs the previous team handed off. My role was to test them with real users to find out what was working and what needed to change.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <BrowserFrame src="/images/SEVA/1.png" alt="Prototype 1" />
          <BrowserFrame src="/images/SEVA/2.png" alt="Prototype 2" />
          <BrowserFrame src="/images/SEVA/3.png" alt="Prototype 3" />
          <BrowserFrame src="/images/SEVA/4.png" alt="Prototype 4" />
        </div>
      </section>

      {/* ── BRANDING ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-6">Branding</h2>
        <img src="/images/SEVA/5.jpg" alt="Brand guidelines" className="w-full h-auto block rounded shadow-sm" />
      </section>

      {/* ── RESEARCH ── */}
      <section className="px-11 py-12 bg-[#f7f7f7] border-b border-subtle">
        <h2 className="font-black text-2xl mb-5">Research</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-6">
          To understand the target audience, we ran a survey targeting veterans, first responders, and regular donors. Here&apos;s what we found:
        </p>
        <ul className="flex flex-col gap-3 max-w-2xl">
          {[
            'Age Range: 40s – 50s',
            'Majority Male',
            'Household Income: $100,000–$200,000',
            'Majority have a military affiliation with the military, veterans, or first responders',
            'Credibility of a site is the most important factor when considering donating',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink/70 list-none">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1C2B4A] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── PERSONAS ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-8">Personas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/images/SEVA/6.png" alt="Persona A" className="w-full h-auto block rounded shadow-sm" />
          <img src="/images/SEVA/7.png" alt="Persona B" className="w-full h-auto block rounded shadow-sm" />
        </div>
      </section>

      {/* ── USER TESTING ── */}
      <section className="border-b border-subtle">
        <div className="px-11 py-6 bg-[#1C2B4A]">
          <h2 className="font-black text-2xl text-white">User Testing</h2>
        </div>

        <div className="px-11 py-10 bg-white border-b border-subtle">
          <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-8">
            We ran usability tests to see how first-time visitors would engage with the site and find out what needed improvement.
          </p>

          <div className="flex flex-col gap-6">
            {[
              {
                label: 'User Testing: Home Page',
                items: [
                  'Users had a good first impression and thought the site was laid out well.',
                  'The site could be more credible.',
                  '"Southeast Valley Alliance" affiliation being more apparent would greatly help.',
                ],
              },
              {
                label: 'User Testing Highlight: About Us',
                items: [
                  'Users understood who the Southeast Valley Alliance was.',
                  'Some read the organization as a military recruiting agency, which needed to be addressed.',
                  'Users questioned the organization\'s credibility.',
                  'The copy needed to make clear this was a support organization, not a recruiting one.',
                ],
              },
              {
                label: 'User Testing Highlight: Donation Page',
                items: [
                  'Users want to know exactly where their donation goes.',
                  'More context on how donations are used would help users commit.',
                  'Most users understood the Alliance\'s mission.',
                ],
              },
            ].map(({ label, items }) => (
              <div key={label} className="border border-subtle rounded-lg overflow-hidden">
                <div className="bg-[#1C2B4A] px-6 py-3">
                  <p className="font-bold text-sm text-white">{label}</p>
                </div>
                <ul className="flex flex-col gap-2 px-6 py-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/70 list-none">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1C2B4A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTIONS ── */}
      <section className="border-b border-subtle">
        <div className="px-11 py-6 bg-[#1C2B4A]">
          <h2 className="font-black text-2xl text-white">Our Solutions</h2>
        </div>
        <div className="px-11 py-10 bg-white">
          <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-8">
            With testing done, we redesigned based on what users told us. We restructured key sections to lead with credibility and revised the page hierarchy so visitors could understand the Alliance&apos;s mission quickly.
          </p>
          <img src="/images/SEVA/8.png" alt="Our solutions" className="w-full h-auto block rounded shadow-sm" />
        </div>
      </section>

      {/* ── CLIENT MEETINGS ── */}
      <section className="px-11 py-12 bg-[#f7f7f7] border-b border-subtle">
        <h2 className="font-black text-2xl mb-4">Client Meetings</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          We presented the completed designs to the Alliance&apos;s board members. They gave detailed, helpful feedback to align the designs with their goals, which we incorporated into the final version. With their sign-off, we felt confident the design was doing its job.
        </p>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-4">Challenges</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          Picking up mid-stream from another team is always tricky, especially under a tight timeline. The main thing was resisting the urge to jump into solutions before completing the research.
        </p>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mt-4">
          Finding the right testing platform and the right participants was harder than expected, but we gathered enough useful feedback to move forward with confidence.
        </p>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mt-4">
          Designing for a cause like this also carries the risk of bias creeping into the UX. We tried to stay grounded in what the research told us rather than our own assumptions.
        </p>
      </section>

      {/* ── WHAT WE LEARNED ── */}
      <section className="px-11 py-12 bg-[#f7f7f7] border-b border-subtle">
        <h2 className="font-black text-2xl mb-5">What We Learned</h2>
        <ul className="flex flex-col gap-3 max-w-2xl">
          {[
            'Skipping research, even when you\'re under pressure, costs more time than it saves.',
            'Credibility and trust are what move donors to act. The research confirmed it.',
            'Working directly with clients and incorporating their feedback is its own skill. This project sharpened that.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink/70 list-none">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1C2B4A] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── FINAL WEBSITE ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle flex flex-col items-center text-center">
        <h2 className="font-black text-4xl mb-4">Final Website</h2>
        <a
          href="https://www.southeastvalleyalliance.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#1C2B4A] px-6 py-3 rounded hover:opacity-80 transition-opacity mb-8"
        >
          View Live Site →
        </a>
        <img src="/images/SEVA/12.png" alt="Final website" className="w-full h-auto block rounded shadow-sm" />
      </section>

      {/* ── READ MORE ── */}
      <section className="px-11 py-12 bg-[#f7f7f7] border-b border-subtle">
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

      {/* ── GET IN TOUCH ── */}
      <section className="px-11 py-14 bg-[#1C2B4A] flex flex-col gap-2">
        <h2 className="font-black text-4xl text-white">Get in touch with me!</h2>
        <a
          href="mailto:mkdamella@gmail.com"
          className="text-base font-medium text-white/60 border-b border-white/30 pb-0.5 w-fit hover:text-white hover:border-white transition-colors"
        >
          mkdamella@gmail.com
        </a>
      </section>

    </div>
  )
}
