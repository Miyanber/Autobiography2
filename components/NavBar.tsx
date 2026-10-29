"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";

type NavProps = {
  favicon: StaticImageData;
};

type NavItem = {
  label: string;
  href: string;
  id: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Works", href: "/#works", id: "works" },
  { label: "Blogs", href: "/#blogs", id: "blogs" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar({ favicon }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // スクロール位置または現在のパスに応じてアクティブな項目を更新
  useEffect(() => {
    // 下層ページにいる場合
    if (pathname !== "/") {
      if (pathname.startsWith("/about")) {
        setActiveSection("about");
      } else if (pathname.startsWith("/works")) {
        setActiveSection("works");
      } else if (pathname.startsWith("/blog")) {
        setActiveSection("blogs");
      } else {
        setActiveSection("");
      }
      return;
    }

    // トップページにいる場合のスクロールスパイ
    const sectionIds = ["home", "about", "works", "blogs", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // ページ最下部付近にいる場合はContactをアクティブに
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // ページ最上部付近ならHome
      if (scrollPosition < 150) {
        setActiveSection("home");
        return;
      }

      // 各セクションの画面内位置をチェック
      const offset = 180;
      let currentSection = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 同一ページ内のアンカークリック時のスムーズスクロール処理
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setIsOpen(false);

    if (pathname === "/") {
      const targetElement = document.getElementById(item.id);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", item.href);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-100 w-full bg-white/80 backdrop-blur-md px-6 py-4 md:px-12 border-b border-zinc-100/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* ロゴ・サイト名 */}
        <Link
          href="/#home"
          onClick={(e) =>
            handleNavClick(e, { label: "Home", href: "/#home", id: "home" })
          }
          className="inline-flex items-center gap-3 z-40 group"
        >
          <div className="relative h-10 w-10 overflow-hidden bg-slate-100 rounded-md">
            <Image src={favicon} alt="アイコン" fill className="object-contain" />
          </div>
          <span className="text-base font-semibold text-zinc-700 group-hover:text-black transition-colors font-title tracking-wide">
            Miyanber.com
          </span>
        </Link>

        {/* PC用メニュー (画面右上) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative py-1 text-sm lg:text-base font-title tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-zinc-950 font-bold"
                    : "text-zinc-500 hover:text-zinc-900 font-medium"
                }`}
              >
                {item.label}
                {/* アクティブ時の下線装飾インジケーター */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-zinc-900 transition-all duration-300 rounded-full ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* スマホ用ハンバーガーボタン */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-zinc-800 focus:outline-none z-50 p-2"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          type="button"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* スマホ用ドロワーメニュー */}
        <div
          className={`fixed top-0 left-0 w-screen h-svh bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden z-30 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-4 py-2 text-2xl font-title transition-all duration-200 ${
                  isActive
                    ? "text-zinc-950 font-bold border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
