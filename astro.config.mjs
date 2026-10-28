// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ENQUANTO NÃO HÁ DOMÍNIO: site no endereço do GitHub, com base '/psikaroline'.
// QUANDO O DOMÍNIO CHEGAR: site: 'https://SEU-DOMINIO', base: '/',
// e crie public/CNAME com o domínio (uma linha).
export default defineConfig({
  site: 'https://obsidiantribal.github.io',
  base: '/psikaroline',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
