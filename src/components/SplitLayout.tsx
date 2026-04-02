import type { ReactNode } from 'react'

interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <>
      <aside
        data-panel="left"
        className="fixed top-0 left-0 h-screen w-60 bg-cream-dark flex flex-col overflow-y-auto z-10"
      >
        {left}
      </aside>
      <main
        data-panel="right"
        className="ml-60"
      >
        {right}
      </main>
    </>
  )
}
