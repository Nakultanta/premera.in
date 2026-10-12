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

export const metadata: Metadata = {
  title: "PREMERA — Coming Soon",
  description: "PREMERA — Ladies Suits. Grace in Every Drape. Our new home is coming soon.",
  openGraph: {
    title: "PREMERA — Coming Soon",
    description: "Ladies Suits · Grace in Every Drape",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7EDDD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
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
