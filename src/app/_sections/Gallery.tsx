import React from 'react';

import { Merriweather } from 'next/font/google';
import path from 'path';

import PhotoCarousel from '@/components/PhotoCarousel';
import { getDataFromFile } from '@/utils/graymatter';

// const galleryPath = path.join(process.cwd(), 'src/content/sitecontent/gallerysection.md');

const merriweather = Merriweather({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export interface ImageData {
  galleryimage: string;
  imagecaption: string;
}
export type Image = ImageData;

interface GallerySection {
  galleryheading: string;
  gallerysubheading?: string;
  gallerydescription?: string;
  gallerypictures: ImageData[];
}

const Gallery = () => {
  // const gallerySection: GallerySection = getDataFromFile<GallerySection>(galleryPath);

  return (
    <section
      id="members"
      className="flex w-full scroll-m-16 flex-col items-center gap-3"
    >
      {/* <h2 className={merriweather.className}>{gallerySection.galleryheading}</h2>
      <PhotoCarousel data={gallerySection.gallerypictures} /> */}
    </section>
  );
};

export default Gallery;
