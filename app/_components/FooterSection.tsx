'use client'

import { useEffect, useRef, useState } from 'react'

export function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [holdProgress, setHoldProgress] = useState(0)
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseDown = () => {
    holdIntervalRef.current = setInterval(() => {
      setHoldProgress((prev) => {
        const next = prev + 5
        if (next >= 100) {
          clearInterval(holdIntervalRef.current!)
          window.open('mailto:contact@echaeroun.com?subject=Project%20Inquiry')
          return 0
        }
        return next
      })
    }, 50)
  }

  const handleMouseUp = () => {
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current)
    }
    setHoldProgress(0)
  }

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (holdProgress / 100) * circumference

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black py-20">
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
          Ready to Start?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-20 leading-relaxed">
          프로젝트를 시작할 준비가 되셨나요? 우리는 당신의 아이디어를 현실로 만들 준비가 되어있습니다.
        </p>

        <div className="flex flex-col items-center gap-8">
          {/* Click & Hold Button */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-xs text-white/60 tracking-widest uppercase">HOLD TO CONTACT</p>

            <button
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative w-40 h-40 flex items-center justify-center"
              aria-label="Contact us"
            >
              {/* SVG Progress Circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="80" cy="80" r="55" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
                <circle
                  cx="80"
                  cy="80"
                  r="55"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.05s linear' }}
                />
              </svg>

              {/* Button Content */}
              <div className="relative z-10 text-center">
                {holdProgress === 0 ? (
                  <div className="text-3xl">📧</div>
                ) : (
                  <div className="text-sm text-white font-light">{holdProgress}%</div>
                )}
              </div>
            </button>

            <p className="text-xs text-white/40 tracking-widest uppercase">또는 아래 버튼을 클릭하세요</p>
          </div>

          {/* Direct Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@echaeroun.com"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-light"
            >
              Email
            </a>
            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-light"
            >
              카카오톡
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-600 text-xs uppercase tracking-widest">
        <p>© 2026 ECHAEROUN. All rights reserved.</p>
      </div>
    </section>
  )
}
