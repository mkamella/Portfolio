import { notFound } from 'next/navigation'
import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import StoryProgress from '@/components/StoryProgress'
import StatBlock from '@/components/StatBlock'
import PageTransition from '@/components/PageTransition'
import { caseStudies } from '@/data/case-studies'

const STORY_SECTIONS = ['Overview', 'The Problem', 'Research', 'Solution', 'Impact']

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    notFound()
  }

  const metaString = [...cs.tags, String(cs.year)].join(' · ')

  return (
    <SplitLayout
      left={
        <LeftPanel
          activeSection="work"
          footer={
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Role</p>
                <p className="text-[11px] text-ink">{cs.role}</p>
              </div>
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Duration</p>
                <p className="text-[11px] text-ink">{cs.duration}</p>
              </div>
              <div>
                <p className="text-[8px] text-muted uppercase tracking-widest mb-1">Team</p>
                <p className="text-[11px] text-ink">{cs.team}</p>
              </div>
              <StoryProgress sections={STORY_SECTIONS} activeIndex={0} />
            </div>
          }
        />
      }
      right={
        <PageTransition>
        <article className="px-11 py-10 flex flex-col gap-14">
          <header>
            <div className="flex flex-wrap gap-1 mb-3">
              {cs.tags.map((tag) => (
                <span key={tag} className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-1">
                  {tag}
                </span>
              ))}
              <span className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-1">
                {cs.year}
              </span>
            </div>
            <h1 className="font-black text-2xl text-ink uppercase tracking-tight">{cs.title}</h1>
            <p className="text-[9px] text-muted mt-1 tracking-wider">{metaString}</p>
          </header>

          <section id="overview">
            <h2 className="font-black text-3xl text-ink uppercase tracking-tighter leading-tight mb-4">
              {cs.overview.headline}
            </h2>
            <div className="bg-gradient-to-br from-cream to-cream-dark rounded-lg h-48 flex items-center justify-center text-[9px] text-muted uppercase tracking-widest mb-4">
              Hero Image
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-lg">{cs.overview.body}</p>
          </section>

          <section id="problem">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">The Problem</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg">{cs.problem.body}</p>
          </section>

          <section id="research">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Research</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg mb-4">{cs.research.body}</p>
            {cs.research.insights && (
              <ul className="flex flex-col gap-2">
                {cs.research.insights.map((insight) => (
                  <li key={insight} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-0.5">—</span>
                    {insight}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section id="solution">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Solution</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg mb-4">{cs.solution.body}</p>
            {cs.solution.images?.map((src) => (
              <div key={src} className="bg-cream rounded-lg h-48 flex items-center justify-center text-[9px] text-muted uppercase tracking-widest mb-3">
                Solution Image
              </div>
            ))}
          </section>

          <section id="impact" className="pb-16">
            <p className="text-[8px] text-muted uppercase tracking-widest mb-2">Impact</p>
            <p className="text-sm text-muted leading-relaxed max-w-lg mb-6">{cs.impact.body}</p>
            {cs.impact.stats && cs.impact.stats.length > 0 && (
              <div className="flex gap-4">
                {cs.impact.stats.map((stat) => (
                  <StatBlock key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            )}
          </section>
        </article>
        </PageTransition>
      }
    />
  )
}
