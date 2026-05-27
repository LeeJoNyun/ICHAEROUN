'use client'

import Link from 'next/link'

const WORKS = [
  {
    id: 1,
    number: '01',
    title: '포유브로우',
    category: '뷰티 & 서비스',
    description: '프라이빗 브로우샵 서비스',
    color: 'from-amber-900/40 to-orange-900/40',
    href: '/forubrow',
    screenshot: '/screenshots/1-forubrow.png',
  },
  {
    id: 2,
    number: '02',
    title: 'MODO',
    category: '이커머스 · 쇼핑몰',
    description: '프리미엄 가구 쇼핑몰',
    color: 'from-slate-800/40 to-gray-900/40',
    href: '/modo',
    screenshot: '/screenshots/2-modo.png',
  },
  {
    id: 3,
    number: '03',
    title: 'CoreAdmin',
    category: 'SaaS · 관리시스템',
    description: 'SaaS 관리자 대시보드',
    color: 'from-indigo-900/40 to-purple-900/40',
    href: '/core-admin',
    screenshot: '/screenshots/3-core-admin.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Bloom',
    category: '라이프스타일 · 예약',
    description: '꽃배달 예약 플랫폼',
    color: 'from-rose-900/40 to-pink-900/40',
    href: '/bloom',
    screenshot: '/screenshots/4-bloom.png',
  },
  {
    id: 5,
    number: '05',
    title: 'ICHAE',
    category: 'IT · 스타트업',
    description: '이채테크 회사 소개 페이지',
    color: 'from-cyan-900/40 to-blue-900/40',
    href: '/ichae',
    screenshot: '/screenshots/5-nova-tech.png',
  },
]

export function ProjectsSection() {

  return (
    <section className="relative w-full bg-black py-20">
      <div className="w-full px-8 relative z-10">
        <div className="flex justify-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">OUR WORKS</h2>
        </div>

        {/* Grid Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WORKS.map((work) => (
                <Link
                  key={work.id}
                  href={work.href}
                  className="relative h-96 overflow-hidden rounded-lg group cursor-pointer"
                  style={{
                    backgroundImage: `url(${work.screenshot})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Dark Overlay with Gradient */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/50 transition-all duration-300 z-0" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 z-10 overflow-hidden">
                    {/* Top Section */}
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-widest font-light">
                        {work.category}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-3xl font-black text-white mb-1">{work.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{work.description}</p>
                        </div>
                        <div className="text-white/30 text-6xl font-black group-hover:text-white/50 transition-colors shrink-0">
                          {work.number}
                        </div>
                      </div>

                      {/* Link */}
                      {work.href && (
                        <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                          View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
