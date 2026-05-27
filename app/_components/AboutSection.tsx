'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 단어 단위 스플릿
    const text =
      'Portfolio를 통해 다양한 프로젝트 경험을 보여드립니다. 인터랙션 디자인부터 풀스택 개발까지 혼자서 팀처럼 일할 수 있습니다.'
    const words = text.split(' ')

    if (textRef.current) {
      textRef.current.innerHTML = words
        .map((word) => `<span class="about-word" style="display: inline-block; margin-right: 0.5em;">${word}</span>`)
        .join('')
    }

    // 숫자 카운트
    const counters = document.querySelectorAll('.counter')
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      gsap.to(counter, {
        textContent: target,
        duration: 2,
        snap: { textContent: 1 },
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center bg-black py-20">
      <div className="section-number">02</div>
      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-12 tracking-tight">About</h2>

        <div
          ref={textRef}
          className="text-lg md:text-2xl leading-relaxed text-gray-300 mb-16"
          style={{
            fontFamily: 'var(--font-geist-sans)',
          }}
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20">
          <div>
            <div className="text-5xl font-light text-white mb-2">
              <span className="counter" data-target="10">
                0
              </span>
              +
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Years Experience</p>
          </div>
          <div>
            <div className="text-5xl font-light text-white mb-2">
              <span className="counter" data-target="50">
                0
              </span>
              +
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Projects</p>
          </div>
          <div>
            <div className="text-5xl font-light text-white mb-2">
              <span className="counter" data-target="100">
                0
              </span>
              %
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
