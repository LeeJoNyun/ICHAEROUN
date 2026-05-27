'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'

const WORKS = [
  {
    id: 1,
    number: '01',
    title: '포유브로우',
    category: '뷰티 & 서비스',
    description: '프라이빗 브로우샵 서비스',
    color: 'from-amber-900/40 to-orange-900/40',
    href: '/forubrow',
    screenshot: '/screenshots/1-forubrow.png',
  },
  {
    id: 2,
    number: '02',
    title: 'MODO',
    category: '이커머스 · 쇼핑몰',
    description: '프리미엄 가구 쇼핑몰',
    color: 'from-slate-800/40 to-gray-900/40',
    href: '/modo',
    screenshot: '/screenshots/2-modo.png',
  },
  {
    id: 3,
    number: '03',
    title: 'CoreAdmin',
    category: 'SaaS · 관리시스템',
    description: 'SaaS 관리자 대시보드',
    color: 'from-indigo-900/40 to-purple-900/40',
    href: '/core-admin',
    screenshot: '/screenshots/3-core-admin.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Bloom',
    category: '라이프스타일 · 예약',
    description: '꽃배달 예약 플랫폼',
    color: 'from-rose-900/40 to-pink-900/40',
    href: '/bloom',
    screenshot: '/screenshots/4-bloom.png',
  },
  {
    id: 5,
    number: '05',
    title: 'ICHAE',
    category: 'IT · 스타트업',
    description: '이채테크 회사 소개 페이지',
    color: 'from-cyan-900/40 to-blue-900/40',
    href: '/ichae',
    screenshot: '/screenshots/5-nova-tech.png',
  },
]

export function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
    }

    if (isHovering || isDragging) return

    autoplayIntervalRef.current = setInterval(() => {
      if (!sliderRef.current) return
      const slider = sliderRef.current
      const cardWidth = slider.offsetWidth + 32
      const isAtEnd = currentSlide >= WORKS.length - 1

      if (isAtEnd) {
        slider.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        const newScrollLeft = slider.scrollLeft + cardWidth
        slider.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
      }
    }, 5000)
  }

  const handleNav = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return
    const slider = sliderRef.current
    const cardWidth = slider.offsetWidth + 32 // card width + gap
    const newScrollLeft = direction === 'next'
      ? slider.scrollLeft + cardWidth
      : slider.scrollLeft - cardWidth
    slider.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    resetAutoplay()
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleScroll = () => {
      const cardWidth = slider.offsetWidth + 32
      const slide = Math.round(slider.scrollLeft / cardWidth)
      setCurrentSlide(Math.min(slide, WORKS.length - 1))
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      startXRef.current = e.pageX - slider.offsetLeft
      scrollLeftRef.current = slider.scrollLeft
      slider.style.cursor = 'grabbing'
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startXRef.current) * 1.5
      slider.scrollLeft = scrollLeftRef.current - walk
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      slider.style.cursor = 'grab'
      resetAutoplay()
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      resetAutoplay()
    }

    slider.addEventListener('scroll', handleScroll)
    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mouseenter', handleMouseEnter)
    slider.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    resetAutoplay()

    return () => {
      slider.removeEventListener('scroll', handleScroll)
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mouseenter', handleMouseEnter)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [isDragging, isHovering, currentSlide])

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-black py-20">
      <div className="w-full px-8 relative z-10">
        <div className="flex justify-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">OUR WORKS</h2>
        </div>

        {/* Slider Container with Navigation */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Main Slider */}
            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth"
              style={{ cursor: 'grab', scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
            >
          {WORKS.map((work) => {
            return (
              <Link
                key={work.id}
                href={work.href}
                className="relative min-w-full h-[55vh] overflow-hidden rounded-lg group shrink-0 block cursor-pointer"
                style={{
                  backgroundImage: `url(${work.screenshot})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/50 transition-all duration-300 z-0" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-12 z-10 overflow-hidden">
                  {/* Top Section */}
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest font-light mb-4">
                      {work.category}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-4xl font-black text-white mb-2">{work.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xl">{work.description}</p>
                      </div>
                      <div className="text-white/30 text-8xl font-black group-hover:text-white/50 transition-colors">
                        {work.number}
                      </div>
                    </div>

                    {/* Link */}
                    {work.href && (
                      <Link
                        href={work.href}
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group/link"
                      >
                        View Case Study <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-12">
              {/* Left Arrow */}
              <button
                onClick={() => handleNav('prev')}
                disabled={currentSlide === 0}
                className="p-3 rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous project"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slide Counter */}
              <div className="flex items-center gap-4">
                <div className="text-sm font-light text-white/60 tracking-widest">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(WORKS.length).padStart(2, '0')}
                </div>

                {/* Progress Bar */}
                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / WORKS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => handleNav('next')}
                disabled={currentSlide === WORKS.length - 1}
                className="p-3 rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next project"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Hint */}
            <div className="mt-6 text-center text-sm text-white/40 tracking-widest">
              DRAG OR USE ARROWS TO NAVIGATE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
