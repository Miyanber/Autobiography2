'use client'; // 先頭にあることを確認してください

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';
import { fadeIn } from '@/libs/motion';
import { Section } from '../Section';
import CustomButton from '../Button';

const MotionLink = motion.create(Link);

type BlogSectionProps = {
  blogPosts: BlogPost[]
}

export function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
    <Section bg="bg-[#e3f0f1]" px="px-4 sm:px-12">
      {/* 1. タイトルは単体でフワッと出す */}
      <motion.div {...fadeIn.up}>
        <h2 className="text-center">Blogs</h2>
      </motion.div>

      {/* 2. グリッド自体を motion.div にするのではなく、
             普通の div にして中のカード「それぞれ」を motion(Link) で回す */}
      <div className="mx-auto my-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {blogPosts.map((blogPost) => {
          return (
            <MotionLink
              key={blogPost.id}
              href={`/blog/${blogPost.id}`}
              // 初期フェードインはFramer Motionが担当（軽量なopacity & yのみ）
              {...fadeIn.up}
              // ホバーや影のアニメーションは、干渉を避けるためTailwind CSS（GPU加速）に任せる
              className="group p-4 flex max-w-44 flex-col items-center cursor-pointer hover:translate-x-[-0.2rem] hover:translate-y-[-0.2rem] hover:shadow-[0.3rem_0.3rem_0.4rem_#bebebe] transition duration-300"
            >
              <div className="relative h-36 w-36 overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={blogPost.eyecatch ? blogPost.eyecatch.url : '/main/img/NO_IMAGE.webp'}
                  alt="サムネイル"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-15" />
              </div>
              <div className="text-center w-full">
                <div className="leading-tight h-10 my-4 line-clamp-2">
                  {blogPost.title}
                </div>
                <div className="mt-3 text-[#5a5a5a]">
                  {new Date(blogPost.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </MotionLink>
          );
        })}
      </div>
      <motion.div
        {...fadeIn.up}
      >
        <div className="text-center">
          <CustomButton href="/blogs">
            View All Blogs
          </CustomButton>
        </div>
      </motion.div>
    </Section>
  );
}