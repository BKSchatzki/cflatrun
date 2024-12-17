import Link from 'next/link';
import path from 'path';

import { getDataFromFile } from '@/utils/graymatter';

import Music from './_sections/Concerts';
import Members from './_sections/Members';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 px-8 font-[family-name:var(--font-geist-sans)] sm:px-20">
      <header></header>
      <main className="row-start-2 flex w-full max-w-[calc(1280px)] flex-col items-center gap-8">
        <Hero />
        <Members />
        <Music />
        <Link
          href="/admin/index.html"
          className="self-start rounded-md bg-indigo-400 px-4 py-2 font-semibold text-background hover:underline"
        >
          Admin
        </Link>
      </main>
      <footer></footer>
    </div>
  );
}

const heroPath = path.join(process.cwd(), 'src/content/sitecontent/hero.md');
interface HeroData {
  siteheading: string;
  sitesubheading: string;
  sitedescription: string;
}
type Hero = HeroData;

const Hero = () => {
  const heroData: HeroData = getDataFromFile<HeroData>(heroPath);
  console.log(heroData);

  return (
    <section className="flex max-w-[1280px] flex-col items-center gap-6">
      <h1>{heroData.siteheading}</h1>
      <h2 className="text-balance text-center">{heroData.sitesubheading}</h2>
      <p className="max-w-[768px] text-balance text-center">{heroData.sitedescription}</p>
    </section>
  );
};
