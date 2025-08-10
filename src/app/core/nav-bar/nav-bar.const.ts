export interface NavBarEntry {
  label: string;
  routerLink: `/${string}`;
}

export const DEFAULT_NAV_BAR_ENTRIES: NavBarEntry[] = [
  {
    routerLink: '/chittymon',
    label: 'Chittymon'
  },
  {
    routerLink: '/chittylog',
    label: 'Chittylog'
  },
  {
    routerLink: '/cat',
    label: 'Cat 🐈'
  }
];
