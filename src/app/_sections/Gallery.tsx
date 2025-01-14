import React from 'react';

import { Merriweather } from 'next/font/google';
import path from 'path';

import PhotoCarousel from '@/components/PhotoCarousel';
import { getDataFromFile } from '@/utils/graymatter';

const galleryPath = path.join(process.cwd(), 'src/content/sitecontent/gallerysection.md');

const merriweather = Merriweather({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

interface ImageData {
  galleryimage: string;
  imagecaption: string;
}

export interface GallerySection {
  galleryheading: string;
  gallerysubheading?: string;
  gallerydescription?: string;
  gallerypictures: ImageData[];
}

const Gallery = () => {
  const gallerySection: GallerySection = getDataFromFile<GallerySection>(galleryPath);

  return (
    <section
      id="members"
      className="motion-preset-blur-right-lg relative flex w-full scroll-m-16 flex-col items-center motion-delay-500"
    >
      <h2 className={merriweather.className}>{gallerySection.galleryheading}</h2>
      <div className="relative border-t-2 border-cflatyellow bg-gradient-to-b from-slate-950 to-transparent pt-3">
        <div className="motion-preset-blur-left-md motion-delay-[600ms] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-6 before:bg-gradient-to-l before:from-transparent before:to-slate-950 before:to-50% after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-6 after:bg-gradient-to-r after:from-transparent after:to-slate-950 after:to-50%">
          <PhotoCarousel gallerySection={gallerySection} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
