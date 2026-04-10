'use client'

import { useRef, useEffect } from 'react'

export function MouseGradientBackground() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const section = el.parentElement
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.background = `
        radial-gradient(ellipse 50% 60% at ${x}% ${y}%,
          rgba(246, 207, 74, 0.8) 0%,
          rgba(255, 255, 255, 0.3) 30%,
          rgba(40, 82, 173, 0) 65%
        ),
        #2852AD
      `
    }

    const handleMouseLeave = () => {
      el.style.background = '#2852AD'
    }

    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={bgRef} className="absolute inset-0 -z-10" style={{ background: '#2852AD' }}>
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  )
}
