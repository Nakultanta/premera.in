import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };


type PickContentRelationshipFieldData<
	TRelationship extends prismic.CustomTypeModelFetchCustomTypeLevel1 | prismic.CustomTypeModelFetchCustomTypeLevel2 | prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2,
	TData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.NestedGroupField | prismic.SliceZone>,
	TLang extends string
> = |
	// Content relationship fields
	{
		[TSubRelationship in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchContentRelationshipLevel1
		> as TSubRelationship["id"]]:
			ContentRelationshipFieldWithData<TSubRelationship["customtypes"], TLang>;
	} &
	// Group
	{
		[TGroup in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2
		> as TGroup["id"]]:
			TData[TGroup["id"]] extends prismic.GroupField<infer TGroupData>
				? prismic.GroupField<PickContentRelationshipFieldData<TGroup, TGroupData, TLang>>
				: never
	} &
	// Other fields
	{
		[TFieldKey in Extract<TRelationship["fields"][number], string>]:
			TFieldKey extends keyof TData ? TData[TFieldKey] : never;
	};

type ContentRelationshipFieldWithData<
	TCustomType extends readonly (prismic.CustomTypeModelFetchCustomTypeLevel1 | string)[] | readonly (prismic.CustomTypeModelFetchCustomTypeLevel2 | string)[],
	TLang extends string = string
> = {
	[ID in Exclude<TCustomType[number], string>["id"]]:
		prismic.ContentRelationshipField<
			ID,
			TLang,
			PickContentRelationshipFieldData<
				Extract<TCustomType[number], { id: ID }>,
				Extract<prismic.Content.AllDocumentTypes, { type: ID }>["data"],
				TLang
			>
		>
}[Exclude<TCustomType[number], string>["id"]];

/**
 * Item in *Footer → footer_navigation*
 */
export interface FooterDocumentDataFooterNavigationItem {
	label: prismic.KeyTextField;
	link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
	group_title: prismic.KeyTextField;
}

interface FooterDocumentData {
	logo: prismic.ImageField<never>;
	tagline: prismic.RichTextField;
	brand_description: prismic.RichTextField;
	instagram_handle: prismic.RichTextField;
	instagram_link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
	footer_navigation: prismic.GroupField<Simplify<FooterDocumentDataFooterNavigationItem>>;
	copyright_text: prismic.RichTextField;
}

export type FooterDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

export interface HeaderDocumentDataMenuItemsItem {
	label: prismic.KeyTextField;
	link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
}

interface HeaderDocumentData {
	show_header: prismic.BooleanField;
	logo: prismic.ImageField<never>;
	announcement_text: prismic.KeyTextField;
	menu_items: prismic.GroupField<Simplify<HeaderDocumentDataMenuItemsItem>>;
	instagram_link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
	header_cta_label: prismic.KeyTextField;
	header_cta_link: prismic.ImageField<never>;
}

export type HeaderDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HeaderDocumentData>, "header", Lang>;

type HomePageDocumentDataSlicesSlice = never;

interface HomePageDocumentData {
	slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice>;
	meta_title: prismic.KeyTextField;
	meta_description: prismic.KeyTextField;
	meta_image: prismic.ImageField<never>;
}

export type HomePageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;

export interface NavigationLinksDocumentDataSidebarLinksItem {
	links: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

interface NavigationLinksDocumentData {
	sidebar_links: prismic.GroupField<Simplify<NavigationLinksDocumentDataSidebarLinksItem>>;
}

export type NavigationLinksDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<NavigationLinksDocumentData>, "navigation_links", Lang>;

type ProductPageDocumentDataSlicesSlice = ProductGallerySlice | InstagramEmbedSlice | ProductHeroSlice;

interface ProductPageDocumentData {
	name: prismic.KeyTextField;
	code: prismic.KeyTextField;
	suit_type: prismic.KeyTextField;
	price: prismic.NumberField;
	in_stock: prismic.BooleanField;
	main_image: prismic.ImageField<never>;
	slices: prismic.SliceZone<ProductPageDocumentDataSlicesSlice>;
	meta_title: prismic.KeyTextField;
	meta_description: prismic.KeyTextField;
	meta_image: prismic.ImageField<never>;
}

export type ProductPageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ProductPageDocumentData>, "product_page", Lang>;

export type AllDocumentTypes = FooterDocument | HeaderDocument | HomePageDocument | NavigationLinksDocument | ProductPageDocument;

// ── CommingSoonBanner ──────────────────────────────────────────────────────────

export interface CommingSoonBannerSliceDefaultPrimary {
	heading1: prismic.KeyTextField;
	hero_image: prismic.ImageField<never>;
	optional_border_image: prismic.ImageField<never>;
	heading2: prismic.KeyTextField;
	heading3: prismic.KeyTextField;
	heading4: prismic.KeyTextField;
}

export type CommingSoonBannerSliceDefault = prismic.SharedSliceVariation<"default", Simplify<CommingSoonBannerSliceDefaultPrimary>, never>;
type CommingSoonBannerSliceVariation = CommingSoonBannerSliceDefault;
export type CommingSoonBannerSlice = prismic.SharedSlice<"comming_soon_banner", CommingSoonBannerSliceVariation>;

// ── InstagramEmbed ─────────────────────────────────────────────────────────────

export interface InstagramEmbedSliceDefaultPrimary {
	heading: prismic.KeyTextField;
	reel_url: prismic.LinkField;
	caption: prismic.KeyTextField;
	sub_caption: prismic.KeyTextField;
}

export type InstagramEmbedSliceDefault = prismic.SharedSliceVariation<"default", Simplify<InstagramEmbedSliceDefaultPrimary>, never>;
type InstagramEmbedSliceVariation = InstagramEmbedSliceDefault;
export type InstagramEmbedSlice = prismic.SharedSlice<"instagram_embed", InstagramEmbedSliceVariation>;

// ── ProductGallery ─────────────────────────────────────────────────────────────

export interface ProductGallerySliceDefaultPrimary {
	heading: prismic.KeyTextField;
}

export interface ProductGallerySliceDefaultItem {
	image: prismic.ImageField<never>;
	caption: prismic.KeyTextField;
}

export type ProductGallerySliceDefault = prismic.SharedSliceVariation<"default", Simplify<ProductGallerySliceDefaultPrimary>, Simplify<ProductGallerySliceDefaultItem>>;
type ProductGallerySliceVariation = ProductGallerySliceDefault;
export type ProductGallerySlice = prismic.SharedSlice<"product_gallery", ProductGallerySliceVariation>;

// ── ProductHero ────────────────────────────────────────────────────────────────

export interface ProductHeroSliceDefaultPrimary {
	card_heading: prismic.KeyTextField;
	card_details: prismic.RichTextField;
	cta_label: prismic.KeyTextField;
	cta_link: prismic.LinkField;
}

export type ProductHeroSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ProductHeroSliceDefaultPrimary>, never>;
type ProductHeroSliceVariation = ProductHeroSliceDefault;
export type ProductHeroSlice = prismic.SharedSlice<"product_hero", ProductHeroSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			FooterDocument,
			FooterDocumentData,
			FooterDocumentDataFooterNavigationItem,
			HeaderDocument,
			HeaderDocumentData,
			HeaderDocumentDataMenuItemsItem,
			HomePageDocument,
			HomePageDocumentData,
			HomePageDocumentDataSlicesSlice,
			NavigationLinksDocument,
			NavigationLinksDocumentData,
			NavigationLinksDocumentDataSidebarLinksItem,
			ProductPageDocument,
			ProductPageDocumentData,
			ProductPageDocumentDataSlicesSlice,
			AllDocumentTypes,
			CommingSoonBannerSlice,
			CommingSoonBannerSliceDefaultPrimary,
			CommingSoonBannerSliceVariation,
			CommingSoonBannerSliceDefault,
			InstagramEmbedSlice,
			InstagramEmbedSliceDefaultPrimary,
			InstagramEmbedSliceVariation,
			InstagramEmbedSliceDefault,
			ProductGallerySlice,
			ProductGallerySliceDefaultPrimary,
			ProductGallerySliceDefaultItem,
			ProductGallerySliceVariation,
			ProductGallerySliceDefault,
			ProductHeroSlice,
			ProductHeroSliceDefaultPrimary,
			ProductHeroSliceVariation,
			ProductHeroSliceDefault,
		}
	}
}
