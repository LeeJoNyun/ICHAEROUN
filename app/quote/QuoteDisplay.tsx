'use client'

import { QuoteResult } from './calculator'
import { getPreparationItems, PreparationItem } from './preparation'
import { ADDON_PRICING } from './constants'

interface QuoteDisplayProps {
  quote: QuoteResult
  addons: (keyof typeof ADDON_PRICING)[]
  onPrint: () => void
}

export function QuoteDisplay({ quote, addons, onPrint }: QuoteDisplayProps) {
  const prepItems = getPreparationItems(addons)

  return (
    <>
      <style>{`
        @media print {
          body {
            background: white;
            margin: 0;
            padding: 0;
          }
          .quote-container {
            max-width: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none;
            break-after: auto;
          }
          .quote-section {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .quote-section-lg {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .print-page-break {
            break-before: page;
            page-break-before: always;
          }
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
        <div className="quote-section text-center mb-12 pb-8 border-b border-black/10">
          <h1 className="text-4xl font-bold mb-2">웹사이트 견적서</h1>
          <p className="text-black/60">
            발급일: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="mt-4 space-y-1 text-sm text-black/70">
            <p>이채로운</p>
            <p>email: contact@ichae.kr</p>
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="quote-section mb-8">
          <h2 className="text-xl font-bold mb-4 text-black">프로젝트 정보</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-black/60">프로젝트명</p>
              <p className="font-semibold text-lg">{quote.projectName}</p>
            </div>
            <div>
              <p className="text-black/60">페이지 수</p>
              <p className="font-semibold text-lg">{quote.details.pages}개</p>
            </div>
          </div>
        </div>

        {/* 가격 상세 */}
        <div className="quote-section mb-8 p-6 bg-slate-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-black">가격 상세</h2>
          <div className="space-y-3 text-sm mb-4">
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
                  <div className="ml-4 space-y-2 text-xs text-black/60 border-l border-black/20 pl-4">
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
          <div className="pt-4 border-t-2 border-black/20 flex justify-between">
            <span className="font-bold text-lg">총액</span>
            <span className="font-bold text-2xl text-blue-600">₩{quote.subtotal.toLocaleString('ko-KR')}</span>
          </div>
        </div>

        {/* 결제 조건 */}
        <div className="quote-section mb-8">
          <h2 className="text-xl font-bold mb-4 text-black">결제 조건 (3회)</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded">
              <p className="text-sm text-black/70 mb-1">계약금 (30%)</p>
              <p className="font-bold text-lg">₩{quote.deposit.toLocaleString('ko-KR')}</p>
              <p className="text-xs text-black/60 mt-2">계약 시 즉시</p>
            </div>
            <div className="p-4 bg-amber-50 rounded">
              <p className="text-sm text-black/70 mb-1">중금 (40%)</p>
              <p className="font-bold text-lg">₩{quote.mid.toLocaleString('ko-KR')}</p>
              <p className="text-xs text-black/60 mt-2">개발 중반 검수시</p>
            </div>
            <div className="p-4 bg-green-50 rounded">
              <p className="text-sm text-black/70 mb-1">잔금 (30%)</p>
              <p className="font-bold text-lg">₩{quote.final.toLocaleString('ko-KR')}</p>
              <p className="text-xs text-black/60 mt-2">완성 및 배포시</p>
            </div>
          </div>
        </div>

        {/* 예상 기간 */}
        <div className="quote-section mb-8">
          <h2 className="text-xl font-bold mb-4 text-black">예상 기간</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-black/70 mb-1">개발 기간</p>
              <p className="font-bold text-2xl">{quote.devDuration}일</p>
            </div>
            <div>
              <p className="text-sm text-black/70 mb-1">총 소요 기간</p>
              <p className="font-bold text-2xl">{quote.totalDuration}일</p>
              <p className="text-xs text-black/60 mt-1">약 {Math.ceil(quote.totalDuration / 7)}주</p>
            </div>
          </div>
          <p className="text-xs text-black/60 mt-4">
            * 상담 → 제안 → 개발 → 검수 → 배포 포함
          </p>
        </div>

        {/* 준비 항목 */}
        <div className="quote-section-lg mb-8 p-6 bg-slate-50 rounded-lg print-page-break">
          <h2 className="text-xl font-bold mb-4 text-black">📋 당신이 준비해야 할 항목</h2>
          <div className="space-y-6">
            {prepItems.map((category, idx) => (
              <div key={idx}>
                <p className="font-semibold text-black mb-2">{category.category}</p>
                <ul className="space-y-1 ml-4">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-black/80 list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-black/60 mt-4">
            * 위 항목들을 미리 준비해주시면 프로젝트 일정을 단축할 수 있습니다.
          </p>
        </div>

        {/* 다음 단계 */}
        <div className="quote-section p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-lg font-bold text-black mb-3">다음 단계</h2>
          <ol className="space-y-2 text-sm text-black/80 list-decimal ml-5">
            <li>이 견적서를 검토하세요</li>
            <li>동의하시면 계약금(30%)을 입금해주세요</li>
            <li>입금 확인 후 프로젝트를 시작합니다</li>
            <li>주 1회 진행상황을 공유합니다</li>
          </ol>
        </div>

        {/* 하단 */}
        <div className="quote-section mt-12 pt-8 border-t border-black/10 text-center text-sm text-black/60">
          <p>문의사항이 있으신가요?</p>
          <p className="font-semibold text-black">contact@ichae.kr로 연락주세요</p>
        </div>
      </div>
    </>
  )
}
