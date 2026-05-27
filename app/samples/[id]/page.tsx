'use client'

import { SAMPLES, PROJECT_TYPES } from '@/app/quote/constants'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function SampleDetailPage() {
  const params = useParams()
  const sampleId = params.id as string

  const sample = SAMPLES.find(s => s.id === sampleId)

  if (!sample) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">샘플을 찾을 수 없습니다</h1>
          <Link href="/quote" className="text-blue-400 hover:text-blue-300">
            돌아가기
          </Link>
        </div>
      </main>
    )
  }

  const projectTypeName = PROJECT_TYPES[sample.projectType].name
  const relatedSamples = SAMPLES.filter(
    s => s.projectType === sample.projectType && s.id !== sample.id
  ).slice(0, 2)

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* 헤더 */}
        <div className="mb-12">
          <Link
            href="/quote"
            className="text-white/60 hover:text-white transition text-sm mb-6 inline-flex items-center gap-2"
          >
            ← 돌아가기
          </Link>
          <div className="mb-6">
            <p className="text-white/60 text-sm mb-2">{projectTypeName}</p>
            <h1 className="text-5xl font-bold text-white mb-4">{sample.name}</h1>
            <p className="text-white/70 text-lg">{sample.description}</p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="mb-12 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={sample.image}
            alt={sample.name}
            className="w-full h-auto"
          />
        </div>

        {/* 상세 정보 */}
        <div className="space-y-8 mb-12">
          {/* 설계 특징 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">🎨 디자인 특징</h3>
            <p className="text-white/70 text-sm leading-relaxed">{sample.designNotes}</p>
          </div>

          {/* 포함 페이지 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">📄 포함된 페이지</h3>
            <div className="flex flex-wrap gap-2">
              {sample.pages.map((page, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">
                  {page}
                </span>
              ))}
            </div>
          </div>

          {/* 주요 기능 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">✨ 주요 기능</h3>
            <ul className="grid grid-cols-2 gap-3">
              {sample.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* 기본 정보 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="text-white/60 text-sm mb-2">카테고리</p>
              <p className="text-white text-lg font-semibold">{sample.category}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="text-white/60 text-sm mb-2">프로젝트 타입</p>
              <p className="text-white text-lg font-semibold">{projectTypeName}</p>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="space-y-4 mb-16">
          <Link href={`/samples/${sample.id}/preview`}>
            <button className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition">
              미리보기
            </button>
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link href={`/quote?type=${sample.projectType}`}>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                이 스타일로 견적받기
              </button>
            </Link>
            <Link href="/quote">
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition">
                다른 샘플보기
              </button>
            </Link>
          </div>
        </div>

        {/* 관련 샘플 */}
        {relatedSamples.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">비슷한 샘플</h2>
            <div className="grid grid-cols-2 gap-6">
              {relatedSamples.map(relatedSample => (
                <Link key={relatedSample.id} href={`/samples/${relatedSample.id}`}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg border border-white/20 hover:border-white/40 transition">
                    <div className="relative aspect-video bg-white/5 overflow-hidden">
                      <img
                        src={relatedSample.image}
                        alt={relatedSample.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
                      <div className="absolute inset-0 flex items-end p-4">
                        <div>
                          <p className="text-white font-semibold text-sm">{relatedSample.name}</p>
                          <p className="text-white/60 text-xs mt-1">{relatedSample.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 group-hover:bg-white/10 transition">
                      <p className="text-white/70 text-xs line-clamp-2">{relatedSample.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
