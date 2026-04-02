import Link from 'next/link'
import type { ReactNode } from 'react'

const NAV_ITEMS = [
  { num: '01', label: 'Home', href: '/' },
  { num: '02', label: 'About', href: '/about' },
  { num: '03', label: 'Work', href: '/work' },
  { num: '04', label: 'Contact', href: '/contact' },
] as const

type Section = 'home' | 'about' | 'work' | 'contact'

interface LeftPanelProps {
  activeSection: Section
  footer?: ReactNode
}

export default function LeftPanel({ activeSection, footer }: LeftPanelProps) {
  return (
    <div className="flex flex-col h-full p-7">
      {/* Brand */}
      <Link href="/" className="block">
        <div className="font-black text-base uppercase tracking-tighter leading-none text-ink">
          <span>Mikey</span><br /><span>Amella</span>
        </div>
      </Link>

      {/* Role */}
      <p className="mt-2 text-[9px] text-muted uppercase tracking-widest">
        UX Designer
      </p>

      {/* Divider */}
      <div className="my-4 h-px bg-subtle" />

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ num, label, href }) => {
          const isActive = activeSection === label.toLowerCase()
          return (
            <Link
              key={label}
              href={href}
              className={`text-[11px] py-1 transition-colors duration-150 ${
                isActive
                  ? 'text-ink font-bold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <span className="text-subtle text-[9px] mr-1.5">{num}</span>
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer slot */}
      {footer && <div className="mt-auto">{footer}</div>}
    </div>
  )
}
