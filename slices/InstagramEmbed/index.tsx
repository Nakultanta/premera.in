import type { FC } from "react";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type InstagramEmbedProps = SliceComponentProps<Content.InstagramEmbedSlice>;

function getEmbedUrl(raw: string): string | null {
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
        <div className="mb-4">
          <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--text-faint)]">{heading}</p>
          <span className="block h-px w-full" style={{ background: "var(--border-subtle)" }} />
        </div>
      )}
      <div className="mx-auto w-full max-w-[400px]">
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
