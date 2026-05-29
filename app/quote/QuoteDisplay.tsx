'use client'

import { QuoteResult } from './calculator'
import { ADDON_PRICING } from './constants'

interface QuoteDisplayProps {
  quote: QuoteResult
  addons: (keyof typeof ADDON_PRICING)[]
  onPrint: () => void
}

export function QuoteDisplay({ quote, addons, onPrint }: QuoteDisplayProps) {

  return (
    <>
      <style>{`
        @media print {
          * {
            margin: 0;
            padding: 0;
          }
          body {
            background: white;
            margin: 0;
            padding: 0;
            font-size: 11pt;
            line-height: 1.4;
          }
          html {
            margin: 0;
            padding: 0;
          }
          .quote-container {
            max-width: 100%;
            margin: 0;
            padding: 20mm;
            box-shadow: none;
            break-after: auto;
            page-break-after: avoid;
          }
          .quote-section {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 12pt;
          }
          .quote-section h1 {
            font-size: 24pt;
            margin-bottom: 8pt;
          }
          .quote-section h2 {
            font-size: 14pt;
            margin-bottom: 8pt;
          }
          .flex-gap-4 { gap: 8pt; }
        }
      `}</style>

      <div className="flex gap-4 mb-8 print:hidden">
        <button
          onClick={onPrint}
          className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded border border-white/20 transition"
        >
          인쇄 / PDF 저장 (Ctrl+P)
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 py-3 bg-white hover:bg-white/90 text-black font-medium rounded transition"
        >
          PDF 다운로드
        </button>
      </div>

      {/* 견적서 */}
      <div className="quote-container max-w-4xl mx-auto bg-white text-black p-12 rounded-lg print:rounded-none print:p-0 print:bg-white shadow-2xl print:shadow-none print:break-before-page">
        {/* 헤더 */}
        <div className="quote-section text-center mb-8 pb-6 border-b border-black/10">
          <h1 className="text-3xl font-bold mb-1">웹사이트 견적서</h1>
          <p className="text-sm text-black/60 mb-3">
            발급일: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="space-y-0.5 text-sm text-black/70">
            <p>이채로운</p>
            <p>email: contact@ichae.kr</p>
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="quote-section mb-6">
          <h2 className="text-lg font-bold mb-3 text-black">프로젝트 정보</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-black/60 text-xs">프로젝트명</p>
              <p className="font-semibold">{quote.projectName}</p>
            </div>
            <div>
              <p className="text-black/60 text-xs">페이지 수</p>
              <p className="font-semibold">{quote.details.pages}개</p>
            </div>
          </div>
        </div>

        {/* 가격 상세 */}
        <div className="quote-section mb-6 p-4 bg-slate-50 rounded">
          <h2 className="text-lg font-bold mb-3 text-black">가격 상세</h2>
          <div className="space-y-2 text-sm mb-3">
            <div className="flex justify-between">
              <span className="text-black/70">기본 가격</span>
              <span className="font-semibold">₩{quote.basePrice.toLocaleString('ko-KR')}</span>
            </div>
            {quote.pageCost > 0 && (
              <div className="flex justify-between">
                <span className="text-black/70">추가 페이지</span>
                <span className="font-semibold">₩{quote.pageCost.toLocaleString('ko-KR')}</span>
              </div>
            )}
            {quote.addonsCost > 0 && (
              <>
                <div className="flex justify-between">
                  <span className="text-black/70">추가 기능</span>
                  <span className="font-semibold">₩{quote.addonsCost.toLocaleString('ko-KR')}</span>
                </div>
                {quote.details.addons.length > 0 && (
                  <div className="ml-4 space-y-1 text-xs text-black/60 border-l border-black/20 pl-3">
                    {quote.details.addons.map(addon => (
                      <div key={addon.name} className="flex justify-between">
                        <span>- {addon.name}</span>
                        <span>₩{addon.price.toLocaleString('ko-KR')}</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          <div className="pt-2 border-t-2 border-black/20 flex justify-between">
            <span className="font-bold">총액</span>
            <span className="font-bold text-xl text-blue-600">₩{quote.subtotal.toLocaleString('ko-KR')}</span>
          </div>
        </div>

        {/* 결제 조건 */}
        <div className="quote-section mb-6">
          <h2 className="text-lg font-bold mb-3 text-black">결제 조건 (3회)</h2>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span>계약금 (30%)</span>
              <span>₩{quote.deposit.toLocaleString('ko-KR')} - 계약 시 즉시</span>
            </div>
            <div className="flex justify-between">
              <span>중금 (40%)</span>
              <span>₩{quote.mid.toLocaleString('ko-KR')} - 개발 중반 검수시</span>
            </div>
            <div className="flex justify-between">
              <span>잔금 (30%)</span>
              <span>₩{quote.final.toLocaleString('ko-KR')} - 완성 및 배포시</span>
            </div>
          </div>
        </div>

        {/* 예상 기간 */}
        <div className="quote-section mb-8">
          <h2 className="text-lg font-bold mb-3 text-black">예상 기간</h2>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span>개발 기간</span>
              <span className="font-bold">{quote.devDuration}일</span>
            </div>
            <div className="flex justify-between">
              <span>총 소요 기간</span>
              <span className="font-bold">{quote.totalDuration}일 (약 {Math.ceil(quote.totalDuration / 7)}주)</span>
            </div>
          </div>
          <p className="text-xs text-black/60 mt-2">
            * 상담 → 제안 → 개발 → 검수 → 배포 포함
          </p>
        </div>

        {/* 하단 */}
        <div className="quote-section pt-6 border-t border-black/10 text-center text-xs text-black/60">
          <p className="mb-1">문의사항이 있으신가요?</p>
          <p className="font-semibold text-black text-sm">contact@ichae.kr</p>
        </div>
      </div>
    </>
  )
}
