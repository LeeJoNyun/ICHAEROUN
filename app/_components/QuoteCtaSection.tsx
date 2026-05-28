'use client'

import { useState } from 'react'
import Link from 'next/link'

export function QuoteCtaSection() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      <section className="bg-black min-h-screen flex flex-col items-center justify-center px-8 py-20">
        <div className="w-full">
          {/* Section Title */}
          <div className="flex justify-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">CONTACT</h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-900/20 backdrop-blur-sm p-16 text-center">
              {/* 배경 효과 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 opacity-50"></div>

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
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-600 transition-all"></div>
                      <span className="relative text-white flex items-center gap-2">
                        견적서 받기
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </Link>

                  <button
                    onClick={() => setShowModal(true)}
                    className="px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                  >
                    무료 상담 신청
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 모달 배경 */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-md animate-in fade-in scale-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 배경 글로우 효과 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* 모달 본체 */}
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* 상단 그래디언트 라인 */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">신청이 완료되었습니다!</h3>
                    <p className="text-white/60">곧 연락드리겠습니다.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white">무료 상담 신청</h3>
                        <p className="text-white/50 text-sm mt-1">프로젝트에 대해 알려주세요</p>
                      </div>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-white/40 hover:text-white transition-colors p-2"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-3">이름</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-200"
                          placeholder="이름을 입력해주세요"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-3">이메일</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-200"
                          placeholder="이메일을 입력해주세요"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-3">전화번호</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-200"
                          placeholder="010-0000-0000"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-3">프로젝트 설명</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-200 resize-none"
                          placeholder="프로젝트에 대해 설명해주세요"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full relative group mt-8 px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-500 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-all duration-300 blur"></div>
                        <span className="relative text-white flex items-center justify-center gap-2">
                          제출하기
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
