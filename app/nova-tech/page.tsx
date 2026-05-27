'use client'

export default function NovaTechPage() {
  const features = [
    { icon: '🤖', title: 'AI-Powered', desc: '머신러닝 기반 자동화' },
    { icon: '⚡', title: 'Lightning Fast', desc: '밀리초 단위 응답속도' },
    { icon: '🔒', title: 'Enterprise Security', desc: '은행급 보안 인프라' },
    { icon: '📊', title: 'Real-time Analytics', desc: '실시간 데이터 분석' },
    { icon: '🔗', title: 'API-First', desc: '모든 것이 API로 통합' },
    { icon: '♾️', title: 'Unlimited Scale', desc: '무한 확장 가능' },
  ]

  const team = [
    { name: 'Dr. Sarah Chen', role: 'CEO & Founder', avatar: '👨‍💼' },
    { name: 'James Wilson', role: 'CTO', avatar: '👨‍💻' },
    { name: 'Maria Garcia', role: 'VP Product', avatar: '👩‍💼' },
    { name: 'Alex Kumar', role: 'Head of AI', avatar: '🧠' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-blue-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cyan-950/30 backdrop-blur z-50 border-b border-cyan-800/50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black">NovaTech</div>
          <div className="flex gap-8 items-center text-sm font-medium">
            <button>PRODUCT</button>
            <button>FEATURES</button>
            <button>TEAM</button>
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600">
              GET STARTED
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <div className="inline-flex items-center gap-2 bg-cyan-900/40 border border-cyan-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400">✨</span>
            <span className="text-sm">The Future of Software is Here</span>
          </div>
          <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI Technology
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            차세대 AI 기술로 당신의 비즈니스를 혁신하세요. 머신러닝, 자동화, 실시간 분석이 모두 하나로.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-cyan-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400">
              Start Free Trial
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-500/10">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-6 mb-20">
        {[
          { number: '10K+', label: 'Active Users' },
          { number: '99.99%', label: 'Uptime' },
          { number: '< 50ms', label: 'Latency' },
          { number: '$50M+', label: 'Processed' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-700/50 rounded-lg p-8 text-center">
            <div className="text-4xl font-black text-cyan-400 mb-2">{stat.number}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16">Powerful Features</h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/30 rounded-lg p-8 hover:border-cyan-500/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-xl p-16 text-center">
          <h2 className="text-4xl font-black mb-6">Experience the Power</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            몇 줄의 코드로 엔터프라이즈급 AI 기능을 구현하세요. 복잡한 것을 간단하게.
          </p>
          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-6 text-left font-mono text-sm overflow-x-auto mb-6">
            <pre className="text-cyan-400">
{`const nova = new NovaAI({
  apiKey: 'YOUR_API_KEY'
});

const result = await nova.analyze({
  data: dataset,
  model: 'advanced-v2'
});

console.log(result.predictions);`}
            </pre>
          </div>
          <button className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-cyan-400">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/30 rounded-lg p-8 text-center hover:border-cyan-500/50 transition"
            >
              <div className="text-7xl mb-4">{member.avatar}</div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-cyan-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-95">오늘 바로 시작하고 무료로 30일을 이용해보세요</p>
          <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">NovaTech</h4>
            <p className="text-gray-500 text-sm">Next-generation AI for enterprise</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">PRODUCT</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <p className="text-gray-500 text-sm">hello@novatech.ai</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-gray-600 text-sm">
          © 2026 NovaTech. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
