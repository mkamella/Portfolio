'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export const BackgroundGradientAnimation = ({
  firstColor = '192, 101, 74',
  secondColor = '196, 112, 78',
  thirdColor = '122, 158, 126',
  fourthColor = '232, 160, 144',
  fifthColor = '245, 240, 235',
  pointerColor = '192, 101, 74',
  size = '80%',
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const tgX = useRef(0)
  const tgY = useRef(0)
  const curX = useRef(0)
  const curY = useRef(0)
  const animFrame = useRef<number>(0)
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return
      curX.current += (tgX.current - curX.current) / 20
      curY.current += (tgY.current - curY.current) / 20
      interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
      animFrame.current = requestAnimationFrame(move)
    }
    animFrame.current = requestAnimationFrame(move)
    return () => cancelAnimationFrame(animFrame.current)
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    tgX.current = event.clientX - rect.left
    tgY.current = event.clientY - rect.top
  }

  const blobStyle = (color: string, transformOrigin?: string): React.CSSProperties => ({
    position: 'absolute',
    background: `radial-gradient(circle at center, rgba(${color}, 0.8) 0, rgba(${color}, 0) 50%) no-repeat`,
    mixBlendMode: 'multiply',
    width: size,
    height: size,
    top: `calc(50% - ${size} / 2)`,
    left: `calc(50% - ${size} / 2)`,
    transformOrigin: transformOrigin ?? 'center center',
  })

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', containerClassName)}
      onMouseMove={interactive ? handleMouseMove : undefined}
    >
      {/* Gradient blobs */}
      <div
        className="absolute inset-0"
        style={{ filter: isSafari ? 'blur(40px)' : 'url(#blurMe) blur(20px)' }}
      >
        <svg className="hidden" aria-hidden>
          <defs>
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div style={blobStyle(firstColor)} className="animate-first" />
        <div style={blobStyle(secondColor, 'calc(50% - 400px)')} className="animate-second" />
        <div style={blobStyle(thirdColor, 'calc(50% + 400px)')} className="animate-third" />
        <div style={{ ...blobStyle(fourthColor, 'calc(50% - 200px)'), opacity: 0.7 }} className="animate-fourth" />
        <div style={blobStyle(fifthColor, 'calc(50% - 800px) calc(50% + 800px)')} className="animate-fifth" />

        {interactive && (
          <div
            ref={interactiveRef}
            style={{
              position: 'absolute',
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.6) 0, rgba(${pointerColor}, 0) 50%) no-repeat`,
              mixBlendMode: 'multiply',
              width: '100%',
              height: '100%',
              top: '-50%',
              left: '-50%',
              opacity: 0.7,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={cn('relative z-10', className)}>
        {children}
      </div>
    </div>
  )
}
