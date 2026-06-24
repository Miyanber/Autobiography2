import { getAllBlogPost, getBlogPost } from "@/libs/microcms";
import { extractExcerpt } from "@/utils/text";
import 'github-markdown-css/github-markdown-light.css';
import 'katex/dist/katex.min.css';

import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";

type Props = {
  params: Promise<{
    id: string
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blogPost = await getBlogPost(id);
  if (blogPost == null) {
    notFound();
  }

  const description = extractExcerpt(blogPost.content);
  const title = `Blog - ${blogPost.title} | Miyanber.com`;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
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

  return metadata;
}

export default async function BlogRouterPage({ params }: Props) {
  const { id } = await params;

  const blogPost = await getBlogPost(id);
  if (blogPost == null) {
    return notFound();
  }

  const published_at = new Date(blogPost.publishedAt);

  return (
    <section className="py-20 px-4 md:px-12">
      <div className="text-4xl font-bold mb-10">Blog</div>
      <div className="rounded-[2rem] border border-[#e6dfd2] bg-[#fffbf4] p-8 md:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.08)]">
        <div className="mb-4 text-right text-lg font-[var(--title-font)]">
          <span className="font-semibold">Date: </span>
          {published_at.toLocaleDateString()}
        </div>
        <div className="mb-8 border-b-4 border-[#81a7bd] pb-6 font-[var(--title-font)]">
          <div className="text-2xl font-medium leading-8">
            <span className="font-normal text-xl">Title: </span>
            {blogPost.title}
          </div>
        </div>
        <div className="markdown-body bg-inherit">
          <ReactMarkdown
            remarkPlugins={[
              remarkMath,
              [remarkToc, { heading: '目次', maxDepth: 3 }],
            ]}
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeKatex]}
          >
            {blogPost.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

/**
 * SSG用のURLリストを事前に生成する関数
 */
export async function generateStaticParams() {
  const posts = await getAllBlogPost(100);
  return posts.map((post) => ({
    id: post.id,
  }));
}
