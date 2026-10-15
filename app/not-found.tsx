import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-5 py-16"
      style={{ background: "var(--bg-page)" }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(195,131,45,.10) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(17,85,82,.07) 0%, transparent 50%)",
        }}
      />

      {/* Floating ornaments */}
      <span aria-hidden="true" className="animate-float pointer-events-none absolute top-[12%] left-[7%] text-[#A1631A] text-2xl hidden md:block" style={{ opacity: 0.3 }}>✦</span>
      <span aria-hidden="true" className="animate-float-slow pointer-events-none absolute top-[20%] right-[8%] text-[#C3832D] text-xl hidden md:block" style={{ opacity: 0.2, animationDelay: "2s" }}>✳</span>
      <span aria-hidden="true" className="animate-float pointer-events-none absolute bottom-[18%] left-[12%] text-[#A1631A] text-base hidden md:block" style={{ opacity: 0.18, animationDelay: "4s" }}>◆</span>
      <span aria-hidden="true" className="animate-float-slow pointer-events-none absolute bottom-[22%] right-[10%] text-[#C3832D] text-sm hidden md:block" style={{ opacity: 0.15, animationDelay: "1s" }}>✦</span>

      {/* Card */}
      <div className="relative z-10 w-full max-w-[560px] text-center flex flex-col items-center">

        {/* Logo */}
        <Link href="/" aria-label="PREMERA home">
          <Image
            src="/premera-logo-transparent-hd.png"
            alt="PREMERA"
            width={4305}
            height={3288}
            priority
            className="h-[56px] w-auto object-contain mb-8 opacity-90 hover:opacity-100 transition-opacity dark:brightness-[1.2]"
          />
        </Link>

        {/* Gold rule */}
        <div className="flex items-center gap-3 mb-8 w-full max-w-[280px]">
          <span className="flex-1 h-px" style={{ background: "var(--gold-line)" }} />
          <span className="inline-block h-[7px] w-[7px] rotate-45 border border-[#A1631A] bg-[#ecd3a9]" />
          <span className="flex-1 h-px" style={{ background: "var(--gold-line)" }} />
        </div>

        {/* 404 number */}
        <p
          className="font-bodoni text-[clamp(6rem,20vw,9rem)] font-normal leading-none tracking-[-0.04em] select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: "rgba(161,99,26,0.25)",
            backgroundImage: "linear-gradient(135deg, #C3832D 0%, #A1631A 40%, #5C2D05 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        {/* Eyebrow */}
        <p
          className="mt-1 text-[10px] font-semibold tracking-[0.28em] uppercase"
          style={{ color: "var(--color-antique-gold)" }}
        >
          Page Not Found
        </p>

        {/* Headline */}
        <h1
          className="mt-5 font-bodoni text-[clamp(1.6rem,4vw,2.2rem)] font-normal leading-[1.15] tracking-[-0.02em]"
          style={{ color: "var(--text-primary)" }}
        >
          This page wandered off
          <br />
          <em className="not-italic" style={{ color: "var(--color-antique-gold)" }}>the runway.</em>
        </h1>

        {/* Subtext */}
        <p
          className="mt-4 max-w-[340px] font-cormorant text-[clamp(1.1rem,2.5vw,1.3rem)] italic leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>

        {/* Gold rule */}
        <div className="flex items-center gap-3 my-8 w-full max-w-[280px]">
          <span className="flex-1 h-px" style={{ background: "var(--gold-line)" }} />
          <span className="inline-block h-[7px] w-[7px] rotate-45 border border-[#A1631A] bg-[#ecd3a9]" />
          <span className="flex-1 h-px" style={{ background: "var(--gold-line)" }} />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 border text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(92,45,5,.2)]"
            style={{
              background: "var(--color-deep-bronze)",
              borderColor: "var(--color-deep-bronze)",
              color: "#fff8ec",
            }}
          >
            Return Home
          </Link>
          <a
            href="https://www.instagram.com/premera.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[48px] px-7 border text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-px"
            style={{
              borderColor: "var(--border-gold)",
              color: "var(--color-antique-gold)",
            }}
          >
            Follow on Instagram ↗
          </a>
        </div>

        {/* Footer tagline */}
        <p
          className="mt-12 font-cormorant text-[15px] italic"
          style={{ color: "var(--text-faint)" }}
        >
          Grace in every drape.
        </p>
      </div>
    </main>
  );
}
