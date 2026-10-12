import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bodoni",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
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
        url: "/PREMERA_Logo.webp",
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
    images: ["/PREMERA_Logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#F7EDDD",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PREMERA",
  description:
    "PREMERA brings timeless elegance to ladies\u2019 suits and ethnic wear, blending traditional charm with refined style.",
  url: "https://www.premera.in",
  logo: "https://www.premera.in/PREMERE_LOGO_TRANSPARENT.svg",
  sameAs: ["https://www.instagram.com/premera.in/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${bodoni.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-montserrat text-espresso antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LPF7521Q6J"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LPF7521Q6J');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
