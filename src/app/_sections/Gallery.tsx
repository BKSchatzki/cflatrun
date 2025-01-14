import React from 'react';

import { Merriweather } from 'next/font/google';

import PhotoCarousel from '@/components/PhotoCarousel';

const merriweather = Merriweather({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

const Gallery = () => {
  return (
    <section
      id="members"
      className="flex w-full scroll-m-16 flex-col items-center gap-3"
    >
      <h2 className={merriweather.className}>Gallery</h2>
      <PhotoCarousel />
    </section>
  );
};

export default Gallery;
