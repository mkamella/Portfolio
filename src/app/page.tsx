'use client'

import { motion } from 'framer-motion'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StatBlock from '@/components/StatBlock'
import AnimatedCaseStudyRow from '@/components/AnimatedCaseStudyRow'
import { caseStudies } from '@/data/case-studies'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTIONS = ['home', 'about', 'work', 'contact']
const TOOLS = ['Figma', 'Miro', 'Axure', 'GitHub', 'Claude']

export default function HomePage() {
  const activeSection = useActiveSection(SECTIONS) as 'home' | 'about' | 'work' | 'contact'

  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection={activeSection}
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
        <>
          {/* HOME */}
          <section id="home" className="h-screen flex flex-col justify-between px-11 py-12 bg-white">
            <p className="text-[9px] text-muted uppercase tracking-widest">
              UX Designer — Portfolio 2025
            </p>

            <div className="flex items-end gap-8">
              <h1 className="font-black text-[80px] text-ink uppercase leading-none tracking-[-0.05em]">
                {['MIKEY', 'AMELLA'].map((word, i) => (
                  <motion.span
                    key={word}
                    className="block"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 7, stiffness: 70, delay: 0.1 + i * 0.18 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="mb-4"
              >
                <div
                  className="w-32 h-44 overflow-hidden bg-cream-dark border-4 border-cream"
                  style={{ borderRadius: '50%' }}
                >
                  <img
                    src="/images/Portfolio Header Image.png"
                    alt="Mikey Amella"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-end">
              <p className="text-sm text-muted leading-relaxed max-w-xs">
                Crafting human-centered digital experiences that bridge complexity and clarity.
              </p>
              <p className="text-[10px] text-muted uppercase tracking-widest">Scroll ↓</p>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="min-h-screen flex flex-col gap-6 px-11 py-20 bg-cream">
            <h2 className="font-black text-4xl text-ink uppercase tracking-tighter leading-tight">
              Designing seamless experiences,<br />one pixel at a time.
            </h2>
            <div className="h-px bg-subtle" />

            <div className="flex gap-10 items-start">
              <div className="flex flex-col gap-4 text-sm text-muted leading-relaxed flex-1">
                <p>
                  I&apos;m a UX designer originally from Colorado. My journey started as a computer
                  science major — I loved problem-solving, but my work lacked the visual and
                  experiential impact I was searching for. That realization led me to switch schools
                  and majors, where I discovered my passion for UX and product design.
                </p>
                <p>
                  I graduated summa cum laude from Arizona State University, earning the Outstanding
                  UX Award and Super Star Award for my contributions to the field. Since then I&apos;ve
                  led redesigns for Fortune 500 travel platforms, healthcare clinics, and non-profits —
                  always focused on turning complexity into clarity.
                </p>
                <p>
                  When I&apos;m not designing, you can find me thrifting, hiking, or exploring new
                  places — I&apos;m always looking for inspiration in the world around me.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div
                  className="w-44 h-60 overflow-hidden bg-cream-dark"
                  style={{ borderRadius: '50%' }}
                >
                  <img
                    src="/images/about me picture.jpg"
                    alt="Mikey Amella"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[9px] text-muted uppercase tracking-widest text-center italic max-w-[160px]">
                  Creating experiences one pixel at a time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <StatBlock value="3+" label="Years Experience" />
              <StatBlock value="10+" label="Projects" />
              <StatBlock value="4" label="Case Studies" />
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="min-h-screen px-11 py-20 bg-white">
            <p className="text-[9px] text-muted uppercase tracking-widest mb-8">
              {caseStudies.length} projects
            </p>
            <div className="flex flex-col gap-4">
              {caseStudies.map((cs, i) => (
                <AnimatedCaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="min-h-screen flex flex-col justify-between px-11 py-20 bg-cream">
            <div className="flex flex-col gap-8">
              <h2 className="font-black text-5xl text-ink uppercase tracking-tighter leading-tight">
                Let&apos;s work<br />together.
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:mkdamella@gmail.com"
                  aria-label="Email Mikey"
                  className="text-base font-medium text-ink border-b-2 border-accent pb-0.5 w-fit hover:text-accent transition-colors"
                >
                  mkdamella@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mikey-amella/"
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
          </section>
        </>
      }
    />
  )
}
