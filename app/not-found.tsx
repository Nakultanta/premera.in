import Image from "next/image";
import Link from "next/link";

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

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-[clamp(16px,4vw,44px)] bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,.92),transparent_55%),linear-gradient(135deg,#FFFAF2,#F7EDDD_58%,#f0dfc5)]">
      <div className="relative w-full max-w-[760px] px-[clamp(18px,5vw,56px)] py-[clamp(20px,4.5vw,48px)] text-center border border-antique-gold/50 outline outline-1 outline-antique-gold/20 outline-offset-[6px] bg-[#fcf3e6] overflow-hidden">
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

        {/* 404 */}
        <p className="text-antique-gold text-[.69rem] font-semibold tracking-[.34em] uppercase leading-relaxed mb-2">
          Error 404
        </p>

        <h1 className="m-0 font-bodoni text-[clamp(1.7rem,4.5vw,2.55rem)] font-medium tracking-[.055em] leading-tight text-deep-bronze">
          Page Not Found
        </h1>

        <p className="max-w-[400px] mx-auto mt-3 mb-6 font-cormorant text-[clamp(1.1rem,2.6vw,1.45rem)] italic leading-snug text-warm-brown">
          This page seems to have wandered off the runway.
        </p>

        {/* Back home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-[22px] py-[13px] border border-antique-gold bg-deep-bronze text-[#fff8ec] text-[.76rem] font-semibold tracking-[.1em] uppercase no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_5px_18px_rgba(17,85,82,.18)] hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-[#2BA18C] focus-visible:outline-offset-4"
        >
          Return Home
        </Link>

        {/* Footer */}
        <footer className="mt-7 text-muted-gold text-[.62rem] tracking-[.13em] uppercase leading-relaxed">
          PREMERA · Ladies Suits · Grace in Every Drape
        </footer>
      </div>
    </main>
  );
}
