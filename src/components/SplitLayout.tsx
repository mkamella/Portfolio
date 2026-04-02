import type { ReactNode } from 'react'

interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        data-panel="left"
        className="w-60 flex-shrink-0 bg-cream-dark flex flex-col overflow-y-auto"
      >
        {left}
      </aside>
      <main
        data-panel="right"
        className="flex-1 bg-white overflow-y-auto"
      >
        {right}
      </main>
    </div>
  )
}
