// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Troque `site` pelo domínio final (ex.: https://karolinetrombim.com.br).
// Com domínio personalizado no GitHub Pages, `base` fica como '/'.
export default defineConfig({
  site: 'https://karolinetrombim.com.br',
  base: '/',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
