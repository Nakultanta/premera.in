import type { FC } from "react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type InstagramEmbedProps = SliceComponentProps<Content.InstagramEmbedSlice>;

const InstagramEmbed: FC<InstagramEmbedProps> = ({ slice }) => {
  const { heading, reel_url, caption, sub_caption } = slice.primary;

  const href = reel_url && "url" in reel_url && reel_url.url ? reel_url.url : undefined;
  if (!href) return null;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8"
    >
      {heading && (
        <h2 className="mb-4 font-bodoni text-[1.4rem] font-semibold text-[var(--text-primary)]">
          {heading}
        </h2>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch on Instagram"
        className="group flex flex-col items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-8 text-center text-inherit no-underline transition hover:border-antique-gold/50 hover:bg-[var(--bg-card-alt)]"
      >
        {/* Instagram gradient play button */}
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md transition group-hover:scale-105">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polygon points="5,3 19,12 5,21" fill="currentColor" />
          </svg>
        </span>

        {caption && (
          <strong className="font-cormorant text-[1.4rem] italic leading-snug text-[var(--text-primary)]">
            {caption}
          </strong>
        )}

        {sub_caption && (
          <span className="max-w-[380px] text-[.95rem] leading-relaxed text-[var(--text-muted)]">
            {sub_caption}
          </span>
        )}

        <span className="flex items-center gap-1.5 text-[.8rem] font-semibold tracking-[.1em] uppercase text-antique-gold">
          Watch on Instagram
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </span>
      </a>
    </section>
  );
};

export default InstagramEmbed;
