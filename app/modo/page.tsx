'use client'

export default function MODOPage() {
  const products = [
    { id: 1, name: 'Luna Sofa', price: '₩2,890,000', category: 'Living', image: '🛋️' },
    { id: 2, name: 'Zen Dining Table', price: '₩1,590,000', category: 'Dining', image: '🪑' },
    { id: 3, name: 'Nordic Bed Frame', price: '₩1,290,000', category: 'Bedroom', image: '🛏️' },
    { id: 4, name: 'Minimal Shelving', price: '₩890,000', category: 'Storage', image: '📦' },
    { id: 5, name: 'Modern Cabinet', price: '₩1,490,000', category: 'Storage', image: '🗄️' },
    { id: 6, name: 'Leather Armchair', price: '₩1,890,000', category: 'Seating', image: '💺' },
  ]

  const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Storage', 'Seating']

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black">MODO</div>
          <div className="flex gap-8 items-center text-sm font-medium">
            <button>HOME</button>
            <button>COLLECTION</button>
            <button>ABOUT</button>
            <button>🛒 Cart (0)</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-8 text-center py-20">
          <h1 className="text-6xl font-black mb-6 text-slate-900">Premium Furniture Collection</h1>
          <p className="text-xl text-gray-600 mb-8">선별된 프리미엄 가구로 당신의 공간을 변화시키세요</p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-8 py-12 border-b border-gray-200">
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 font-medium text-sm rounded-full transition ${
                cat === 'All'
                  ? 'bg-slate-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-4 overflow-hidden group-hover:bg-gray-200 transition text-8xl">
                {product.image}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-slate-600 font-semibold">{product.price}</p>
              <button className="mt-4 w-full bg-slate-900 text-white py-2 rounded-lg font-medium text-sm opacity-0 group-hover:opacity-100 transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">ABOUT</h4>
            <p className="text-gray-300 text-sm">Premium furniture curated for modern living</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Contact</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">FOLLOW</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <p className="text-gray-300 text-sm">contact@modo.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          © 2026 MODO. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
