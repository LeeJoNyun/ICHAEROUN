'use client'

export function BrowThumbnail() {
  return (
    <svg viewBox="0 0 300 240" className="w-full h-full">
      <defs>
        <linearGradient id="browGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(217,119,6,0.3)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.3)" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="280" height="220" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" rx="3" />
      <rect x="10" y="10" width="280" height="25" fill="rgba(255,255,255,0.05)" rx="3" />
      <circle cx="25" cy="22.5" r="3" fill="rgba(255,100,100,0.6)" />
      <circle cx="38" cy="22.5" r="3" fill="rgba(255,200,0,0.6)" />
      <circle cx="51" cy="22.5" r="3" fill="rgba(100,255,100,0.6)" />
      <rect x="65" y="16" width="220" height="13" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="2" />
      <line x1="70" y1="22.5" x2="275" y2="22.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <rect x="10" y="35" width="280" height="35" fill="rgba(217,119,6,0.25)" />
      <line x1="25" y1="55" x2="200" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <rect x="10" y="70" width="280" height="70" fill="url(#browGradient)" />
      <circle cx="70" cy="105" r="15" fill="rgba(255,255,255,0.1)" />
      <line x1="25" y1="150" x2="220" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <line x1="25" y1="160" x2="275" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="25" y1="167" x2="275" y2="167" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="25" y1="174" x2="220" y2="174" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="25" y="185" width="70" height="12" fill="rgba(217,119,6,0.5)" stroke="rgba(217,119,6,0.8)" strokeWidth="1" rx="2" />
      <line x1="30" y1="191" x2="90" y2="191" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
    </svg>
  )
}

export function ModoThumbnail() {
  return (
    <svg viewBox="0 0 300 240" className="w-full h-full">
      <defs>
        <linearGradient id="modoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,116,139,0.3)" />
          <stop offset="100%" stopColor="rgba(71,85,105,0.3)" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="280" height="220" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" rx="3" />
      <rect x="10" y="10" width="280" height="25" fill="rgba(255,255,255,0.05)" rx="3" />
      <circle cx="25" cy="22.5" r="3" fill="rgba(255,100,100,0.6)" />
      <circle cx="38" cy="22.5" r="3" fill="rgba(255,200,0,0.6)" />
      <circle cx="51" cy="22.5" r="3" fill="rgba(100,255,100,0.6)" />
      <rect x="65" y="16" width="220" height="13" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="2" />
      <line x1="70" y1="22.5" x2="275" y2="22.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="20" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="25" y="55" width="50" height="45" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <rect x="85" y="55" width="50" height="45" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <rect x="145" y="55" width="50" height="45" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <rect x="205" y="55" width="50" height="45" fill="url(#modoGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <text x="40" y="115" fontSize="7" fill="rgba(255,255,255,0.4)">$299</text>
      <text x="100" y="115" fontSize="7" fill="rgba(255,255,255,0.4)">$349</text>
      <text x="160" y="115" fontSize="7" fill="rgba(255,255,255,0.4)">$399</text>
      <text x="220" y="115" fontSize="7" fill="rgba(255,255,255,0.4)">$449</text>
      <line x1="25" y1="130" x2="255" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="25" y1="150" x2="255" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="25" y1="160" x2="255" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="25" y="175" width="60" height="10" fill="rgba(100,116,139,0.4)" stroke="rgba(100,116,139,0.6)" strokeWidth="1" rx="2" />
    </svg>
  )
}

export function CoreAdminThumbnail() {
  return (
    <svg viewBox="0 0 300 240" className="w-full h-full">
      <defs>
        <linearGradient id="coreAdminGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(79,70,229,0.2)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="280" height="220" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" rx="3" />
      <rect x="10" y="10" width="280" height="25" fill="rgba(255,255,255,0.05)" rx="3" />
      <circle cx="25" cy="22.5" r="3" fill="rgba(255,100,100,0.6)" />
      <circle cx="38" cy="22.5" r="3" fill="rgba(255,200,0,0.6)" />
      <circle cx="51" cy="22.5" r="3" fill="rgba(100,255,100,0.6)" />
      <rect x="65" y="16" width="220" height="13" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="2" />
      <rect x="10" y="35" width="50" height="195" fill="rgba(79,70,229,0.12)" stroke="rgba(79,70,229,0.25)" strokeWidth="1" />
      <line x1="20" y1="50" x2="50" y2="50" stroke="rgba(79,70,229,0.5)" strokeWidth="1" />
      <line x1="20" y1="60" x2="50" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="50" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <rect x="70" y="40" width="60" height="40" fill="url(#coreAdminGradient)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />
      <line x1="75" y1="75" x2="80" y2="70" stroke="rgba(79,70,229,0.4)" strokeWidth="1" />
      <line x1="80" y1="70" x2="85" y2="65" stroke="rgba(79,70,229,0.4)" strokeWidth="1" />
      <rect x="145" y="40" width="60" height="40" fill="url(#coreAdminGradient)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />
      <rect x="70" y="95" width="30" height="35" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <rect x="110" y="95" width="30" height="35" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <rect x="150" y="95" width="30" height="35" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <rect x="190" y="95" width="30" height="35" fill="rgba(79,70,229,0.1)" stroke="rgba(79,70,229,0.2)" strokeWidth="1" />
      <line x1="25" y1="150" x2="255" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="25" y1="175" x2="200" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  )
}

export function BloomThumbnail() {
  return (
    <svg viewBox="0 0 300 240" className="w-full h-full">
      <defs>
        <linearGradient id="bloomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(190,24,93,0.3)" />
          <stop offset="100%" stopColor="rgba(236,72,153,0.3)" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="280" height="220" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" rx="3" />
      <rect x="10" y="10" width="280" height="25" fill="rgba(255,255,255,0.05)" rx="3" />
      <circle cx="25" cy="22.5" r="3" fill="rgba(255,100,100,0.6)" />
      <circle cx="38" cy="22.5" r="3" fill="rgba(255,200,0,0.6)" />
      <circle cx="51" cy="22.5" r="3" fill="rgba(100,255,100,0.6)" />
      <rect x="65" y="16" width="220" height="13" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="2" />
      <line x1="20" y1="50" x2="280" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="25" y="60" width="25" height="25" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="60" y="60" width="25" height="25" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="95" y="60" width="25" height="25" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="130" y="60" width="25" height="25" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="165" y="60" width="25" height="25" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="200" y="60" width="25" height="25" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="235" y="60" width="25" height="25" fill="rgba(190,24,93,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="25" y="100" width="25" height="25" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="60" y="100" width="25" height="25" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <rect x="95" y="100" width="25" height="25" fill="url(#bloomGradient)" stroke="rgba(190,24,93,0.4)" strokeWidth="1" />
      <line x1="25" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="25" y1="150" x2="260" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="25" y1="175" x2="200" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  )
}

export function NovaTechThumbnail() {
  return (
    <svg viewBox="0 0 300 240" className="w-full h-full">
      <rect x="10" y="10" width="280" height="220" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" rx="3" />
      <rect x="10" y="10" width="280" height="25" fill="rgba(255,255,255,0.05)" rx="3" />
      <circle cx="25" cy="22.5" r="3" fill="rgba(255,100,100,0.6)" />
      <circle cx="38" cy="22.5" r="3" fill="rgba(255,200,0,0.6)" />
      <circle cx="51" cy="22.5" r="3" fill="rgba(100,255,100,0.6)" />
      <rect x="65" y="16" width="220" height="13" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="2" />
      <line x1="30" y1="160" x2="35" y2="120" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="35" y1="120" x2="45" y2="85" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="45" y1="85" x2="55" y2="100" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="55" y1="100" x2="65" y2="75" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="65" y1="75" x2="75" y2="105" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <line x1="75" y1="105" x2="85" y2="70" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
      <circle cx="30" cy="160" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="35" cy="120" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="45" cy="85" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="55" cy="100" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="65" cy="75" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="75" cy="105" r="2" fill="rgba(6,182,212,0.8)" />
      <circle cx="85" cy="70" r="2" fill="rgba(6,182,212,0.8)" />
      <rect x="120" y="50" width="35" height="25" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="170" y="50" width="35" height="25" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="220" y="50" width="35" height="25" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <line x1="25" y1="150" x2="260" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="25" y1="175" x2="200" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  )
}
