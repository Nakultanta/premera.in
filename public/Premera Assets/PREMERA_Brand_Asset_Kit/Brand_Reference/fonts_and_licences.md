# Fonts and licences — PREMERA

These Google Fonts are the **recommended substitutes for rebuilding the design**, not verified identifications of the font in the supplied raster logo. Select the desired weights from the official Google Fonts pages and retain the downloaded license notice.

| Use | Family / style | Official page | Notes |
|---|---|---|---|
| Wordmark / display | [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda), SemiBold 600 | Google Fonts specimen | High-contrast luxury serif; likely closest starting point for the lettering |
| Descriptor / general sans | [Montserrat](https://fonts.google.com/specimen/Montserrat), Medium 500 | Google Fonts specimen | Uppercase and tracking for “LADIES SUITS” and support copy |
| Tagline | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), Medium Italic 500 | Google Fonts specimen | Elegant editorial italic for “Grace in Every Drape” |

## License notes
Google states that its fonts are available under open-source licenses and may be used in commercial and non-commercial projects: https://developers.google.com/fonts. The current Google Fonts project guide states that accepted families are licensed under the SIL Open Font License v1.1: https://googlefonts.github.io/gf-guide/license-file.html. The full current license and FAQ are at https://openfontlicense.org.

In practical terms, these fonts can be used in a commercial logo, packaging, product labels, website, and marketing collateral under their applicable licenses. The font software itself must not be sold as a standalone product. Modified or redistributed font files must follow the OFL conditions, including any Reserved Font Name rules. Re-check the license bundled with each downloaded version before distributing fonts inside a client package.

## CSS example
```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;1,500;1,600&family=Montserrat:wght@400;500;600&display=swap');
:root {
  --font-display: 'Bodoni Moda', serif;
  --font-ui: 'Montserrat', sans-serif;
  --font-tagline: 'Cormorant Garamond', serif;
}
.brand-wordmark { font-family: var(--font-display); font-weight: 600; }
.brand-descriptor { font-family: var(--font-ui); font-weight: 500; letter-spacing: .24em; text-transform: uppercase; }
.brand-tagline { font-family: var(--font-tagline); font-weight: 500; font-style: italic; }
```

## SVG handoff
`SVG/Editable_Text_Lockup_Approximation.svg` keeps the text as editable `<text>` elements and declares these font families. Install the fonts to preview them accurately. Before a print handoff, convert text to outlines if the printer requires predictable typography; outlined lettering is less editable but avoids substitution.
