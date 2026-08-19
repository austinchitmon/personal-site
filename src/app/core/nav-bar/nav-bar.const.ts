export interface NavBarEntry {
  label: string;
  routerLink: `/${string}`;
}

export const DEFAULT_NAV_BAR_ENTRIES: NavBarEntry[] = [
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

export const SHIPMENTS_NAV_ENTRY: NavBarEntry = {
  routerLink: '/shipments',
  label: 'Shipments'
};

export function resolveNavEntries(isAuthenticated: boolean, isAdmin: boolean): NavBarEntry[] {
  const entries = [...DEFAULT_NAV_BAR_ENTRIES];

  if (isAuthenticated) {
    entries.push(SHIPMENTS_NAV_ENTRY);
  }
  if (isAdmin) {
    entries.push(ADMIN_NAV_ENTRY);
  }

  return entries;
}
