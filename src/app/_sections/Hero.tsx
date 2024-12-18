import {
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import path from 'path';

import { getDataFromFile } from '@/utils/graymatter';

const heroPath = path.join(process.cwd(), 'src/content/sitecontent/hero.md');
interface HeroData {
  siteheading: string;
  sitesubheading: string;
  sitedescription: string;
}
type Hero = HeroData;

const Hero = () => {
  const heroData: HeroData = getDataFromFile<HeroData>(heroPath);

  return (
    <section className="border-cflatyellow flex max-w-[1280px] flex-col gap-6 self-start text-balance rounded-2xl border-b-2 bg-gradient-to-b from-slate-950 to-slate-800 p-6">
      <div className="flex gap-3 max-sm:flex-col sm:items-center">
        <img
          src="/logo.png"
          alt="C Flat Run Logo"
          className="max-h-28 max-w-28"
        />
        <div className="space-y-3">
          <h1 className="from-cflatyellow bg-gradient-to-r to-amber-300 bg-clip-text text-transparent">
            {heroData.siteheading}
          </h1>
          <SocialLinks />
        </div>
      </div>
      <h3 className="to-cflatyellow bg-gradient-to-r from-amber-300 bg-clip-text text-transparent">
        {heroData.sitesubheading}
      </h3>
      <p className="max-w-md">{heroData.sitedescription}</p>
    </section>
  );
};

const SocialLinks = () => {
  return (
    <ul className="border-cflatyellow bg-cflatblue text-cflatyellow ring-cflatblue flex w-fit gap-9 rounded-md border-4 px-3 py-1.5 ring-4 transition-colors">
      <li>
        <a
          href="https://www.instagram.com/cflatrun/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          <span className="sr-only">Instagram Link</span>
          <Instagram />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/cflatrun"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          <span className="sr-only">Facebook Link</span>
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/@cflatrun8418"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          <span className="sr-only">Youtube Link</span>
          <Youtube />
        </a>
      </li>
    </ul>
  );
};

export default Hero;
