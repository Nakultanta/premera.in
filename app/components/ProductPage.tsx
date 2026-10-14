"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Image } from "primereact/image";

type GalleryImage = { url: string; alt?: string };

type ProductPageProps = {
  name: string;
  price: number;
  code: string;
  description: string;
  in_stock: boolean;
  main_image: GalleryImage;
  gallery: GalleryImage[];
  instagram_url: string;
  whatsapp_number: string;
};

function Ornament() {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-[#e8d5bc]" />
      <span className="h-2 w-2 rotate-45 border border-[#b87a30] bg-[#e8c28a]" />
      <span className="h-px flex-1 bg-[#e8d5bc]" />
    </div>
  );
}

export default function ProductPage({
  name,
  price,
  code,
  description,
  in_stock,
  main_image,
  gallery,
  instagram_url,
  whatsapp_number,
}: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(main_image.url);

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in ${name} (${code}). Please confirm availability, shipping charges and total price.`
  );
  const whatsappUrl = `https://wa.me/${whatsapp_number}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#f7f3ee] px-4 py-7 font-sans text-[#171717]">
      <article className="mx-auto max-w-[760px] rounded-3xl border border-[#e5e5e5] bg-white p-5">

        {/* Hero image */}
        <div className="relative overflow-hidden rounded-[20px] bg-[#f1eeee]" style={{ aspectRatio: "1/1" }}>
          <Image
            src={selectedImage}
            alt={name}
            imageClassName="w-full h-full object-cover"
            preview
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white">
            {code}
          </span>
        </div>

        {/* Product info */}
        <section className="pb-3 pt-6">
          <h1 className="mb-4 text-[clamp(25px,4vw,36px)] font-bold leading-tight">{name}</h1>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[34px] font-bold text-[#a17c47]">
              ₹{price.toLocaleString("en-IN")}
            </span>
            <Tag
              value={in_stock ? "In stock" : "Out of stock"}
              severity={in_stock ? "success" : "danger"}
              rounded
            />
          </div>
          <p className="mt-4 text-[17px] leading-relaxed text-[#686868]">
            Product code: {code} · {description}
          </p>
        </section>

        <Ornament />

        {/* Instagram reel */}
        <section className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold">Watch the suit in motion</h2>
          <a
            href={instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${name} on Instagram`}
            className="flex flex-col items-center gap-4 rounded-[22px] bg-[#f3f3f3] px-5 py-7 text-center text-inherit no-underline transition hover:bg-[#ececec]"
          >
            <span className="grid h-[50px] w-[50px] place-items-center rounded-full bg-[#111] text-white">
              <i className="pi pi-play ml-[3px] text-lg" />
            </span>
            <strong className="text-[23px] leading-snug">See the fabric, print and dupatta</strong>
            <span className="max-w-[460px] text-[17px] leading-relaxed text-[#666]">
              Watch the outfit in motion to explore its fabric, print and detailing.
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              Watch on Instagram <i className="pi pi-external-link" />
            </span>
          </a>
        </section>

        {/* Gallery */}
        {gallery.length > 0 && (
          <section className="mt-7">
            <h2 className="mb-4 text-2xl font-semibold">Product gallery</h2>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setSelectedImage(img.url)}
                  aria-label={`View product image ${i + 1}`}
                  aria-pressed={selectedImage === img.url}
                  className={`aspect-[3/4] overflow-hidden rounded-[20px] border-2 bg-[#f1eeee] transition ${
                    selectedImage === img.url ? "border-[#a17c47]" : "border-transparent"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt || `${name} view ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-[22px] border border-[#dedede] p-5 text-inherit no-underline"
        >
          <div className="flex items-center gap-3 text-[23px] font-semibold">
            <i className="pi pi-comment text-2xl" />
            WhatsApp to Order
          </div>
          <p className="my-3 text-[17px] leading-relaxed text-[#666]">
            Check availability and confirm the total price, shipping and payment details.
          </p>
          <Button
            label="Enquire on WhatsApp"
            icon="pi pi-whatsapp"
            type="button"
            className="!bg-[#218c51] !border-[#218c51] hover:!bg-[#176c3d] hover:!border-[#176c3d]"
          />
        </a>

        <p className="mt-5 text-[15px] leading-relaxed text-[#777]">
          Actual colour may vary slightly due to photography lighting. All prices are inclusive of GST.
        </p>
      </article>
    </main>
  );
}
