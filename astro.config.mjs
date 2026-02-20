// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  adapter: cloudflare({ imageService: 'compile' }),
  site: 'https://jcustomdeckandpatio.com',
  integrations: [alpinejs({ entrypoint: '/src/alpine.ts' }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
