import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import { MIAMI_OCEAN } from './site-themes';

// Bridge Optimus UI and app styles to the same semantic theme tokens.
const colorScheme = {
  surface: Object.fromEntries([0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    .map(level => [level, `var(--site-surface-${level})`])),
  primary: {
    color: 'var(--site-primary)',
    contrastColor: 'var(--site-on-primary)',
    hoverColor: 'var(--site-primary-hover)',
    activeColor: 'var(--site-primary-active)',
  },
  text: {
    color: 'var(--site-text)',
    hoverColor: 'var(--site-text)',
    mutedColor: 'var(--site-text-muted)',
    hoverMutedColor: 'var(--site-text)',
  },
  content: {
    background: 'var(--site-surface)',
    hoverBackground: 'var(--site-surface-alt)',
    borderColor: 'var(--site-border)',
    color: 'var(--site-text)',
    hoverColor: 'var(--site-text)',
  },
  formField: {
    background: 'var(--site-surface)',
    borderColor: 'var(--site-border-strong)',
    hoverBorderColor: 'var(--site-primary)',
    focusBorderColor: 'var(--site-primary)',
    color: 'var(--site-text)',
    placeholderColor: 'var(--site-text-muted)',
    floatLabelColor: 'var(--site-text-muted)',
    floatLabelFocusColor: 'var(--site-primary)',
    floatLabelActiveColor: 'var(--site-text-muted)',
    iconColor: 'var(--site-text-muted)',
  },
  highlight: {
    background: 'var(--site-surface-alt)',
    focusBackground: 'var(--site-surface-alt)',
    color: 'var(--site-primary)',
    focusColor: 'var(--site-primary)',
  },
};

export const MiamiPreset = definePreset(Aura, {
  semantic: {
    primary: MIAMI_OCEAN,
    focusRing: { width: '3px', style: 'solid', color: 'var(--site-focus)', offset: '3px' },
    colorScheme: { light: colorScheme, dark: colorScheme },
  },
  components: {
    toolbar: { root: { background: 'var(--site-surface-alt)', borderColor: 'var(--site-border)', color: 'var(--site-text)' } },
    card: { root: { background: 'var(--site-surface)', color: 'var(--site-text)', shadow: 'var(--site-shadow)' } },
  },
});
