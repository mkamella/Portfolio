'use client'

import { motion } from 'framer-motion'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StatBlock from '@/components/StatBlock'
import BentoCard from '@/components/BentoCard'
import { caseStudies } from '@/data/case-studies'
import { useActiveSection } from '@/hooks/useActiveSection'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

const SECTIONS = ['home', 'about', 'work', 'contact']
const TOOLS = ['Figma', 'Miro', 'Axure', 'GitHub', 'Claude']

const BLOB_KEYFRAMES = [
  '60% 40% 30% 70% / 60% 30% 70% 40%',
  '30% 60% 70% 40% / 50% 60% 30% 60%',
  '50% 40% 60% 30% / 40% 60% 50% 40%',
  '40% 60% 40% 60% / 60% 40% 60% 40%',
  '60% 40% 30% 70% / 60% 30% 70% 40%',
]

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
          <section id="home" className="h-screen flex flex-col px-11 py-12 bg-white">
            <p className="text-[9px] text-muted uppercase tracking-widest">
              UX Designer — Portfolio 2025
            </p>

            {/* Name + blob image */}
            <div className="flex-1 flex items-center justify-between gap-6">
              <h1 className="font-black text-[80px] text-ink uppercase leading-none tracking-[-0.05em] flex-shrink-0">
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
                className="overflow-hidden bg-cream-dark"
                style={{
                  width: '48%',
                  height: '68vh',
                  borderRadius: BLOB_KEYFRAMES[0],
                }}
                animate={{
                  y: [0, -14, 0],
                  borderRadius: BLOB_KEYFRAMES,
                }}
                transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
              >
                <img
                  src="/images/Portfolio Header Image.png"
                  alt="Mikey Amella"
                  className="w-full h-full object-cover"
                />
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
          <section id="about" className="min-h-screen flex flex-col gap-8 px-11 py-20 bg-rust">
            <h2 className="font-black text-4xl text-white uppercase tracking-tighter leading-tight">
              Designing seamless experiences,<br />one pixel at a time.
            </h2>
            <div className="h-px bg-white/20" />

            <div className="flex gap-10 items-start">
              {/* Image — large, left */}
              <div className="flex flex-col items-center gap-3" style={{ flexBasis: '42%', flexShrink: 0 }}>
                <motion.div
                  className="w-full overflow-hidden bg-rust/60"
                  style={{
                    height: '58vh',
                    borderRadius: BLOB_KEYFRAMES[0],
                  }}
                  animate={{ borderRadius: BLOB_KEYFRAMES }}
                  transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
                >
                  <img
                    src="/images/about me picture.jpg"
                    alt="Mikey Amella"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <p className="text-[9px] text-white/60 uppercase tracking-widest text-center italic">
                  Creating experiences one pixel at a time.
                </p>
              </div>

              {/* Bio — right */}
              <div className="flex-1 flex flex-col gap-4 text-sm text-white/80 leading-relaxed pt-2">
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
            </div>

            <div className="flex gap-4">
              <StatBlock value="3+" label="Years Experience" />
              <StatBlock value="10+" label="Projects" />
              <StatBlock value="4" label="Case Studies" />
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="min-h-screen px-11 py-20 bg-sage">
            <p className="text-[9px] text-white/60 uppercase tracking-widest mb-8">
              {caseStudies.length} projects
            </p>
            <div
              className="grid grid-cols-3 gap-4"
              style={{ gridTemplateRows: '320px 320px 260px' }}
            >
              {/* Project 1 — hero, large */}
              <div className="col-span-2 row-span-2">
                <BentoCard caseStudy={caseStudies[0]} index={0} isLarge />
              </div>

              {/* Projects 2 & 3 — right column */}
              <BentoCard caseStudy={caseStudies[1]} index={1} />
              <BentoCard caseStudy={caseStudies[2]} index={2} />

              {/* Projects 4 & 5 — bottom row */}
              <BentoCard caseStudy={caseStudies[3]} index={3} />
              <div className="col-span-2">
                <BentoCard caseStudy={caseStudies[4]} index={4} />
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="min-h-screen">
          <BackgroundGradientAnimation
            firstColor="192, 101, 74"
            secondColor="196, 112, 78"
            thirdColor="122, 158, 126"
            fourthColor="232, 160, 144"
            fifthColor="245, 240, 235"
            containerClassName="min-h-screen"
            className="flex flex-col justify-between px-11 py-20 min-h-screen">
            <div className="flex flex-col gap-10">
              <h2 className="font-black text-[80px] text-white uppercase leading-none tracking-[-0.05em]">
                {["Let's", 'work', 'together.'].map((word, i) => (
                  <motion.span
                    key={word}
                    className="block"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 7, stiffness: 70, delay: i * 0.15 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:mkdamella@gmail.com"
                  aria-label="Email Mikey"
                  className="text-base font-medium text-white border-b-2 border-white/40 pb-0.5 w-fit hover:border-accent hover:text-accent transition-colors"
                >
                  mkdamella@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mikey-amella/"
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white/50 hover:text-white transition-colors w-fit"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider border border-white/30 px-6 py-3 rounded hover:bg-white hover:text-charcoal transition-colors w-fit"
            >
              Download Resume ↓
            </a>
          </BackgroundGradientAnimation>
          </section>
        </>
      }
    />
  )
}
