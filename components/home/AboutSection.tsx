"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faUsers, faDrum } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../Section";
import CustomButton from "../Button";
import { fadeIn } from "@/libs/motion";
import myrIcon from "@/app/img/icon2.webp";

export function AboutSection() {
  return (
    <Section bg="bg-[#e3f0f1]">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* セクションタイトル */}
        <motion.div {...fadeIn.up}>
          <h2 className="text-center">About Me</h2>
        </motion.div>

        {/* プロフィール ヘッダー（アイコン・名前・肩書・所属） */}
        <motion.div {...fadeIn.up} className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md border-2 border-white mb-4 shrink-0 bg-white">
            <Image
              src={myrIcon}
              alt="Miyanber プロフィール画像"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-800 m-0 font-title tracking-wide text-center">
            Miyanber <span className="text-base md:text-lg font-normal text-zinc-500">(みやんば)</span>
          </h3>
          <p className="text-xs md:text-sm font-medium text-zinc-500 mt-1 mb-0 tracking-wider text-center">
            Student Engineer | Web &amp; Tools
          </p>
          <p className="text-xs text-zinc-400 mt-1 m-0 text-center">
            神戸大学 システム情報学部
          </p>
        </motion.div>

        {/* 自己紹介・モットー（app/about/page.tsxの要約） */}
        <motion.div {...fadeIn.up} className="text-center text-zinc-600 leading-relaxed md:leading-8 mb-10 space-y-3">
          <p className="m-0">
            神戸を拠点に活動している学生エンジニアです。
          </p>
          <p className="m-0">
            「日常の不便をコードで解決する」をモットーに、Webアプリケーションや身の回りを効率化するツールの設計・開発を行っています。
          </p>
          <p className="m-0">
            開発にとどまらず、技術コミュニティ（GDGoC）の運営や、軽音楽部でのドラム演奏など、興味を持ったことに幅広く取り組んでいます。
          </p>
        </motion.div>

        {/* 活動ハイライト（Aboutページの3大トピック概要） */}
        <motion.div {...fadeIn.up} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
          <div className="bg-white p-5 text-center shadow-xs border border-zinc-200/80 transition duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-xl text-zinc-700 mb-2">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h4 className="font-semibold text-zinc-800 text-sm md:text-base mb-1 font-title">Development</h4>
            <p className="text-xs text-zinc-500 m-0 leading-relaxed">
              Webアプリや日常を便利にするツールの設計・開発
            </p>
          </div>
          <div className="bg-white p-5 text-center shadow-xs border border-zinc-200/80 transition duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-xl text-zinc-700 mb-2">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h4 className="font-semibold text-zinc-800 text-sm md:text-base mb-1 font-title">Community</h4>
            <p className="text-xs text-zinc-500 m-0 leading-relaxed">
              GDGoC Kobe Univ. 等でのイベント企画・運営
            </p>
          </div>
          <div className="bg-white p-5 text-center shadow-xs border border-zinc-200/80 transition duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-xl text-zinc-700 mb-2">
              <FontAwesomeIcon icon={faDrum} />
            </div>
            <h4 className="font-semibold text-zinc-800 text-sm md:text-base mb-1 font-title">Music</h4>
            <p className="text-xs text-zinc-500 m-0 leading-relaxed">
              大学軽音団体でのドラム演奏・バンド活動
            </p>
          </div>
        </motion.div>

        {/* View Detailsボタン */}
        <motion.div {...fadeIn.up}>
          <div className="text-center">
            <CustomButton href='/about'>
              View Details
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}