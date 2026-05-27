'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'

export function Loader() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldShow, setShouldShow] = useState(true)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited')

    if (hasVisited) {
      setShouldShow(false)
      setIsLoaded(true)
      window.dispatchEvent(new Event('loaderComplete'))
      return
    }

    sessionStorage.setItem('hasVisited', 'true')

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
        window.dispatchEvent(new Event('loaderComplete'))
        setIsLoaded(true)
      })
  }, [])

  if (isLoaded) return null
  if (!shouldShow) return null

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
