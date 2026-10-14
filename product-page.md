# Product Page — Prismic Setup Guide

This file tells you exactly what to create in Prismic to make the product page work at `/products/[uid]`.

---

## Step 1 — Create the Custom Type

1. Go to https://prismic.io → your repository → **Custom Types**
2. Click **Create new**
3. Choose **Repeatable**
4. Set the label: `Product Page`
5. Set the API ID: `product_page` ← must be exactly this
6. Click **Create**

---

## Step 2 — Add fields to the Custom Type

In the Custom Type editor, add the following fields to the **Main** tab.

> Drag fields from the right panel and set the API ID exactly as shown below.

---

### Main tab fields

| Label            | API ID           | Field Type   | Notes                                      |
|------------------|------------------|--------------|--------------------------------------------|
| Product Name     | `name`           | Key Text     | e.g. "Floral Elegance Suit"                |
| Price            | `price`          | Number       | Numeric only, e.g. 1499                    |
| Product Code     | `code`           | Key Text     | e.g. "PR001"                               |
| Description      | `description`    | Key Text     | e.g. "Unstitched 3-piece set"              |
| In Stock         | `in_stock`       | Boolean      | Default: true                              |
| Main Image       | `main_image`     | Image        | The primary hero photo                     |
| Gallery          | `gallery`        | Group        | Repeatable — see sub-fields below          |
| Instagram URL    | `instagram_url`  | Link         | Link to the Instagram reel for this product|
| WhatsApp Number  | `whatsapp_number`| Key Text     | Full number with country code, e.g. `919876543210` (no + or spaces) |

#### Gallery group sub-fields

Inside the `gallery` Group field, add one field:

| Label | API ID  | Field Type |
|-------|---------|------------|
| Image | `image` | Image      |

---

### SEO & Metadata tab fields

Add a new tab called **SEO & Metadata**, then add:

| Label            | API ID             | Field Type | Notes                        |
|------------------|--------------------|------------|------------------------------|
| Meta Title       | `meta_title`       | Key Text   | Page title for search/social |
| Meta Description | `meta_description` | Key Text   | Short page summary           |
| Meta Image       | `meta_image`       | Image      | OG image (1200×630 px ideal) |

---

## Step 3 — Save the Custom Type

Click **Save** in the top right of the Custom Type editor.

---

## Step 4 — Pull the type locally

Run this in your terminal to sync the type to your local project:

```bash
npm run pull-prismic
```

This updates `prismicio-types.d.ts` and creates `customtypes/product_page/index.json`.

---

## Step 5 — Create a product document

1. Go to Prismic dashboard → **Documents**
2. Click **Create new** → select **Product Page**
3. Fill in all fields:

| Field            | Example value                                      |
|------------------|----------------------------------------------------|
| UID (auto slug)  | `floral-elegance-suit`                             |
| Product Name     | Floral Elegance Suit                               |
| Price            | 1499                                               |
| Product Code     | PR001                                              |
| Description      | Unstitched 3-piece set                             |
| In Stock         | ✅ true                                            |
| Main Image       | Upload your main product photo                     |
| Gallery          | Add 1–3 rows, upload one image per row             |
| Instagram URL    | https://www.instagram.com/reel/your-reel-id/       |
| WhatsApp Number  | 919876543210                                       |
| Meta Title       | Floral Elegance Suit — PREMERA                     |
| Meta Description | Unstitched 3-piece floral suit by PREMERA          |
| Meta Image       | Upload a 1200×630 px banner image                  |

4. Click **Save**, then **Publish**

---

## Step 6 — View the page

Your product will be live at:

```
http://localhost:3000/products/floral-elegance-suit
```

The UID in the URL is whatever you set as the document UID in Prismic (auto-generated from the product name, editable).

---

## Notes

- Add as many gallery images as you want — the component renders all of them in a 3-column grid
- The WhatsApp button auto-fills a message with the product name and code
- The Instagram link opens the reel in a new tab
- `in_stock: false` shows a red "Out of stock" tag instead of green
