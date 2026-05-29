import { QuoteForm } from './QuoteForm'

export const metadata = {
  title: '견적서 | 이채로운',
  description: '당신의 웹사이트 견적을 즉시 계산해보세요',
}

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* 헤더 */}
        <div className="text-center mb-16 print:hidden">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            웹사이트 견적 계산기
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            몇 가지 질문에 답하면 당신의 프로젝트 견적을 즉시 확인할 수 있습니다.
          </p>
        </div>

        {/* 폼 */}
        <QuoteForm />

        {/* 하단 안내 */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center text-white/60 text-sm print:hidden">
          <p>견적이 마음에 드시나요? 계약금 30%만 입금하면 바로 시작합니다.</p>
          <p className="mt-2">
            질문이 있으신가요?{' '}
            <a href="mailto:contact@ichae.kr" className="text-white hover:underline">
              contact@ichae.kr
            </a>
            로 연락주세요.
          </p>
        </div>
      </div>
    </main>
  )
}
