'use client'

import { useEffect, useState } from 'react'
import { caseStudies } from '@/data/case-studies'

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
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-ink text-white flex items-center justify-center shadow-lg hover:bg-charcoal transition-colors"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

const ATOM_LEVELS = [
  { n: 1, title: 'Atoms', items: ['Basic building blocks such as buttons, form fields, and icons.'] },
  { n: 2, title: 'Molecules', items: ['Combinations of atoms that form more complex components.', 'Examples: a search bar combining an input field and button, or a navigation menu.'] },
  { n: 3, title: 'Organisms', items: ['Complete sections of a UI (like a header or footer) with integrated molecules and atoms.'] },
  { n: 4, title: 'Templates', items: ['Frameworks that structure the layout of a page.'] },
  { n: 5, title: 'Pages', items: ['Define the placement and relationship of organisms within a specific context.', 'The final, specific instances of templates filled with actual content.', 'Represent fully realized web pages with a unique combination of elements.'] },
]

export default function CobaltContent() {
  const relatedStudies = caseStudies.filter((c) => c.slug !== 'cobalt-design-system').slice(0, 3)

  return (
    <div className="flex flex-col text-ink">
      <ScrollToTop />

      {/* ── HERO ── */}
      <section className="px-11 py-16 bg-[#1A2E5A] border-b border-subtle flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">

          <p className="text-white/50 text-[9px] uppercase tracking-widest mb-3">Case Study</p>
          <h1 className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white mb-3">
            Building a Design System
          </h1>
          <p className="text-base font-semibold text-white/70 mb-5">Arrivia Cobalt Design System</p>
          <p className="text-sm text-white/60 leading-relaxed max-w-lg">
            Seven platforms. One design language. Cobalt was built to unify the interfaces across all of Arrivia&apos;s products under a single, scalable design language — adopting atomic design principles and building foundational elements upward to progressively unify visual design and prioritize a consistent user experience.
          </p>
        </div>
        <div className="w-full md:w-[30%] flex-shrink-0">
          <img src="/images/Cobalt/header 1.png" alt="Cobalt Design System" className="w-full h-auto block" />
        </div>
      </section>

      {/* ── WHAT IS A DESIGN SYSTEM ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-5">What is a Design System?</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          A design system for a company is a comprehensive framework that encompasses a set of guidelines, principles, and assets to ensure consistency, efficiency, and a seamless user experience across all digital products and platforms. It serves as a centralized resource for design and development teams, providing a unified approach to user interface (UI) elements, interactions, and visual styles.
        </p>
      </section>

      {/* ── COBALT ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <h2 className="font-black text-2xl mb-5">Cobalt</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            The UX team currently designs for 7+ platforms. In order to create a more cohesive goal and to &ldquo;Arrive&rdquo; the Cobalt design system was created. Cobalt adopts atomic design principles — assembling foundational elements to progressively unify our platforms and products into a seamlessly cohesive visual design, prioritizing an enhanced experience for our users.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img src="/images/Cobalt/1.png" alt="Cobalt design system overview" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      {/* ── WHY DO WE NEED COBALT ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-5">Why do we need Cobalt?</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          Cobalt is vital for maintaining a consistent brand identity across digital platforms. Streamlining design and development for efficiency, this design system ensures a seamless user experience, and adapts easily to scalability needs. By providing reusable components and guidelines, Cobalt not only enhances brand recognition but also facilitates the creation of visually cohesive and user-friendly digital products.
        </p>
      </section>

      {/* ── HOW IT WAS SET UP ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <h2 className="font-black text-2xl mb-6">How it was set up</h2>
          <ol className="flex flex-col gap-5">
            {ATOM_LEVELS.map(({ n, title, items }) => (
              <li key={n} className="flex flex-col gap-1">
                <p className="text-sm font-bold text-ink">{n}. {title}</p>
                {items.map((item, i) => (
                  <p key={i} className="text-sm text-ink/70 leading-relaxed pl-4">{item}</p>
                ))}
              </li>
            ))}
          </ol>
        </div>
        <div className="w-full md:w-2/5 flex-shrink-0">
          <img src="/images/Cobalt/2.png" alt="Atomic design hierarchy" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      {/* ── THE ATOMS ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-3">The &ldquo;Atoms&rdquo;</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl mb-8">
          Some of the UI components the UX team and I built can be seen below. The basic atoms are the core of our design system, serving as the elemental foundation from which we construct more complex molecules, organisms, templates, and ultimately, complete pages. These atoms include buttons, form fields, and icons, encapsulates the fundamental visual and interactive building blocks of our interface.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Icons', n: 3 },
            { label: 'Buttons', n: 4 },
            { label: 'Inputs and Fields', n: 5 },
            { label: 'Chips', n: 6 },
          ].map(({ label, n }) => (
            <div key={label} className="flex flex-col gap-3">
              <p className="text-xs font-bold text-ink text-center">{label}</p>
              <img src={`/images/Cobalt/${n}.png`} alt={label} className="w-full h-auto rounded-lg shadow" />
            </div>
          ))}
        </div>
      </section>

      {/* ── THE MOLECULES ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <h2 className="font-black text-2xl mb-8">The &ldquo;Molecules&rdquo;</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/Cobalt/7.png" alt="Molecule design A" className="w-full h-auto rounded-lg shadow" />
          <img src="/images/Cobalt/8.png" alt="Molecule design B" className="w-full h-auto rounded-lg shadow" />
          <img src="/images/Cobalt/9.png" alt="Molecule design C" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      {/* ── OUR FIRST ORGANISM ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <h2 className="font-black text-2xl mb-8">Our First Organism!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/Cobalt/10.png" alt="Organism design A" className="w-full h-auto rounded-lg shadow" />
          <img src="/images/Cobalt/11.png" alt="Organism design B" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      {/* ── THE CONTINUATION OF COBALT ── */}
      <section className="px-11 py-12 bg-cream border-b border-subtle">
        <h2 className="font-black text-2xl mb-5">The Continuation of Cobalt</h2>
        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
          This design system has allowed us to create a more cohesive brand and interface design. Cobalt still has components to be designed and we are actively working on growing this system to our first template. The end of Cobalt is not near but it is our hope that Cobalt will become a complete and fully fledged design system that unifies the interfaces at Arrivia across all products.
        </p>
      </section>

      {/* ── READ MORE ── */}
      <section className="px-11 py-12 bg-white border-b border-subtle">
        <p className="font-black text-xl text-ink uppercase tracking-tight mb-6 text-center">Read more of my case studies</p>
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
      <section className="px-11 py-14 bg-cream flex flex-col gap-2">
        <h2 className="font-black text-4xl text-ink">Get in touch with me!</h2>
        <a
          href="mailto:mkdamella@gmail.com"
          className="text-base font-medium text-muted border-b-2 border-subtle pb-0.5 w-fit hover:text-ink hover:border-ink transition-colors"
        >
          mkdamella@gmail.com
        </a>
      </section>

    </div>
  )
}
