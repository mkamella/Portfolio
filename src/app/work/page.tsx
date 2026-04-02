import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import CaseStudyRow from '@/components/CaseStudyRow'
import { caseStudies } from '@/data/case-studies'

export default function WorkPage() {
  return (
    <SplitLayout
      left={<LeftPanel activeSection="work" />}
      right={
        <div className="px-11 py-10">
          <p className="text-[9px] text-muted uppercase tracking-widest mb-6">
            Selected Work — {caseStudies.length} Projects
          </p>
          <div className="border-t border-cream">
            {caseStudies.map((cs, i) => (
              <CaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      }
    />
  )
}
