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
    <section className="relative z-10 flex w-full flex-col gap-6 self-start text-balance rounded-2xl border-b-2 border-cflatyellow bg-gradient-to-b from-slate-950 to-slate-800 p-6 pt-[3.75rem]">
      <div className="flex gap-3 max-sm:flex-col sm:items-center">
        <img
          src="/logo.png"
          alt="C Flat Run Logo"
          className="max-h-28 max-w-28 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cflatyellow"
        />
        <div className="w-fit space-y-3">
          <h1 className="bg-gradient-to-r from-cflatyellow to-amber-300 bg-clip-text text-transparent">
            {heroData.siteheading}
          </h1>
          <SocialLinks />
        </div>
      </div>
      <h3 className="bg-gradient-to-r from-amber-300 to-cflatyellow bg-clip-text text-transparent">
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
    <ul className="flex w-full justify-center gap-9 rounded-md border-4 border-cflatyellow bg-cflatblue px-3 py-1.5 text-cflatyellow ring-4 ring-cflatblue">
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
