"use client";

import { useState, useRef, useCallback, type FC } from "react";
import NextImage from "next/image";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type ProductGalleryProps = SliceComponentProps<Content.ProductGallerySlice>;

const ProductGallery: FC<ProductGalleryProps> = ({ slice }) => {
  const images = (slice.items ?? []).filter(
    (item) => !!(item.image as { url?: string })?.url
  ) as { image: { url: string; alt?: string }; caption?: string }[];

  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, images.length - 1));
      setActiveIdx(clamped);
      const el = thumbsRef.current?.children[clamped] as HTMLElement | undefined;
      el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    },
    [images.length]
  );

  if (images.length === 0) return null;

  const active = images[activeIdx];

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

      {/* ── Active image ── */}
      <button
        type="button"
        aria-label="Open full image"
        onClick={() => setLightboxIdx(activeIdx)}
        className="group relative block w-full overflow-hidden rounded-2xl bg-[var(--bg-card)] cursor-zoom-in"
        style={{ aspectRatio: "1/1" }}
      >
        <NextImage
          src={active.image.url}
          alt={active.image.alt || "Product image"}
          fill
          priority
          sizes="(max-width: 680px) 100vw, 680px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-[.72rem] font-medium text-white opacity-0 transition group-hover:opacity-100">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
          </svg>
          Zoom
        </span>
      </button>

      {/* ── Thumbnail strip ── */}
      {images.length > 1 && (
        <div
          ref={thumbsRef}
          className="mt-3 flex gap-2.5 overflow-x-auto pb-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((img, i) => (
            <button
              key={img.image.url + i}
              type="button"
              aria-label={`View image ${i + 1}`}
              aria-pressed={activeIdx === i}
              onClick={() => goTo(i)}
              className={`relative shrink-0 snap-start overflow-hidden rounded-xl transition-all duration-200 ${
                activeIdx === i
                  ? "ring-2 ring-antique-gold ring-offset-2 ring-offset-[var(--bg-page)]"
                  : "opacity-60 hover:opacity-90"
              }`}
              style={{ width: 72, height: 72 }}
            >
              <NextImage
                src={img.image.url}
                alt={img.image.alt || `View ${i + 1}`}
                fill
                sizes="72px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* ── 3-col grid ── */}
      {images.length > 1 && (
        <div className="mt-5">
          <div className="grid grid-cols-3 gap-2.5">
            {images.map((img, i) => (
              <button
                key={img.image.url + i}
                type="button"
                aria-label={`Open image ${i + 1}`}
                onClick={() => setLightboxIdx(i)}
                className="group relative overflow-hidden rounded-xl bg-[var(--bg-card)] cursor-zoom-in"
                style={{ aspectRatio: "1/1" }}
              >
                <NextImage
                  src={img.image.url}
                  alt={img.image.alt || `Product view ${i + 1}`}
                  fill
                  sizes="(max-width: 680px) 33vw, 220px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </button>
            ))}
          </div>
          <p className="mt-2 text-center text-[.75rem] text-[var(--text-faint)]">
            Tap any photo to view full size
          </p>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && images[lightboxIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIdx(null)}
        >
          {lightboxIdx > 0 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
          )}

          <div
            className="relative"
            style={{ width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <NextImage
              src={images[lightboxIdx].image.url}
              alt={images[lightboxIdx].image.alt || "Product image"}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {lightboxIdx < images.length - 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          )}

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[.75rem] text-white">
            {lightboxIdx + 1} / {images.length}
          </span>

          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setLightboxIdx(null)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white text-xl transition hover:bg-white/25"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;
