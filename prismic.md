# Prismic — Workflow Guide

This file documents how to manage content in Prismic for the PREMERA website.

---

## 1. Access your Prismic dashboard

Go to https://prismic.io and log in. Your repository is linked in `slicemachine.config.json`.

---

## 2. Custom Types

Custom Types define the structure of your content. There are two kinds:

- **Single** — only one document exists (e.g. home page, site settings)
- **Repeatable** — many documents of the same type (e.g. product pages)

### Where to manage them
- Locally: `customtypes/<type_id>/index.json`
- In Prismic dashboard: Custom Types tab

### After editing a Custom Type in Prismic dashboard
Always pull the latest changes to keep your local types in sync:

```bash
npm run pull-prismic
```

This updates `prismicio-types.d.ts` and `customtypes/`.

---

## 3. Slices

Slices are reusable content blocks used inside a Slice Zone on a page.

### Where to manage them
- Locally: `slices/<SliceName>/`
  - `index.tsx` — the React component
  - `model.json` — the field schema

### Creating a new Slice
1. Run Slice Machine: `npm run slicemachine`
2. Open http://localhost:9999 in your browser
3. Create the Slice, add fields, save
4. Push to Prismic from the Slice Machine UI
5. Add the Slice to the relevant Custom Type in Prismic dashboard

### After editing a Slice model
Pull changes to sync types:

```bash
npm run pull-prismic
```

---

## 4. Documents (Content)

Documents are actual content entries created from a Custom Type.

### Creating a document
1. Go to Prismic dashboard → Documents
2. Click "Create new" and choose the Custom Type
3. Fill in all fields
4. Click **Save**, then **Publish**

### Editing a document
1. Open the document in Prismic dashboard
2. Make changes
3. Click **Save**, then **Publish**

> Changes only go live after you click **Publish**.

---

## 5. Current Custom Types

| API ID         | Type        | Route                  | Notes                        |
|----------------|-------------|------------------------|------------------------------|
| `home_page`    | Single      | `/`                    | Landing page slices + SEO    |
| `product_page` | Repeatable  | `/products/[uid]`      | One document per product     |

---

## 6. Deploying content changes

Content changes in Prismic are live immediately after publishing (the site uses `force-dynamic` on the home page).

For product pages (which use `generateStaticParams`), trigger a redeploy or use Prismic's webhook to auto-revalidate on publish.

---

## 7. Quick reference — field types

| Prismic field type | Use for                          |
|--------------------|----------------------------------|
| Text (Key Text)    | Short strings, names, codes      |
| Rich Text          | Formatted paragraphs             |
| Number             | Prices, quantities               |
| Boolean            | Toggles (e.g. in_stock)          |
| Image              | Photos, logos                    |
| Link               | URLs, Instagram links            |
| Group              | Repeatable rows (e.g. gallery)   |
| Select             | Dropdown options                 |

---

## 8. Environment variables

Make sure these are set in `.env.local`:

```
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-repo-name
```

Check `prismicio.ts` for the exact variable name used.
