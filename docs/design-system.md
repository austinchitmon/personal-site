# Themes and colors

The default **Daylight** palette takes its warm cream, sea glass, ocean teal, coral, and sand from the Miami references. **After Dark** uses the same visual language with deep ocean surfaces and lighter accents. Open the person icon in the navigation, then **Appearance**, to choose a theme. The visitor's preference is saved locally; Daylight is the default when no valid preference exists.

## One source of color values

**Bubble Gum** is an additional light theme inspired by pink Miami Beach Art Deco: pale blush backgrounds, rose surfaces, berry controls, orchid accents, and buttercream details. Deep berry/mauve text keeps pastel surfaces readable. It has a separate pink primary scale, including component-library highlights.

**Bubble Gum Dark** is the bold neon counterpart, inspired by a hot-pink Miami sunset: a near-black rose backdrop, muted deep-pink surfaces for navigation, footer, and account panels, electric pink controls, cyan accents, amber details, and pink glows. Its surface scale stays in the rose family, including component-library overlays and hover states, with a separate neon pink primary scale. Its saturated decorative colors are intentionally more intense than the other themes; the existing text and control contrast checks still apply.

`src/app/core/theme/site-themes.ts` is the palette registry. Each theme defines a name, a light/dark scheme, and the same set of semantic color roles. `ThemeService` applies these colors as `--site-*` CSS custom properties to the document root and sets `data-site-theme`, `data-color-scheme`, the native `color-scheme`, and the browser's theme-color metadata.

Component styles use roles such as `--site-text`, `--site-surface`, `--site-primary`, and `--site-accent`; avoid literal colors in components. Derived shadows and decorative gradients live in `src/styles.scss`. `miami.preset.ts` bridges Optimus UI's Aura tokens to these same CSS variables, so cards, inputs, toolbar, buttons, and app styles change together. The component library's dark-mode selector uses the generic `data-color-scheme="dark"` attribute rather than a particular theme ID.

The home page's former random color timer has been removed. Text and inline highlights now use tested semantic roles. Blog tags use the same palette and expose native keyboard-operable toggle buttons with a visible selected state. Photographs, favicons, blog artwork, and Prism's separate syntax-highlighting palette retain their original colors.

## Brand typography

The navigation wordmark is live uppercase text, **CHITMON.COM**, set in Limelight Regular, a freely licensed Art Deco alternative to the Broadway-style reference. It uses `--site-primary` and `--site-primary-hover` so each theme controls its color. The full name remains visible on mobile with responsive sizing; body typography remains Inter.

The home page opens with **¡BIENVENIDOS!** in Limelight and the theme's primary color, followed by "I'm Austin", professional credentials, and an introductory paragraph. UI labels and published blog text use words rather than emojis; markdown emoji conversion and its toolkit dependency have been removed.

Limelight's Latin WOFF2 is self-hosted in `public/fonts/limelight/`, preloaded by `src/index.html`, and declared in `src/styles.scss` with `font-display: swap`. Its SIL Open Font License and source details ship alongside the font. No external font request is needed at runtime.

## Adding a theme

1. Add a definition to `SITE_THEMES` with a unique ID, name, scheme, complete `ThemeColors` map, and a `primaryPalette` scale (50–950). Type checking requires every role and shade. Related themes can share a primary palette; a different palette also updates the component library's subtle highlight shades.
2. Reuse the existing semantic roles in components. Do not add theme-name branches or page-specific paint values.
3. The account menu's Appearance panel lists every registered theme automatically. `ThemeService.setTheme(id)` accepts every registered theme ID.
4. Run `npm test -- --watch=false`. The contrast contract checks every registered palette automatically, including sampled heading-gradient colors and interactive boundaries.
5. Inspect real pages, hover/focus/selected states, and narrow layouts. Token checks do not constitute a complete accessibility audit.

## Accessibility rules

- Use pastels for surfaces and deep tones for readable text. Use `on-primary` only on primary button backgrounds, `accent-on-soft` on `accent-soft`, `on-sand` on sand, and `code-text` on `code-background`.
- Standard text, muted text, links, button labels, tag labels, and inline code pairs are tested against the [WCAG minimum text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) threshold of 4.5:1. Heading gradients are also held to this threshold.
- Input boundaries and focus indicators are tested at 3:1 against their surrounding surfaces, following [non-text contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Decorative dividers and card boundaries use softer border tokens.
- Keyboard focus uses a visible 3px outline. Navigation and tag selection also use underlines/borders, so state is not communicated by hue alone. Account, appearance, menu, and tag controls have explicit accessible names/states and 44px minimum targets. The account panel uses the native Popover API for outside-click/Escape dismissal and keyboard focus return. Entering/backing out of Appearance moves focus to the selected theme/Appearance row.
- Reduced-motion preferences disable decorative transitions/animations. Gradient headings fall back to system text colors in forced-colors mode.
- Browser-storage failures fall back safely to daylight; switching still works for the current visit.
