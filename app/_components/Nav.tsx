'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'

const NAV_ITEMS = [
  { number: '01', label: 'INTRO', section: '#intro' },
  { number: '02', label: 'SERVICES', section: '#services' },
  { number: '03', label: 'WORKS', section: '#works' },
  { number: '04', label: 'CONTACT', section: '#contact' },
]

export function Nav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('loaderComplete', () => {
      gsap.to('nav', { opacity: 1, duration: 0.8, ease: 'power2.inOut' })
      setIsVisible(true)
    })
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-sm"
      style={{ opacity: 0 }}
    >
      <div className="max-w-full px-8 py-6 flex items-center justify-between">
        <div className="text-sm font-black tracking-widest text-white uppercase">JI LEE</div>

        <div className="flex gap-12">
          {NAV_ITEMS.map(({ number, label, section }) => (
            <a
              key={number}
              href={section}
              className="text-xs font-light tracking-widest transition-colors duration-300 text-white/60 hover:text-white"
            >
              {number} {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
