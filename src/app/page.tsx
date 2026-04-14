'use client'

import { motion } from 'framer-motion'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import BentoCard from '@/components/BentoCard'
import { caseStudies } from '@/data/case-studies'
import { useActiveSection } from '@/hooks/useActiveSection'
import { TextRotate } from '@/components/ui/text-rotate'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'
import { MouseGradientBackground } from '@/components/ui/mouse-gradient-background'

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
      left={<LeftPanel activeSection={activeSection} />}
      right={
        <>
          {/* HOME */}
          <section id="home" className="h-screen w-full overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative bg-hero-blue">

            {/* Floating images */}
            <Floating sensitivity={-0.5}>
              <FloatingElement depth={0.5} className="top-[20%] left-[2%]">
                <motion.img
                  src="/images/cloud2.png"
                  alt=""
                  className="w-20 md:w-36"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                />
              </FloatingElement>

              <FloatingElement depth={1} className="top-[5%] left-[10%]">
                <motion.img
                  src="/images/cloud1.png"
                  alt=""
                  className="w-36 md:w-64"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                />
              </FloatingElement>

              <FloatingElement depth={3} className="top-[72%] left-[4%]">
                <motion.img
                  src="/images/cloud2.png"
                  alt=""
                  className="w-36 md:w-64"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                />
              </FloatingElement>

              <FloatingElement depth={2} className="top-[3%] left-[78%]">
                <motion.img
                  src="/images/cloud1.png"
                  alt=""
                  className="w-36 md:w-64"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                />
              </FloatingElement>

              <FloatingElement depth={1} className="top-[65%] left-[75%]">
                <motion.img
                  src="/images/cloud2.png"
                  alt=""
                  className="w-40 md:w-80"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
                />
              </FloatingElement>
            </Floating>

            {/* Center text */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <motion.h1
                className="font-handwritten text-[clamp(4rem,12vw,9rem)] text-hero-yellow leading-none tracking-normal mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 10, stiffness: 80, delay: 0.05 }}
              >
                Hi I&apos;m Mikey :)
              </motion.h1>

              <motion.h2
                className="flex flex-wrap items-center justify-center gap-x-3 text-2xl md:text-4xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              >
                I design
                <span className="text-hero-yellow overflow-hidden inline-flex">
                  <TextRotate
                    texts={['intuitive', 'thoughtful', 'human']}
                    rotationInterval={2800}
                    staggerDuration={0.03}
                    staggerFrom="first"
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  />
                </span>
                experiences.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4, ease: 'easeOut' }}
              >
                <motion.a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-bold text-hero-blue uppercase tracking-wider bg-hero-yellow px-6 py-3 rounded hover:bg-white transition-colors"
                  whileHover="hover"
                >
                  See my work
                  <motion.span
                    variants={{ hover: { rotate: 90 } }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="bg-rust flex flex-col">

            {/* Editorial heading block */}
            <div className="px-8 md:px-16 pt-16 pb-8 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">01 / About</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">UX Designer</p>
              </div>
              <h2 className="font-handwritten text-[clamp(3.5rem,13vw,11rem)] text-white leading-none tracking-tight">
                Get to Know Me!
              </h2>
              <div className="h-px bg-white/20" />
            </div>

            {/* Block 1: Photo left, bio right */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start px-8 md:px-16 py-12">
              <div className="flex flex-col items-center gap-3 shrink-0 w-full md:w-[38%]">
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src="/images/About me 1.png"
                    alt="Mikey Amella"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-[11px] text-white/70 tracking-wide text-center">
                  Designing seamless experiences, one outfit (and pixel) at a time.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-5 text-[15px] text-white/80 leading-relaxed">
                <p>
                  I&apos;m a UX designer originally from Colorado. My journey into design started as a computer science major, driven by my love for creativity and problem-solving. However, after completing numerous coding assignments, I realized my work lacked the visual and experiential impact I was searching for. That realization led me to switch schools and majors, where I discovered my passion for UX and product design.
                </p>
                <p>
                  I graduated <strong className="text-white font-bold">summa cum laude</strong> from Arizona State University, where I refined my design skills and was honored with the <strong className="text-white font-bold">Outstanding UX Award</strong> and <strong className="text-white font-bold">Super Star Award</strong> for my contributions to the major and field. These experiences solidified my commitment to creating meaningful, user-centered design solutions.
                </p>
                <p>
                  While at ASU, I served as a UX Designer and Project Manager for Arizona State University&apos;s Creative Agency, where I led student teams on impactful design projects for the Arizona community. I also gained professional experience as a Product Designer at Arrivia in Scottsdale, collaborating with designers and researchers to execute platform redesigns for Fortune 500 companies.
                </p>
                <p>
                  When I&apos;m not designing, you can find me thrifting, hiking, or exploring new places—I&apos;m always looking for inspiration in the world around me!
                </p>
              </div>
            </div>

            {/* Thin divider */}
            <div className="mx-8 md:mx-16 h-px bg-white/15" />

            {/* Block 2: Values left, photo right */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center px-8 md:px-16 py-12 pb-20">
              <div className="flex-1 flex flex-col gap-8">
                <h3 className="font-handwritten text-[clamp(3rem,8vw,6rem)] text-white leading-none">
                  My Core Values
                </h3>
                <ul className="flex flex-col">
                  {['Be Empathetic', 'Be Humorous', 'Stay Curious', 'Stay Inclusive', 'Be Adaptable', 'Remain Resilient'].map((value, i) => (
                    <motion.li
                      key={value}
                      className="flex items-center gap-3 text-base text-white border-b border-white/15 py-4"
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                    >
                      <span className="text-hero-yellow text-lg leading-none">✦</span>
                      {value}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center gap-3 shrink-0 w-full md:w-[48%]">
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src="/images/about me 2.png"
                    alt="Devil's Bridge in Sedona"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-[11px] text-white/70 tracking-wide text-center">
                  Devil&apos;s Bridge in Sedona ✦
                </p>
              </div>
            </div>

          </section>

          {/* WORK */}
          <section id="work" className="min-h-screen bg-cream flex flex-col">

            {/* Marquee strip */}
            <div className="border-y border-ink/10 overflow-hidden py-3 bg-cream">
              <div className="animate-marquee flex whitespace-nowrap">
                {[0, 1].map(i => (
                  <span key={i} className="flex-shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/40 pr-0">
                    ✦&nbsp; UX Design &nbsp;&nbsp; ✦&nbsp; Product Thinking &nbsp;&nbsp; ✦&nbsp; User Research &nbsp;&nbsp; ✦&nbsp; Interaction Design &nbsp;&nbsp; ✦&nbsp; Figma &nbsp;&nbsp; ✦&nbsp; Prototyping &nbsp;&nbsp; ✦&nbsp; Usability Testing &nbsp;&nbsp; ✦&nbsp; Design Systems &nbsp;&nbsp; ✦&nbsp; Information Architecture &nbsp;&nbsp; ✦&nbsp; Human-Centered Design &nbsp;&nbsp;
                  </span>
                ))}
              </div>
            </div>

            {/* Heading */}
            <div className="px-6 md:px-11 pt-16 pb-8 flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">02 / Selected Work</p>
              <h2 className="font-handwritten text-[clamp(4rem,12vw,10rem)] text-hero-blue leading-none">
                My Work
              </h2>
              <div className="h-px bg-ink/10 mt-2" />
            </div>

            {/* Cards */}
            <div className="px-6 md:px-11 pb-20">
              {/* Mobile: single column */}
              <div className="flex flex-col gap-4 md:hidden">
                {caseStudies.map((cs, i) => (
                  <div key={cs.slug} className="h-80">
                    <BentoCard caseStudy={cs} index={i} objectPosition={i === 3 ? 'top' : 'center'} />
                  </div>
                ))}
              </div>

              {/* Desktop: bento grid */}
              <div
                className="hidden md:grid grid-cols-3 gap-4"
                style={{ gridTemplateRows: '360px 360px 300px' }}
              >
                <div className="col-span-2 row-span-2">
                  <BentoCard caseStudy={caseStudies[0]} index={0} isLarge />
                </div>
                <BentoCard caseStudy={caseStudies[1]} index={1} />
                <BentoCard caseStudy={caseStudies[2]} index={2} />
                <BentoCard caseStudy={caseStudies[3]} index={3} objectPosition="top" />
                <div className="col-span-2">
                  <BentoCard caseStudy={caseStudies[4]} index={4} />
                </div>
              </div>
            </div>

          </section>

          {/* CONTACT */}
          <section id="contact" className="relative min-h-screen flex flex-col justify-between px-6 md:px-11 py-20 overflow-hidden">
            <MouseGradientBackground />
            <div className="flex flex-col gap-10">
              <h2 className="font-black text-[clamp(3rem,8vw,5rem)] text-white uppercase leading-none tracking-[-0.05em]">
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
                  className="text-base font-medium text-white border-b-2 border-white/40 pb-0.5 w-fit hover:border-hero-yellow hover:text-hero-yellow transition-colors"
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
              className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider border border-white/30 px-6 py-3 rounded hover:bg-white hover:text-hero-blue transition-colors w-fit"
            >
              Download My Resume ↓
            </a>
          </section>
        </>
      }
    />
  )
}
