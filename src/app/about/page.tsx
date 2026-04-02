import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StatBlock from '@/components/StatBlock'
import PageTransition from '@/components/PageTransition'

const TOOLS = ['Figma', 'Miro', 'Axure', 'GitHub', 'Claude']

export default function AboutPage() {
  return (
    <PageTransition>
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
            <h1 className="font-black text-4xl text-ink uppercase tracking-tighter leading-tight">
              Designing seamless experiences,<br />one pixel at a time.
            </h1>
            <div className="h-px bg-cream" />
            <div className="flex flex-col gap-4 text-sm text-muted leading-relaxed max-w-lg">
              <p>
                I&apos;m a UX designer originally from Colorado. My journey started as a computer science major — I loved problem-solving, but my work lacked the visual and experiential impact I was searching for. That realization led me to switch schools and majors, where I discovered my passion for UX and product design.
              </p>
              <p>
                I graduated summa cum laude from Arizona State University, earning the Outstanding UX Award and Super Star Award for my contributions to the field. Since then I&apos;ve led redesigns for Fortune 500 travel platforms, healthcare clinics, and non-profits — always focused on turning complexity into clarity.
              </p>
              <p>
                When I&apos;m not designing, you can find me thrifting, hiking, or exploring new places — I&apos;m always looking for inspiration in the world around me.
              </p>
            </div>
            <div className="flex gap-4 mt-auto pb-10">
              <StatBlock value="3+" label="Years Experience" />
              <StatBlock value="10+" label="Projects" />
              <StatBlock value="4" label="Case Studies" />
            </div>
          </div>
        }
      />
    </PageTransition>
  )
}
