'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: '포유브로우',
    description: '12년차 대표원장의 프라이빗 브로우샵 서비스 소개 사이트',
    category: '뷰티 & 서비스',
    href: '/forubrow',
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 카드 스크롤 인 애니메이션
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card')

      gsap.from(cards, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }

    // 마우스 tilt 효과
    const handleMouseMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement)?.closest('.project-card') as HTMLElement
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(card, {
        rotationX: y * 10,
        rotationY: -x * 10,
        duration: 0.6,
        transformOrigin: '50% 50%',
        perspective: 1000,
      })
    }

    const handleMouseLeave = (e: Event) => {
      const card = (e.target as HTMLElement)?.closest('.project-card') as HTMLElement
      if (!card) return

      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
      })
    }

    const cards = document.querySelectorAll('.project-card')
    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center bg-black py-20">
      <div className="max-w-6xl w-full px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-tight">Projects</h2>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Link key={i} href={project.href}>
              <div
                className="project-card group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 cursor-pointer transition-all duration-300 hover:border-gray-700 h-full"
                style={{ perspective: '1000px' }}
              >
                <div className="h-40 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded mb-6 group-hover:opacity-75 transition-opacity" />

                <div className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">{project.category}</div>
                  <h3 className="text-xl font-light text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

                  <div className="mt-6 flex items-center text-sm font-light text-gray-400 group-hover:text-white transition-colors">
                    보기
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Placeholder */}
        <div className="mt-12 rounded-lg border border-dashed border-gray-700 p-8 text-center">
          <p className="text-gray-500">더 많은 프로젝트가 곧 추가될 예정입니다.</p>
        </div>
      </div>
    </section>
  )
}
