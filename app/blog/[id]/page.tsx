import { getBlogPost } from "@/libs/microcms";
import { extractExcerpt } from "@/utils/text";

import styles from "./blog-detail.module.css"
import 'github-markdown-css/github-markdown-light.css';
import 'katex/dist/katex.min.css';

import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

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

  const title = `Blog - ${blogPost.title} | Miyanber.com`

  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,

    },
  };

  if (blogPost.eyecatch) {
    metadata.openGraph = {
      ...metadata.openGraph,
      images: [
        {
          url: blogPost.eyecatch.url,
          width: blogPost.eyecatch.width,
          height: blogPost.eyecatch.height,
        },
      ],
    };
  }

  return metadata
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
          >
            <ReactMarkdown
              remarkPlugins={[
                remarkMath, 
                [remarkToc, { heading: '目次', maxDepth: 3 }] // 「目次」という見出しの下に、H3までの目次を自動生成する設定
              ]}
              // rehypePlugins に rehypeSlug を追加（見出しに id="見出し名" を自動で振る）
              rehypePlugins={[rehypeSlug, rehypeKatex]}
            >
              {blogPost.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}