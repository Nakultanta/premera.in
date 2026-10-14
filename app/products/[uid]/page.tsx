import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductPage from "@/app/components/ProductPage";

type Props = { params: Promise<{ uid: string }> };

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
    return {
      title: d.meta_title || d.name || undefined,
      description: d.meta_description || d.description || undefined,
      openGraph: {
        images: d.meta_image?.url ? [{ url: d.meta_image.url }] : undefined,
      },
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
    }));

  return (
    <>
      <Header />
      <ProductPage
        name={d.name ?? ""}
        price={d.price ?? 0}
        code={d.code ?? ""}
        description={d.description ?? ""}
        in_stock={d.in_stock ?? true}
        main_image={{ url: d.main_image?.url ?? "", alt: d.main_image?.alt ?? "" }}
        gallery={gallery}
        instagram_url={"url" in d.instagram_url && d.instagram_url.url ? d.instagram_url.url : "https://www.instagram.com/premera.in/"}
        whatsapp_number={d.whatsapp_number ?? ""}
      />
      <Footer />
    </>
  );
}
