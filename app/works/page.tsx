import { Section } from '@/components/Section';
import { works } from '@/data/works';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  const description = "学生エンジニア Miyanber の制作物一覧です。";
  const title = `Works | Miyanber.com`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function Works() {
  const sortedWorks = [...works].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Section className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-title text-zinc-800 tracking-wide">
        Works
      </h2>
      <div className="mx-auto flex max-w-250 flex-col gap-8 md:gap-10">
        {sortedWorks.map((work) => {
          const isLink = Boolean(work.link);
          const Component = isLink ? 'a' : 'div';
          const linkProps = isLink
            ? {
                href: work.link,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {};

          return (
            <Component
              key={work.id}
              {...linkProps}
              className={`group flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center border-y border-zinc-200 py-8 px-4 sm:px-6 transition-all duration-300 ${
                isLink
                  ? 'cursor-pointer hover:bg-zinc-50/80 hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
                  : 'cursor-default'
              }`}
            >
              {/* サムネイル画像 */}
              <div className="relative w-full md:w-52 h-44 md:h-36 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.webp'}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 208px"
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* 作品詳細 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 pb-2 text-xl md:text-2xl font-semibold font-title text-zinc-900 transition-colors duration-200 group-hover:text-sky-700">
                  <span>{work.title}</span>
                  {isLink && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 shrink-0 text-zinc-400 transition-all duration-200 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                <div className="mt-1 mb-4 h-1 w-16 rounded-full bg-zinc-300 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-sky-600" />

                <p className="text-zinc-600 leading-relaxed text-sm md:text-base m-0">
                  {work.overview}
                </p>
              </div>
            </Component>
          );
        })}
      </div>
    </Section>
  );
}
