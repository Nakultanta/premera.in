import ThemeToggle from "./ThemeToggle";

const INSTAGRAM_URL = "https://www.instagram.com/premera.in/";
const EMAIL         = "premera.studio@gmail.com";

const footerLinks = [
  { label: "Home",     href: "#home" },
  { label: "Our World",href: "#our-world" },
  { label: "Follow",   href: "#follow-us" },
  { label: "Contact",  href: "#contact" },
];

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function Footer({ year }: { year?: number }) {
  const currentYear = year ?? new Date().getFullYear();

  return (
    <footer className="w-full" style={{ background: "#1C0E04" }}>

      {/* Gold top accent line */}
      <div className="w-full h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C3832D 30%, #A1631A 50%, #C3832D 70%, transparent)" }} />

      {/* Main footer content */}
      <div className="w-full px-5 py-12 md:px-10 lg:px-16 md:py-16">
        <div className="mx-auto max-w-[1200px]">

          {/* Top row — brand + nav */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
              <a href="/" className="font-bodoni text-[32px] font-medium tracking-[0.1em] text-[#F5EAD8] transition hover:text-[#C3832D]">
                PREMERA
              </a>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#876B4A]">
                Ladies&rsquo; Suits &amp; Ethnic Wear
              </p>
              <p className="mt-2 max-w-[240px] text-[15px] leading-[1.8] text-[#7a5a3a]">
                Timeless elegance crafted for women who carry grace in every step.
              </p>
            </div>

            {/* Nav links */}
            <nav aria-label="Footer navigation" className="flex flex-col items-center gap-3 md:items-end">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#5a3a1a] mb-1">Navigate</p>
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-bodoni text-[15px] tracking-[0.1em] text-[#C3832D] transition hover:text-[#F6D68C]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Contact */}
            <div className="flex flex-col items-center gap-3 md:items-end">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#5a3a1a] mb-1">Connect</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bodoni text-[15px] tracking-[0.08em] text-[#C3832D] transition hover:text-[#F6D68C]"
              >
                <InstagramIcon />
                @premera.in ↗
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-montserrat text-[14px] tracking-[0.04em] text-[#876B4A] transition hover:text-[#C3832D] break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Ornament divider */}
          <div className="my-10 flex items-center gap-4">
            <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #3a2510)" }} />
            <span className="inline-block h-[7px] w-[7px] rotate-45 border border-[#A1631A]/50 bg-[#3a2510]" />
            <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #3a2510, transparent)" }} />
          </div>

          {/* Bottom row */}
          <div className="relative flex items-center justify-between gap-4">
            <span className="text-[11px] tracking-[0.08em] uppercase text-[#5a3a1a]">
              &copy; {currentYear} PREMERA. All rights reserved.
            </span>

            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-cormorant text-[17px] italic text-[#5a3a1a]">
              Grace in every drape.
            </span>

            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-[0.08em] uppercase text-[#5a3a1a]">Theme</span>
              <ThemeToggle />
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
