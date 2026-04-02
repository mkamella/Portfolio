'use client'

interface StoryProgressProps {
  sections: string[]
  activeIndex: number
}

export default function StoryProgress({ sections, activeIndex }: StoryProgressProps) {
  return (
    <div>
      <p className="text-[8px] text-muted uppercase tracking-widest mb-3">
        Story Progress
      </p>
      <div className="flex flex-col gap-2">
        {sections.map((section, i) => {
          const isActive = i === activeIndex
          const isPast = i < activeIndex
          return (
            <div key={section} className="flex items-center gap-2">
              <div
                data-dot
                data-active={isActive}
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                  isActive || isPast ? 'bg-accent' : 'bg-subtle'
                }`}
              />
              <span
                className={`text-[9px] tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-ink font-bold' : 'text-muted'
                }`}
              >
                {section}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
