'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'intro', number: '01', label: 'INTRO' },
  { id: 'services', number: '02', label: 'SERVICES' },
  { id: 'works', number: '03', label: 'WORKS' },
  { id: 'contact', number: '04', label: 'CONTACT' },
]

export function SectionNav() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const observers = SECTIONS.map((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(index)
            }
          })
        },
        { threshold: 0.05 }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  const handleClick = () => {
    const nextIndex = currentSection + 1
    if (nextIndex < SECTIONS.length) {
      const nextSection = SECTIONS[nextIndex]
      document.getElementById(nextSection.id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4">
      {/* Large Number */}
      <div className="text-white/20 text-7xl font-black tracking-tight">
        {SECTIONS[currentSection].number}
      </div>

      {/* Progress Line */}
      <button
        onClick={handleClick}
        disabled={currentSection >= SECTIONS.length - 1}
        className="w-1 h-20 bg-linear-to-b from-white/60 to-transparent rounded-full hover:from-white/80 transition-all cursor-pointer disabled:cursor-default disabled:opacity-40"
        title="Click to go to next section"
      />

      {/* Label */}
      <button
        onClick={handleClick}
        disabled={currentSection >= SECTIONS.length - 1}
        className="text-white/60 hover:text-white text-xs uppercase tracking-widest font-light transition-colors disabled:cursor-default disabled:opacity-40"
        title="Click to go to next section"
      >
        {SECTIONS[currentSection].label}
      </button>
    </div>
  )
}
