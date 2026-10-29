
import Image from "next/image";

import drumsImg from './img/drums.webp';
import oceanImg from './img/oceanarrow.webp';
import trackImg from './img/trackandfield.webp';
import vscodeImg from './img/vscode_image.webp';

import { works } from '@/data/works';
import { getAllBlogPost } from "@/libs/microcms";
import { Section } from "@/components/Section";
import { AboutSection } from "@/components/home/AboutSection";
import { WorksSection } from "@/components/home/WorkSection";
import { BlogSection } from "@/components/home/BlogSection";

export default async function Home() {
  const blogPosts = await getAllBlogPost(4);
  const displayedWorks = works.filter((work) => work.show_on_top).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <Section className="relative w-full min-h-svh overflow-hidden">
        <div className="absolute inset-0 left-1/2 top-1/2 w-[70%] h-[70%] max-h-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-[0_5rem_0_5rem] overflow-hidden">
          <div className="absolute left-0 top-0 w-[52%] h-[calc(47%-0.5rem)] md:h-[calc(47%-1rem)] md: overflow-hidden filter grayscale-60 contrast-70 z-15">
            <Image src={drumsImg} alt="ドラム" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 top-0 w-[calc(48%-0.5rem)] md:w-[calc(48%-1rem)] h-[53%] overflow-hidden rounded-[0_1.2em_0_0] filter grayscale-60 contrast-70 z-30">
            <Image src={oceanImg} alt="OceanArrow (Minecraft)" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 bottom-0 w-[52%] h-[calc(47%-0.5rem)] md:h-[calc(47%-1rem)] overflow-hidden filter grayscale-60 contrast-70 z-25">
            <Image src={vscodeImg} alt="コーディング" fill className="object-cover" priority />
          </div>
          <div className="absolute left-0 bottom-0 w-[calc(48%-0.5rem)] md:w-[calc(48%-1rem)] h-[53%] overflow-hidden rounded-[0_0_0_1.2em] filter grayscale-60 contrast-70 z-20">
            <Image src={trackImg} alt="陸上" fill className="object-cover" priority />
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[0_3rem_0_3rem] bg-white p-6 md:p-8 lg:p-12">
            <h1 className="text-4xl text-zinc-700 tracking-wider md:text-5xl lg:text-5xl m-0">Miyanber</h1>
          </div>
        </div>
      </Section>

      <AboutSection></AboutSection>

      <WorksSection displayedWorks={displayedWorks}></WorksSection>

      <BlogSection blogPosts={blogPosts}></BlogSection>

      <section id="contact" className="py-20 px-6 md:px-12">
        <h2 className="text-center">Contact</h2>
        <p className="text-center">
          Email: <a href="mailto:seiya.miyazaki.pg@gmail.com" className="hover:text-black underline underline-offset-4">
            seiya.miyazaki.pg@gmail.com
          </a>
        </p>
      </section>
    </>
  );
}
