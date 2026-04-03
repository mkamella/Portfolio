'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { num: '01', label: 'Home', href: '/#home', id: 'home' },
  { num: '02', label: 'About', href: '/#about', id: 'about' },
  { num: '03', label: 'Work', href: '/#work', id: 'work' },
  { num: '04', label: 'Contact', href: '/#contact', id: 'contact' },
] as const

type Section = 'home' | 'about' | 'work' | 'contact'

interface LeftPanelProps {
  activeSection: Section
  footer?: ReactNode
}

export default function LeftPanel({ activeSection, footer }: LeftPanelProps) {
  const [scrollRatio, setScrollRatio] = useState(0)
  const [sectionRatios, setSectionRatios] = useState([0.25, 0.25, 0.25, 0.25])

  // Measure each section's height to set proportional nav item heights
  useEffect(() => {
    const measure = () => {
      const heights = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id)
        return el ? el.offsetHeight : 1
      })
      const total = heights.reduce((a, b) => a + b, 0)
      if (total > 0) setSectionRatios(heights.map(h => h / total))
    }
    const timer = setTimeout(measure, 150)
    window.addEventListener('resize', measure)
    return () => { clearTimeout(timer); window.removeEventListener('resize', measure) }
  }, [])

  // Track scroll position across the full page
  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollRatio(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col h-full p-7">
      {/* Brand */}
      <Link href="/#home" className="block">
        <div className="font-black text-base uppercase tracking-tighter leading-none text-ink">
          <span>Mikey</span><br /><span>Amella</span>
        </div>
      </Link>

      {/* Role */}
      <p className="mt-2 text-[9px] text-muted uppercase tracking-widest">
        UX Designer
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-subtle" />

      {/* Proportional nav track */}
      <nav className="flex-1 relative flex flex-col">
        {/* Track line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-subtle" />

        {/* Sliding progress dot */}
        <motion.div
          className="absolute left-[-3px] w-[7px] h-[7px] rounded-full bg-accent z-10"
          animate={{ top: `calc(${scrollRatio * 100}% - 3.5px)` }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        />

        {/* Nav items — flex proportional to section height */}
        {NAV_ITEMS.map(({ num, label, href, id }, i) => {
          const isActive = activeSection === id
          return (
            <div
              key={id}
              style={{ flex: sectionRatios[i] }}
              className="pl-5 flex items-start pt-1"
            >
              <Link
                href={href}
                className={`transition-all duration-300 leading-none ${
                  isActive
                    ? 'text-ink font-black text-sm'
                    : 'text-muted text-[10px] hover:text-ink'
                }`}
              >
                <span className="text-subtle text-[8px] mr-1.5">{num}</span>
                {label}
              </Link>
            </div>
          )
        })}
      </nav>

      {/* Footer slot */}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  )
}
