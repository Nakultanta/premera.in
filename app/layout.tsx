import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bodoni",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const BASE_URL = "https://www.premera.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PREMERA | Elegant Ladies\u2019 Suits & Ethnic Wear",
    template: "%s | PREMERA",
  },
  description:
    "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style. Discover a new expression of grace.",
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "PREMERA | Elegant Ladies\u2019 Suits & Ethnic Wear",
    description:
      "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style. Discover a new expression of grace.",
    url: BASE_URL,
    siteName: "PREMERA",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/PREMERA_Logo.webp", width: 1200, height: 630, alt: "PREMERA \u2014 Elegant Ladies\u2019 Suits & Ethnic Wear" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PREMERA | Elegant Ladies\u2019 Suits & Ethnic Wear",
    description:
      "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style. Discover a new expression of grace.",
    images: ["/PREMERA_Logo.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: ["ladies suits", "ethnic wear", "Indian fashion", "unstitched suits", "PREMERA", "women fashion India"],
  authors: [{ name: "PREMERA" }],
  creator: "PREMERA",
};

export const viewport: Viewport = { themeColor: "#F7EDDD" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PREMERA",
  description: "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style.",
  url: "https://www.premera.in",
  logo: "https://www.premera.in/premera-logo-transparent-hd.png",
  sameAs: ["https://www.instagram.com/premera.in/"],
};

// Inline script — runs before paint; light is default, dark only if explicitly saved
const themeScript = `
(function(){
  try {
    var raw = localStorage.getItem('premera-theme');
    if (raw) {
      var d = JSON.parse(raw);
      if (Date.now() < d.expires && d.value === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${bodoni.variable} ${cormorant.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Dark mode — must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-montserrat text-espresso antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LPF7521Q6J" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LPF7521Q6J');
        `}</Script>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
