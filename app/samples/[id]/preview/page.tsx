'use client'

import React from 'react'
import { SAMPLES } from '@/app/quote/constants'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function SamplePreviewPage() {
  const params = useParams()
  const sampleId = params.id as string

  const sample = SAMPLES.find(s => s.id === sampleId)

  if (!sample) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">미리보기를 찾을 수 없습니다</h1>
          <Link href={`/samples/${sampleId}`} className="text-blue-600 hover:underline">
            돌아가기
          </Link>
        </div>
      </main>
    )
  }

  // 각 샘플별 미리보기 컴포넌트 렌더링
  const renderPreview = () => {
    switch (sample.id) {
      case 'landing-1':
        return <SaaSLandingPreview sample={sample} />
      case 'landing-2':
        return <EducationLandingPreview sample={sample} />
      case 'landing-3':
        return <FitnessSaaSPreview sample={sample} />
      case 'ecommerce-1':
        return <FashionEcommercePreview sample={sample} />
      case 'ecommerce-2':
        return <ElectronicsEcommercePreview sample={sample} />
      case 'ecommerce-3':
        return <CafeEcommercePreview sample={sample} />
      case 'portfolio-1':
        return <PhotographyPortfolioPreview sample={sample} />
      case 'portfolio-2':
        return <DesignerPortfolioPreview sample={sample} />
      case 'portfolio-3':
        return <DeveloperPortfolioPreview sample={sample} />
      default:
        return (
          <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <p className="text-slate-600">이 샘플의 미리보기는 준비 중입니다.</p>
          </div>
        )
    }
  }

  return (
    <div>
      {renderPreview()}
      {/* 하단 네비게이션 */}
      <div className="bg-black text-white py-8 px-4 text-center">
        <p className="mb-4 text-white/80">마음에 드시나요?</p>
        <Link href={`/samples/${sampleId}`}>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            더 자세히 보기
          </button>
        </Link>
      </div>
    </div>
  )
}

// SaaS 랜딩 페이지 미리보기
function SaaSLandingPreview({ sample }: any) {
  return (
    <div className="bg-white">
      {/* 네비게이션 */}
      <nav className="bg-white border-b border-slate-200 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">CloudSync</div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              기능
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              가격
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              고객사
            </a>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            시작하기
          </button>
        </div>
      </nav>

      {/* Hero 섹션 */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-6">클라우드 협업의 새로운 기준</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          팀 전체가 실시간으로 협업할 수 있는 통합 클라우드 플랫폼. 보안은 강화하고, 속도는 높이세요.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 mb-12">
          무료로 시작하기 →
        </button>
        <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg aspect-video flex items-center justify-center">
          <div className="text-slate-400">제품 스크린샷</div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="bg-slate-50 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">강력한 기능들</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: '실시간 협업', desc: '여러 사용자가 동시에 작업할 수 있습니다' },
              { title: '자동 백업', desc: '모든 변경사항이 자동으로 저장됩니다' },
              { title: '엔터프라이즈 보안', desc: '은행급 보안으로 데이터를 보호합니다' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 가격 섹션 */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">간단한 가격</h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            { name: 'Starter', price: '29', features: ['최대 5명', '5GB 저장소', '기본 지원'] },
            {
              name: 'Professional',
              price: '79',
              features: ['최대 50명', '500GB 저장소', '우선 지원'],
              highlight: true,
            },
            { name: 'Enterprise', price: '맞춤', features: ['무제한 사용자', '무제한 저장소', '전담 지원'] },
          ].map((plan, i) => (
            <div
              key={i}
              className={`border-2 rounded-lg p-8 ${
                plan.highlight ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200'
              }`}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                {plan.price !== '맞춤' && <span className="text-slate-600">/월</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                선택하기
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="bg-slate-900 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">고객들의 이야기</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: '김철수', company: 'TechCorp', text: '팀의 생산성이 40% 향상되었습니다.' },
              { name: '이영희', company: 'StartupXYZ', text: '최고의 협업 도구입니다. 강력 추천합니다!' },
              { name: '박지영', company: 'CreativeStudio', text: '보안이 뛰어나고 사용이 간단합니다.' },
            ].map((review, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg border border-white/20">
                <p className="text-white/90 mb-4">"{review.text}"</p>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-white/60 text-sm">{review.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">지금 시작하세요</h2>
        <p className="text-xl text-slate-600 mb-8">신용카드 없이 14일간 무료로 모든 기능을 이용해보세요.</p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700">
          무료 시작하기 →
        </button>
      </section>
    </div>
  )
}

// 패션 이커머스 미리보기
function FashionEcommercePreview({ sample }: any) {
  const [cart, setCart] = React.useState(0)

  return (
    <div className="bg-white">
      {/* 헤더 */}
      <header className="border-b border-slate-200 px-8 py-4 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FASHION STORE</div>
          <div className="flex gap-8">
            <select className="text-sm text-slate-600 border-0 focus:ring-0">
              <option>모든 카테고리</option>
              <option>상의</option>
              <option>하의</option>
              <option>신발</option>
            </select>
            <button className="text-slate-600 hover:text-slate-900">검색</button>
            <button className="relative">
              🛒
              {cart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 배너 */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">신상 컬렉션</h1>
        <p className="text-xl text-white/80 mb-8">이 시즌의 트렌디한 패션을 만나보세요</p>
        <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-white/90">
          지금 보기
        </button>
      </div>

      {/* 필터 및 상품 */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">추천 상품</h2>
          <select className="text-sm border border-slate-200 px-4 py-2 rounded">
            <option>인기순</option>
            <option>최신순</option>
            <option>낮은 가격순</option>
            <option>높은 가격순</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {[
            { name: '미니멀 화이트 셔츠', price: '45,000' },
            { name: '클래식 데님 팬츠', price: '68,000' },
            { name: '캐주얼 가디건', price: '52,000' },
            { name: '블랙 롱 코트', price: '95,000' },
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-slate-100 aspect-square rounded-lg mb-4 group-hover:bg-slate-200 transition flex items-center justify-center">
                <span className="text-slate-400 text-2xl">👔</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-slate-600 mb-3">₩{product.price}</p>
              <button
                onClick={() => setCart(cart + 1)}
                className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800 transition"
              >
                장바구니 추가
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 배송 정보 */}
      <section className="bg-slate-50 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { title: '빠른 배송', desc: '24시간 이내 배송' },
              { title: '무료 반품', desc: '30일 이내 반품 가능' },
              { title: '안전 결제', desc: '모든 결제 암호화' },
            ].map((info, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-600 text-sm">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// 사진작가 포트폴리오 미리보기
function PhotographyPortfolioPreview({ sample }: any) {
  return (
    <div className="bg-slate-950 text-white">
      {/* 헤더 */}
      <header className="border-b border-white/10 px-8 py-6 sticky top-0 bg-slate-950/95 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest">PHOTOGRAPHER</div>
          <nav className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white transition">
              포트폴리오
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              소개
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              문의
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-32 text-center">
        <h1 className="text-6xl font-light tracking-tight mb-4">순간을 포착하다</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          웨딩, 스튜디오, 이벤트 사진촬영 전문 포토그래퍼입니다
        </p>
      </section>

      {/* 포트폴리오 갤러리 */}
      <section className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider mb-12 text-center">최근 작품</h2>

          {/* 대형 이미지 */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-linear-to-br from-slate-700 to-slate-900 aspect-video rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden">
              <div className="text-white/40 text-4xl group-hover:scale-110 transition">📸</div>
            </div>
            <div className="bg-linear-to-br from-slate-800 to-slate-900 aspect-video rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden">
              <div className="text-white/40 text-4xl group-hover:scale-110 transition">📸</div>
            </div>
          </div>

          {/* 소형 이미지들 */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-linear-to-br from-slate-700 to-slate-900 aspect-square rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden"
              >
                <div className="text-white/40 text-3xl group-hover:scale-110 transition">📸</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시리즈 */}
      <section className="bg-slate-900 px-8 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider mb-12">작품 시리즈</h2>
          <div className="grid grid-cols-3 gap-8">
            {['웨딩', '스튜디오', '이벤트'].map((series, i) => (
              <div key={i} className="cursor-pointer group">
                <div className="bg-linear-to-br from-slate-700 to-slate-900 aspect-square rounded-lg mb-4 group-hover:from-slate-600 group-hover:to-slate-800 transition flex items-center justify-center">
                  <span className="text-white/40 text-4xl">📸</span>
                </div>
                <h3 className="text-lg font-light text-white/80 group-hover:text-white transition">
                  {series}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-light tracking-wider mb-6">촬영 의뢰</h2>
        <p className="text-white/60 mb-8">특별한 순간을 함께 만들어보세요</p>
        <button className="px-8 py-3 border border-white text-white rounded hover:bg-white/10 transition font-light">
          문의하기
        </button>
      </section>
    </div>
  )
}

// 온라인 교육 플랫폼 랜딩
function EducationLandingPreview({ sample }: any) {
  return (
    <div className="bg-white">
      <nav className="border-b border-slate-200 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-600">EduHub</div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-900">강좌</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">가격</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">리뷰</a>
          </div>
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            시작하기
          </button>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-6">당신의 꿈을 현실로</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          세계 최고의 강사진과 함께 배우고, 새로운 기술을 습득하세요. 모두를 위한 교육입니다.
        </p>
        <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 mb-12">
          무료 강좌 시작하기 →
        </button>
        <div className="bg-linear-to-br from-emerald-100 to-emerald-50 rounded-lg aspect-video"></div>
      </section>

      <section className="bg-slate-50 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">왜 EduHub인가?</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: '전문 강사', desc: '업계 전문가의 실무 강의' },
              { title: '유연한 학습', desc: '원할 때, 원하는 속도로 배우기' },
              { title: '증명서 획득', desc: '완료 후 공식 수료증 발급' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">인기 강좌</h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            { name: '웹개발 기초', price: '49,000' },
            { name: 'Python 완벽 가이드', price: '59,000' },
            { name: '디자인 마스터', price: '39,000' },
          ].map((course, i) => (
            <div key={i} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-linear-to-br from-emerald-200 to-emerald-100 h-40"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{course.name}</h3>
                <p className="text-emerald-600 font-bold mb-4">₩{course.price}</p>
                <button className="w-full py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// 피트니스 SaaS 랜딩
function FitnessSaaSPreview({ sample }: any) {
  return (
    <div className="bg-white">
      <nav className="border-b border-slate-200 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">FitFlow</div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-900">기능</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">가격</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">추천</a>
          </div>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            무료체험
          </button>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-6">스마트한 운동, 스마트한 관리</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          AI 기반 운동 추적, 맞춤형 운동 계획, 커뮤니티와 함께 목표를 달성하세요.
        </p>
        <button className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 mb-12">
          30일 무료 시작 →
        </button>
        <div className="bg-linear-to-br from-red-100 to-red-50 rounded-lg aspect-video"></div>
      </section>

      <section className="bg-slate-900 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">운동을 더 똑똑하게</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'AI 코치', desc: '개인맞춤형 운동 계획' },
              { title: '진행 추적', desc: '모든 활동 자동 기록' },
              { title: '커뮤니티', desc: '함께 성장하는 동료들' },
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-lg border border-white/20">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// 전자제품 이커머스
function ElectronicsEcommercePreview({ sample }: any) {
  const [cart, setCart] = React.useState(0)

  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 px-8 py-4 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TechStore</div>
          <div className="flex gap-8">
            <input type="text" placeholder="검색..." className="px-4 py-2 border border-slate-300 rounded-lg text-sm" />
            <button className="relative">
              🛒
              {cart > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="bg-linear-to-r from-indigo-600 to-blue-600 text-white px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">최신 기술, 최고의 가격</h1>
        <p className="text-xl text-white/80 mb-8">노트북, 스마트폰, 액세서리 한 곳에서</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">추천 상품</h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            { name: '울트라북 13인치', price: '1,200,000' },
            { name: '무선 이어폰 Pro', price: '299,000' },
            { name: '스마트 워치', price: '350,000' },
            { name: '포터블 충전기', price: '79,000' },
          ].map((product, i) => (
            <div key={i} className="group">
              <div className="bg-indigo-100 aspect-square rounded-lg mb-4 flex items-center justify-center group-hover:bg-indigo-200 transition">
                <span className="text-4xl">💻</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-indigo-600 font-bold mb-3">₩{product.price}</p>
              <button
                onClick={() => setCart(cart + 1)}
                className="w-full py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                추가하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 카페 이커머스
function CafeEcommercePreview({ sample }: any) {
  const [cart, setCart] = React.useState(0)

  return (
    <div className="bg-amber-50">
      <header className="border-b border-amber-200 px-8 py-4 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-700">☕ BrewCafe</div>
          <div className="flex gap-8">
            <select className="text-sm border-0 focus:ring-0">
              <option>모든 상품</option>
              <option>원두</option>
              <option>기구</option>
              <option>간식</option>
            </select>
            <button className="relative">
              🛒
              {cart > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="bg-linear-to-r from-amber-700 to-amber-600 text-white px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">프리미엄 커피 경험</h1>
        <p className="text-xl text-white/80 mb-8">세계 최고의 원두를 당신의 집으로</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-amber-900 mb-8">우리의 추천</h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            { name: '에스프레소 블렌드 500g', price: '12,000' },
            { name: '싱글 오리진 아프리카', price: '16,000' },
            { name: '프렌치 프레스', price: '35,000' },
            { name: '수제 초콜릿', price: '8,000' },
          ].map((product, i) => (
            <div key={i} className="group">
              <div className="bg-linear-to-br from-amber-200 to-amber-100 aspect-square rounded-lg mb-4 flex items-center justify-center group-hover:from-amber-300 transition">
                <span className="text-4xl">☕</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-amber-700 font-bold mb-3">₩{product.price}</p>
              <button
                onClick={() => setCart(cart + 1)}
                className="w-full py-2 bg-amber-700 text-white rounded-lg text-sm hover:bg-amber-800 transition"
              >
                주문하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 디자이너 포트폴리오
function DesignerPortfolioPreview({ sample }: any) {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 px-8 py-6 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">STUDIO DESIGN</div>
          <nav className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-900">작업</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">소개</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">문의</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">창의적인 디자인 솔루션</h1>
          <p className="text-xl text-slate-600">브랜드, UI/UX, 그래픽 디자인</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-20">
          {[1, 2].map((i) => (
            <div key={i} className="bg-linear-to-br from-blue-100 to-purple-100 aspect-video rounded-lg hover:shadow-2xl transition"></div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-linear-to-br from-pink-100 to-yellow-100 aspect-square rounded-lg hover:shadow-lg transition"></div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">프로젝트 시작하기</h2>
          <p className="text-white/80 mb-8">당신의 아이디어를 현실로 만들어보세요</p>
          <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition">
            문의하기
          </button>
        </div>
      </section>
    </div>
  )
}

// 개발자 포트폴리오
function DeveloperPortfolioPreview({ sample }: any) {
  return (
    <div className="bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-8 py-6 sticky top-0 bg-slate-950/95 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-mono font-bold text-cyan-400">{'<dev />'}</div>
          <nav className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">/projects</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">/about</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">/contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-32">
        <div className="mb-20">
          <h1 className="text-6xl font-bold font-mono mb-6">Full Stack Developer</h1>
          <p className="text-xl text-slate-400 mb-8">React, Node.js, TypeScript를 다루는 개발자</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition">
              프로젝트 보기
            </button>
            <button className="px-6 py-3 border border-slate-600 text-slate-400 rounded-lg hover:border-slate-400 transition">
              이력서
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-cyan-400 mb-12">주요 프로젝트</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { name: 'E-commerce Platform', tech: 'React, Node.js, MongoDB' },
              { name: 'SaaS Dashboard', tech: 'Next.js, TypeScript, PostgreSQL' },
            ].map((project, i) => (
              <div key={i} className="border border-slate-800 rounded-lg p-8 hover:border-cyan-400 transition">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">{project.name}</h3>
                <p className="text-slate-400 mb-4">{project.tech}</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300">자세히 보기→</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-8 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">협업 제안</h2>
          <p className="text-slate-400 mb-8">새로운 프로젝트에 참여하고 싶으신가요?</p>
          <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
            연락하기
          </button>
        </div>
      </section>
    </div>
  )
}
