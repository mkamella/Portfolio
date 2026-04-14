'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/data/case-studies'

interface BentoCardProps {
  caseStudy: CaseStudy
  index: number
  isLarge?: boolean
  objectPosition?: string
}

export default function BentoCard({ caseStudy, index, isLarge = false, objectPosition = 'center' }: BentoCardProps) {
  const num = String(index + 1).padStart(2, '0')
  const tags = caseStudy.tags.slice(0, 2).join(' · ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        href={`/work/${caseStudy.slug}`}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-ink"
      >
        {/* Background image */}
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition }}
        />

        {/* Gradient overlay — stronger at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

        {/* Content pinned to bottom */}
        <div className="relative mt-auto p-6">
          <p className="text-xs text-white/70 font-medium mb-2">
            {num} · {tags} · {caseStudy.year}
          </p>
          <h2
            className={`font-black text-white uppercase tracking-tight leading-tight transition-colors group-hover:text-white ${
              isLarge ? 'text-2xl' : 'text-base'
            }`}
          >
            {caseStudy.title.toUpperCase()}
          </h2>
          <span className="inline-block mt-2 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
