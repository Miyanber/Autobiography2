import { getBlogPost } from "@/libs/microcms";

import styles from "./blog-detail.module.css"
import 'github-markdown-css/github-markdown-light.css';
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { extractExcerpt } from "@/utils/text";

type Props = {
  params: Promise<{
    id: string
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blogPost = await getBlogPost(id); 
  if (blogPost == null) {
    notFound()
  }

  const description = extractExcerpt(blogPost.content)

  const title = `Blog - ${blogPost.title}`

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: blogPost.eyecatch.url, // シェアされた時の画像
          width: blogPost.eyecatch.width,
          height: blogPost.eyecatch.height,
        },
      ],
    },
  };
}

export default async function BlogRouterPage({ params }: Props) {
  const { id } = await params;
  
  const blogPost = await getBlogPost(id);
  if (blogPost == null) {
    return notFound()
  }

  const published_at = new Date(blogPost.publishedAt)

  return (
    <>
      <section className={styles.content}>
        <div className="header-title">Blog</div>
        <div className={styles['paper-container']}>
          <div className={styles.date}>
            <span className={styles['date-before']}>Date: </span>
            {published_at.toLocaleDateString()}
          </div>
          <div className={styles['title-wrapper']}>
            <div className={styles.title}>
              <span className={styles['title-before']}>Title: </span>
              {blogPost.title}
            </div>
          </div>
          <div 
            className={`markdown-body ${styles['markdown-body']} bg-inherit!`}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </section>
    </>
  );
}