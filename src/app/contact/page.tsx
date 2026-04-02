import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import PageTransition from '@/components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <SplitLayout
        left={<LeftPanel activeSection="contact" />}
        right={
          <div className="flex flex-col justify-between h-full px-11 py-12">
            <div className="flex flex-col gap-8">
              <h1 className="font-black text-5xl text-ink uppercase tracking-tighter leading-tight">
                Let's work<br />together.
              </h1>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:mikey@mikeyamella.com"
                  aria-label="Email Mikey"
                  className="text-base font-medium text-ink border-b-2 border-accent pb-0.5 w-fit hover:text-accent transition-colors"
                >
                  mikey@mikeyamella.com
                </a>
                <a
                  href="https://linkedin.com/in/mikeyamella"
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-muted hover:text-ink transition-colors w-fit"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider border border-accent px-6 py-3 rounded hover:bg-accent hover:text-white transition-colors w-fit"
            >
              Download Resume ↓
            </a>
          </div>
        }
      />
    </PageTransition>
  )
}
