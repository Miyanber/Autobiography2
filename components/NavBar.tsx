"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type NavProps = {
  favicon: StaticImageData;
}

export default function Navbar({ favicon }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "About", href: "/about" }, // スクロールさせる場合はid、別ページなら/about
    { label: "Works", href: "/works" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-100 w-full bg-white/80 backdrop-blur-md px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* ロゴ・サイト名 */}
        <Link href="/" className="inline-flex items-start gap-5 z-40">
          <div className="relative h-12 w-12 overflow-hidden bg-slate-100">
            <Image src={favicon} alt="アイコン" fill className="object-contain" />
          </div>
          <span className="text-base font-semibold text-slate-600 hover:text-slate-900">Miyanber.com</span>
        </Link>

        {/* PC用メニュー (画面右上) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-600 hover:text-black transition-colors font-title tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* スマホ用ハンバーガーボタン */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-zinc-800 focus:outline-none z-50"
          aria-label="メニューを開く"
          type="button"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>

        {/* スマホ用ドロワーメニュー */}
        <div
          className={`fixed top-0 left-0 w-screen h-svh bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden z-30 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* 閉じるボタン（ハンバーガーボタンと被る位置に配置、または上部に余白を作る） */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-zinc-700 hover:text-black transition-colors font-title"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}