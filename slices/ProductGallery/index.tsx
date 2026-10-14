"use client";

import { useState, type FC } from "react";
import NextImage from "next/image";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type ProductGalleryProps = SliceComponentProps<Content.ProductGallerySlice>;

const ProductGallery: FC<ProductGalleryProps> = ({ slice }) => {
  const images = (slice.items ?? []).filter(
    (item) => !!(item.image as { url?: string })?.url
  ) as { image: { url: string; alt?: string } }[];

  const [idx, setIdx] = useState(0);

  if (images.length === 0) return null;

  const isCarousel = images.length > 3;

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

      {isCarousel ? (
        /* ── Carousel: one image at a time with prev/next ── */
        <div className="relative">
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-[var(--bg-card)]"
            style={{ aspectRatio: "1/1" }}
          >
            <NextImage
              src={images[idx].image.url}
              alt={images[idx].image.alt || `Product view ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="(max-width: 680px) 100vw, 680px"
              className="object-cover transition-opacity duration-300"
            />
          </div>

          {/* Prev */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-page)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] transition hover:border-antique-gold disabled:opacity-20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setIdx((i) => Math.min(images.length - 1, i + 1))}
            disabled={idx === images.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-page)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] transition hover:border-antique-gold disabled:opacity-20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[.72rem] text-white">
            {idx + 1} / {images.length}
          </span>
        </div>
      ) : (
        /* ── Up to 3: stacked column ── */
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
      )}
    </section>
  );
};

export default ProductGallery;
