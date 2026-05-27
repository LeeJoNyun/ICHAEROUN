'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const text = 'Let\'s work together'
      const chars = text.split('')

      textRef.current.innerHTML = chars
        .map(
          (char) => `
        <span class="footer-char" style="display: inline-block; margin: 0 0.1em; transform: translateY(100px); opacity: 0;">
          ${char === ' ' ? '&nbsp;' : char}
        </span>
      `
        )
        .join('')

      // 스크롤 진입 시 글자 애니메이션
      gsap.to('.footer-char', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    // 배경색 변경 애니메이션
    ScrollTrigger.create({
      trigger: sectionRef.current,
      onUpdate: (self) => {
        if (sectionRef.current) {
          const opacity = Math.min(self.progress, 1)
          gsap.to(sectionRef.current, {
            backgroundColor: `rgba(0, 0, 0, ${1 - opacity * 0.3})`,
            overwrite: 'auto',
          })
        }
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black py-20">
      <div className="relative z-10 text-center">
        <h2
          ref={textRef}
          className="text-6xl md:text-8xl font-light text-white tracking-tight mb-12"
          style={{
            fontFamily: 'var(--font-geist-sans)',
          }}
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="mailto:moonstar3109@gmail.com"
            className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
            data-cursor
          >
            Email
          </a>
          <a
            href="https://github.com/LeeJoNyun"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
            data-cursor
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-600 text-xs uppercase tracking-widest">
        <p>© 2026 JI LEE. All rights reserved.</p>
      </div>
    </section>
  )
}
