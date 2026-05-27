'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import {
  BrowThumbnail,
  ModoThumbnail,
  CoreAdminThumbnail,
  BloomThumbnail,
  NovaTechThumbnail,
} from './ProjectThumbnail'

const WORKS = [
  {
    id: 1,
    number: '01',
    title: '포유브로우',
    category: '뷰티 & 서비스',
    description: '12년차 대표원장의 프라이빗 브로우샵 서비스 소개 사이트',
    color: 'from-amber-900/40 to-orange-900/40',
    href: '/forubrow',
    Thumbnail: BrowThumbnail,
  },
  {
    id: 2,
    number: '02',
    title: 'MODO',
    category: '이커머스 · 쇼핑몰',
    description: '프리미엄 가구 브랜드 전자상거래 플랫폼. 제품 검색, 장바구니, 결제까지 완벽한 쇼핑 경험.',
    color: 'from-slate-800/40 to-gray-900/40',
    Thumbnail: ModoThumbnail,
  },
  {
    id: 3,
    number: '03',
    title: 'CoreAdmin',
    category: 'SaaS · 관리시스템',
    description: 'B2B SaaS 플랫폼의 관리자 대시보드. 실시간 분석, 사용자 관리, 결제 처리까지 통합.',
    color: 'from-indigo-900/40 to-purple-900/40',
    Thumbnail: CoreAdminThumbnail,
  },
  {
    id: 4,
    number: '04',
    title: 'Bloom',
    category: '라이프스타일 · 예약',
    description: '꽃배달 서비스 플랫폼. 상품 등록, 예약 시스템, 배송 추적 기능 구현.',
    color: 'from-rose-900/40 to-pink-900/40',
    Thumbnail: BloomThumbnail,
  },
  {
    id: 5,
    number: '05',
    title: 'NovaTech',
    category: 'IT · 스타트업',
    description: '혁신적인 AI 기반 소프트웨어 회사의 회사 소개 및 제품 데모 페이지.',
    color: 'from-cyan-900/40 to-blue-900/40',
    Thumbnail: NovaTechThumbnail,
  },
]

export function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      setShowHint(false)
      startXRef.current = e.pageX - slider.offsetLeft
      scrollLeftRef.current = slider.scrollLeft
      slider.style.cursor = 'grabbing'
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
    }

    slider.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-black py-20">
      <div className="w-full px-8 relative z-10">
        <div className="flex justify-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">OUR WORKS</h2>
        </div>

        {/* Drag Slider - Centered Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto pb-8 scroll-smooth"
              style={{ cursor: 'grab', scrollBehavior: 'smooth' }}
            >
          {WORKS.map((work) => {
            const ThumbnailComponent = work.Thumbnail
            return (
              <div
                key={work.id}
                className="relative min-w-[70vw] h-[60vh] overflow-hidden rounded-lg group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${work.color}`} />

                {/* Thumbnail Preview */}
                <div className="absolute top-8 right-8 w-40 h-48 opacity-60 group-hover:opacity-100 transition-opacity z-10">
                  <ThumbnailComponent />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-between p-12">
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
              </div>
            )
          })}
            </div>
          </div>
        </div>

        {/* Drag Hint */}
        {showHint && (
          <div className="drag-hint">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            DRAG TO EXPLORE
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </section>
  )
}
