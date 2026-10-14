import type { FC } from "react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type InstagramEmbedProps = SliceComponentProps<Content.InstagramEmbedSlice>;

function getEmbedUrl(raw: string): string | null {
  // Accept full URL like https://www.instagram.com/reel/ABC123/ or just the ID
  const match = raw.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
  if (match) return `https://www.instagram.com/reel/${match[1]}/embed/`;
  // If user pasted just the reel ID
  if (/^[A-Za-z0-9_-]{8,}$/.test(raw.trim())) {
    return `https://www.instagram.com/reel/${raw.trim()}/embed/`;
  }
  return null;
}

const InstagramEmbed: FC<InstagramEmbedProps> = ({ slice }) => {
  const { heading, embed_url } = slice.primary;
  const src = embed_url ? getEmbedUrl(embed_url) : null;
  if (!src) return null;

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
      <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <iframe
          src={src}
          title="Instagram Reel"
          allowFullScreen
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="block w-full"
          style={{ minHeight: 560, border: "none" }}
        />
      </div>
    </section>
  );
};

export default InstagramEmbed;
