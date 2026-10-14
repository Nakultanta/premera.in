"use client";

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import type { SliceZone as SliceZoneType } from "@prismicio/client";
import NextImage from "next/image";

type ProductPageProps = {
  name?: string;
  code?: string;
  suit_type?: string;
  price?: number | null;
  in_stock?: boolean;
  main_image?: { url?: string; alt?: string };
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
  slices,
}: ProductPageProps) {
  const hasPrice = price != null && price > 0;
  const hasStock = in_stock !== undefined;

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

        {/* ── Main image ── */}
        {main_image?.url && (
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-[var(--bg-card)]"
            style={{ aspectRatio: "1/1" }}
          >
            <NextImage
              src={main_image.url}
              alt={main_image.alt || name || "Product image"}
              fill
              priority
              sizes="(max-width: 680px) 100vw, 680px"
              className="object-cover"
            />
          </div>
        )}

        {/* ── Suit type ── */}
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
                <span className={`h-1.5 w-1.5 rounded-full ${in_stock ? "bg-teal-highlight" : "bg-dusty-rose"}`} />
                {in_stock ? "Available" : "Sold Out"}
              </span>
            )}
          </div>
        )}

        {/* ── Product code (only when in stock) ── */}
        {code && in_stock && (
          <p className="mt-1.5 text-[.8rem] text-[var(--text-faint)]">
            Product code: <span className="font-medium text-[var(--text-muted)]">{code}</span>
          </p>
        )}

        <GoldDivider />

        {/* ── Slices: ProductGallery, InstagramEmbed, ProductHero ── */}
        {slices && slices.length > 0 && (
          <SliceZone slices={slices} components={components} />
        )}

        <p className="mt-8 text-center text-[.75rem] leading-relaxed text-[var(--text-faint)]">
          Actual colour may vary slightly due to photography lighting. All prices are inclusive of GST.
        </p>
      </article>
    </main>
  );
}
