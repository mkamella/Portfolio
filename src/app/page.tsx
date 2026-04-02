import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'

export default function HomePage() {
  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="home"
          footer={
            <p className="text-[9px] text-muted uppercase tracking-widest">
              Available for hire
            </p>
          }
        />
      }
      right={
        <div className="flex flex-col justify-between h-full px-11 py-12">
          {/* Eyebrow */}
          <p className="text-[9px] text-muted uppercase tracking-widest">
            UX Designer — Portfolio 2024
          </p>

          {/* Hero name */}
          <div>
            <h1 className="font-black text-[80px] text-ink uppercase leading-none tracking-[-0.05em]">
              <span>MIKEY</span><br /><span>AMELLA</span>
            </h1>
          </div>

          {/* Footer row */}
          <div className="flex justify-between items-end">
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Crafting human-centered digital experiences that bridge complexity and clarity.
            </p>
            <p className="text-[10px] text-muted uppercase tracking-widest">
              Scroll ↓
            </p>
          </div>
        </div>
      }
    />
  )
}
