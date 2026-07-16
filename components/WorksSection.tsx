"use client"

import Image from "next/image";
import { Section } from "./Section";
import { Work } from "@/data/works";
import CustomButton from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

type WorksSectionProps = {
  displayedWorks: Work[];
};

export function WorksSection({ displayedWorks }: WorksSectionProps) {
  return (
    <Section>
      <motion.div
        {...fadeIn.up}
      >
        <h2 className="text-center">Works</h2>
      </motion.div>
      <div className="mx-auto my-12 flex flex-col items-center gap-24">
        {displayedWorks.map((work) => {
          const cardContent = (
            <>
              <div className="relative overflow-hidden rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 w-full md:w-[47%] aspect-video">
                <Image
                  src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.webp'}
                  alt="サムネイル"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="group-even:flex group-even:flex-col items-end md:w-[47%]">
                <div className="text-[1.4rem] text-[#1a1a1a] mb-4 font-title font-semibold">
                  {work.title}
                </div>
                <div className="
                    relative w-20 h-1 mb-6 overflow-hidden
                    bg-linear-to-r from-[#007bff] to-[#00d4ff]
                    after:content-[''] after:absolute after:top-0 after:block after:w-0 after:h-full after:bg-white
                    group-odd:group-hover:after:animate-slide
                    group-even:group-hover:after:animate-slide-reverse
                  " />
                <div className="text-[#444] leading-8">
                  {work.overview}
                </div>
              </div>
            </>
          );

          const Tag = work.link ? "a" : "div";
          const linkProps = work.link
            ? { href: work.link, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <motion.div
              key={work.id}
              {...fadeIn.up}
            >
              <Tag
                className="group flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-16 sm:justify-between even:sm:flex-row-reverse w-full"
                {...linkProps}
              >
                {cardContent}
              </Tag>
            </motion.div>
          )
        })}
      </div>
      <div className="text-center">
        <CustomButton href="/works">
          View All
        </CustomButton>
      </div>
    </Section>
  )
}