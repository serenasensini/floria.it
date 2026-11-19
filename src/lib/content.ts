import type { CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { categories, pathFor } from '../config/site';
import productImage from '../assets/products/placeholder.png';
import eventImage from '../assets/events/placeholder.png';
import brandImage from '../assets/brand/placeholder.png';

const productImages: Record<string, ImageMetadata> = { borsa: productImage, borsello: productImage, guanti: productImage, shopper: productImage, giacchetto: productImage, grembiule: productImage };
const eventImages: Record<string, ImageMetadata> = { serra: eventImage, sfilata: eventImage, atelier: eventImage };
export { brandImage };
export function productImageFor(key: string) {
  if (!productImages[key]) throw new Error(`Immagine prodotto non configurata: ${key}`);
  return productImages[key];
}
export function eventImageFor(key: string) {
  if (!eventImages[key]) throw new Error(`Immagine evento non configurata: ${key}`);
  return eventImages[key];
}
export const productUrl = (p: CollectionEntry<'products'>) => pathFor(`/collezione/${p.data.category}/${p.data.slug}/`);
export const eventUrl = (e: CollectionEntry<'events'>) => pathFor(`/eventi/${e.data.slug}/`);
export const categoryName = (category: keyof typeof categories) => categories[category];
export const formatDate = (date: Date) => new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
