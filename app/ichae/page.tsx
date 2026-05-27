'use client'

export default function IchaePage() {
  const features = [
    { icon: '🎨', title: 'Design Excellence', desc: '세련된 디자인 시스템' },
    { icon: '⚡', title: 'Lightning Fast', desc: '밀리초 단위 응답속도' },
    { icon: '🔒', title: 'Enterprise Security', desc: '은행급 보안 인프라' },
    { icon: '📊', title: 'Real-time Analytics', desc: '실시간 성능 분석' },
    { icon: '🔗', title: 'API-First', desc: '모든 것이 API로 통합' },
    { icon: '♾️', title: 'Unlimited Scale', desc: '무한 확장 가능' },
  ]

  const team = [
    { name: 'JI LEE', role: 'CEO & Founder', avatar: '👨‍💼' },
    { name: 'Designer Team', role: 'Creative Lead', avatar: '🎨' },
    { name: 'Dev Team', role: 'Engineering', avatar: '👨‍💻' },
    { name: 'PM Team', role: 'Product Strategy', avatar: '🎯' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/30 backdrop-blur z-50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black">ICHAE</div>
          <div className="flex gap-8 items-center text-sm font-medium">
            <button>PORTFOLIO</button>
            <button>SERVICES</button>
            <button>TEAM</button>
            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
              LET'S TALK
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-2 mb-6">
            <span className="text-white">✨</span>
            <span className="text-sm">Digital Excellence</span>
          </div>
          <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            We Build Digital Experiences
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            세련된 디자인과 강력한 기술로 당신의 비즈니스를 변화시킵니다. 우리는 단순히 웹사이트를 만들지 않습니다. 경험을 만듭니다.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200">
              프로젝트 시작하기
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10">
              포트폴리오 보기
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-6 mb-20">
        {[
          { number: '50+', label: 'Projects Completed' },
          { number: '99.9%', label: 'Client Satisfaction' },
          { number: '10+', label: 'Team Members' },
          { number: '5Y+', label: 'Industry Experience' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16">우리의 강점</h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/30 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:border-white/30 transition"
            >
              <div className="text-7xl mb-4">{member.avatar}</div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-6">프로젝트를 시작할 준비가 되셨나요?</h2>
          <p className="text-lg mb-8 text-gray-700">당신의 아이디어를 현실로 만들어드립니다.</p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900">
            지금 문의하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">ICHAE</h4>
            <p className="text-gray-500 text-sm">Digital experiences that convert</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SERVICES</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Web Design</li>
              <li>Development</li>
              <li>Strategy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ABOUT</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Our Story</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <p className="text-gray-500 text-sm">contact@ichae.kr</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          © 2026 ICHAE. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
