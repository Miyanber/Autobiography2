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
  return (
    <Section>
      <h2 className="text-3xl mb-10 text-center">Works</h2>
      <div className="mx-auto flex max-w-250 flex-col gap-12">
        {works.map((work) => {
          const content = (
            <Image
              src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.webp'}
              alt="サムネイル"
              fill
              className="object-contain"
            />
          );
          return (
            <div
              key={work.id}
              className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:gap-8"
            >
              <div className="relative w-full overflow-hidden rounded-xl md:w-48 h-36 shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
                {work.link ? (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                    {content}
                  </a>
                ) : (
                  <div className="relative block w-full h-full">{content}</div>
                )}
              </div>
              <div className="flex-1">
                <div className="pb-3 text-xl font-semibold font-title text-slate-900">
                  {work.title}
                </div>
                <div className="mt-2 mb-4 h-1 w-20 rounded-sm bg-[#bbbbbb]" />
                <div className="text-[#3f3f3f]">{work.overview}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
