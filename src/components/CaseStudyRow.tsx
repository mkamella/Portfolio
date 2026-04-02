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
      className="group flex items-center justify-between py-4 border-b border-cream last:border-b-0 transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] text-subtle tracking-wider w-6">{num}</span>
        <div>
          <h2 className="font-black text-[15px] text-ink uppercase tracking-tight group-hover:text-accent transition-colors">
            {caseStudy.title.toUpperCase()}
          </h2>
          <p className="text-[9px] text-muted mt-0.5 tracking-wide">{metaString}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-9 bg-cream rounded-sm" />
        <span className="text-sm text-subtle group-hover:text-accent group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
    </Link>
  )
}
