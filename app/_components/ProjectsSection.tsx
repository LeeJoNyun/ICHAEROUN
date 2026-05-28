'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  { id: 'booking', label: '예약 시스템' },
  { id: 'ecommerce', label: '이커머스' },
  { id: 'admin', label: '관리자페이지' },
  { id: 'landing', label: '랜딩페이지' },
  { id: 'corporate', label: '기업사이트' },
]

const WORKS = [
  {
    id: 1,
    number: '01',
    title: '포유브로우',
    category: '뷰티 & 서비스',
    categoryType: 'booking',
    description: '예약 시스템 카테고리의 사이트를 개발할 수 있습니다. 실시간 예약 시스템, 고객 상담 기능, 멤버십 관리, 결제 연동 등 서비스 업종에 필요한 모든 기능을 구현합니다.',
    tech: 'React · Node.js · MongoDB',
    capability: '예약 시스템 개발',
    color: 'from-amber-900/40 to-orange-900/40',
    href: '/forubrow',
    screenshot: '/screenshots/1-forubrow.png',
  },
  {
    id: 2,
    number: '02',
    title: 'MODO',
    category: '이커머스 · 쇼핑몰',
    categoryType: 'ecommerce',
    description: '이커머스 쇼핑몰 카테고리의 사이트를 개발할 수 있습니다. 제품 카탈로그, 결제 시스템, 재고 관리, 배송 추적, 고객 리뷰 등 온라인 판매에 필요한 완전한 시스템을 구축합니다.',
    tech: 'Next.js · TypeScript · Stripe',
    capability: '쇼핑몰 플랫폼 구축',
    color: 'from-slate-800/40 to-gray-900/40',
    href: '/modo',
    screenshot: '/screenshots/2-modo.png',
  },
  {
    id: 3,
    number: '03',
    title: 'CoreAdmin',
    category: '관리시스템 · 백오피스',
    categoryType: 'admin',
    description: '관리자페이지 · 백오피스 카테고리의 사이트를 개발할 수 있습니다. 복잡한 데이터 시각화, 실시간 대시보드, 고급 필터링, 사용자 권한 관리 등 엔터프라이즈급 관리 시스템을 구현합니다.',
    tech: 'React · Redux · Chart.js',
    capability: '관리자 대시보드 개발',
    color: 'from-indigo-900/40 to-purple-900/40',
    href: '/core-admin',
    screenshot: '/screenshots/3-core-admin.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Bloom',
    category: '라이프스타일 · 예약',
    categoryType: 'booking',
    description: '예약 시스템 카테고리의 사이트를 개발할 수 있습니다. 위치 기반 서비스, 실시간 예약, 고객 관리, 리뷰 시스템 등 서비스 운영에 필요한 기능을 모두 개발합니다.',
    tech: 'Next.js · Firebase · Google Maps API',
    capability: '위치 기반 서비스 개발',
    color: 'from-rose-900/40 to-pink-900/40',
    href: '/bloom',
    screenshot: '/screenshots/4-bloom.png',
  },
  {
    id: 5,
    number: '05',
    title: 'GrowthHQ',
    category: '스타트업 성장 랜딩',
    categoryType: 'landing',
    description: '랜딩페이지 카테고리의 사이트를 개발할 수 있습니다. 제품 소개, 가격 플랜, 고객 사례, 뉴스레터 구독 등 높은 전환율을 위한 모든 요소를 구현합니다.',
    tech: 'Next.js · Tailwind · Framer Motion',
    capability: '고전환율 랜딩페이지',
    color: 'from-blue-900/40 to-cyan-900/40',
    href: '#',
    screenshot: '/screenshots/5-growth-hq.png',
  },
  {
    id: 6,
    number: '06',
    title: 'CloudSync Pro',
    category: 'SaaS 서비스 랜딩',
    categoryType: 'landing',
    description: '랜딩페이지 카테고리의 사이트를 개발할 수 있습니다. 제품 소개, 가격 플랜, 고객 사례, 뉴스레터 구독 등 높은 전환율을 위한 모든 요소를 구현합니다.',
    tech: 'React · TypeScript · AOS',
    capability: '고전환율 랜딩페이지',
    color: 'from-purple-900/40 to-indigo-900/40',
    href: '#',
    screenshot: '/screenshots/6-cloudsync.png',
  },
  {
    id: 7,
    number: '07',
    title: 'Pixel Studio',
    category: '디자인 에이전시',
    categoryType: 'corporate',
    description: '기업사이트 카테고리의 사이트를 개발할 수 있습니다. 회사 소개, 포트폴리오, 팀 소개, 문의 양식 등 브랜드를 효과적으로 전달하는 프로페셔널한 사이트를 구축합니다.',
    tech: 'Next.js · GSAP · Custom CSS',
    capability: '프리미엄 포트폴리오 사이트',
    color: 'from-orange-900/40 to-amber-900/40',
    href: '#',
    screenshot: '/screenshots/7-pixel-studio.png',
  },
  {
    id: 8,
    number: '08',
    title: 'Vertex Consulting',
    category: 'IT 컨설팅 기업',
    categoryType: 'corporate',
    description: '기업사이트 카테고리의 사이트를 개발할 수 있습니다. 회사 소개, 포트폴리오, 팀 소개, 문의 양식 등 브랜드를 효과적으로 전달하는 프로페셔널한 사이트를 구축합니다.',
    tech: 'React · Tailwind · Animation',
    capability: '프리미엄 포트폴리오 사이트',
    color: 'from-teal-900/40 to-cyan-900/40',
    href: '#',
    screenshot: '/screenshots/8-vertex.png',
  },
  {
    id: 9,
    number: '09',
    title: 'StyleHub',
    category: '패션 쇼핑몰',
    categoryType: 'ecommerce',
    description: '이커머스 쇼핑몰 카테고리의 사이트를 개발할 수 있습니다. 제품 카탈로그, 결제 시스템, 재고 관리, 배송 추적, 고객 리뷰 등 온라인 판매에 필요한 완전한 시스템을 구축합니다.',
    tech: 'Next.js · MongoDB · Stripe',
    capability: '온라인 쇼핑몰 구축',
    color: 'from-pink-900/40 to-rose-900/40',
    href: '#',
    screenshot: '/screenshots/9-stylehub.png',
  },
  {
    id: 10,
    number: '10',
    title: 'TechGear',
    category: '전자제품 쇼핑몰',
    categoryType: 'ecommerce',
    description: '이커머스 쇼핑몰 카테고리의 사이트를 개발할 수 있습니다. 제품 카탈로그, 결제 시스템, 재고 관리, 배송 추적, 고객 리뷰 등 온라인 판매에 필요한 완전한 시스템을 구축합니다.',
    tech: 'React · TypeScript · PayPal',
    capability: '온라인 쇼핑몰 구축',
    color: 'from-yellow-900/40 to-orange-900/40',
    href: '#',
    screenshot: '/screenshots/10-techgear.png',
  },
  {
    id: 11,
    number: '11',
    title: 'Wellness Spa',
    category: '스파/웰니스 예약',
    categoryType: 'booking',
    description: '예약 시스템 카테고리의 사이트를 개발할 수 있습니다. 실시간 예약 시스템, 고객 상담 기능, 멤버십 관리, 결제 연동 등 서비스 업종에 필요한 모든 기능을 구현합니다.',
    tech: 'Next.js · React · Firebase',
    capability: '예약 시스템 개발',
    color: 'from-green-900/40 to-emerald-900/40',
    href: '#',
    screenshot: '/screenshots/11-wellness.png',
  },
  {
    id: 12,
    number: '12',
    title: 'Analytics Pro',
    category: '데이터 분석 대시보드',
    categoryType: 'admin',
    description: '관리자페이지 · 백오피스 카테고리의 사이트를 개발할 수 있습니다. 복잡한 데이터 시각화, 실시간 대시보드, 고급 필터링, 사용자 권한 관리 등 엔터프라이즈급 관리 시스템을 구현합니다.',
    tech: 'React · D3.js · Redux',
    capability: '관리자 대시보드 개발',
    color: 'from-violet-900/40 to-purple-900/40',
    href: '#',
    screenshot: '/screenshots/12-analytics.png',
  },
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('booking')
  const sliderRef = useRef<HTMLDivElement>(null)

  const filteredWorks = WORKS.filter(work => work.categoryType === selectedCategory)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400
      if (direction === 'left') {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative w-full bg-black min-h-screen flex flex-col justify-center py-20">
      <div className="w-full px-8 relative z-10">
        {/* Title */}
        <div className="flex justify-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">OUR WORKS</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            {/* Category Tabs */}
            <div className="flex gap-8 border-b border-white/10 mb-12 overflow-x-auto pb-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap text-sm font-semibold transition-all duration-300 pb-2 border-b-2 ${
                    selectedCategory === cat.id
                      ? 'text-white border-b-blue-400'
                      : 'text-white/60 border-b-transparent hover:text-white/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Slider Container */}
            <div className="relative">
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
              >
                {filteredWorks.length > 0 ? (
                  filteredWorks.map((work) => (
                    <Link
                      key={work.id}
                      href={work.href}
                      className="relative shrink-0 w-96 h-96 overflow-hidden rounded-lg group cursor-pointer snap-start"
                      style={{
                        backgroundImage: `url(${work.screenshot})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/50 transition-all duration-300 z-0" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                        <div>
                          <div className="text-white/60 text-xs uppercase tracking-widest font-light">
                            {work.category}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-black text-white">{work.category}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">{work.description}</p>

                            <div className="pt-2 space-y-1">
                              <p className="text-white/50 text-xs">{work.tech}</p>
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                            View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="w-full h-96 flex items-center justify-center text-white/60">
                    준비 중입니다
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              {filteredWorks.length > 1 && (
                <>
                  <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
