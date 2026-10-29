import { Section } from '@/components/Section';
import { getAllBlogPost } from '@/libs/microcms';
import { extractExcerpt } from '@/utils/text';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const description = "学生エンジニア Miyanber のブログ記事一覧です。";
  const title = `Blogs | Miyanber.com`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function Blogs() {
  const posts = await getAllBlogPost(100);
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <Section className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-title text-zinc-800 tracking-wide">
        Blogs
      </h2>
      <div className="mx-auto flex max-w-250 flex-col gap-8 md:gap-10">
        {sortedPosts.length === 0 ? (
          <p className="text-center text-zinc-500 py-12">記事がまだありません。</p>
        ) : (
          sortedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center border-y border-zinc-200 py-8 px-4 sm:px-6 transition-colors duration-300 hover:bg-zinc-50/60"
            >
              {/* サムネイル画像 */}
              <div className="relative w-full md:w-52 h-44 md:h-36 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={post.eyecatch ? post.eyecatch.url : '/main/img/NO_IMAGE.webp'}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 208px"
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* 記事詳細 */}
              <div className="flex-1 min-w-0 w-full">
                <div className="text-xs md:text-sm text-zinc-500 font-title mb-1.5">
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>

                <div className="flex items-center gap-2 pb-2 text-xl md:text-2xl font-semibold font-title text-zinc-900 transition-colors duration-200 group-hover:text-sky-700">
                  <span>{post.title}</span>
                </div>

                <div className="mt-1 mb-4 h-1 w-16 rounded-full bg-zinc-300 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-sky-600" />

                <p className="text-zinc-600 leading-relaxed text-sm md:text-base m-0 line-clamp-2 md:line-clamp-3">
                  {extractExcerpt(post.content, 120)}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </Section>
  );
}

