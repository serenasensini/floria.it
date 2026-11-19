import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const products = defineCollection({
  loader: file('src/content/products.json'),
  schema: z.object({
    id: z.string(), slug: z.string(), title: z.string(),
    category: z.enum(['borse', 'borselli', 'guanti', 'shopper', 'giacchetti', 'grembiuli']),
    shortDescription: z.string(), description: z.string(), materials: z.string(),
    dimensions: z.string(), care: z.string(), availability: z.string(),
    variants: z.array(z.string()).optional(), price: z.number().positive().optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).min(1),
    featured: z.boolean(), publishedAt: z.coerce.date(),
  }),
});
const events = defineCollection({
  loader: file('src/content/events.json'),
  schema: z.object({
    id: z.string(), slug: z.string(), title: z.string(), date: z.coerce.date(),
    location: z.string(), description: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).min(1),
    url: z.string().url().optional(), confirmed: z.boolean().default(false),
  }),
});
export const collections = { products, events };
