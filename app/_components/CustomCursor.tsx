'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const posX = useRef(0)
  const posY = useRef(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      posX.current += (mouseX.current - posX.current) * 0.2
      posY.current += (mouseY.current - posY.current) * 0.2

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    const raf = requestAnimationFrame(animate)

    // 호버 효과
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.tagName === 'A' || target?.tagName === 'BUTTON' || target?.closest('[data-cursor]')) {
        if (cursorRef.current) {
          cursorRef.current.classList.add('active')
        }
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.tagName === 'A' || target?.tagName === 'BUTTON' || target?.closest('[data-cursor]')) {
        if (cursorRef.current) {
          cursorRef.current.classList.remove('active')
        }
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      style={{
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
      }}
    />
  )
}
