'use client';

import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import type { Image } from '@/app/_sections/Gallery';

const PhotoCarousel = ({ data }: { data: Image[] }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      className="h-full w-full overflow-hidden bg-red-500"
      ref={emblaRef}
    >
      <div className="flex border-t-2 border-cflatyellow *:min-w-0 *:shrink-0 *:basis-full">
        {data.map((image) => (
          <img
            src={data.galleryimage}
            alt={data.imagecaption}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
