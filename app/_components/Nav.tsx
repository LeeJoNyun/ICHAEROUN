'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const NAV_ITEMS = [
  { number: '01', label: 'INTRO', section: '#intro' },
  { number: '02', label: 'SERVICES', section: '#services' },
  { number: '03', label: 'WORKS', section: '#works' },
  { number: '04', label: 'CONTACT', section: '#contact' },
  { number: '05', label: 'QUOTE', section: '/quote', isLink: true },
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
        <div className="text-sm font-black tracking-widest text-white uppercase">ICHAE</div>

        <div className="flex gap-8 items-center">
          {NAV_ITEMS.map(({ number, label, section, isLink }) => (
            isLink ? (
              <Link
                key={number}
                href={section}
                className="group relative px-8 py-3 text-sm font-semibold tracking-wider overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"></div>
                <span className="relative text-white flex items-center gap-2">
                  견적서받으러가기
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ) : (
              <a
                key={number}
                href={section}
                className="text-xs font-light tracking-widest transition-colors duration-300 text-white/60 hover:text-white"
              >
                {number} {label}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  )
}
