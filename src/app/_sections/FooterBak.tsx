import React from 'react';

import {
  CircleChevronUp,
  Facebook,
  Instagram,
  Theater,
  UsersRound,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

import ContactForm from '@/components/ContactForm';

const Footer = () => {
  return (
    <footer className="relative z-10 row-start-3 w-full items-center text-balance border-t-2 border-zinc-50 bg-zinc-950 pb-3 text-center text-sm text-zinc-400">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-9 px-3 py-6 sm:grid-cols-2 sm:px-6 md:px-12">
        <div>
          <h2 className="text-zinc-50">Contact</h2>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center gap-6 self-center">
          <img
            src="/logo.png"
            alt="C Flat Run Logo"
            className="max-h-20 max-w-20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cflatyellow"
          />
          <div className="flex gap-3">
            <SiteLinks />
            <div className="h-28 border"></div>
            <SocialLinks />
          </div>
          <div className="flex flex-col gap-1.5">
            <span>
              &copy; 2025{' '}
              <Link
                href="/admin/index.html"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cflatyellow to-amber-300 bg-clip-text text-transparent transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                C Flat Run
              </Link>
              , All Rights Reserved
            </span>
            <span>
              Site design by{' '}
              <a
                href="https://bkschatzki.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                Brendan K. Schatzki
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SiteLinks = () => {
  return (
    <ul className="flex flex-col items-end gap-3 px-3 py-1.5">
      <li>
        <a
          href="#top"
          className="flex flex-row gap-3 transition-all duration-300 hover:scale-110 hover:text-foreground"
        >
          <span>Back to Top</span>
          <CircleChevronUp />
        </a>
      </li>
      <li>
        <a
          href="#members"
          className="flex flex-row gap-3 transition-all duration-300 hover:scale-110 hover:text-foreground"
        >
          <span>Members</span>
          <UsersRound />
        </a>
      </li>
      <li>
        <a
          href="#concerts"
          className="flex flex-row gap-3 transition-all duration-300 hover:scale-110 hover:text-foreground"
        >
          <span>Concerts</span>
          <Theater />
        </a>
      </li>
    </ul>
  );
};

const SocialLinks = () => {
  return (
    <ul className="flex flex-col items-start gap-3 px-3 py-1.5">
      <li>
        <a
          href="https://www.instagram.com/cflatrun/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row-reverse gap-3 transition-all duration-300 hover:scale-110 hover:text-foreground"
        >
          <span>Instagram</span>
          <Instagram className="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/cflatrun"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row-reverse gap-3 transition-all duration-300 hover:scale-110 hover:text-foreground"
        >
          <span>Facebook</span>
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/@cflatrun8418"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row-reverse gap-3 transition-all duration-300 hover:scale-110 hover:text-foreground"
        >
          <span>Youtube</span>
          <Youtube />
        </a>
      </li>
    </ul>
  );
};
