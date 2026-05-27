'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'

export function Loader() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to('.loader-number', {
      textContent: 100,
      duration: 2,
      snap: { textContent: 1 },
      ease: 'power2.inOut',
    })
      .to(
        '.loader-overlay',
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '-=0.5'
      )
      .then(() => {
        setIsLoaded(true)
      })
  }, [])

  if (isLoaded) return null

  return (
    <div className="loader-overlay fixed inset-0 bg-black z-[10000] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-light text-white">
          <span className="loader-number">0</span>%
        </div>
      </div>
    </div>
  )
}
