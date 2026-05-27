'use client'

export default function CoreAdminPage() {
  const stats = [
    { label: 'Total Users', value: '12,450', change: '+2.5%' },
    { label: 'Active Sessions', value: '3,842', change: '+12.1%' },
    { label: 'Revenue', value: '$45,230', change: '+8.2%' },
    { label: 'Conversion Rate', value: '3.24%', change: '+0.4%' },
  ]

  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', spent: '$2,450' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'Active', spent: '$1,890' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', status: 'Inactive', spent: '$890' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 border-r border-slate-800 p-6">
        <div className="text-2xl font-black mb-12">CoreAdmin</div>
        <nav className="space-y-4">
          {['Dashboard', 'Users', 'Analytics', 'Payments', 'Settings'].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                item === 'Dashboard'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-slate-800'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black">Dashboard</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500"
            />
            <button className="bg-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700">
              Export
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
              <div className="text-3xl font-black mb-2">{stat.value}</div>
              <div className="text-green-400 text-sm">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="font-semibold mb-6">Revenue Trend</h3>
            <div className="flex items-end gap-2 h-40">
              {[40, 45, 52, 48, 55, 60, 58, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-indigo-600 rounded-t-lg"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="font-semibold mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {[
                { label: 'Organic', value: 45, color: 'bg-indigo-600' },
                { label: 'Direct', value: 30, color: 'bg-purple-600' },
                { label: 'Social', value: 15, color: 'bg-pink-600' },
                { label: 'Referral', value: 10, color: 'bg-blue-600' },
              ].map((source) => (
                <div key={source.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{source.label}</span>
                    <span>{source.value}%</span>
                  </div>
                  <div className="bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className={`h-full ${source.color}`} style={{ width: `${source.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="font-semibold mb-6">Recent Users</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 text-gray-400 font-medium text-sm">Name</th>
                <th className="text-left py-3 text-gray-400 font-medium text-sm">Email</th>
                <th className="text-left py-3 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 text-gray-400 font-medium text-sm">Spent</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition">
                  <td className="py-3">{user.name}</td>
                  <td className="py-3 text-gray-400">{user.email}</td>
                  <td className="py-3">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-900/30 text-green-400'
                        : 'bg-gray-900/30 text-gray-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 font-semibold">{user.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
