import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포유브로우 · For U Brow",
  description:
    "노원구 하계역 1번 출구. 12년차 대표원장 1:1 예약제 브로우 왁싱 · 속눈썹 펌 · 페이스 전문 토탈 뷰티샵.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
