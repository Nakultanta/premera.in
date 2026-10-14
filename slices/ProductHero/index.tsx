"use client";

import type { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type ProductHeroProps = SliceComponentProps<Content.ProductHeroSlice>;

const ProductHero: FC<ProductHeroProps> = ({ slice }) => {
  const { card_heading, card_details, cta_label, cta_link } = slice.primary;
  if (!card_heading && !card_details) return null;

  const href = cta_link && "url" in cta_link && cta_link.url ? cta_link.url : undefined;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="group relative mt-8 p-6"
      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-card)" }}
    >
      {/* Corner brackets — matches home page pillar cards */}
      <span className="absolute top-2 left-2 h-3 w-3 border-t border-l border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />
      <span className="absolute top-2 right-2 h-3 w-3 border-t border-r border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />
      <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />
      <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-antique-gold/35 transition-all duration-300 group-hover:border-antique-gold" />

      <div className="flex items-start gap-3">
        {/* Chat bubble icon */}
        <span className="mt-0.5 shrink-0 text-[var(--text-faint)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </span>
        <div className="flex-1">
          {card_heading && (
            <h2 className="font-bodoni text-[1.1rem] tracking-[0.04em] text-[var(--text-secondary)]">
              {card_heading}
            </h2>
          )}
          {card_details && (
            <div className="mt-1.5 text-[11px] leading-[1.9] text-[var(--text-muted)] [&_a]:text-antique-gold [&_a]:underline [&_p]:m-0">
              <PrismicRichText field={card_details} />
            </div>
          )}
          {href && cta_label && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-overlay mt-5 inline-flex min-h-[44px] items-center gap-3 border border-deep-bronze bg-deep-bronze px-6 text-[9px] font-semibold tracking-[0.1em] uppercase text-cream transition-all duration-200 hover:bg-antique-gold hover:border-antique-gold hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(161,99,26,.3)]"
            >
              {cta_label}
              <span className="text-sm">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
