"use client"

import { motion } from "framer-motion";
import { Section } from "./Section";
import CustomButton from "./Button";
import { fadeIn } from "@/libs/motion";

export function AboutSection() {
  return (
    <Section bg="bg-[#e3f0f1]">
      <motion.div
        {...fadeIn.up}
      >
        <h2 className="text-center">About Me</h2>
      </motion.div>
      <motion.div
        {...fadeIn.up}
      >
        <p className="text-center my-12">
          <strong>マルチスタック・クリエイター</strong>
        </p>
        <p className="text-center my-12 leading-8">
          「日常の不便をコードで解決する」をモットーに活動する学生エンジニアです。<br />
          Webアプリケーションの設計・開発から、Minecraft MODの制作まで、プラットフォームを問わず「動くもの」を形にしています。
        </p>
        <p className="text-center my-8">
          Skills: Python / Django / JavaScript / GitHub / Minecraft Modding
        </p>
      </motion.div>
      <motion.div
        {...fadeIn.up}
      >
        <div className="text-center">
          <CustomButton href='/about'>
            View Details
          </CustomButton>
        </div>
      </motion.div>
    </Section>
  )
}