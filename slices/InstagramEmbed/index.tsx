import type { FC } from "react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type InstagramEmbedProps = SliceComponentProps<Content.InstagramEmbedSlice>;

function getEmbedUrl(raw: string): string | null {
  // Works with: full URL, pasted embed/blockquote HTML, or bare reel ID
  const match = raw.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
  if (match) return `https://www.instagram.com/reel/${match[1]}/embed/captioned/`;
  if (/^[A-Za-z0-9_-]{8,}$/.test(raw.trim()))
    return `https://www.instagram.com/reel/${raw.trim()}/embed/captioned/`;
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
      {/* Aspect ratio wrapper — 9:16 reel, capped at 540px wide */}
      <div className="mx-auto w-full max-w-[540px]">
        <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
          <iframe
            src={src}
            title="Instagram Reel"
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="absolute inset-0 h-full w-full rounded-2xl border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramEmbed;
