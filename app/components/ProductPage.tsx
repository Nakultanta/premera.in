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

function Ornament() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3">
      <span className="block h-px w-6" style={{ background: "var(--gold-line)" }} />
      <span className="inline-block h-1.5 w-1.5 rotate-45 border border-antique-gold bg-gold-highlight/60" />
      <span className="block h-px w-6" style={{ background: "var(--gold-line)" }} />
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Explore Our Collection",
    body: "Browse our designs and choose your favourite suit.",
  },
  {
    num: "02",
    title: "Send Us an Enquiry",
    body: "DM us on Instagram at @premera.in with the product name or code.",
  },
  {
    num: "03",
    title: "We'll Take It From There",
    body: "We'll confirm availability, share pricing, shipping and payment details.",
  },
];

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

  return (
    <main className="min-h-screen bg-[var(--bg-page)] font-montserrat text-[var(--text-primary)]">

      {/* ── PRODUCT SECTION ── */}
      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr] md:gap-16 md:items-start">

          {/* LEFT: Hero image — sticky on desktop */}
          {main_image?.url && (
            <div className="relative md:sticky md:top-8">
              <span aria-hidden="true" className="animate-float pointer-events-none absolute -top-4 -right-5 text-antique-gold text-xl hidden md:block" style={{ opacity: 0.28, animationDelay: "0s" }}>✦</span>
              <span aria-hidden="true" className="animate-float-slow pointer-events-none absolute -bottom-4 -left-5 text-rich-gold text-sm hidden md:block" style={{ opacity: 0.18, animationDelay: "2s" }}>◆</span>

              <div className="relative w-full overflow-hidden bg-[var(--bg-card)]" style={{ aspectRatio: "3/4" }}>
                <NextImage
                  src={main_image.url}
                  alt={main_image.alt || name || "Product image"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-[8px] border border-white/15" />
                <div className="absolute bottom-0 left-0 right-0 flex min-h-[44px] items-center justify-between gap-3 px-4 py-3 backdrop-blur-sm" style={{ background: "rgba(251,243,231,0.88)" }}>
                  <span className="font-bodoni text-[15px] tracking-[0.12em] text-deep-bronze">PREMERA</span>
                  <span className="text-[7px] tracking-[0.11em] uppercase text-[#947457]">An Expression of Elegance</span>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT: Details + slices */}
          <div className="flex flex-col">
            {/* Eyebrow — product code */}
            {code && (
              <div className="mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-antique-gold" />
                <span className="text-[9px] font-semibold tracking-[0.17em] uppercase text-[var(--text-faint)]">{code}</span>
              </div>
            )}

            {/* Name */}
            {name && (
              <h1 className="font-bodoni text-[clamp(1.9rem,4vw,2.8rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
                {name}
              </h1>
            )}

            {/* Suit type */}
            {suit_type && (
              <p className="mt-3 font-cormorant text-[clamp(1.1rem,2vw,1.35rem)] italic leading-snug text-[var(--text-muted)]">
                {suit_type}
              </p>
            )}

            <div className="my-5"><Ornament /></div>

            {/* Price + availability */}
            {(hasPrice || in_stock !== undefined) && (
              <div className="flex items-center gap-4">
                {hasPrice && (
                  <span className="font-bodoni text-[2rem] font-normal tracking-[-0.01em] text-antique-gold">
                    ₹{price!.toLocaleString("en-IN")}
                  </span>
                )}
                {in_stock !== undefined && (
                  <span className={`inline-flex items-center gap-1.5 border px-3 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase ${
                    in_stock
                      ? "border-antique-gold/40 text-antique-gold bg-antique-gold/5"
                      : "border-dusty-rose/40 text-dusty-rose bg-dusty-rose/5"
                  }`}>
                    <span className={`h-1 w-1 rounded-full ${in_stock ? "bg-antique-gold" : "bg-dusty-rose"}`} />
                    {in_stock ? "In stock" : "Sold out"}
                  </span>
                )}
              </div>
            )}

            <div className="mt-6 h-px w-full" style={{ background: "var(--border-subtle)" }} />

            {/* Slices */}
            {slices && slices.length > 0 && (
              <div className="mt-6">
                <SliceZone slices={slices} components={components} />
              </div>
            )}

            <p className="mt-8 text-[10px] leading-relaxed text-[var(--text-faint)]">
              Actual colour may vary slightly due to photography lighting.<br />
              All prices are inclusive of GST.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section
        aria-label="How to Order"
        className="px-5 py-16 md:px-10 md:py-24 lg:px-16"
        style={{ background: "var(--bg-card)", borderTop: "2px solid var(--border-subtle)" }}
      >
        <div className="mx-auto max-w-[1200px]">
          {/* Heading block */}
          <div className="mb-12 text-center">
            <div aria-hidden="true" className="flex items-center justify-center gap-3 mb-5">
              <span className="block h-px w-[43px]" style={{ background: "var(--gold-line)" }} />
              <span className="inline-block h-2 w-2 rotate-45 border border-antique-gold bg-gold-highlight/60" />
              <span className="block h-px w-[43px]" style={{ background: "var(--gold-line)" }} />
            </div>
            <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--text-faint)]">
              Simple &amp; Personal
            </p>
            <h2 className="mt-4 font-bodoni text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)]">
              How to <em className="not-italic text-antique-gold">Order</em>
            </h2>
            <p className="mx-auto mt-4 max-w-[420px] text-[12px] leading-[2] text-[var(--text-muted)]">
              Ordering your favourite PREMERA suit is simple.
            </p>
          </div>

          {/* Steps — 3-col on desktop, matches home page pillars */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="group relative h-full p-7 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(161,99,26,.14)]"
                style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-page)" }}
              >
                {/* Corner brackets */}
                <span className="absolute top-2 left-2 h-3 w-3 border-t border-l border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />
                <span className="absolute top-2 right-2 h-3 w-3 border-t border-r border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />
                <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />
                <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />

                <span className="block text-[9px] tracking-[0.12em] mb-4 text-[var(--text-faint)]">{s.num}</span>
                <h3 className="font-bodoni text-[20px] tracking-[0.04em] mb-3 transition-colors duration-200 group-hover:text-antique-gold text-[var(--text-secondary)]">
                  {s.title}
                </h3>
                <p className="text-[12px] leading-[1.9] text-[var(--text-muted)]">{s.body}</p>

                {/* Instagram link on step 2 */}
                {i === 1 && (
                  <a
                    href="https://www.instagram.com/premera.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[10px] tracking-[0.06em] text-antique-gold transition hover:text-rich-gold"
                  >
                    @premera.in <span>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-10 text-center">
            <p className="text-[12px] leading-[2] text-[var(--text-muted)]">
              For any questions or assistance, feel free to message us.<br />
              We&rsquo;ll be happy to help you find your perfect style.
            </p>
            <p className="mt-4 font-cormorant text-[1.2rem] italic text-[var(--text-faint)]">
              PREMERA — Grace in Every Drape.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
