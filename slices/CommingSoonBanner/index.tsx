import type { FC } from "react";
import Image from "next/image";
import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

export type CommingSoonBannerProps = SliceComponentProps<Content.CommingSoonBannerSlice>;

function GoldDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-3 my-5 text-rich-gold">
      <span className="block h-px w-[min(22vw,112px)] bg-gradient-to-r from-transparent to-rich-gold" />
      <span className="inline-block w-2 h-2 rotate-45 border border-antique-gold bg-[#e9c17b]" />
      <span className="block h-px w-[min(22vw,112px)] bg-gradient-to-l from-transparent to-rich-gold" />
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

const CommingSoonBanner: FC<CommingSoonBannerProps> = ({ slice }) => {
  const { heading1, heading2, heading3, heading4, hero_image, optional_border_image } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      aria-label="Hero"
      className="relative min-h-[92svh] flex flex-col items-center justify-center text-center px-[clamp(16px,5vw,64px)] py-[clamp(48px,8vw,96px)] bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,.92),transparent_55%),linear-gradient(135deg,#FFFAF2,#F7EDDD_58%,#f0dfc5)]"
    >
      {/* Eyebrow */}
      {heading1 && (
        <p className="mb-4 text-antique-gold text-[.78rem] font-semibold tracking-[.34em] uppercase leading-relaxed animate-fade-up [animation-delay:100ms]">
          {heading1}
        </p>
      )}

      {/* Hero image (logo) or optional border image */}
      {hero_image?.url && (
        <div className="w-full flex items-center justify-center animate-fade-up [animation-delay:250ms]">
          <Image
            src={hero_image.url}
            alt={hero_image.alt ?? "PREMERA"}
            width={hero_image.dimensions?.width ?? 590}
            height={hero_image.dimensions?.height ?? 450}
            priority
            className="block w-full max-w-[min(590px,80vw)] max-h-[40vh] object-contain"
          />
        </div>
      )}

      {optional_border_image?.url && (
        <div className="w-full flex items-center justify-center mt-4 animate-fade-up [animation-delay:300ms]">
          <Image
            src={optional_border_image.url}
            alt={optional_border_image.alt ?? ""}
            width={optional_border_image.dimensions?.width ?? 760}
            height={optional_border_image.dimensions?.height ?? 40}
            className="block w-full max-w-[min(760px,90vw)] object-contain"
          />
        </div>
      )}

      {/* Divider */}
      <div className="animate-fade-up [animation-delay:400ms]">
        <GoldDivider />
      </div>

      {/* Main headline */}
      {heading2 && (
        <h1 className="m-0 font-bodoni text-[clamp(1.9rem,5vw,3rem)] font-medium tracking-[.055em] leading-tight text-deep-bronze animate-fade-up [animation-delay:560ms]">
          {heading2}
        </h1>
      )}

      {/* Tagline */}
      {heading3 && (
        <p className="max-w-[480px] mx-auto mt-4 font-cormorant text-[clamp(1.35rem,3vw,1.8rem)] italic leading-snug text-warm-brown animate-fade-up [animation-delay:650ms]">
          {heading3}
        </p>
      )}

      {/* Body description */}
      {heading4 && (
        <p className="max-w-[420px] mx-auto mt-3 mb-8 text-[1.05rem] leading-relaxed text-warm-brown animate-fade-up [animation-delay:700ms]">
          {heading4}
        </p>
      )}

      {/* CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:800ms]">
        <a
          href="https://www.instagram.com/premera.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow PREMERA on Instagram"
          className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-3.5 bg-deep-bronze text-cream text-[.85rem] font-semibold tracking-[.14em] uppercase border border-deep-bronze transition-all duration-200 hover:bg-teal hover:border-teal hover:shadow-[0_5px_18px_rgba(17,85,82,.18)] hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-[#2BA18C] focus-visible:outline-offset-4"
        >
          <InstagramIcon />
          Follow @premera.in
        </a>
      </div>
    </section>
  );
};

export default CommingSoonBanner;
