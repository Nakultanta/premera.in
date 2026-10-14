import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductPage from "@/app/components/ProductPage";

type Props = { params: Promise<{ uid: string }> };

const BASE_URL = "https://www.premera.in";

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("product_page");
  return pages.map((page) => ({ uid: page.uid }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { uid } = await params;
  try {
    const client = createClient();
    const page = await client.getByUID("product_page", uid);
    const d = page.data;

    const title = d.meta_title || d.name || "Product";
    const description =
      d.meta_description ||
      [d.suit_type, d.price ? `₹${Number(d.price).toLocaleString("en-IN")}` : null]
        .filter(Boolean)
        .join(" · ") ||
      "Elegant ladies\u2019 suit by PREMERA.";
    const ogImage = d.meta_image?.url || d.main_image?.url;
    const canonical = `${BASE_URL}/products/${uid}`;

    return {
      title,
      description,
      alternates: { canonical },
      keywords: [
        d.name,
        d.suit_type,
        d.code,
        "ladies suit",
        "ethnic wear",
        "PREMERA",
        "Indian fashion",
      ].filter(Boolean) as string[],
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "PREMERA",
        type: "website",
        locale: "en_IN",
        images: ogImage
          ? [{ url: ogImage, width: 1200, height: 630, alt: d.name ?? "PREMERA product" }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ogImage ? [ogImage] : undefined,
      },
      robots: { index: true, follow: true },
    };
  } catch {
    return {};
  }
}

export default async function ProductRoute({ params }: Props) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("product_page", uid).catch(() => null);

  if (!page) notFound();

  const d = page.data;

  const gallery = (d.gallery ?? [])
    .filter((item) => !!(item.image as { url?: string | null })?.url)
    .map((item) => ({
      url: (item.image as { url: string }).url,
      alt: (item.image as { alt?: string }).alt,
      caption: (item as { caption?: string }).caption,
    }));

  const instagramUrl =
    d.instagram_url && "url" in d.instagram_url && d.instagram_url.url
      ? d.instagram_url.url
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: d.name,
    description: d.suit_type ?? d.meta_description ?? undefined,
    sku: d.code ?? undefined,
    image: [d.main_image?.url, ...gallery.map((g) => g.url)].filter(Boolean),
    brand: { "@type": "Brand", name: "PREMERA" },
    url: `${BASE_URL}/products/${uid}`,
    ...(d.price
      ? {
          offers: {
            "@type": "Offer",
            price: d.price,
            priceCurrency: "INR",
            availability: d.in_stock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            url: `${BASE_URL}/products/${uid}`,
            seller: { "@type": "Organization", name: "PREMERA" },
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ProductPage
        name={d.name ?? undefined}
        code={d.code ?? undefined}
        suit_type={d.suit_type ?? undefined}
        price={d.price ?? undefined}
        in_stock={d.in_stock ?? undefined}
        main_image={d.main_image?.url ? { url: d.main_image.url, alt: d.main_image.alt ?? "" } : undefined}
        instagram_section_heading={d.instagram_section_heading ?? undefined}
        instagram_url={instagramUrl}
        gallery={gallery}
        slices={d.slices}
      />
      <Footer />
    </>
  );
}
