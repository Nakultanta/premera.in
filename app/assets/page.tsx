type Asset = { name: string; file: string; preview?: string };
type Category = { title: string; assets: Asset[] };

const categories: Category[] = [
  {
    title: "Logos",
    assets: [
      { name: "PREMERA Logo (WebP)", file: "/PREMERA_Logo.webp", preview: "/PREMERA_Logo.webp" },
      { name: "Premera Logo (PNG)", file: "/Premera_logo.png", preview: "/Premera_logo.png" },
      { name: "Logo Approved Concept", file: "/PREMERA_Logo_Approved_Concept.png", preview: "/PREMERA_Logo_Approved_Concept.png" },
      { name: "Logo Transparent HD", file: "/premera-logo-transparent-hd.png", preview: "/premera-logo-transparent-hd.png" },
      { name: "Logo Without Text", file: "/prema-logo-withhout-text.png", preview: "/prema-logo-withhout-text.png" },
      { name: "Logo Without Text (No BG)", file: "/prema-logo-withhout-text-removebg.png", preview: "/prema-logo-withhout-text-removebg.png" },
      { name: "Round Logo", file: "/RoundLogo.png", preview: "/RoundLogo.png" },
      { name: "Logo SVG Transparent", file: "/PREMERE_LOGO_TRANSPARENT.svg", preview: "/PREMERE_LOGO_TRANSPARENT.svg" },
      { name: "Premera (PNG)", file: "/Premera Assets/Premera.png", preview: "/Premera Assets/Premera.png" },
    ],
  },
  {
    title: "Campaign Images",
    assets: [
      { name: "Campaign 450×620", file: "/PREMERA_Campaign_450x620.jpg", preview: "/PREMERA_Campaign_450x620.jpg" },
      { name: "Facebook / X Banner 1500×500", file: "/PREMERA_Facebook_X_Banner_1500x500.jpg", preview: "/PREMERA_Facebook_X_Banner_1500x500.jpg" },
      { name: "Instagram / Facebook Post 1080×1080", file: "/PREMERA_Instagram_Facebook_Post_1080x1080.jpg", preview: "/PREMERA_Instagram_Facebook_Post_1080x1080.jpg" },
      { name: "Metadata Banner 1200×630", file: "/PREMERA_Metadata_Banner_1200x630.jpg", preview: "/PREMERA_Metadata_Banner_1200x630.jpg" },
      { name: "Meta Image", file: "/Premera Assets/metaImage.jpg", preview: "/Premera Assets/metaImage.jpg" },
    ],
  },
  {
    title: "Brand Kit — Master",
    assets: [
      { name: "Logo Transparent HD", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/MASTER/premera-logo-transparent-hd.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/MASTER/premera-logo-transparent-hd.png" },
      { name: "Updated Logo Concept 1254px", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/MASTER/PREMERA_Updated_Logo_Concept_1254px.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/MASTER/PREMERA_Updated_Logo_Concept_1254px.png" },
      { name: "Logo Without Text (No BG)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/MASTER/prema-logo-withhout-text-removebg.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/MASTER/prema-logo-withhout-text-removebg.png" },
    ],
  },
  {
    title: "Brand Kit — PNG Crops",
    assets: [
      { name: "Full Artwork (Original BG)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/01_full_artwork_transparent_original_bg.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/01_full_artwork_transparent_original_bg.png" },
      { name: "Icon Monogram Peacock", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/02_icon_monogram_peacock_original_bg.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/02_icon_monogram_peacock_original_bg.png" },
      { name: "Wordmark PREMERA", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/03_wordmark_PREMERA_original_bg.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/03_wordmark_PREMERA_original_bg.png" },
      { name: "Descriptor — Ladies Suits", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/04_descriptor_ladies_suits_original_bg.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/04_descriptor_ladies_suits_original_bg.png" },
      { name: "Tagline — Grace in Every Drape", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/05_tagline_grace_in_every_drape_original_bg.png", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/PNG_Crops_Original_Background/05_tagline_grace_in_every_drape_original_bg.png" },
    ],
  },
  {
    title: "Brand Kit — SVG",
    assets: [
      { name: "Logo Raster Wrapper", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/SVG/00_PREMERA_logo_raster_wrapper.svg", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/SVG/00_PREMERA_logo_raster_wrapper.svg" },
      { name: "Full Artwork Raster Wrapper", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/SVG/01_full_artwork_raster_wrapper.svg", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/SVG/01_full_artwork_raster_wrapper.svg" },
      { name: "Logo Transparent SVG", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/SVG/PREMERE_LOGO_TRANSPARENT.svg", preview: "/Premera Assets/PREMERA_Brand_Asset_Kit/SVG/PREMERE_LOGO_TRANSPARENT.svg" },
    ],
  },
  {
    title: "Brand Reference",
    assets: [
      { name: "Brand Palette (CSV)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/brand_palette.csv" },
      { name: "Brand Palette (JSON)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/brand_palette.json" },
      { name: "Brand Guidelines (MD)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/brand_guidelines.md" },
      { name: "Fonts & Licences (MD)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/fonts_and_licences.md" },
      { name: "Name Clearance Notes (MD)", file: "/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/name_clearance_notes.md" },
    ],
  },
  {
    title: "Favicons",
    assets: [
      { name: "Favicon 16×16", file: "/favicon-16x16.png", preview: "/favicon-16x16.png" },
      { name: "Favicon 32×32", file: "/favicon-32x32.png", preview: "/favicon-32x32.png" },
      { name: "Favicon ICO", file: "/favicon.ico", preview: "/favicon.ico" },
      { name: "Apple Touch Icon", file: "/apple-touch-icon.png", preview: "/apple-touch-icon.png" },
      { name: "Android Chrome 192×192", file: "/android-chrome-192x192.png", preview: "/android-chrome-192x192.png" },
      { name: "Android Chrome 512×512", file: "/android-chrome-512x512.png", preview: "/android-chrome-512x512.png" },
    ],
  },
];

function AssetCard({ asset }: { asset: Asset }) {
  const isImage = asset.preview && /\.(png|jpg|jpeg|webp|svg|ico)$/i.test(asset.preview);
  return (
    <div
      className="flex flex-col rounded-xl border overflow-hidden"
      style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
    >
      {isImage ? (
        <div
          className="flex items-center justify-center h-36 p-3"
          style={{ background: "var(--bg-card-alt)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset.preview} alt={asset.name} className="max-h-full max-w-full object-contain" />
        </div>
      ) : (
        <div
          className="flex items-center justify-center h-36 text-4xl"
          style={{ background: "var(--bg-card-alt)", color: "var(--text-faint)" }}
        >
          📄
        </div>
      )}
      <div className="flex items-center justify-between gap-2 px-3 py-2">
        <span className="text-xs font-montserrat truncate" style={{ color: "var(--text-secondary)" }}>
          {asset.name}
        </span>
        <a
          href={asset.file}
          download
          className="shrink-0 p-1.5 rounded-lg transition-colors"
          style={{ color: "var(--color-antique-gold)" }}
          title={`Download ${asset.name}`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function AssetsPage() {
  return (
    <main
      className="min-h-screen px-6 py-12 font-montserrat"
      style={{ background: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "var(--color-antique-gold)" }}>
            Brand Resources
          </p>
          <h1 className="font-bodoni text-4xl md:text-5xl mb-3" style={{ color: "var(--text-primary)" }}>
            PREMERA Assets
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Download logos, campaign images, brand kit files and more.
          </p>
          <div className="mx-auto mt-4 h-px w-24" style={{ background: "var(--gold-line)" }} />
        </div>


          <section key={cat.title} className="mb-12">
            <h2
              className="font-cormorant text-xl italic mb-4 pb-2 border-b"
              style={{ color: "var(--text-secondary)", borderColor: "var(--border-subtle)" }}
            >
              {cat.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.assets.map((asset) => (
                <AssetCard key={asset.file} asset={asset} />
              ))}
            </div>
          </section>
        ))}

        {/* Brand Kit HTML Viewer */}
        <section className="mb-12">
          <h2
            className="font-cormorant text-xl italic mb-4 pb-2 border-b"
            style={{ color: "var(--text-secondary)", borderColor: "var(--border-subtle)" }}
          >
            Brand Kit Reference
          </h2>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border-subtle)" }}>
            <iframe
              src="/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/index.html"
              className="w-full"
              style={{ height: "680px", border: "none" }}
              title="PREMERA Brand Kit Reference"
            />
          </div>
          <div className="mt-2 flex justify-end">
            <a
              href="/Premera Assets/PREMERA_Brand_Asset_Kit/Brand_Reference/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline"
              style={{ color: "var(--color-antique-gold)" }}
            >
              Open in new tab ↗
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
