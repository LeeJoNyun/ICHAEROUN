const PROJECTS = [
  {
    title: "포유브로우",
    description: "12년차 대표원장의 프라이빗 브로우샵 서비스 소개 사이트",
    category: "뷰티 & 서비스",
    href: "/forubrow",
    color: "from-amber-50 to-orange-50",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">포트폴리오</h1>
              <p className="mt-2 text-sm text-slate-600">
                프로젝트 포트폴리오 모음
              </p>
            </div>
            <div className="text-right text-sm text-slate-500">
              <p>JI LEE</p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:border-slate-400 hover:shadow-lg"
            >
              <div
                className={`h-40 bg-gradient-to-br ${project.color} transition-transform duration-300 group-hover:scale-105`}
              />
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.category}
                </div>
                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-slate-900">
                  보기
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Placeholder for more projects */}
        <div className="mt-12 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
          <p className="text-slate-600">
            더 많은 프로젝트가 곧 추가될 예정입니다.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-600">
          <p>© 2026 JI LEE. All projects are samples and demonstrations.</p>
        </div>
      </footer>
    </main>
  );
}
