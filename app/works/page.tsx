import works from '@/data/works.json';
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
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-4xl font-bold mb-10 text-center">Works</div>
      <div className="mx-auto flex max-w-[1000px] flex-col gap-12">
        {works.map((work) => {
          const content = (
            <Image
              src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.webp'}
              alt="サムネイル"
              fill
              className="object-cover"
            />
          );
          return (
            <div
              key={work.id}
              className="group flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:gap-6 even:md:flex-row-reverse"
            >
              <div className="relative w-full overflow-hidden rounded-3xl md:w-[12rem] h-[9rem] flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
                {work.link ? (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                    {content}
                  </a>
                ) : (
                  <div className="relative block w-full h-full">{content}</div>
                )}
              </div>
              <div className="flex-1">
                <div className="pb-3 text-xl font-bold font-[var(--title-font)] text-slate-900">
                  {work.title}
                </div>
                <div className="mt-2 mb-4 h-1 w-20 rounded-sm bg-[#bbbbbb]" />
                <div className="text-[#3f3f3f]">{work.overview}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
