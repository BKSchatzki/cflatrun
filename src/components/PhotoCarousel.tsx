'use client';

import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';

const PhotoCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      className="h-full w-full overflow-hidden bg-red-500"
      ref={emblaRef}
    >
      <div className="flex *:min-w-0 *:shrink-0 *:basis-full">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
