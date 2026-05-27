'use client'

import Link from 'next/link'

export function QuoteCtaSection() {
  return (
    <section className="bg-black py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-900/20 backdrop-blur-sm p-16 text-center">
          {/* 배경 효과 */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/5 via-transparent to-purple-600/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              프로젝트를 시작할 준비가 되셨나요?
            </h2>

            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              당신의 아이디어를 현실로 만들 준비가 되어있습니다.<br />
              무료 상담을 통해 프로젝트를 논의해보세요.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/quote">
                <button className="group relative px-10 py-4 text-lg font-semibold overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-600 transition-all"></div>
                  <span className="relative text-white flex items-center gap-2">
                    견적서 받기
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>

              <button className="px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:border-white/60 hover:bg-white/5 transition-all duration-300">
                무료 상담 신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
