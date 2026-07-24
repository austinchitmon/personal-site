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
    routerLink: '/chittyblog',
    label: 'Chittyblog'
  },
  {
    routerLink: '/cat',
    label: 'Cat 🐈'
  }
];

export const ADMIN_NAV_ENTRY: NavBarEntry = {
  routerLink: '/admin',
  label: 'Admin'
};
