export interface AdminFeatureEntry {
  title: string;
  subtitle: string;
  routerLink: `/admin/${string}`;
}

export const ADMIN_FEATURE_ENTRIES: AdminFeatureEntry[] = [
  {
    title: 'Homelab',
    subtitle: 'Connections, applications, and host health',
    routerLink: '/admin/homelab',
  },
  {
    title: 'Pokeplayground',
    subtitle: 'Pokémon API sandbox',
    routerLink: '/admin/pokeplayground',
  },
];
