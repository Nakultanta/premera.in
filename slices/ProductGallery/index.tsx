"use client";

import { useCallback, type FC } from "react";
import NextImage from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type ProductGalleryProps = SliceComponentProps<Content.ProductGallerySlice>;

const ProductGallery: FC<ProductGalleryProps> = ({ slice }) => {
  const images = (slice.items ?? []).filter(
    (item) => !!(item.image as { url?: string })?.url
  ) as { image: { url: string; alt?: string } }[];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: "start" });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (images.length === 0) return null;

  // ≤3 images: just stack them, no carousel needed
  if (images.length <= 3) {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="mt-8"
      >
        {slice.primary.heading && (
          <h2 className="mb-4 font-bodoni text-[1.4rem] font-semibold text-[var(--text-primary)]">
            {slice.primary.heading}
          </h2>
        )}
        <div className="flex flex-col gap-2.5">
          {images.map((img, i) => (
            <div
              key={img.image.url + i}
              className="relative w-full overflow-hidden rounded-2xl bg-[var(--bg-card)]"
              style={{ aspectRatio: "1/1" }}
            >
              <NextImage
                src={img.image.url}
                alt={img.image.alt || `Product view ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 680px) 100vw, 680px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 4+ images: Embla carousel, 3 visible at a time, scroll by 1, loops
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8"
    >
      {slice.primary.heading && (
        <h2 className="mb-4 font-bodoni text-[1.4rem] font-semibold text-[var(--text-primary)]">
          {slice.primary.heading}
        </h2>
      )}

      <div className="relative">
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
          <div className="flex gap-2.5">
            {images.map((img, i) => (
              <div
                key={img.image.url + i}
                className="relative shrink-0 overflow-hidden rounded-2xl bg-[var(--bg-card)]"
                style={{ flex: "0 0 calc((100% - 5px) / 3)", aspectRatio: "1/1" }}
              >
                <NextImage
                  src={img.image.url}
                  alt={img.image.alt || `Product view ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 680px) 33vw, 220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prev */}
        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-primary)] shadow-sm transition hover:border-antique-gold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        {/* Next */}
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-primary)] shadow-sm transition hover:border-antique-gold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  );
};

export default ProductGallery;
