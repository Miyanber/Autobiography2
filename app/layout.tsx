import type { Metadata } from "next";
import "./globals.css";
import favicon from './favicon.ico'
import Image from "next/image";
import Link from "next/link"

import { Hina_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google';

// フォントの設定（display: 'swap' も自動で最適化されます）
const hinaMincho = Hina_Mincho({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hina',
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-zen',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://miyanber.com' // 本番のドメイン（決まっていれば）
      : 'http://localhost:3000' // ローカル開発環境
  ),
  title: "Miyanber's Portfolio",
  description: "学生エンジニア Miyanber のポートフォリオサイトです。",
  openGraph: {
    title: "Miyanber's Portfolio",
    description: "学生エンジニア Miyanber のポートフォリオサイトです。",
    url: "https://miyanber.com",
    siteName: "Miyanber's Portfolio",
    images: [
      {
        url: "/ogp_image.webp", // シェアされた時の画像
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${hinaMincho.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <Link href="/">
            <Image 
              className="myr-icon" 
              src={favicon} 
              alt="アイコン"
            />
          </Link>
          <a href="" className="header-text">Miyanber.com</a>
        </header>
        {children}
        <footer>
          &copy; 2026 Miyanber | Powered by Next.js
        </footer>
      </body>
    </html>
  );
}
