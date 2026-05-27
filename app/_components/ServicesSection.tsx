'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const SERVICES = [
  {
    number: '01',
    title: 'Landing Page',
    description: '전환율을 높이도록 설계된 고성능 단일 페이지. 브랜드 메시지를 명확하게 전달합니다.',
    icon: '📄',
  },
  {
    number: '02',
    title: 'Web Service',
    description: '기업 브랜드 홈페이지부터 복잡한 서비스 플랫폼까지. 확장 가능한 웹 환경을 구축합니다.',
    icon: '🌐',
  },
  {
    number: '03',
    title: 'Admin Dashboard',
    description: '직관적이고 효율적인 관리자 페이지. 비즈니스 운영을 간편하게 만듭니다.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Client Portal',
    description: '고객 맞춤형 포털 애플리케이션. 사용자 경험을 최우선으로 설계합니다.',
    icon: '👥',
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 카드 hover 효과
    const cards = document.querySelectorAll('.service-card')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center bg-black py-20">
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">WHAT WE DO</h2>
        <p className="text-gray-400 text-lg mb-20">우리가 제공하는 서비스</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="service-card relative p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group bg-gradient-to-br from-white/5 to-white/[0.02]"
            >
              {/* Number */}
              <div className="text-6xl font-black text-white/10 mb-4 group-hover:text-white/20 transition-colors">
                {service.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

              {/* Hover Arrow */}
              <div className="mt-6 inline-block text-white/0 group-hover:text-white/60 transition-colors">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
