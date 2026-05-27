'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 글자 단위 스플릿
    const text = 'JI LEE'
    const chars = text.split('')

    if (textRef.current) {
      textRef.current.innerHTML = chars
        .map((char) => `<span class="hero-char" style="display: inline-block; overflow: hidden;">
          <span class="hero-char-inner" style="display: inline-block; translate: 0 100%;">${char === ' ' ? '&nbsp;' : char}</span>
        </span>`)
        .join('')

      // 글자 등장 애니메이션
      gsap.to('.hero-char-inner', {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }

    // 마우스 따라 움직이는 orb
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 40
        const y = (e.clientY / window.innerHeight - 0.5) * 40

        gsap.to(orbRef.current, {
          x,
          y,
          duration: 1,
          overwrite: 'auto',
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // 스크롤 연동 parallax + fade
    ScrollTrigger.create({
      trigger: containerRef.current,
      onUpdate: (self) => {
        if (textRef.current) {
          gsap.to(textRef.current, {
            yPercent: self.getVelocity() * 0.1,
            opacity: 1 - self.progress * 0.3,
            overwrite: 'auto',
          })
        }
      },
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated Orb */}
      <div
        ref={orbRef}
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Text */}
      <div className="relative z-10 text-center">
        <div
          ref={textRef}
          className="text-8xl md:text-9xl font-light text-white tracking-tighter leading-none"
          style={{
            fontFamily: 'var(--font-geist-sans)',
          }}
        />
        <p className="mt-8 text-sm text-gray-400 tracking-widest uppercase">Full Stack Developer</p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
