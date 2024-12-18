import React from 'react';

import Link from 'next/link';

import ContactForm from '@/components/ContactForm';

const Footer = () => {
  return (
    <footer className="row-start-3 flex w-full flex-col items-center gap-1.5 text-balance border-t-2 border-cflatyellow px-3 py-6 text-center text-sm text-slate-400 sm:px-6 md:px-12">
      <ContactForm />
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
    </footer>
  );
};

export default Footer;
