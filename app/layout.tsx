import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import favicon from './favicon.ico'
import Image from "next/image";
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://miyanber.com' // 👈 本番のドメイン（決まっていれば）
      : 'http://localhost:3000' // 👈 ローカル開発環境
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
        url: "/ogp_image.png", // シェアされた時の画像
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
