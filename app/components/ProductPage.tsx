"use client";

import { useState, useRef, useCallback } from "react";
import NextImage from "next/image";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import type { SliceZone as SliceZoneType } from "@prismicio/client";

type GalleryImage = { url: string; alt?: string; caption?: string };

type ProductPageProps = {
  name?: string;
  code?: string;
  suit_type?: string;
  price?: number | null;
  in_stock?: boolean;
  main_image?: { url?: string; alt?: string };
  instagram_section_heading?: string;
  instagram_url?: string;
  gallery?: GalleryImage[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slices?: SliceZoneType<any>;
};

function GoldDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-3 my-7">
      <span className="block h-px flex-1 bg-gradient-to-r from-transparent to-[var(--gold-line)]" />
      <span className="inline-block w-2 h-2 rotate-45 border border-antique-gold bg-gold-highlight/60" />
      <span className="block h-px flex-1 bg-gradient-to-l from-transparent to-[var(--gold-line)]" />
    </div>
  );
}

export default function ProductPage({
  name,
  code,
  suit_type,
  price,
  in_stock,
  main_image,
  instagram_section_heading,
  instagram_url,
  gallery = [],
  slices,
}: ProductPageProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Merge main_image into gallery for the carousel
  const allImages: GalleryImage[] = [
    ...(main_image?.url ? [{ url: main_image.url, alt: main_image.alt }] : []),
    ...gallery.filter((g) => g.url),
  ];

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, allImages.length - 1));
      setActiveIdx(clamped);
      const el = carouselRef.current?.children[clamped] as HTMLElement | undefined;
      el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    },
    [allImages.length]
  );

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const hasPrice = price != null && price > 0;
  const hasStock = in_stock !== undefined;
  const hasInstagram = !!instagram_url;
  const hasGallery = allImages.length > 0;

  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-4 py-8 font-montserrat text-[var(--text-primary)]">
      <article className="mx-auto max-w-[680px]">

        {/* ── Name & Code ── */}
        {(name || code) && (
          <header className="mb-5 text-center">
            {name && (
              <h1 className="font-bodoni text-[clamp(1.7rem,5vw,2.6rem)] font-semibold leading-tight tracking-[.03em] text-[var(--text-primary)]">
                {name}
              </h1>
            )}
            {code && (
              <p className="mt-1.5 text-[.78rem] font-semibold tracking-[.28em] uppercase text-antique-gold">
                {code}
              </p>
            )}
          </header>
        )}

        {/* ── Main image carousel ── */}
        {hasGallery && (
          <div className="relative">
            {/* Active image — square, fill */}
            <button
              type="button"
              aria-label="Open full image"
              onClick={() => openLightbox(activeIdx)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-[var(--bg-card)] cursor-zoom-in"
              style={{ aspectRatio: "1/1" }}
            >
              <NextImage
                src={allImages[activeIdx].url}
                alt={allImages[activeIdx].alt || name || "Product image"}
                fill
                priority
                sizes="(max-width: 680px) 100vw, 680px"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              {/* Zoom hint */}
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-[.72rem] font-medium text-white opacity-0 transition group-hover:opacity-100">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
                Zoom
              </span>
            </button>

            {/* Thumbnail strip — only if >1 image */}
            {allImages.length > 1 && (
              <div
                ref={carouselRef}
                className="mt-3 flex gap-2.5 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: "none" }}
              >
                {allImages.map((img, i) => (
                  <button
                    key={img.url + i}
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
                      src={img.url}
                      alt={img.alt || `View ${i + 1}`}
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Suit type / short description ── */}
        {suit_type && (
          <p className="mt-5 text-center font-cormorant text-[1.2rem] italic leading-snug text-[var(--text-muted)]">
            {suit_type}
          </p>
        )}

        {/* ── Price + Availability ── */}
        {(hasPrice || hasStock) && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            {hasPrice && (
              <span className="font-bodoni text-[2rem] font-semibold text-antique-gold">
                ₹{price!.toLocaleString("en-IN")}
              </span>
            )}
            {hasStock && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[.78rem] font-semibold tracking-[.1em] uppercase ${
                  in_stock
                    ? "bg-emerald/10 text-teal-highlight border border-teal-highlight/30"
                    : "bg-dusty-rose/10 text-dusty-rose border border-dusty-rose/30"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${in_stock ? "bg-teal-highlight" : "bg-dusty-rose"}`}
                />
                {in_stock ? "Available" : "Sold Out"}
              </span>
            )}
          </div>
        )}

        {/* Show product code below price only if in stock */}
        {code && in_stock && (
          <p className="mt-1.5 text-[.8rem] text-[var(--text-faint)]">
            Product code: <span className="font-medium text-[var(--text-muted)]">{code}</span>
          </p>
        )}

        <GoldDivider />

        {/* ── Instagram section ── */}
        {hasInstagram && (
          <section className="mb-8">
            <h2 className="mb-4 font-bodoni text-[1.4rem] font-semibold text-[var(--text-primary)]">
              {instagram_section_heading || "Watch the Suit in Motion"}
            </h2>
            <a
              href={instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on Instagram"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-8 text-center text-inherit no-underline transition hover:border-antique-gold/50 hover:bg-[var(--bg-card-alt)]"
            >
              {/* Instagram gradient icon */}
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md transition group-hover:scale-105">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polygon points="5,3 19,12 5,21" fill="currentColor" />
                </svg>
              </span>
              <strong className="font-cormorant text-[1.4rem] italic leading-snug text-[var(--text-primary)]">
                See the fabric, print &amp; drape
              </strong>
              <span className="max-w-[380px] text-[.95rem] leading-relaxed text-[var(--text-muted)]">
                Watch the outfit in motion to explore its fabric, print and detailing.
              </span>
              <span className="flex items-center gap-1.5 text-[.8rem] font-semibold tracking-[.1em] uppercase text-antique-gold">
                Watch on Instagram
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
            </a>
          </section>
        )}

        {/* ── Product gallery (3-col grid + open full) ── */}
        {allImages.length > 1 && (
          <section className="mb-2">
            <h2 className="mb-4 font-bodoni text-[1.4rem] font-semibold text-[var(--text-primary)]">
              Product Gallery
            </h2>
            <div className="grid grid-cols-3 gap-2.5">
              {allImages.map((img, i) => (
                <button
                  key={img.url + i}
                  type="button"
                  aria-label={`Open image ${i + 1}`}
                  onClick={() => openLightbox(i)}
                  className="group relative overflow-hidden rounded-xl bg-[var(--bg-card)] cursor-zoom-in"
                  style={{ aspectRatio: "1/1" }}
                >
                  <NextImage
                    src={img.url}
                    alt={img.alt || `${name || "Product"} view ${i + 1}`}
                    fill
                    sizes="(max-width: 680px) 33vw, 220px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                </button>
              ))}
            </div>
            <p className="mt-2 text-center text-[.75rem] text-[var(--text-faint)]">
              Tap any photo to view full size
            </p>
          </section>
        )}

        {/* ── Slices (ProductHero order card etc.) ── */}
        {slices && slices.length > 0 && (
          <>
            <GoldDivider />
            <SliceZone slices={slices} components={components} />
          </>
        )}

        {/* ── Disclaimer ── */}
        <p className="mt-8 text-center text-[.75rem] leading-relaxed text-[var(--text-faint)]">
          Actual colour may vary slightly due to photography lighting. All prices are inclusive of GST.
        </p>
      </article>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && allImages[lightboxIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Prev */}
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

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            style={{ width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <NextImage
              src={allImages[lightboxIdx].url}
              alt={allImages[lightboxIdx].alt || name || "Product image"}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          {lightboxIdx < allImages.length - 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          )}

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[.75rem] text-white">
            {lightboxIdx + 1} / {allImages.length}
          </span>

          {/* Close */}
          <button
            type="button"
            aria-label="Close preview"
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white text-xl transition hover:bg-white/25"
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
