import type { Metadata } from "next";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { createClient } from "@/prismicio";
import { asLink } from "@prismicio/client";

const BASE_URL = "https://www.premera.in";

export const metadata: Metadata = {
  title: "PREMERA | Elegant Ladies\u2019 Suits & Ethnic Wear",
  description:
    "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style. Discover a new expression of grace.",
  alternates: { canonical: BASE_URL },
  keywords: [
    "ladies suits",
    "ethnic wear",
    "Indian fashion",
    "unstitched suits",
    "PREMERA",
    "women fashion India",
    "ladies ethnic wear online",
    "salwar suits",
  ],
  openGraph: {
    title: "PREMERA | Elegant Ladies\u2019 Suits & Ethnic Wear",
    description:
      "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style. Discover a new expression of grace.",
    url: BASE_URL,
    siteName: "PREMERA",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/PREMERA_Metadata_Banner_1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: "PREMERA \u2014 Elegant Ladies\u2019 Suits & Ethnic Wear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PREMERA | Elegant Ladies\u2019 Suits & Ethnic Wear",
    description:
      "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style. Discover a new expression of grace.",
    images: [`${BASE_URL}/PREMERA_Metadata_Banner_1200x630.jpg`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const INSTAGRAM_URL = "https://www.instagram.com/premera.in/";
const EMAIL = "premera.studio@gmail.com";

function Ornament() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-3">
      <span
        className="block h-px w-[43px]"
        style={{ background: "var(--gold-line)" }}
      />
      <span className="inline-block h-2 w-2 rotate-45 border border-[#A1631A] bg-[#ecd3a9]" />
      <span
        className="block h-px w-[43px]"
        style={{ background: "var(--gold-line)" }}
      />
    </div>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="0.8" fill="currentColor" />
    </svg>
  );
}

const pillars = [
  {
    num: "01",
    title: "Unstitched Suits",
    body: "Premium fabrics, hand-selected for drape and texture — ready to be tailored to your perfect fit.",
  },
  {
    num: "02",
    title: "Ethnic Wear",
    body: "Thoughtfully curated ethnic wear — from festive occasion pieces to everyday elegance, rooted in Indian craft.",
  },
  {
    num: "03",
    title: "Curated Collections",
    body: "Every piece is handpicked for elegance, quality and the quiet confidence it brings.",
  },
];

export default async function Home() {
  const client = createClient();
  const navDoc = await client.getSingle("navigation_links").catch(() => null);
  const navLinks = (navDoc?.data.sidebar_links ?? []).map((item) => ({
    label: item.links.text ?? "",
    href: asLink(item.links) ?? "#",
  }));
  const year = new Date().getFullYear();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PREMERA",
              url: BASE_URL,
              logo: `${BASE_URL}/premera-logo-transparent-hd.png`,
              description:
                "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style.",
              sameAs: ["https://www.instagram.com/premera.in/"],
              contactPoint: {
                "@type": "ContactPoint",
                email: EMAIL,
                contactType: "customer service",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PREMERA",
              url: BASE_URL,
            },
          ]),
        }}
      />
      <Header navLinks={navLinks} />
      <main id="home">
        {/* ── HERO ── */}
        <section
          aria-label="Hero"
          className="relative overflow-hidden"
          style={{ background: "var(--bg-page)" }}
        >
          {/* Light theme: warm radial glow left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 12% 40%, rgba(195,131,45,.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(161,99,26,.08) 0%, transparent 45%)",
            }}
          />

          {/* Dark theme overlay handled via dark: on the section bg */}

          {/* Floating ornaments — always visible, continuous animation */}
          <span
            aria-hidden="true"
            className="animate-float pointer-events-none absolute top-[14%] left-[6%] text-[#A1631A] text-2xl hidden md:block"
            style={{ opacity: 0.35, animationDelay: "0s" }}
          >
            ✦
          </span>
          <span
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute top-[55%] right-[5%] text-[#C3832D] text-xl hidden md:block"
            style={{ opacity: 0.25, animationDelay: "2.5s" }}
          >
            ✳
          </span>
          <span
            aria-hidden="true"
            className="animate-float pointer-events-none absolute bottom-[20%] left-[10%] text-[#A1631A] text-base hidden md:block"
            style={{ opacity: 0.2, animationDelay: "4s" }}
          >
            ◆
          </span>
          <span
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute top-[25%] right-[18%] text-[#C3832D] text-sm hidden lg:block"
            style={{ opacity: 0.18, animationDelay: "1.5s" }}
          >
            ✦
          </span>

          <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center px-5 pb-14 pt-10 md:grid-cols-2 md:gap-14 md:px-10 md:py-20 lg:px-16 lg:py-24">
            {/* ── Copy ── */}
            <div className="">
              <Reveal delay={80}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="block h-px w-6 bg-[#A1631A]" />
                  <span
                    className="text-[9px] font-semibold tracking-[0.17em] uppercase"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Something beautiful is beginning
                  </span>
                </div>
              </Reveal>

              <Reveal delay={180} animation="fade-up">
                <h1
                  className="font-bodoni text-[clamp(52px,8vw,88px)] font-normal leading-[0.93] tracking-[-0.03em]"
                  style={{ color: "var(--text-primary)" }}
                >
                  Grace in
                  <br />
                  every <em className="not-italic text-[#A1631A]">drape.</em>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p
                  className="mt-6 max-w-[390px] text-[13px] leading-[2]"
                  style={{ color: "var(--text-muted)" }}
                >
                  A thoughtful world of ladies&rsquo; suits and ethnic wear,
                  where timeless elegance meets the beauty of getting dressed.
                </p>
              </Reveal>

              <Reveal delay={420}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-overlay group inline-flex min-h-[50px] items-center justify-center gap-3 border border-[#5C2D05] bg-[#5C2D05] px-6 text-[9px] font-semibold tracking-[0.1em] uppercase text-white transition-all duration-200 hover:bg-[#A1631A] hover:border-[#A1631A] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(161,99,26,.4)]"
                  >
                    Discover us on Instagram
                    <span className="text-sm">↗</span>
                  </a>
                  <a
                    href="#our-world"
                    className="inline-flex min-h-[44px] items-center gap-2 text-[10px] tracking-[0.04em] transition hover:text-[#A1631A]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Get to know us
                    <span className="text-[#A1631A]">↓</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={580} animation="fade-in">
                <div
                  className="mt-10 flex items-center gap-2.5 font-cormorant text-[15px] italic"
                  style={{ color: "var(--text-faint)" }}
                >
                  <span className="animate-pulse-gold text-[#A1631A] not-italic text-lg">
                    ✳
                  </span>
                  A little elegance is on its way.
                </div>
              </Reveal>
            </div>

            {/* ── Campaign image frame — mobile ── */}
            <div className="-mx-5 md:hidden">
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/PREMERA_Campaign_450x620.jpg"
                  alt="PREMERA — Grace in Every Drape"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 flex min-h-[48px] items-center justify-between gap-3 px-4 py-3 backdrop-blur-sm"
                  style={{ background: "rgba(251,243,231,0.88)" }}
                >
                  <span className="font-bodoni text-[17px] tracking-[0.12em] text-[#5C2D05]">PREMERA</span>
                  <span className="text-right text-[7px] tracking-[0.11em] uppercase text-[#947457]">An Expression of Elegance</span>
                </div>
              </div>
            </div>

            {/* ── Campaign image frame — desktop ── */}
            <Reveal delay={100} animation="scale-in" className="hidden md:block">
              <div className="relative">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "3/4",
                    maxHeight: "clamp(340px,80vw,640px)",
                  }}
                >
                  <Image
                    src="/PREMERA_Campaign_450x620.jpg"
                    alt="PREMERA — Grace in Every Drape"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[10px] border border-white/20"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex min-h-[48px] items-center justify-between gap-3 px-4 py-3 backdrop-blur-sm"
                    style={{ background: "rgba(251,243,231,0.88)" }}
                  >
                    <span className="font-bodoni text-[17px] tracking-[0.12em] text-[#5C2D05]">PREMERA</span>
                    <span className="text-right text-[7px] tracking-[0.11em] uppercase text-[#947457]">An Expression of Elegance</span>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -right-7 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap text-[8px] tracking-[0.16em] uppercase"
                  style={{ color: "var(--text-faint)" }}
                >
                  The Art of Dressing Beautifully
                </span>
                <span
                  aria-hidden="true"
                  className="animate-pulse-gold absolute -top-4 right-0 text-[22px] text-[#A1631A]"
                >
                  ✳
                </span>
              </div>
            </Reveal>
          </div>

          {/* Scroll cue */}
          <a
            href="#our-world"
            className="absolute bottom-8 left-[8%] hidden items-center gap-3.5 text-[8px] tracking-[0.14em] uppercase transition hover:text-[#A1631A] md:flex"
            style={{ color: "var(--text-faint)" }}
          >
            Scroll to explore
            <span
              className="block h-px w-10"
              style={{ background: "var(--gold-line)" }}
            />
          </a>
        </section>

        {/* ── PILLARS — noticeably different bg for contrast ── */}
        <section
          id="our-world"
          aria-label="What we offer"
          className="px-5 py-16 md:px-10 md:py-24 lg:px-16"
          style={{
            background: "var(--bg-card)",
            borderTop: "2px solid var(--border-subtle)",
          }}
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mb-12 text-center">
              <Ornament />
              <p
                className="mt-5 text-[9px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--text-faint)" }}
              >
                A Note from PREMERA
              </p>
              <h2
                className="mt-5 font-bodoni text-[clamp(32px,5vw,52px)] font-normal leading-[1.08] tracking-[-0.02em]"
                style={{ color: "var(--text-primary)" }}
              >
                Elegance isn&rsquo;t just
                <br />
                what you wear. It&rsquo;s{" "}
                <em className="not-italic text-[#A1631A]">how you feel.</em>
              </h2>
              <p
                className="mx-auto mt-5 max-w-[500px] text-[12px] leading-[2.1]"
                style={{ color: "var(--text-muted)" }}
              >
                PREMERA is a celebration of ladies&rsquo; suits and ethnic wear,
                inspired by the little details that make an outfit feel special.
                We&rsquo;re preparing our first chapter, and we&rsquo;d love for
                you to be part of the journey.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.num} delay={i * 130}>
                  <div
                    className="group relative h-full p-7 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(161,99,26,.14)]"
                    style={{
                      border: "1px solid var(--border-subtle)",
                      background: "var(--bg-page)",
                    }}
                  >
                    <span className="absolute top-2 left-2 h-3 w-3 border-t border-l border-[#C3832D]/35 transition-all duration-300 group-hover:border-[#C3832D]" />
                    <span className="absolute top-2 right-2 h-3 w-3 border-t border-r border-[#C3832D]/35 transition-all duration-300 group-hover:border-[#C3832D]" />
                    <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[#C3832D]/35 transition-all duration-300 group-hover:border-[#C3832D]" />
                    <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[#C3832D]/35 transition-all duration-300 group-hover:border-[#C3832D]" />
                    <span
                      className="block text-[9px] tracking-[0.12em] mb-4"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {p.num}
                    </span>
                    <h3
                      className="font-bodoni text-[20px] tracking-[0.04em] mb-3 transition-colors duration-200 group-hover:text-[#A1631A]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-[12px] leading-[1.9]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 text-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-[10px] tracking-[0.04em] transition hover:text-[#A1631A]"
                style={{ color: "var(--text-secondary)" }}
              >
                Be part of our story <span className="text-[#A1631A]">↗</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── INSTAGRAM CALLOUT — deep teal bg for strong contrast ── */}
        <section
          id="follow-us"
          aria-label="Follow our journey"
          className="relative overflow-hidden px-5 py-16 text-center md:px-10 md:py-24"
          style={{
            background: "#0e3f3d",
            borderTop: "2px solid rgba(195,131,45,.25)",
          }}
        >
          {/* Logo watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/prema-logo-withhout-text-removebg.png"
              alt=""
              width={600}
              height={600}
              className="h-[460px] w-auto max-w-none object-contain select-none"
              style={{ opacity: 0.055 }}
            />
          </div>

          {/* Spinning ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="animate-spin-slow h-[360px] w-[360px] rounded-full border border-dashed border-[#C3832D]/20" />
          </div>

          {/* Floating sparkles */}
          <span
            aria-hidden="true"
            className="animate-float pointer-events-none absolute top-[15%] left-[8%] text-[#C3832D] text-xl"
            style={{ opacity: 0.4, animationDelay: "1s" }}
          >
            ✦
          </span>
          <span
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute bottom-[15%] right-[8%] text-[#F6D68C] text-lg"
            style={{ opacity: 0.3, animationDelay: "3s" }}
          >
            ✳
          </span>
          <span
            aria-hidden="true"
            className="animate-float pointer-events-none absolute top-[60%] left-[20%] text-[#C3832D] text-sm hidden md:block"
            style={{ opacity: 0.2, animationDelay: "5s" }}
          >
            ◆
          </span>

          <div className="relative mx-auto max-w-[430px]">
            <Reveal animation="scale-in">
              <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#C3832D]/50 text-[#F6D68C]">
                <InstagramIcon size={19} />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#C3832D]">
                Our Journey Starts Here
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-4 font-bodoni text-[clamp(34px,6vw,52px)] font-normal leading-[1.08] tracking-[-0.02em] text-[#F5EAD8]">
                First glimpses.
                <br />
                <em className="not-italic text-[#C3832D]">More to come.</em>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mx-auto mt-5 max-w-[345px] text-[12px] leading-[2] text-[#b8a08a]">
                Discover our latest looks, little details, and behind-the-scenes
                moments on Instagram.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-overlay mt-7 inline-flex min-h-[50px] items-center justify-center gap-4 border border-[#C3832D]/60 px-6 text-[9px] font-semibold tracking-[0.085em] uppercase text-[#F5EAD8] transition-all duration-200 hover:bg-[#C3832D] hover:border-[#C3832D] hover:text-white hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(195,131,45,.4)]"
              >
                Follow @premera.in <span className="text-sm">↗</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          aria-label="Contact"
          className="px-5 py-16 text-center md:px-10 md:py-24"
          style={{
            background: "var(--bg-card-alt)",
            borderTop: "2px solid var(--border-subtle)",
          }}
        >
          <div className="mx-auto max-w-[480px]">
            <Reveal>
              <Ornament />
              <p
                className="mt-5 text-[9px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--text-faint)" }}
              >
                We&rsquo;d Love to Hear from You
              </p>
              <h2
                className="mt-4 font-bodoni text-[clamp(36px,6vw,50px)] font-normal leading-[1.1] tracking-[-0.02em]"
                style={{ color: "var(--text-primary)" }}
              >
                Let&rsquo;s stay{" "}
                <em className="not-italic text-[#A1631A]">connected.</em>
              </h2>
              <p
                className="mx-auto mt-5 max-w-[340px] text-[12px] leading-[2]"
                style={{ color: "var(--text-muted)" }}
              >
                Questions, collaborations, or simply want to say hello? Our
                inbox is open.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 text-[clamp(11px,3vw,13px)] font-medium transition hover:text-[#A1631A] break-all"
                style={{ color: "var(--text-secondary)" }}
              >
                {EMAIL} <span className="text-[15px]">↗</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer year={year} />
    </>
  );
}
