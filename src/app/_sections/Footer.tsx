import React from 'react';

import {
  CircleChevronUp,
  Facebook,
  Instagram,
  Theater,
  UsersRound,
  Youtube,
} from 'lucide-react';
import { Merriweather } from 'next/font/google';
import Link from 'next/link';
import path from 'path';

import ContactForm from '@/components/ContactForm';
import { getDataFromFile } from '@/utils/graymatter';

const heroPath = path.join(process.cwd(), 'src/content/sitecontent/hero.md');
interface HeroData {
  siteheading: string;
  sitesubheading: string;
  sitedescription: string;
  sitelogo?: string;
}

const merriweather = Merriweather({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

const Footer = () => {
  const heroData: HeroData = getDataFromFile<HeroData>(heroPath);

  return (
    <div className="w-full max-w-[1280px] px-3 sm:px-6 md:px-12">
      <h2 className={`motion-preset-blur-right-lg motion-delay-500 ${merriweather.className}`}>
        Contact Us
      </h2>
      <footer className="motion-preset-blur-up-lg relative z-10 flex w-full flex-col gap-6 self-start text-balance rounded-t-2xl border-t-2 border-cflatyellow bg-gradient-to-t from-slate-950 to-slate-800 p-6 pt-[3.75rem] motion-delay-500">
        <div className="grid max-w-[1280px] grid-cols-1 justify-end gap-9 px-3 py-6 sm:grid-cols-2 sm:px-6 md:px-12">
          <div>
            <h2 className="sr-only">Contact Us</h2>
            <ContactForm />
          </div>
          <div className="flex flex-col items-center gap-6 self-end">
            <img
              src={heroData.sitelogo || 'logo-default.wepb'}
              alt="C Flat Run Logo"
              className="max-h-20 max-w-20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cflatyellow"
            />
            <div className="flex gap-3">
              <SiteLinks />
              <div className="h-28 border border-slate-400"></div>
              <SocialLinks />
            </div>
            <div className="flex flex-col items-center gap-1.5 pb-9 text-center text-sm text-slate-400">
              <span>
                &copy; 2025{' '}
                <Link
                  href="/admin/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-cflatyellow to-amber-300 bg-clip-text font-semibold text-transparent transition-colors duration-300 hover:text-foreground"
                >
                  C Flat Run
                </Link>
                , All Rights Reserved
              </span>
              <span>
                Site design by{' '}
                <a
                  href="https://bkschatzki.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 transition-colors duration-300 hover:text-foreground"
                >
                  Brendan K. Schatzki
                </a>
              </span>
            </div>
          </div>
        </div>
        <img
          src="uploads/orchard.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 blur-sm"
        />
      </footer>
    </div>
  );
};

export default Footer;

const SiteLinks = () => {
  return (
    <ul className="flex flex-col items-end gap-3 px-3 py-1.5 text-slate-400">
      <li>
        <a
          href="#top"
          className="group flex flex-row gap-3"
        >
          <span className="transition-all duration-300 group-hover:text-foreground">To Top</span>
          <CircleChevronUp className="transition-all duration-300 group-hover:scale-110 group-hover:text-cflatyellow" />
        </a>
      </li>
      <li>
        <a
          href="#members"
          className="group flex flex-row gap-3 hover:text-foreground"
        >
          <span className="transition-all duration-300 group-hover:text-foreground">Members</span>
          <UsersRound className="transition-all duration-300 group-hover:scale-110 group-hover:text-cflatyellow" />
        </a>
      </li>
      <li>
        <a
          href="#concerts"
          className="group flex flex-row gap-3 hover:text-foreground"
        >
          <span className="transition-all duration-300 group-hover:text-foreground">Concerts</span>
          <Theater className="transition-all duration-300 group-hover:scale-110 group-hover:text-cflatyellow" />
        </a>
      </li>
    </ul>
  );
};

const SocialLinks = () => {
  return (
    <ul className="flex flex-col items-start gap-3 px-3 py-1.5 text-slate-400">
      <li>
        <a
          href="https://www.instagram.com/cflatrun/"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-row-reverse gap-3 hover:text-foreground"
        >
          <span className="transition-all duration-300 group-hover:text-foreground">Instagram</span>
          <Instagram className="transition-all duration-300 group-hover:scale-110 group-hover:text-cflatyellow" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/cflatrun"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-row-reverse gap-3 hover:text-foreground"
        >
          <span className="transition-all duration-300 group-hover:text-foreground">Facebook</span>
          <Facebook className="transition-all duration-300 group-hover:scale-110 group-hover:text-cflatyellow" />
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/@cflatrun8418"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-row-reverse gap-3 hover:text-foreground"
        >
          <span className="transition-all duration-300 group-hover:text-foreground">Youtube</span>
          <Youtube className="transition-all duration-300 group-hover:scale-110 group-hover:text-cflatyellow" />
        </a>
      </li>
    </ul>
  );
};
