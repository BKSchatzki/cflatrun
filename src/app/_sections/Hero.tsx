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
    <section className="border-cflatyellow relative z-10 flex w-full max-w-[1280px] flex-col gap-6 self-start text-balance rounded-2xl border-b-2 bg-gradient-to-b from-slate-950 to-slate-800 p-6 pt-[3.75rem]">
      <div className="flex gap-3 max-sm:flex-col sm:items-center">
        <img
          src="/logo.png"
          alt="C Flat Run Logo"
          className="hover:shadow-cflatyellow max-h-28 max-w-28 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
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
      <img
        src="/uploads/fuel-and-fuddle.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 blur-sm"
      />
    </section>
  );
};

const SocialLinks = () => {
  return (
    <ul className="border-cflatyellow bg-cflatblue text-cflatyellow ring-cflatblue flex w-fit gap-9 rounded-md border-4 px-3 py-1.5 ring-4">
      <li>
        <a
          href="https://www.instagram.com/cflatrun/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Instagram Link</span>
          <Instagram className="transition-all duration-300 hover:scale-110 hover:text-foreground" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/cflatrun"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Facebook Link</span>
          <Facebook className="transition-all duration-300 hover:scale-110 hover:text-foreground" />
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/@cflatrun8418"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Youtube Link</span>
          <Youtube className="transition-all duration-300 hover:scale-110 hover:text-foreground" />
        </a>
      </li>
    </ul>
  );
};

export default Hero;
