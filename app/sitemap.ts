import type { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

const BASE_URL = "https://www.premera.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();

  const products = await client.getAllByType("product_page").catch(() => []);

  const productEntries: MetadataRoute.Sitemap = products.map((page) => ({
    url: `${BASE_URL}/products/${page.uid}`,
    lastModified: new Date(page.last_publication_date ?? Date.now()),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...productEntries,
  ];
}
