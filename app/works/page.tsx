import { Section } from '@/components/Section';
import { works } from '@/data/works';
import { Metadata } from 'next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
          const hasAppUrl = Boolean(work.appUrl);
          const hasGithubUrl = Boolean(work.githubUrl);

          return (
            <div
              key={work.id}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center border-y border-zinc-200 py-8 px-4 sm:px-6 transition-colors duration-300 hover:bg-zinc-50/60"
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
                </div>

                <div className="mt-1 mb-4 h-1 w-16 rounded-full bg-zinc-300 transition-all duration-300 ease-out group-hover:w-24 group-hover:bg-sky-600" />

                <p className="text-zinc-600 leading-relaxed text-sm md:text-base m-0">
                  {work.overview}
                </p>

                {/* リンクボタングループ */}
                {(hasAppUrl || hasGithubUrl) && (
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {hasAppUrl && (
                      <a
                        href={work.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100 hover:border-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shadow-xs"
                      >
                        <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-sky-600" />
                        <span>Visit Site</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-sky-400" />
                      </a>
                    )}
                    {hasGithubUrl && (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 shadow-xs"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5 text-zinc-800" />
                        <span>GitHub</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-zinc-400" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
