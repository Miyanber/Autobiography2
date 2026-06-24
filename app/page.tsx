import Image from "next/image";

import drumsImg from './img/drums.webp';
import oceanImg from './img/oceanarrow.webp';
import trackImg from './img/trackandfield.webp';
import vscodeImg from './img/vscode_image.webp';

import works from '@/data/works.json';
import Link from "next/link";
import { getAllBlogPost } from "@/libs/microcms";

export default async function Home() {
  const blogPosts = await getAllBlogPost(4);
  const displayedWorks = works.filter((work) => work.show_on_top);

  return (
    <>
      <section className="relative w-full min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 left-1/2 top-1/2 w-[70%] h-[70%] max-h-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-[0_5rem_0_5rem] overflow-hidden">
          <div className="absolute left-0 top-0 w-[52%] h-[calc(47%-1rem)] overflow-hidden filter grayscale-[60%] contrast-[70%] z-[15]">
            <Image src={drumsImg} alt="ドラム" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 top-0 w-[calc(48%-1rem)] h-[53%] overflow-hidden rounded-[0_1.2em_0_0] filter grayscale-[60%] contrast-[70%] z-[30]">
            <Image src={oceanImg} alt="OceanArrow (Minecraft)" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 bottom-0 w-[52%] h-[calc(47%-1rem)] overflow-hidden filter grayscale-[60%] contrast-[70%] z-[25]">
            <Image src={vscodeImg} alt="コーディング" fill className="object-cover" priority />
          </div>
          <div className="absolute left-0 bottom-0 w-[calc(48%-1rem)] h-[53%] overflow-hidden rounded-[0_0_0_1.2em] filter grayscale-[60%] contrast-[70%] z-[20]">
            <Image src={trackImg} alt="陸上" fill className="object-cover" priority />
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[0_3rem_0_3rem] bg-white p-6 md:p-10 lg:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Miyanber</h1>
          </div>
        </div>
      </section>

      <section className="bg-[#e3f0f1] py-20 px-6 md:px-12 leading-[1.75rem]">
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
      </section>

      <section className="py-20 px-6 md:px-12">
        <h2 className="text-center">Works</h2>
        <div className="mx-auto mt-12 flex max-w-[1000px] flex-col items-center gap-24">
          {displayedWorks.map((work) => {
            const cardContent = (
              <>
                <div className="relative overflow-hidden rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 w-full md:w-[40%] aspect-[16/9]">
                  <Image
                    src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.webp'}
                    alt="サムネイル"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-extrabold text-[#1a1a1a] mb-4 font-[var(--title-font)]">
                    {work.title}
                  </div>
                  <div className="relative h-1 w-20 mb-6 bg-[linear-gradient(90deg,#007bff,#00d4ff)] overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full" />
                  </div>
                  <div className="text-[#444] leading-8">
                    {work.overview}
                  </div>
                </div>
              </>
            );

            return (
              <div
                key={work.id}
                className="group flex flex-col gap-6 md:flex-row md:items-center md:gap-16 even:md:flex-row-reverse w-full"
              >
                {work.link ? (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contents"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="contents">{cardContent}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-12 text-center">
          <Link href="/works" className="inline-flex items-center justify-center rounded border border-black px-8 py-3 text-black font-[var(--title-font)] transition hover:bg-black hover:text-white">
            View All
          </Link>
        </div>
      </section>

      <section className="bg-[#e3f0f1] py-20 px-6 md:px-12">
        <h2 className="text-center">Blogs</h2>
        <div className="mx-auto mt-12 grid max-w-[1000px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blogPost) => (
            <Link
              key={blogPost.id}
              href={`/blog/${blogPost.id}`}
              className="flex justify-center"
            >
              <div className="group flex w-full max-w-[12rem] flex-col items-center cursor-pointer transition duration-300 ease-in-out">
                <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105">
                  <Image
                    src={blogPost.eyecatch ? blogPost.eyecatch.url : '/main/img/NO_IMAGE.webp'}
                    alt="サムネイル"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-15" />
                </div>
                <div className="text-center w-full">
                  <div className="text-lg font-bold leading-tight" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <h2 className="text-center">Contact</h2>
        <p className="text-center">
          Email: miyanba2984h@gmail.com
        </p>
      </section>
    </>
  );
}
