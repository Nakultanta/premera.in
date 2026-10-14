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
	/**
	 * label field in *Footer → footer_navigation*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.footer_navigation[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
	
	/**
	 * link field in *Footer → footer_navigation*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.footer_navigation[].link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
	
	/**
	 * group_title field in *Footer → footer_navigation*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.footer_navigation[].group_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	group_title: prismic.KeyTextField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
	/**
	 * logo field in *Footer*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.logo
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	logo: prismic.ImageField<never>;
	
	/**
	 * tagline field in *Footer*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.tagline
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	tagline: prismic.RichTextField;
	
	/**
	 * brand_description field in *Footer*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.brand_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	brand_description: prismic.RichTextField;
	
	/**
	 * instagram_handle field in *Footer*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.instagram_handle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	instagram_handle: prismic.RichTextField;
	
	/**
	 * instagram_link field in *Footer*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.instagram_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	instagram_link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
	
	/**
	 * footer_navigation field in *Footer*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.footer_navigation[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	footer_navigation: prismic.GroupField<Simplify<FooterDocumentDataFooterNavigationItem>>;
	
	/**
	 * copyright_text field in *Footer*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.copyright_text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	copyright_text: prismic.RichTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

/**
 * Item in *Header → menu_items*
 */
export interface HeaderDocumentDataMenuItemsItem {
	/**
	 * label field in *Header → menu_items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.menu_items[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
	
	/**
	 * link field in *Header → menu_items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.menu_items[].link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
	/**
	 * show Header field in *Header*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: true
	 * - **API ID Path**: header.show_header
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/boolean
	 */
	show_header: prismic.BooleanField;
	
	/**
	 * logo field in *Header*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.logo
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	logo: prismic.ImageField<never>;
	
	/**
	 * announcement_text field in *Header*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Optional announcement strip
	 * - **API ID Path**: header.announcement_text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	announcement_text: prismic.KeyTextField;
	
	/**
	 * menu_items field in *Header*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.menu_items[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	menu_items: prismic.GroupField<Simplify<HeaderDocumentDataMenuItemsItem>>;
	
	/**
	 * instagram_link field in *Header*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.instagram_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	instagram_link: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Primary" | "Secondary">>;
	
	/**
	 * header_cta_label field in *Header*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.header_cta_label
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	header_cta_label: prismic.KeyTextField;
	
	/**
	 * header_cta_link field in *Header*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.header_cta_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	header_cta_link: prismic.ImageField<never>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HeaderDocumentData>, "header", Lang>;

type HomePageDocumentDataSlicesSlice = never

/**
 * Content for HomePage documents
 */
interface HomePageDocumentData {
	/**
	 * Slice Zone field in *HomePage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice>;/**
	 * Meta Title field in *HomePage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: home_page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *HomePage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: home_page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *HomePage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;

/**
 * Item in *NavigationLinks → sidebarLinks*
 */
export interface NavigationLinksDocumentDataSidebarLinksItem {
	/**
	 * links field in *NavigationLinks → sidebarLinks*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation_links.sidebar_links[].links
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	links: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for NavigationLinks documents
 */
interface NavigationLinksDocumentData {
	/**
	 * sidebarLinks field in *NavigationLinks*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation_links.sidebar_links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	sidebar_links: prismic.GroupField<Simplify<NavigationLinksDocumentDataSidebarLinksItem>>;
}

/**
 * NavigationLinks document from Prismic
 *
 * - **API ID**: `navigation_links`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationLinksDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<NavigationLinksDocumentData>, "navigation_links", Lang>;

/**
 * Item in *ProductPage → gallery*
 */
export interface ProductPageDocumentDataGalleryItem {
	image: prismic.ImageField<never>;
}

/**
 * Content for ProductPage documents
 */
interface ProductPageDocumentData {
	name: prismic.KeyTextField;
	price: prismic.NumberField;
	code: prismic.KeyTextField;
	description: prismic.KeyTextField;
	in_stock: prismic.BooleanField;
	main_image: prismic.ImageField<never>;
	gallery: prismic.GroupField<Simplify<ProductPageDocumentDataGalleryItem>>;
	instagram_url: prismic.LinkField;
	whatsapp_number: prismic.KeyTextField;
	meta_title: prismic.KeyTextField;
	meta_description: prismic.KeyTextField;
	meta_image: prismic.ImageField<never>;
}

/**
 * ProductPage document from Prismic
 *
 * - **API ID**: `product_page`
 * - **Repeatable**: `true`
 */
export type ProductPageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ProductPageDocumentData>, "product_page", Lang>;

export type AllDocumentTypes = FooterDocument | HeaderDocument | HomePageDocument | NavigationLinksDocument | ProductPageDocument;

/**
 * Primary content in *CommingSoonBanner → Default → Primary*
 */
export interface CommingSoonBannerSliceDefaultPrimary {
	/**
	 * heading1 field in *CommingSoonBanner → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Ladies’ Suits & Ethnic Wear
	 * - **API ID Path**: comming_soon_banner.default.primary.heading1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	heading1: prismic.KeyTextField;
	
	/**
	 * heroImage field in *CommingSoonBanner → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: comming_soon_banner.default.primary.hero_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	hero_image: prismic.ImageField<never>;
	
	/**
	 * OptionalBorderImage field in *CommingSoonBanner → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: comming_soon_banner.default.primary.optional_border_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	optional_border_image: prismic.ImageField<never>;
	
	/**
	 * heading2 field in *CommingSoonBanner → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Grace in Every Drape
	 * - **API ID Path**: comming_soon_banner.default.primary.heading2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	heading2: prismic.KeyTextField;
	
	/**
	 * heading3 field in *CommingSoonBanner → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Timeless elegance crafted for women who carry grace in every step.
	 * - **API ID Path**: comming_soon_banner.default.primary.heading3
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	heading3: prismic.KeyTextField;
	
	/**
	 * heading4 field in *CommingSoonBanner → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: comming_soon_banner.default.primary.heading4
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	heading4: prismic.KeyTextField;
}

/**
 * Default variation for CommingSoonBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CommingSoonBannerSliceDefault = prismic.SharedSliceVariation<"default", Simplify<CommingSoonBannerSliceDefaultPrimary>, never>;

/**
 * Slice variation for *CommingSoonBanner*
 */
type CommingSoonBannerSliceVariation = CommingSoonBannerSliceDefault

/**
 * CommingSoonBanner Shared Slice
 *
 * - **API ID**: `comming_soon_banner`
 * - **Description**: CommingSoonBanner
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CommingSoonBannerSlice = prismic.SharedSlice<"comming_soon_banner", CommingSoonBannerSliceVariation>;

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
			ProductPageDocumentDataGalleryItem,
			AllDocumentTypes,
			CommingSoonBannerSlice,
			CommingSoonBannerSliceDefaultPrimary,
			CommingSoonBannerSliceVariation,
			CommingSoonBannerSliceDefault
		}
	}
}