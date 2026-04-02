import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StatBlock from '@/components/StatBlock'

const TOOLS = ['Figma', 'Notion', 'Maze', 'Miro', 'Framer']

export default function AboutPage() {
  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="about"
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
        <div className="flex flex-col gap-6 px-11 py-10 h-full">
          {/* Headline */}
          <h1 className="font-black text-4xl text-ink uppercase tracking-tighter leading-tight">
            I make complex things feel simple.
          </h1>

          <div className="h-px bg-cream" />

          {/* Bio — replace placeholder with real text */}
          <p className="text-sm text-muted leading-relaxed max-w-lg">
            Replace this with your real story. Who are you, how do you think about design,
            what drives you? This is where recruiters decide if they like you as a person
            before they look at your work.
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-auto pb-10">
            <StatBlock value="5+" label="Years Experience" />
            <StatBlock value="20+" label="Projects Shipped" />
            <StatBlock value="6" label="Case Studies" />
          </div>
        </div>
      }
    />
  )
}
