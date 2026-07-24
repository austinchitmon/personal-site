export interface AdminFeatureEntry {
  title: string;
  subtitle: string;
  routerLink: `/admin/${string}`;
}

export const ADMIN_FEATURE_ENTRIES: AdminFeatureEntry[] = [
  {
    title: 'Pokeplayground',
    subtitle: 'Pokémon API sandbox',
    routerLink: '/admin/pokeplayground',
  },
];
