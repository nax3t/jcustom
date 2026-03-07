// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jcloutdoors.com',
  integrations: [alpinejs({ entrypoint: '/src/alpine.ts' }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
