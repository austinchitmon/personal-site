import { SITE_THEMES, ThemeColors } from './site-themes';

function rgb(hex: string): number[] {
  return [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16));
}

function luminance(color: number[]): number {
  const channels = color.map(value => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(foreground: number[], background: number[]): number {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

describe('Theme accessibility contract', () => {
  for (const [id, { colors }] of Object.entries(SITE_THEMES)) {
    const pairs: [keyof ThemeColors, keyof ThemeColors][] = [
      ...(['background', 'surface', 'surface-alt'] as const).flatMap(background =>
        (['text', 'text-muted', 'primary', 'primary-hover', 'accent'] as const)
          .map(foreground => [foreground, background] as [keyof ThemeColors, keyof ThemeColors])),
      ['on-primary', 'primary'],
      ['on-primary', 'primary-hover'],
      ['on-primary', 'primary-active'],
      ['accent-on-soft', 'accent-soft'],
      ['on-sand', 'sand'],
      ['on-sand', 'background'],
      ['code-text', 'code-background'],
    ];

    for (const [foreground, background] of pairs) {
      it(`${id}: ${foreground} on ${background} meets 4.5:1`, () => {
        expect(contrast(rgb(colors[foreground]), rgb(colors[background]))).toBeGreaterThanOrEqual(4.5);
      });
    }

    it(`${id}: the entire heading gradient meets 4.5:1`, () => {
      const start = rgb(colors.primary);
      const end = rgb(colors.accent);
      for (let step = 0; step <= 20; step++) {
        const mixed = start.map((value, channel) => value + (end[channel] - value) * step / 20);
        expect(contrast(mixed, rgb(colors.background))).toBeGreaterThanOrEqual(4.5);
      }
    });

    for (const background of ['background', 'surface', 'surface-alt'] as const) {
      it(`${id}: focus and input boundaries meet 3:1 on ${background}`, () => {
        expect(contrast(rgb(colors.focus), rgb(colors[background]))).toBeGreaterThanOrEqual(3);
        expect(contrast(rgb(colors['border-strong']), rgb(colors[background]))).toBeGreaterThanOrEqual(3);
      });
    }
  }
});
