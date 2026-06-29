import type { Metadata } from "next";
import "./globals.css";
import favicon from './favicon.ico';
import Image from "next/image";
import Link from "next/link";

import { Hina_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google';
import Navbar from "@/components/NavBar";

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
      ? 'https://miyanber.com'
      : 'http://localhost:3000'
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
        url: "/ogp_image.webp",
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
    <html lang="ja" className={`${hinaMincho.variable} ${zenKaku.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black font-(--font-body)">
        <header className="fixed z-50 flex items-center justify-between gap-4 px-8 py-4">
          <Navbar favicon={favicon} />
        </header>
        {children}
        <footer className="mt-auto border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          &copy; 2026 Miyanber | Powered by Next.js
        </footer>
      </body>
    </html>
  );
}
