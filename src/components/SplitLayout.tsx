import type { ReactNode } from 'react'

interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <>
      {/* Desktop left panel */}
      <aside
        data-panel="left"
        className="hidden md:flex fixed top-0 left-0 h-screen w-48 bg-cream-dark flex-col overflow-y-auto z-10"
      >
        {left}
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-20 bg-cream-dark px-6 py-4 flex items-center justify-between">
        <a href="/#home" className="font-black text-sm uppercase tracking-tighter text-ink leading-none">
          Mikey<br />Amella
        </a>
        <nav className="flex gap-5">
          {(['About', 'Work', 'Contact'] as const).map(label => (
            <a
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="text-[10px] text-muted uppercase tracking-wider hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main data-panel="right" className="md:ml-48 pt-14 md:pt-0">
        {right}
      </main>
    </>
  )
}
