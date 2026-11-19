// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.FLORIA_PREVIEW === 'true' ? 'https://serenasensini.github.io' : 'https://floria.it',
  base: process.env.FLORIA_PREVIEW === 'true' ? '/floria.it' : '/',
  integrations: [sitemap()],
});
