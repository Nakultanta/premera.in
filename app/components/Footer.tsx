import ThemeToggle from "./ThemeToggle";

const INSTAGRAM_URL = "https://www.instagram.com/premera.in/";
const EMAIL         = "premera.studio@gmail.com";

const footerLinks = [
  { label: "Home",      href: "/" },
  { label: "Our World", href: "/#our-world" },
  { label: "Follow",    href: "/#follow-us" },
  { label: "Contact",   href: "/#contact" },
];

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
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

      {/* Gold top accent */}
      <div className="w-full h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C3832D 30%, #A1631A 50%, #C3832D 70%, transparent)" }} />

      <div className="w-full px-5 py-12 md:px-10 lg:px-16 md:py-16">
        <div className="mx-auto max-w-[1200px]">

          {/* Top grid — stacks on mobile, 3-col on desktop */}
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left md:gap-8">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="/" className="font-bodoni text-[28px] font-medium tracking-[0.1em] text-[#F5EAD8] transition hover:text-[#C3832D]">
                PREMERA
              </a>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#876B4A]">
                Ladies&rsquo; Suits &amp; Ethnic Wear
              </p>
              <p className="mt-2 max-w-[220px] text-[12px] leading-[1.9] text-[#7a5a3a]">
                Timeless elegance crafted for women who carry grace in every step.
              </p>
            </div>

            {/* Nav */}
            <nav aria-label="Footer navigation" className="flex flex-col items-center md:items-start gap-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#4a2e14] mb-1">Navigate</p>
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-bodoni text-[14px] tracking-[0.08em] text-[#C3832D] transition hover:text-[#F6D68C]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#4a2e14] mb-1">Connect</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bodoni text-[14px] tracking-[0.08em] text-[#C3832D] transition hover:text-[#F6D68C]"
              >
                <InstagramIcon />
                @premera.in ↗
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-montserrat text-[12px] tracking-[0.03em] text-[#876B4A] transition hover:text-[#C3832D] break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Ornament divider */}
          <div className="my-10 flex items-center gap-4">
            <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #3a2510)" }} />
            <span className="inline-block h-[6px] w-[6px] rotate-45 border border-[#A1631A]/50 bg-[#2a1608]" />
            <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #3a2510, transparent)" }} />
          </div>

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <span className="text-[10px] tracking-[0.08em] uppercase text-[#4a2e14]">
              &copy; {currentYear} PREMERA. All rights reserved.
            </span>
            <span className="font-cormorant text-[17px] italic text-[#6b4a28]">
              Grace in every drape.
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] tracking-[0.08em] uppercase text-[#4a2e14]">Theme</span>
              <ThemeToggle />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
