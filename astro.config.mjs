// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Domínio personalizado no GitHub Pages: `site` é o domínio e `base` fica '/'.
// O domínio também está em public/CNAME.
export default defineConfig({
  site: 'https://psikarolinetrombim.com.br',
  base: '/',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
