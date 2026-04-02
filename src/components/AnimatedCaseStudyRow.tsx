'use client'

import { motion } from 'framer-motion'
import CaseStudyRow from './CaseStudyRow'
import type { CaseStudy } from '@/data/case-studies'

interface Props {
  caseStudy: CaseStudy
  index: number
}

export default function AnimatedCaseStudyRow({ caseStudy, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
    >
      <CaseStudyRow caseStudy={caseStudy} index={index} />
    </motion.div>
  )
}
