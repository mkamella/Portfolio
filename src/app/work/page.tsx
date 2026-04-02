import SplitLayout from '@/components/SplitLayout'
import LeftPanel from '@/components/LeftPanel'
import AnimatedCaseStudyRow from '@/components/AnimatedCaseStudyRow'
import PageTransition from '@/components/PageTransition'
import { caseStudies } from '@/data/case-studies'

export default function WorkPage() {
  return (
    <PageTransition>
      <SplitLayout
        left={<LeftPanel activeSection="work" />}
        right={
          <div className="px-11 py-10">
            <p className="text-[9px] text-muted uppercase tracking-widest mb-6">
              Selected Work — {caseStudies.length} Projects
            </p>
            <div className="border-t border-cream">
              {caseStudies.map((cs, i) => (
                <AnimatedCaseStudyRow key={cs.slug} caseStudy={cs} index={i} />
              ))}
            </div>
          </div>
        }
      />
    </PageTransition>
  )
}
