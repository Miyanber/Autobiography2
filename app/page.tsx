import Image from "next/image";

import drumsImg from './img/drums.jpg';
import oceanImg from './img/oceanarrow.png';
import trackImg from './img/trackandfield.jpg'
import vscodeImg from './img/vscode_image.png'

import works from '@/data/works.json'
import Link from "next/link";
import { getAllBlogPost } from "@/libs/microcms";

export default async function Home() {
  const blogPosts = await getAllBlogPost(4);

  return (
    <div>
      <section className="index_container">
        <div className="header_container">
          <div className="h1_container">
              <h1>Miyanber</h1>
          </div>
          <Image className="img-1" src={drumsImg} alt="ドラム"/>
          <Image className="img-2" src={oceanImg} alt="OceanArrow (Minecraft)"/>
          <Image className="img-3" src={vscodeImg} alt="コーディング"/>
          <Image className="img-4" src={trackImg} alt="陸上" />
        </div>
      </section>
      <section className="content about">
        <h2>About Me</h2>
        <p>
            <strong>フルスタック・クリエイター ｜ Python, Java, JavaScript</strong>
        </p>
        <p>
            「日常の不便をコードで解決する」をモットーに活動する開発者です。<br />
            Webアプリケーションの設計・開発から、Minecraft MODの制作まで、プラットフォームを問わず「動くもの」を形にしています。
        </p>
        <p>
            Skills: Python / Django / JavaScript / GitHub / Minecraft Modding
        </p>
        <p>
            なお、春から大学生。<br />
            趣味は陸上・ドラム・システム開発。
        </p>
      </section>
      <section className="content">
        <h2>Works</h2>
        <div className="works">
          {works.map((work) => {
            const cardContent = (
              <>
                <div className="thumbnail">
                  <Image src={ work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.png' } fill alt="サムネイル" />
                </div>
                <div className="text">
                  <div className="title">{ work.title }</div>
                  <div className="border"></div>
                  <div className="overview">
                      { work.overview }
                  </div>
                </div>
              </>
            )
            if (work.link == null) {
              return (
                <div className="work" key={work.id}>
                  {cardContent}
                </div>
              )
            } else {
              return (
                <a key={work.id} href={ work.link } className="work" target="_blank" rel="noopener noreferrer">
                  {cardContent}
                </a>
              )
            }
          })}
        </div>
        <div className="link">
            <a href="">View All</a>
        </div>
      </section>
      <section className="content blog">
        <h2>Blog</h2>
        <div className="blogposts">
            {blogPosts.map((blogPost) => (
              <Link key={blogPost.id} href={`/blog/${blogPost.id}`} className="blogpost-wrapper">
                <div className="blogpost">
                  <div className="thumbnail">
                    { String(blogPost) }
                    {/* <Image src={ blogPost.thumbnail ? blogPost.thumbnail : '/main/img/NO_IMAGE.png' } alt="サムネイル"> */}
                  </div>
                  <div className="text">
                    <div className="title">{ blogPost.title }</div>
                    <div className="published_at">{ new Date(blogPost.publishedAt).toLocaleDateString() }</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
      <section className="content">
        <h2>Contact</h2>
        <p>
            Email: miyanba2984h@gmail.com
        </p>
      </section>
    </div>
  );
}
