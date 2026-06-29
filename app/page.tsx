import Image from "next/image";

import drumsImg from './img/drums.webp';
import oceanImg from './img/oceanarrow.webp';
import trackImg from './img/trackandfield.webp';
import vscodeImg from './img/vscode_image.webp';

import works from '@/data/works.json';
import Link from "next/link";
import { getAllBlogPost } from "@/libs/microcms";
import { Section } from "@/components/Section";

export default async function Home() {
  const blogPosts = await getAllBlogPost(4);
  const displayedWorks = works.filter((work) => work.show_on_top);

  return (
    <>
      <Section className="relative w-full min-h-svh overflow-hidden">
        <div className="absolute inset-0 left-1/2 top-1/2 w-[70%] h-[70%] max-h-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-[0_5rem_0_5rem] overflow-hidden">
          <div className="absolute left-0 top-0 w-[52%] h-[calc(47%-0.5rem)] md:h-[calc(47%-1rem)] md: overflow-hidden filter grayscale-60 contrast-70 z-15">
            <Image src={drumsImg} alt="ドラム" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 top-0 w-[calc(48%-0.5rem)] md:w-[calc(48%-1rem)] h-[53%] overflow-hidden rounded-[0_1.2em_0_0] filter grayscale-60 contrast-70 z-30">
            <Image src={oceanImg} alt="OceanArrow (Minecraft)" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 bottom-0 w-[52%] h-[calc(47%-0.5rem)] md:h-[calc(47%-1rem)] overflow-hidden filter grayscale-60 contrast-70 z-25">
            <Image src={vscodeImg} alt="コーディング" fill className="object-cover" priority />
          </div>
          <div className="absolute left-0 bottom-0 w-[calc(48%-0.5rem)] md:w-[calc(48%-1rem)] h-[53%] overflow-hidden rounded-[0_0_0_1.2em] filter grayscale-60 contrast-70 z-20">
            <Image src={trackImg} alt="陸上" fill className="object-cover" priority />
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[0_3rem_0_3rem] bg-white p-6 md:p-8 lg:p-12">
            <h1 className="text-4xl text-zinc-700 tracking-wider md:text-5xl lg:text-5xl m-0">Miyanber</h1>
          </div>
        </div>
      </Section>

      <Section bg="bg-[#e3f0f1]">
        <h2 className="text-center">About Me</h2>
        <p className="text-center my-12">
          <strong>フルスタック・クリエイター ｜ Python, Java, JavaScript</strong>
        </p>
        <p className="text-center my-12">
          「日常の不便をコードで解決する」をモットーに活動する学生エンジニアです。<br />
          Webアプリケーションの設計・開発から、Minecraft MODの制作まで、プラットフォームを問わず「動くもの」を形にしています。
        </p>
        <p className="text-center my-12">
          Skills: Python / Django / JavaScript / GitHub / Minecraft Modding
        </p>
        <p className="text-center my-12">
          陸上・ドラム・システム開発が趣味です。
        </p>
      </Section>

      <Section>
        <h2 className="text-center">Works</h2>
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
              <Tag
                key={work.id}
                className="group flex flex-col gap-6 md:flex-row md:items-center md:gap-16 md:justify-between even:md:flex-row-reverse w-full"
                {...linkProps}
              >
                {cardContent}
              </Tag>
            ) 
          })}
        </div>
        <div className="mx-auto mt-12 text-center">
          <Link href="/works" className="inline-flex items-center justify-center border border-black px-10 py-3 my-8 text-black font-title text-[1.1rem] transition duration-500 hover:bg-black hover:text-white">
            View All
          </Link>
        </div>
      </Section>

      <Section bg="bg-[#e3f0f1]" px="px-4 sm:px-12">
        <h2 className="text-center">Blogs</h2>
        <div className="mx-auto my-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {blogPosts.map((blogPost) => (
            <Link
              key={blogPost.id}
              href={`/blog/${blogPost.id}`}
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
            </Link>
          ))}
        </div>
      </Section>

      <section className="py-20 px-6 md:px-12">
        <h2 className="text-center">Contact</h2>
        <p className="text-center">
          Email: miyanba2984h@gmail.com
        </p>
      </section>
    </>
  );
}
