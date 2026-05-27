'use client'

import { useState, useRef, useEffect } from 'react'
import { calculateQuote, formatPrice, QuoteParams, QuoteResult } from './calculator'
import { PROJECT_TYPES, ADDON_PRICING, SAMPLES } from './constants'
import { QuoteDisplay } from './QuoteDisplay'
import Link from 'next/link'

export function QuoteForm() {
  const [params, setParams] = useState<QuoteParams>({
    projectType: 'website',
    additionalPages: 0,
    addons: [],
  })

  const [quote, setQuote] = useState<QuoteResult | null>(null)
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false)
  const projectTypeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (projectTypeRef.current && !projectTypeRef.current.contains(event.target as Node)) {
        setIsProjectTypeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({
      ...params,
      projectType: e.target.value as keyof typeof PROJECT_TYPES,
      additionalPages: 0,
    })
  }

  const handleAdditionalPagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      additionalPages: Math.max(0, parseInt(e.target.value) || 0),
    })
  }

  const handleAddonToggle = (addon: keyof typeof ADDON_PRICING) => {
    setParams({
      ...params,
      addons: params.addons.includes(addon)
        ? params.addons.filter(a => a !== addon)
        : [...params.addons, addon],
    })
  }

  const handleCalculate = () => {
    try {
      const result = calculateQuote(params)
      setQuote(result)
    } catch (error) {
      alert('견적 계산 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className="space-y-12">
      {/* 폼 섹션 */}
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 프로젝트 타입 */}
        <div ref={projectTypeRef} className="relative">
          <label className="block text-sm font-medium text-white mb-2">
            어떤 종류의 사이트를 만들고 싶으신가요?
          </label>
          <button
            type="button"
            onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
            className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-white/40 flex items-center justify-between hover:bg-white/15 transition"
          >
            <span>{PROJECT_TYPES[params.projectType as keyof typeof PROJECT_TYPES].name}</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform ${isProjectTypeOpen ? 'rotate-180' : ''}`}
            >
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {isProjectTypeOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-white/20 rounded shadow-lg z-10">
              {Object.entries(PROJECT_TYPES).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    handleProjectTypeChange({
                      target: { value: key },
                    } as any)
                    setIsProjectTypeOpen(false)
                  }}
                  className={`w-full px-3 py-2.5 text-sm text-left transition ${
                    params.projectType === key
                      ? 'bg-blue-600 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {params.projectType === key && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 11-1.06-1.06l7.25-7.25a.75.75 0 011.06 0z" />
                      </svg>
                    )}
                    <span>{value.name}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 추가 페이지 */}
        {params.projectType !== 'custom' && (
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              기본 페이지 외 추가 페이지 수
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                value={params.additionalPages}
                onChange={handleAdditionalPagesChange}
                className="w-20 px-2 py-2 text-sm bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-white/40"
              />
              <span className="text-white/60 text-sm">개</span>
            </div>
            <p className="text-xs text-white/40 mt-1">
              기본: {PROJECT_TYPES[params.projectType as keyof typeof PROJECT_TYPES].pages}페이지
            </p>
          </div>
        )}

        {/* 추가 기능 */}
        <div>
          <label className="block text-sm font-medium text-white mb-4">필요한 추가 기능</label>
          <div className="space-y-3">
            {Object.entries(ADDON_PRICING).map(([key, price]) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={params.addons.includes(key as keyof typeof ADDON_PRICING)}
                  onChange={() => handleAddonToggle(key as keyof typeof ADDON_PRICING)}
                  className="w-5 h-5 rounded border-white/30 text-white accent-white cursor-pointer"
                />
                <span className="flex-1 text-white/80 group-hover:text-white transition">
                  {getAddonLabel(key)}
                </span>
                <span className="text-white/60 text-sm">+{formatPrice(price)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 샘플 갤러리 */}
        {params.projectType !== 'custom' && (
          <div>
            <h3 className="text-sm font-medium text-white mb-4">
              📌 {PROJECT_TYPES[params.projectType as keyof typeof PROJECT_TYPES].name} 샘플
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLES.filter(s => s.projectType === params.projectType).map(sample => (
                <Link key={sample.id} href={`/samples/${sample.id}`}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg border border-white/20 hover:border-white/40 transition">
                    <div className="relative aspect-video bg-white/5 overflow-hidden">
                      <img
                        src={sample.image}
                        alt={sample.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
                      <div className="absolute inset-0 flex items-end p-4">
                        <div>
                          <p className="text-white font-semibold text-sm">{sample.name}</p>
                          <p className="text-white/60 text-xs mt-1">{sample.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 group-hover:bg-white/10 transition">
                      <p className="text-white/70 text-xs line-clamp-2">{sample.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 계산 버튼 */}
        <button
          onClick={handleCalculate}
          className="w-full py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition"
        >
          견적서 생성
        </button>
      </div>

      {/* 견적서 결과 */}
      {quote && (
        <QuoteDisplay
          quote={quote}
          addons={params.addons}
          onPrint={() => window.print()}
        />
      )}
    </div>
  )
}

function getAddonLabel(key: string): string {
  const labels = {
    payment: '결제 시스템 연동 (Stripe/Toss)',
    userSystem: '회원 시스템',
    admin: '관리자 대시보드',
    apiIntegration: 'API 연동 (네이버/카카오)',
    realTimeChat: '실시간 채팅',
    seo: 'SEO 최적화',
  }
  return labels[key as keyof typeof labels] || key
}
