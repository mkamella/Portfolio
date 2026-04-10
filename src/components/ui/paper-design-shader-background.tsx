"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(164, 43%, 10%)"
        softness={0.8}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={0.6}
        colors={["hsl(221, 62%, 42%)", "hsl(164, 43%, 21%)", "hsl(192, 50%, 28%)"]}
      />
    </div>
  )
}
