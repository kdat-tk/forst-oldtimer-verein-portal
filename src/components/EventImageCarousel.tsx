'use client';

import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import FsLightbox from 'fslightbox-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  images: string[];
};

export default function EventImageCarousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxToggler(prev => !prev);
  };

  if (images.length === 0) return null;

  return (
    <div className="mb-4 relative">
      {/* Embla Carousel */}
      <div ref={emblaRef} className="overflow-hidden rounded-lg">
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`Bild ${index + 1}`}
                className="h-48 w-full object-cover cursor-pointer"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - nur anzeigen wenn mehr als 1 Bild */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Bildanzahl Indikator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {images.length} Bilder
        </div>
      )}

      {/* Lightbox */}
      <FsLightbox
        toggler={lightboxToggler}
        sources={images}
        slide={lightboxIndex + 1}
      />
    </div>
  );
}
