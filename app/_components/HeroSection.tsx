'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Canvas 파티클 설정
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resizeCanvas()

      class Particle {
        x: number
        y: number
        vx: number
        vy: number
        life: number
        size: number

        constructor(x: number, y: number) {
          this.x = x
          this.y = y
          this.vx = (Math.random() - 0.5) * 2
          this.vy = (Math.random() - 0.5) * 2
          this.life = 1
          this.size = Math.random() * 2 + 1
        }

        update() {
          this.x += this.vx
          this.y += this.vy
          this.life -= 0.01
          this.vy += 0.05
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.5})`
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // 파티클 생성 (마우스 위치 근처)
        if (Math.random() > 0.85) {
          particlesRef.current.push(
            new Particle(
              mouseRef.current.x + (Math.random() - 0.5) * 50,
              mouseRef.current.y + (Math.random() - 0.5) * 50
            )
          )
        }

        // 파티클 업데이트 및 그리기
        particlesRef.current = particlesRef.current.filter((p) => {
          p.update()
          p.draw(ctx)
          return p.life > 0
        })

        requestAnimationFrame(animate)
      }

      animate()
      window.addEventListener('resize', resizeCanvas)
      return () => window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // 마우스 따라 움직이는 orb + 파티클 생성
  const handleMouseMove = (e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }

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

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-black via-slate-900 to-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />

      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      {/* Canvas Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
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
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6" style={{ fontFamily: 'var(--font-geist-sans)' }}>
          ICHAE
        </h1>
        <p className="text-sm md:text-base text-gray-400 tracking-[0.2em] uppercase mb-16">이채로운 디지털 경험을 만드는 곳</p>
        <p className="text-xl md:text-3xl font-light text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          We Build Digital Experiences That Convert
        </p>

        <button
          onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-light"
        >
          견적서 받기 →
        </button>
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
