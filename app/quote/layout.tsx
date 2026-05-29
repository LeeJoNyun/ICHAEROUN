'use client'

import Link from 'next/link'
import { LenisWrapper } from '../_components/LenisWrapper'

export default function QuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* 메인으로 돌아가기 버튼 */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          돌아가기
        </Link>
      </div>

      <LenisWrapper>{children}</LenisWrapper>
    </>
  )
}
