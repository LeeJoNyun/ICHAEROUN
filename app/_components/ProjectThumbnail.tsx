'use client'

export function BrowThumbnail() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="browGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(217,119,6,0.2)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.2)" />
        </linearGradient>
      </defs>
      {/* Screen Frame */}
      <rect x="20" y="20" width="260" height="160" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Header */}
      <rect x="20" y="20" width="260" height="30" fill="rgba(217,119,6,0.3)" />
      <line x1="40" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Hero Image */}
      <rect x="20" y="50" width="260" height="80" fill="url(#browGradient)" />

      {/* Text Content */}
      <line x1="40" y1="140" x2="200" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <line x1="40" y1="150" x2="280" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="40" y1="156" x2="280" y2="156" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Button */}
      <rect x="40" y="165" width="80" height="8" fill="rgba(217,119,6,0.5)" stroke="rgba(217,119,6,0.8)" strokeWidth="1" />
    </svg>
  )
}

export function ModoThumbnail() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="modoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,116,139,0.3)" />
          <stop offset="100%" stopColor="rgba(71,85,105,0.3)" />
        </linearGradient>
      </defs>
      {/* Screen Frame */}
      <rect x="20" y="20" width="260" height="160" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Navigation */}
      <line x1="20" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="40" cy="32" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="60" cy="32" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="80" cy="32" r="4" fill="rgba(255,255,255,0.3)" />

      {/* Product Grid */}
      <rect x="30" y="55" width="50" height="60" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="90" y="55" width="50" height="60" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="150" y="55" width="50" height="60" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="210" y="55" width="50" height="60" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Price Tags */}
      <text x="40" y="130" fontSize="8" fill="rgba(255,255,255,0.5)">$299</text>
      <text x="100" y="130" fontSize="8" fill="rgba(255,255,255,0.5)">$349</text>
      <text x="160" y="130" fontSize="8" fill="rgba(255,255,255,0.5)">$399</text>
      <text x="220" y="130" fontSize="8" fill="rgba(255,255,255,0.5)">$449</text>
    </svg>
  )
}

export function CoreAdminThumbnail() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="coreAdminGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(79,70,229,0.2)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
        </linearGradient>
      </defs>
      {/* Screen Frame */}
      <rect x="20" y="20" width="260" height="160" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Sidebar */}
      <rect x="20" y="20" width="50" height="160" fill="rgba(79,70,229,0.15)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />

      {/* Menu Items */}
      <line x1="30" y1="40" x2="60" y2="40" stroke="rgba(79,70,229,0.5)" strokeWidth="1" />
      <line x1="30" y1="50" x2="60" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="30" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="30" y1="70" x2="60" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Main Content - Charts */}
      <rect x="80" y="30" width="70" height="50" fill="url(#coreAdminGradient)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />
      <line x1="85" y1="75" x2="90" y2="70" stroke="rgba(79,70,229,0.4)" strokeWidth="1" />
      <line x1="90" y1="70" x2="95" y2="65" stroke="rgba(79,70,229,0.4)" strokeWidth="1" />
      <line x1="95" y1="65" x2="100" y2="72" stroke="rgba(79,70,229,0.4)" strokeWidth="1" />

      <rect x="160" y="30" width="70" height="50" fill="url(#coreAdminGradient)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />

      {/* Stats */}
      <rect x="80" y="90" width="35" height="40" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <rect x="125" y="90" width="35" height="40" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <rect x="170" y="90" width="35" height="40" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <rect x="215" y="90" width="30" height="40" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
    </svg>
  )
}

export function BloomThumbnail() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="bloomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(190,24,93,0.3)" />
          <stop offset="100%" stopColor="rgba(236,72,153,0.3)" />
        </linearGradient>
      </defs>
      {/* Screen Frame */}
      <rect x="20" y="20" width="260" height="160" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Calendar Header */}
      <line x1="20" y1="50" x2="280" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Calendar Grid */}
      <rect x="30" y="60" width="30" height="30" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="70" y="60" width="30" height="30" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="110" y="60" width="30" height="30" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="150" y="60" width="30" height="30" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="190" y="60" width="30" height="30" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="230" y="60" width="30" height="30" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* More rows */}
      <rect x="30" y="100" width="30" height="30" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="70" y="100" width="30" height="30" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="110" y="100" width="30" height="30" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />

      {/* Booking Info */}
      <line x1="30" y1="145" x2="250" y2="145" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="30" y1="153" x2="250" y2="153" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  )
}

export function NovaTechThumbnail() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {/* Screen Frame */}
      <rect x="20" y="20" width="260" height="160" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Data Visualization */}
      <line x1="30" y1="140" x2="35" y2="100" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="35" y1="100" x2="45" y2="70" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="45" y1="70" x2="55" y2="85" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="55" y1="85" x2="65" y2="60" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="65" y1="60" x2="75" y2="90" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="75" y1="90" x2="85" y2="55" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="85" y1="55" x2="95" y2="80" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />

      {/* Grid Points */}
      <circle cx="30" cy="140" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="35" cy="100" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="45" cy="70" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="55" cy="85" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="65" cy="60" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="75" cy="90" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="85" cy="55" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="95" cy="80" r="2" fill="rgba(6,182,212,0.8)" />

      {/* Metrics */}
      <rect x="120" y="50" width="40" height="30" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="170" y="50" width="40" height="30" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="220" y="50" width="40" height="30" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />

      {/* Bottom Section */}
      <line x1="30" y1="160" x2="270" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  )
}
