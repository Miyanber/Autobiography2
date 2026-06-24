import Image from "next/image";

import drumsImg from './img/drums.webp';
import oceanImg from './img/oceanarrow.webp';
import trackImg from './img/trackandfield.webp'
import vscodeImg from './img/vscode_image.webp'

import styles from './index.module.css'

import works from '@/data/works.json'
import Link from "next/link";
import { getAllBlogPost } from "@/libs/microcms";

export default async function Home() {
  const blogPosts = await getAllBlogPost(4);
  const displayedWorks = works.filter((work) => work.show_on_top)

  return (
    <>
      <section className={`${styles.index_container}`}>
        <div className={styles.header_container}>
          <div className={`${styles.h1_container} p-10`}>
            <h1>Miyanber</h1>
          </div>
          <Image className={styles['img-1']} src={drumsImg} alt="ドラム" />
          <Image className={styles['img-2']} src={oceanImg} alt="OceanArrow (Minecraft)" />
          <Image className={styles['img-3']} src={vscodeImg} alt="コーディング" />
          <Image className={styles['img-4']} src={trackImg} alt="陸上" />
        </div>
      </section>

      <section className={`content bg-[#e3f0f1] ${styles.about}`}>
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

      <section className="content">
        <h2 className="text-center">Works</h2>
        <div className={styles.works}>
          {displayedWorks.map((work) => {
            const cardContent = (
              <>
                <div className={styles.thumbnail}>
                  <Image 
                    src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.png'} 
                    width={160}
                    height={120} 
                    alt="サムネイル" 
                    className="object-cover"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.title}>{work.title}</div>
                  <div className={styles.border}></div>
                  <div className={styles.overview}>
                    {work.overview}
                  </div>
                </div>
              </>
            );

            if (work.link == null) {
              return (
                <div className={styles.work} key={work.id}>
                  {cardContent}
                </div>
              );
            } else {
              return (
                <a 
                  key={work.id} 
                  href={work.link} 
                  className={styles.work} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              );
            }
          })}
        </div>
        <div className={styles.link}>
          <Link href="/works">View All</Link>
        </div>
      </section>

      <section className={`content ${styles.blog} bg-[#e3f0f1]`}>
        <h2 className="text-center">Blog</h2>
        <div className={styles.blogposts}>
          {blogPosts.map((blogPost) => (
            <Link 
              key={blogPost.id} 
              href={`/blog/${blogPost.id}`} 
              className={styles['blogpost-wrapper']}
            >
              <div className={styles.blogpost}>
                <div className={styles.thumbnail}>
                  <Image 
                    src={blogPost.eyecatch ? blogPost.eyecatch.url : '/main/img/NO_IMAGE.png'} 
                    alt="サムネイル"
                    width={120}
                    height={120}
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.title}>{blogPost.title}</div>
                  <div className={styles.published_at}>
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

      <section className="content">
        <h2 className="text-center">Contact</h2>
        <p className="text-center">
          Email: miyanba2984h@gmail.com
        </p>
      </section>
    </>
  );
}
