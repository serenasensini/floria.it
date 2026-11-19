export const site = {
  name: 'Floria',
  url: import.meta.env.SITE || 'https://floria.it',
  email: null as string | null,
  whatsapp: null as string | null,
  instagram: null as string | null,
};

export const pathFor = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
export const absoluteUrl = (path: string) => new URL(pathFor(path), site.url).href;

export const categories = {
  borse: 'Borse', borselli: 'Borselli', guanti: 'Guanti',
  shopper: 'Shopper', giacchetti: 'Giacchetti', grembiuli: 'Grembiuli',
} as const;
export type Category = keyof typeof categories;
