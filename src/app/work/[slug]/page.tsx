import { notFound } from 'next/navigation'
import StoryProgress from '@/components/StoryProgress'
import StatBlock from '@/components/StatBlock'
import PageTransition from '@/components/PageTransition'
import PeakPsychologicalContent from '@/components/PeakPsychologicalContent'
import ArriviaContent from '@/components/ArriviaContent'
import CobaltContent from '@/components/CobaltContent'
import SVAllianceContent from '@/components/SVAllianceContent'
import { caseStudies } from '@/data/case-studies'

const STORY_SECTIONS = ['Overview', 'The Problem', 'Research', 'Solution', 'Impact']

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

function BackNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-subtle px-6 py-3 flex items-center">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:opacity-60 transition-opacity"
      >
        ← Back to Home
      </a>
    </nav>
  )
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    notFound()
  }

  const metaString = [...cs.tags, String(cs.year)].join(' · ')

  if (cs.contentImages && cs.contentImages.length > 0) {
    const relatedStudies = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3)

    return (
      <>
        <BackNav />
        <main className="pt-12">
          <PageTransition>
            <div className="flex flex-col">
              {cs.contentImages.map((src) => (
                <img key={src} src={src} alt="" className="w-full block" />
              ))}

              <div className="flex flex-col md:flex-row gap-8 px-11 py-16 bg-cream items-center">
                <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                  <iframe
                    src="https://www.youtube.com/embed/iJnAJbPQJtk"
                    title="UCDA Conference Hype Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[8px] text-muted uppercase tracking-widest">Hype Video</p>
                  <p className="text-sm text-muted leading-relaxed">
                    The Creative Agency team and I created a &ldquo;hype video&rdquo; that highlighted the upcoming design conference. Check it out and Immerse yourself!
                  </p>
                </div>
              </div>

              <div className="px-11 py-12 bg-white border-t border-subtle">
                <p className="text-[8px] text-muted uppercase tracking-widest mb-3">Next Steps</p>
                <p className="text-sm text-muted leading-relaxed max-w-lg">
                  The project was handed off to the next Creative Agency group which designed the physical collateral for the conference.
                </p>
              </div>

              <div className="px-11 py-12 bg-cream border-t border-subtle">
                <p className="text-[8px] text-muted uppercase tracking-widest mb-3">Learnings</p>
                <p className="text-sm text-muted leading-relaxed max-w-lg">
                  This project was pivotal to me as a designer. This was the first time I took a Project Manager position and led a group of creative professionals to fully create the branding for a design conference. I acquired several new skills and learned a lot about myself not only as a designer but as a leader.
                </p>
              </div>

              <div className="px-11 py-12 bg-white border-t border-subtle text-center">
                <p className="font-black text-2xl text-ink uppercase tracking-tight">Thank you for reading my case study!</p>
              </div>

              <div className="px-11 py-12 bg-cream border-t border-subtle">
                <p className="font-black text-sm text-ink uppercase tracking-widest mb-6">Read More of My Case Studies</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedStudies.map((related) => (
                    <a
                      key={related.slug}
                      href={`/work/${related.slug}`}
                      className="group flex flex-col rounded-xl overflow-hidden border border-subtle bg-white hover:shadow-md transition-shadow"
                    >
                      <div className="h-36 overflow-hidden">
                        <img
                          src={related.thumbnail}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <div className="flex flex-wrap gap-1">
                          {related.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[8px] uppercase tracking-wider text-muted border border-subtle bg-cream rounded px-2 py-0.5">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs font-black text-ink uppercase tracking-tight leading-snug">{related.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </PageTransition>
        </main>
      </>
    )
  }

  if (cs.slug === 'cobalt-design-system') {
    return (
      <>
        <BackNav />
        <main className="pt-12">
          <PageTransition><CobaltContent /></PageTransition>
        </main>
      </>
    )
  }

  if (cs.slug === 'southeast-valley-alliance') {
    return (
      <>
        <BackNav />
        <main className="pt-12">
          <PageTransition><SVAllianceContent /></PageTransition>
        </main>
      </>
    )
  }

  if (cs.slug === 'arrivia-travel') {
    return (
      <>
        <BackNav />
        <main className="pt-12">
          <PageTransition><ArriviaContent /></PageTransition>
        </main>
      </>
    )
  }

  if (cs.slug === 'peak-psychological') {
    return (
      <>
        <BackNav />
        <main className="pt-12">
          <PageTransition><PeakPsychologicalContent /></PageTransition>
        </main>
      </>
    )
  }

  return (
    <>
      <BackNav />
      <main className="pt-12">
        <PageTransition>
          <article className="px-11 py-10 flex flex-col gap-14 max-w-3xl">
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

            <div className="flex flex-wrap gap-8 text-sm">
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
            </div>

            <StoryProgress sections={STORY_SECTIONS} activeIndex={0} />

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
      </main>
    </>
  )
}
