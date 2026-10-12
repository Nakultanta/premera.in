import Image from "next/image";

function GoldDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 my-5 text-rich-gold"
    >
      <span className="block h-px w-[min(22vw,112px)] bg-gradient-to-r from-transparent to-rich-gold" />
      <span className="inline-block w-2 h-2 rotate-45 border border-antique-gold bg-[#e9c17b]" />
      <span className="block h-px w-[min(22vw,112px)] bg-gradient-to-l from-transparent to-rich-gold" />
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-[clamp(16px,4vw,44px)] bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,.92),transparent_55%),linear-gradient(135deg,#FFFAF2,#F7EDDD_58%,#f0dfc5)]">
      <div className="relative w-full max-w-[760px] px-[clamp(18px,5vw,56px)] py-[clamp(20px,4.5vw,48px)] text-center border border-antique-gold/50 outline outline-1 outline-antique-gold/20 outline-offset-[6px] bg-[#fcf3e6] overflow-hidden">
        {/* Eyebrow */}
        <p className="mb-4 text-antique-gold text-[.69rem] font-semibold tracking-[.34em] uppercase leading-relaxed">
          A new expression of elegance
        </p>

        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[60vw]">
            <Image
              src="/PREMERE_LOGO_TRANSPARENT.svg"
              alt="PREMERA — Ladies Suits — Grace in Every Drape"
              width={4305}
              height={3288}
              priority
              className="block w-full max-w-[590px] max-h-[63vh] object-contain mx-auto"
            />
          </div>
        </div>

        {/* Divider */}
        <GoldDivider />

        {/* Heading */}
        <h1 className="m-0 font-bodoni text-[clamp(1.7rem,4.5vw,2.55rem)] font-medium tracking-[.055em] leading-tight text-deep-bronze">
          Coming Soon
        </h1>

        {/* Tagline */}
        <p className="max-w-[430px] mx-auto mt-3 mb-6 font-cormorant text-[clamp(1.15rem,2.8vw,1.55rem)] italic leading-snug text-warm-brown">
          Something beautiful is being draped just for you.
        </p>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/premera.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow PREMERA on Instagram"
          className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-[22px] py-[13px] border border-antique-gold bg-deep-bronze text-[#fff8ec] text-[.76rem] font-semibold tracking-[.1em] uppercase no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_5px_18px_rgba(17,85,82,.18)] hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-[#2BA18C] focus-visible:outline-offset-4"
        >
          <InstagramIcon />
          Follow @premera.in
        </a>

        {/* Footer */}
        <footer className="mt-7 text-muted-gold text-[.62rem] tracking-[.13em] uppercase leading-relaxed">
          PREMERA · Ladies Suits · Grace in Every Drape
        </footer>
      </div>
    </main>
  );
}
