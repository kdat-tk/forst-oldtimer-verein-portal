'use client';

import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import FsLightbox from 'fslightbox-react';

type Props = {
  images: string[];
};

export default function EventImageCarousel({ images }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxToggler(prev => !prev); // toggle notwendig!
  };

  return (
    <div className="mb-4">
      {/* Embla Carousel */}
      <div ref={emblaRef} className="overflow-hidden rounded">
        <div className="flex">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Bild ${index + 1}`}
              className="h-48 w-full object-cover mr-2 cursor-pointer rounded"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <FsLightbox
        toggler={lightboxToggler}
        sources={images}
        slide={lightboxIndex}
      />
    </div>
  );
}
