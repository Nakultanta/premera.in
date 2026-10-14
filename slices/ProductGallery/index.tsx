"use client";

import { useCallback, useState, type FC } from "react";
import NextImage from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type ProductGalleryProps = SliceComponentProps<Content.ProductGallerySlice>;

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--text-faint)]">{text}</p>
      <span className="block h-px w-full" style={{ background: "var(--border-subtle)" }} />
    </div>
  );
}

function Lightbox({ images, idx, onClose, onPrev, onNext }: {
  images: { url: string; alt?: string }[];
  idx: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
      onClick={onClose}
    >
      {idx > 0 && (
        <button
          type="button"
          aria-label="Previous"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white transition hover:bg-white/25"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      )}

      <div
        className="relative"
        style={{ width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <NextImage
          src={images[idx].url}
          alt={images[idx].alt || "Product image"}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {idx < images.length - 1 && (
        <button
          type="button"
          aria-label="Next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white transition hover:bg-white/25"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      )}

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-3 py-1 text-[.72rem] text-white">
        {idx + 1} / {images.length}
      </span>

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/20 bg-white/10 text-white text-xl transition hover:bg-white/25"
      >
        ×
      </button>
    </div>
  );
}

const ProductGallery: FC<ProductGalleryProps> = ({ slice }) => {
  const images = (slice.items ?? []).filter(
    (item) => !!(item.image as { url?: string })?.url
  ) as { image: { url: string; alt?: string } }[];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: "start" });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (images.length === 0) return null;

  const heading = slice.primary.heading;
  const flat = images.map((img) => ({ url: img.image.url, alt: img.image.alt }));

  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="mt-8"
      >
        {heading && <SectionLabel text={heading} />}

        {images.length <= 3 ? (
          /* ── ≤3: 3-col grid ── */
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, i) => (
              <button
                key={img.image.url + i}
                type="button"
                aria-label={`View image ${i + 1}`}
                onClick={() => setLightboxIdx(i)}
                className="relative overflow-hidden bg-[var(--bg-card)] cursor-zoom-in"
                style={{ aspectRatio: "3/4" }}
              >
                <NextImage
                  src={img.image.url}
                  alt={img.image.alt || `Product view ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 680px) 33vw, 220px"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        ) : (
          /* ── 4+: Embla carousel ── */
          <div className="relative px-5">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.image.url + i}
                    type="button"
                    aria-label={`View image ${i + 1}`}
                    onClick={() => setLightboxIdx(i)}
                    className="relative shrink-0 overflow-hidden bg-[var(--bg-card)] cursor-zoom-in"
                    style={{ flex: "0 0 calc((100% - 8px) / 3)", aspectRatio: "3/4" }}
                  >
                    <NextImage
                      src={img.image.url}
                      alt={img.image.alt || `Product view ${i + 1}`}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 680px) 33vw, 220px"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-primary)] shadow-sm transition hover:border-antique-gold"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-primary)] shadow-sm transition hover:border-antique-gold"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={flat}
          idx={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIdx((i) => Math.min(flat.length - 1, (i ?? 0) + 1))}
        />
      )}
    </>
  );
};

export default ProductGallery;
