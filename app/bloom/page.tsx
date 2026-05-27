'use client'

export default function BloomPage() {
  const collections = [
    { id: 1, name: 'Romantic Rose', price: '₩65,000', image: '🌹', desc: '고급 장미 한 다발' },
    { id: 2, name: 'Spring Mix', price: '₩45,000', image: '🌸', desc: '봄의 향기 담은 조화' },
    { id: 3, name: 'Sunflower Dream', price: '₩55,000', image: '🌻', desc: '해바라기 정원' },
    { id: 4, name: 'White Wedding', price: '₩85,000', image: '🤍', desc: '웨딩 플라워' },
    { id: 5, name: 'Tropical Paradise', price: '₩75,000', image: '🦜', desc: '열대 꽃 조화' },
    { id: 6, name: 'Calm Lavender', price: '₩35,000', image: '💜', desc: '라벤더 향기' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-rose-600">🌸 Bloom</div>
          <div className="flex gap-8 items-center text-sm font-medium">
            <button>COLLECTIONS</button>
            <button>BOOKING</button>
            <button>ABOUT</button>
            <button className="bg-rose-600 text-white px-6 py-2 rounded-full">ORDER NOW</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <div className="text-8xl mb-6">🌹</div>
          <h1 className="text-6xl font-black mb-6 text-rose-900">Your Special Moment, Beautifully Bloomed</h1>
          <p className="text-xl text-gray-600 mb-8">신선한 꽃으로 당신의 특별한 순간을 더욱 아름답게</p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700">
            ORDER FLOWERS
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-3 gap-8 mb-16">
        {[
          { icon: '⚡', title: 'Same Day Delivery', desc: 'Today order, today delivery' },
          { icon: '🌿', title: 'Fresh Flowers', desc: '신선함을 보장하는 매일 입고' },
          { icon: '🎨', title: 'Custom Design', desc: '당신의 취향대로 맞춤 제작' },
        ].map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-black text-center mb-12 text-rose-900">Our Collections</h2>
        <div className="grid grid-cols-3 gap-8">
          {collections.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl h-96 flex items-center justify-center mb-4 overflow-hidden group-hover:shadow-xl transition text-7xl">
                {item.image}
              </div>
              <h3 className="text-lg font-semibold text-rose-900 mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-black text-rose-600">{item.price}</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 transition">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 py-16 mt-20">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl font-black mb-6">예약까지 간단해요</h2>
          <p className="text-lg mb-8 opacity-90">날짜 선택 → 꽃 선택 → 배송 → 행복</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
            START BOOKING
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-rose-400">BLOOM</h4>
            <p className="text-gray-400 text-sm">Every day is special with fresh flowers</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SERVICE</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Delivery</li>
              <li>Subscription</li>
              <li>Corporate</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ABOUT</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Our Story</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <p className="text-gray-400 text-sm">hello@bloom.co.kr</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © 2026 Bloom. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
