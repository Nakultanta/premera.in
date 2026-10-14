"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/premera.in/";

const fallbackLinks = [
  { label: "Home",               href: "#home",      num: "01" },
  { label: "Our World",          href: "#our-world", num: "02" },
  { label: "Follow Our Journey", href: "#follow-us", num: "03" },
  { label: "Contact",            href: "#contact",   num: "04" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px] shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function Header({ navLinks: prismicLinks }: { navLinks?: { label: string; href: string }[] }) {
  const navLinks = [
    ...fallbackLinks,
    ...(prismicLinks ?? []).map((l, i) => ({ ...l, num: String(fallbackLinks.length + i + 1).padStart(2, "0") })),
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Announcement bar */}
      <div className="flex min-h-[34px] items-center justify-center gap-2.5 bg-[#f4e6d3] dark:bg-[#2c1c0d] px-4 py-1.5 text-center text-[11px] font-medium tracking-[0.13em] uppercase text-[#89603b] dark:text-[#c3a07a]">
        <span className="h-[5px] w-[5px] rounded-full bg-[#A1631A] shrink-0" />
        A new chapter in elegance is on its way
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e8d7c0] dark:border-[#3a2510] bg-[#fbf3e7] dark:bg-[#1a1008]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-[76px] px-4 md:min-h-[92px] md:px-10 lg:px-16 max-w-[1600px] mx-auto">

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 flex-col items-start justify-center gap-[5px] p-2.5 transition hover:opacity-70"
          >
            <span className="block h-px w-[19px] bg-[#63391f] dark:bg-[#e4ceae] transition-all" />
            <span className="block h-px w-[19px] bg-[#63391f] dark:bg-[#e4ceae] transition-all" />
            <span className="block h-px w-[13px] bg-[#63391f] dark:bg-[#e4ceae] transition-all" />
          </button>

          {/* Centered logo */}
          <a href="/" aria-label="PREMERA home" className="flex flex-col items-center justify-center">
            <Image
              src="/premera-logo-transparent-hd.png"
              alt="PREMERA"
              width={4305}
              height={3288}
              priority
              className="block h-[52px] w-auto max-w-[180px] object-contain md:h-[64px] md:max-w-[240px] lg:h-[72px] lg:max-w-[280px] dark:brightness-[1.2] dark:contrast-[1.1]"
            />
          </a>

          {/* Right — Instagram */}
          <div className="flex items-center justify-end gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit PREMERA on Instagram"
              className="hidden items-center gap-2 border border-[#A1631A] px-4 py-2 text-[12px] font-semibold tracking-[0.12em] uppercase text-[#63391f] dark:text-[#e4ceae] dark:border-[#C3832D] transition hover:bg-[#5C2D05] hover:text-white hover:border-[#5C2D05] md:flex"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit PREMERA on Instagram"
              className="flex h-11 w-11 items-center justify-center text-[#63391f] dark:text-[#e4ceae] md:hidden"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-[#2a1b11]/40 transition-all duration-300 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      />

      {/* Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-y-0 left-0 z-[60] flex w-[min(87vw,400px)] flex-col bg-[#fbf3e7] dark:bg-[#1a1008] px-6 py-6 shadow-2xl transition-transform duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar top */}
        <div className="flex items-center justify-between border-b border-[#e8d7c0] dark:border-[#3a2510] pb-5">
          <span className="font-bodoni text-2xl tracking-[0.12em] text-[#63391f] dark:text-[#e4ceae]">PREMERA</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center text-3xl font-light text-[#63391f] dark:text-[#e4ceae] hover:opacity-60 transition"
          >
            ×
          </button>
        </div>

        <p className="mt-9 mb-3 text-[11px] font-semibold tracking-[0.21em] uppercase text-[#947457] dark:text-[#c3a07a]">
          Discover PREMERA
        </p>

        <nav className="flex flex-col">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex min-h-[64px] items-center justify-between border-b border-[#e8d7c0] dark:border-[#3a2510] font-bodoni text-[23px] text-[#63391f] dark:text-[#e4ceae] transition-all duration-200 hover:pl-2 hover:text-[#A1631A]"
            >
              <span>{item.label}</span>
              <span className="text-[11px] tracking-[0.12em] text-[#b19070] dark:text-[#876b4a] font-sans">{item.num}</span>
            </a>
          ))}
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-auto border border-[#d9b88f] dark:border-[#5a3a1a] px-5 py-4 text-center font-bodoni text-[15px] tracking-[0.14em] uppercase text-[#63391f] dark:text-[#e4ceae] transition hover:bg-[#5C2D05] hover:text-white hover:border-[#5C2D05]"
        >
          Follow @premera.in ↗
        </a>

        <p className="mt-5 text-center font-cormorant text-[20px] italic text-[#947457] dark:text-[#c3a07a]">
          Grace in every drape.
        </p>
      </aside>
    </>
  );
}
