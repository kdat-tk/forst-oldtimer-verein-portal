'use client';

import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import FsLightbox from 'fslightbox-react';

type Props = {
  images: string[];
};

export default function EventImageCarousel({ images }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="mb-4">
      <div ref={emblaRef} className="overflow-hidden">
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

      <FsLightbox
        toggler={lightboxOpen}
        sources={images}
        slide={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
