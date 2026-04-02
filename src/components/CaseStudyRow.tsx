import Link from 'next/link'
import type { CaseStudy } from '@/data/case-studies'

interface CaseStudyRowProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseStudyRow({ caseStudy, index }: CaseStudyRowProps) {
  const num = String(index + 1).padStart(2, '0')
  const metaString = [...caseStudy.tags, String(caseStudy.year)].join(' · ')

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block bg-cream rounded-xl border border-subtle p-6 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span className="text-[9px] text-subtle tracking-widest">{num}</span>
          <h2 className="font-black text-xl text-ink uppercase tracking-tight mt-1 group-hover:text-accent transition-colors">
            {caseStudy.title.toUpperCase()}
          </h2>
          <p className="text-[10px] text-muted mt-2 tracking-wide">{metaString}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 mt-1">
          <div className="w-20 h-14 bg-cream-dark rounded-lg" />
          <span className="text-xl text-subtle group-hover:text-accent group-hover:translate-x-1 transition-all">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
