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
import { Section } from "@/components/Section";

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
    <Section px="px-4 sm:px-12">
      <h1 className="mt-8 mb-4 text-center sm:text-left">Blog</h1>
      <div className="border border-paper-border bg-paper-bg py-8 px-6 md:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.08)]">
        <div className="mb-4 text-right text-lg font-title">
          <span className="">Date: </span>
          {published_at.toLocaleDateString()}
        </div>
        <div className="mb-8 border-b-3 border-title-border pb-1 font-title">
          <div className="text-2xl font-medium leading-8">
            <span className="font-normal text-xl">Title: </span>
            {blogPost.title}
          </div>
        </div>
        <div className="markdown-body">
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
    </Section>
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
