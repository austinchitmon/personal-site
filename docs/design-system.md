# Themes and colors

The default **Miami daylight** palette takes its warm cream, sea glass, ocean teal, coral, and sand from the Miami references. **Miami after dark** uses the same visual language with deep ocean surfaces and lighter accents. The navigation switch saves the visitor's preference locally; daylight is the default when no valid preference exists.

## One source of color values

`src/app/core/theme/site-themes.ts` is the palette registry. Each theme defines a name, a light/dark scheme, and the same set of semantic color roles. `ThemeService` applies these colors as `--site-*` CSS custom properties to the document root and sets `data-site-theme`, `data-color-scheme`, the native `color-scheme`, and the browser's theme-color metadata.

Component styles use roles such as `--site-text`, `--site-surface`, `--site-primary`, and `--site-accent`; avoid literal colors in components. Derived shadows and decorative gradients live in `src/styles.scss`. `miami.preset.ts` bridges Optimus UI's Aura tokens to these same CSS variables, so cards, inputs, toolbar, buttons, and app styles change together. The component library's dark-mode selector uses the generic `data-color-scheme="dark"` attribute rather than a particular theme ID.

The home page's former random color timer has been removed. Text and inline highlights now use tested semantic roles. Blog tags use the same palette and expose native keyboard-operable toggle buttons with a visible selected state. Photographs, logos, blog artwork, and Prism's separate syntax-highlighting palette retain their original colors.

## Adding a theme

1. Add a definition to `SITE_THEMES` with a unique ID, name, scheme, and complete `ThemeColors` map. Type checking requires every role.
2. Reuse the existing semantic roles in components. Do not add theme-name branches or page-specific paint values.
3. Extend the navigation's two-theme switch to a selector if offering more than the current daylight/after-dark pair. `ThemeService.setTheme(id)` already accepts every registered theme ID.
4. Run `npm test -- --watch=false`. The contrast contract checks every registered palette automatically, including sampled heading-gradient colors and interactive boundaries.
5. Inspect real pages, hover/focus/selected states, and narrow layouts. Token checks do not constitute a complete accessibility audit.

## Accessibility rules

- Use pastels for surfaces and deep tones for readable text. Use `on-primary` only on primary button backgrounds, `accent-on-soft` on `accent-soft`, `on-sand` on sand, and `code-text` on `code-background`.
- Standard text, muted text, links, button labels, tag labels, and inline code pairs are tested against the [WCAG minimum text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) threshold of 4.5:1. Heading gradients are also held to this threshold.
- Input boundaries and focus indicators are tested at 3:1 against their surrounding surfaces, following [non-text contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Decorative dividers and card boundaries use softer border tokens.
- Keyboard focus uses a visible 3px outline. Navigation and tag selection also use underlines/borders, so state is not communicated by hue alone. Theme, menu, and tag controls have explicit accessible names/states and 44px minimum targets.
- Reduced-motion preferences disable decorative transitions/animations. Gradient headings fall back to system text colors in forced-colors mode.
- Browser-storage failures fall back safely to daylight; switching still works for the current visit.
