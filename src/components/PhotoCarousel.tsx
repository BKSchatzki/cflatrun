'use client';

import React from 'react';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

import { GallerySection } from '@/app/_sections/Gallery';

const PhotoCarousel = ({ gallerySection }: { gallerySection: GallerySection }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );
  const { gallerypictures } = gallerySection;

  return (
    <div
      className="relative h-full w-full overflow-hidden from-transparent to-slate-950"
      ref={emblaRef}
    >
      <div className="flex">
        {gallerypictures.map((image, index) => (
          <figure
            key={index}
            className="relative min-w-0 max-w-full shrink-0 basis-auto rounded-md px-1.5 md:max-w-[67%]"
          >
            <img
              src={image.galleryimage}
              alt={image.imagecaption || 'C Flat Run Gallery Image'}
              className="peer h-full max-h-80 rounded-xl border-[9px] border-cflatdarkblue object-cover transition-all"
            />
            {image.imagecaption.trim() !== '' && (
              <figcaption className="absolute left-0 top-0 hidden h-full w-full cursor-default select-none items-center justify-center text-balance bg-slate-950/75 backdrop-blur-sm transition-all hover:flex peer-hover:flex">
                {image.imagecaption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
