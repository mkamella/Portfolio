'use client'

import { motion } from 'framer-motion'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StatBlock from '@/components/StatBlock'
import BentoCard from '@/components/BentoCard'
import { caseStudies } from '@/data/case-studies'
import { useActiveSection } from '@/hooks/useActiveSection'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { TextRotate } from '@/components/ui/text-rotate'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'

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

            {/* Floating images — desktop only */}
            <Floating sensitivity={-0.5} className="hidden md:block">
              <FloatingElement depth={0.5} className="top-[20%] left-[2%]">
                <motion.img
                  src="/images/Project 1 Header.png"
                  alt="Peak Psychological"
                  className="w-28 h-20 object-cover -rotate-[3deg] shadow-xl rounded-xl hover:scale-105 transition-transform duration-200"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                />
              </FloatingElement>

              <FloatingElement depth={1} className="top-[5%] left-[10%]">
                <motion.img
                  src="/images/Project 2 Header.png"
                  alt="Arrivia"
                  className="w-52 h-40 object-cover -rotate-6 shadow-xl rounded-xl hover:scale-105 transition-transform duration-200"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                />
              </FloatingElement>

              <FloatingElement depth={3} className="top-[72%] left-[4%]">
                <motion.img
                  src="/images/about me picture.jpg"
                  alt="Mikey"
                  className="w-52 h-52 object-cover -rotate-[4deg] shadow-xl rounded-xl hover:scale-105 transition-transform duration-200"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                />
              </FloatingElement>

              <FloatingElement depth={2} className="top-[3%] left-[78%]">
                <motion.img
                  src="/images/Project 3 Header.png"
                  alt="Cobalt"
                  className="w-56 h-44 object-cover rotate-[6deg] shadow-xl rounded-xl hover:scale-105 transition-transform duration-200"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                />
              </FloatingElement>

              <FloatingElement depth={1} className="top-[65%] left-[75%]">
                <motion.img
                  src="/images/Project 4 Header.png"
                  alt="Southeast Valley"
                  className="w-64 h-64 object-cover rotate-[12deg] shadow-xl rounded-xl hover:scale-105 transition-transform duration-200"
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
                  className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider bg-ink px-6 py-3 rounded hover:bg-accent transition-colors"
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
          <section id="about" className="min-h-screen flex flex-col gap-8 px-6 md:px-11 py-20 bg-rust">
            <h2 className="font-black text-3xl md:text-4xl text-white uppercase tracking-tighter leading-tight">
              Get to Know Me!
            </h2>
            <div className="h-px bg-white/20" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              {/* Image */}
              <div className="flex flex-col items-center gap-3 w-full md:w-auto" style={{ flexBasis: '38%', flexShrink: 0 }}>
                <motion.div
                  className="w-full overflow-hidden bg-rust/60"
                  style={{ height: '50vw', maxHeight: '56vh', borderRadius: BLOB_KEYFRAMES[0] }}
                  animate={{ borderRadius: BLOB_KEYFRAMES }}
                  transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
                >
                  <img src="/images/Portfolio Header Image.png" alt="Mikey Amella" className="w-full h-full object-cover" />
                </motion.div>
                <p className="text-[9px] text-white/60 uppercase tracking-widest text-center italic">
                  Designing seamless experiences, one outfit (and pixel) at a time.
                </p>
              </div>

              {/* Bio */}
              <div className="flex-1 flex flex-col gap-4 text-sm text-white/80 leading-relaxed">
                <p>
                  I&apos;m a UX designer originally from Colorado. My journey into design started as a computer science major, driven by my love for creativity and problem-solving. However, after completing numerous coding assignments, I realized my work lacked the visual and experiential impact I was searching for. That realization led me to switch schools and majors, where I discovered my passion for UX and product design.
                </p>
                <p>
                  I graduated summa cum laude from Arizona State University, where I refined my design skills and was honored with the Outstanding UX Award and Super Star Award for my contributions to the major and field. These experiences solidified my commitment to creating meaningful, user-centered design solutions.
                </p>
                <p>
                  While at ASU, I served as a UX Designer and Project Manager for Arizona State University&apos;s Creative Agency, where I led student teams on impactful design projects for the Arizona community. I also gained professional experience as a Product Designer at Arrivia in Scottsdale, collaborating with designers and researchers to execute platform redesigns for Fortune 500 companies.
                </p>
                <p>
                  My perspective on UX has evolved from creating fun, engaging experiences to designing immersive and unforgettable ones that resonate with users.
                </p>
                <p>
                  When I&apos;m not designing, you can find me thrifting, hiking, or exploring new places—I&apos;m always looking for inspiration in the world around me!
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="font-black text-sm text-white uppercase tracking-widest mb-4">My Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {['Be Humorous', 'Stay Curious', 'Be Empathetic', 'Stay Inclusive', 'Be Adaptable', 'Remain Resilient'].map((value) => (
                  <span key={value} className="text-xs font-semibold text-white border border-white/40 rounded-full px-4 py-1.5">
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <StatBlock value="3+" label="Years Experience" />
              <StatBlock value="10+" label="Projects" />
              <StatBlock value="4" label="Case Studies" />
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="min-h-screen px-6 md:px-11 py-20 bg-cream">
            <h2 className="font-black text-3xl md:text-4xl text-ink uppercase tracking-tighter leading-tight mb-8">
              My Work
            </h2>

            {/* Mobile: single column */}
            <div className="flex flex-col gap-4 md:hidden">
              {caseStudies.map((cs, i) => (
                <div key={cs.slug} className="h-64">
                  <BentoCard caseStudy={cs} index={i} />
                </div>
              ))}
            </div>

            {/* Desktop: bento grid */}
            <div
              className="hidden md:grid grid-cols-3 gap-4"
              style={{ gridTemplateRows: '320px 320px 260px' }}
            >
              <div className="col-span-2 row-span-2">
                <BentoCard caseStudy={caseStudies[0]} index={0} isLarge />
              </div>
              <BentoCard caseStudy={caseStudies[1]} index={1} />
              <BentoCard caseStudy={caseStudies[2]} index={2} />
              <BentoCard caseStudy={caseStudies[3]} index={3} />
              <div className="col-span-2">
                <BentoCard caseStudy={caseStudies[4]} index={4} />
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="min-h-screen">
          <BackgroundGradientAnimation
            firstColor="100, 30, 10"
            secondColor="120, 40, 15"
            thirdColor="80, 20, 5"
            fourthColor="140, 55, 20"
            fifthColor="90, 25, 8"
            containerClassName="min-h-screen bg-[#D4693A]"
            className="flex flex-col justify-between px-6 md:px-11 py-20 min-h-screen">
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
