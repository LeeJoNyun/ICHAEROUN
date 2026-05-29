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
      <div className="max-w-2xl mx-auto space-y-8 print:hidden">
        {/* 프로젝트 타입 */}
        <div ref={projectTypeRef} className="relative space-y-2">
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
          <p className="text-xs text-white/50 whitespace-pre-line">
            {getProjectTypeDescription(params.projectType as keyof typeof PROJECT_TYPES)}
          </p>

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
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                추가 페이지 수
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
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-white/80">
                ✓ 기본 포함: {PROJECT_TYPES[params.projectType as keyof typeof PROJECT_TYPES].pages}페이지
              </p>
              <p className="text-xs text-white/60">
                기본 페이지는 홈페이지, 소개, 서비스 등 필수 페이지입니다. 추가 페이지가 필요하면 위에 개수를 입력하세요. (예: 블로그, 포트폴리오, 갤러리 등)
              </p>
            </div>
          </div>
        )}

        {/* 추가 기능 */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-white">필요한 추가 기능 (선택사항)</label>
          <p className="text-xs text-white/50">
            위의 기본 구성에 추가로 필요한 기능을 선택하세요. 선택하지 않아도 됩니다.
          </p>
          <div className="space-y-3">
            {Object.entries(ADDON_PRICING).map(([key, price]) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={params.addons.includes(key as keyof typeof ADDON_PRICING)}
                  onChange={() => handleAddonToggle(key as keyof typeof ADDON_PRICING)}
                  className="w-5 h-5 rounded border-white/30 text-white accent-white cursor-pointer"
                />
                <div className="flex-1">
                  <span className="text-white/80 group-hover:text-white transition block">
                    {getAddonLabel(key)}
                  </span>
                  <span className="text-xs text-white/40">{getAddonDescription(key)}</span>
                </div>
                <span className="text-white/60 text-sm whitespace-nowrap">+{formatPrice(price)}</span>
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

function getProjectTypeDescription(projectType: keyof typeof PROJECT_TYPES): string {
  const descriptions: Record<string, string> = {
    website: '기업 홈페이지, 회사 소개 사이트\n기본 페이지: 홈, 소개, 서비스/제품, 포트폴리오/사례, 연락처',
    landing: '상품 판매, 이벤트 홍보용 단일 페이지\n기본 구성: 헤더, 영웅섹션, 기능/혜택소개, CTA, 푸터',
    ecommerce: '상품 판매 쇼핑몰\n기본 페이지: 홈, 상품목록, 상품상세, 장바구니, 결제, 마이페이지, 주문관리',
    service: '서비스 소개, 설명 중심 사이트\n기본 페이지: 홈, 서비스소개, 가격표, 문의/예약, FAQ, 연락처',
    portfolio: '포트폴리오, 작업 갤러리\n기본 페이지: 홈, 소개, 작업갤러리, 작업상세, 연락처',
    booking: '예약, 시간 관리 플랫폼\n기본 페이지: 홈, 예약, 일정관리, 예약확인, 결제, 마이페이지, 관리자',
    community: '사용자 커뮤니티, 포럼, 소셜 기능\n기본 페이지: 홈, 게시판, 상세글보기, 마이페이지, 메시지, 관리자',
    custom: '위의 타입에 없는 맞춤형 프로젝트\n페이지당 요금으로 계산되며, 자유롭게 구성 가능합니다',
  }
  return descriptions[projectType] || ''
}

function getAddonDescription(key: string): string {
  const descriptions = {
    payment: '온라인 결제 기능 추가',
    userSystem: '회원 가입, 로그인, 마이페이지',
    admin: '상품/컨텐츠 관리자 대시보드',
    apiIntegration: '소셜 로그인, 배송 연동 등',
    realTimeChat: '고객 상담, 실시간 메시지 기능',
    seo: '검색 엔진 최적화 (구글/네이버 상위 노출)',
  }
  return descriptions[key as keyof typeof descriptions] || ''
}
