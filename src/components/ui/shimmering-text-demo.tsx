"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ShimmeringText } from "./shimmering-text"

const phrases = [
  "Agent is thinking...",
  "Processing your request...",
  "Analyzing the data...",
  "Generating response...",
  "Almost there...",
]

export default function TextShimmerDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-6">
      <div className="w-full max-w-lg bg-card rounded-2xl border p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold">Text Shimmer Effect</h3>
          <p className="text-muted-foreground text-sm">
            Animated gradient text with automatic cycling
          </p>
        </div>

        <div className="flex items-center justify-center rounded-lg bg-muted/10 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ShimmeringText text={phrases[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
