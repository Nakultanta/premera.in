"use client";

import type { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type ProductHeroProps = SliceComponentProps<Content.ProductHeroSlice>;

const ProductHero: FC<ProductHeroProps> = ({ slice }) => {
  const { card_heading, card_details, cta_label, cta_link } = slice.primary;

  if (!card_heading && !card_details) return null;

  const href =
    cta_link && "url" in cta_link && cta_link.url ? cta_link.url : undefined;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6"
    >
      {card_heading && (
        <h2 className="mb-3 font-bodoni text-[1.35rem] font-semibold text-[var(--text-primary)]">
          {card_heading}
        </h2>
      )}
      {card_details && (
        <div className="prose prose-sm max-w-none text-[var(--text-muted)] [&_a]:text-antique-gold [&_a]:underline">
          <PrismicRichText field={card_details} />
        </div>
      )}
      {href && cta_label && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-deep-bronze px-6 py-3 text-[.85rem] font-semibold tracking-[.1em] uppercase text-cream transition hover:bg-teal"
        >
          {cta_label}
        </a>
      )}
    </section>
  );
};

export default ProductHero;
