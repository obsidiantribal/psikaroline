# Site · Karoline Trombim, Psicanalista Clínica

Site estático de apresentação, construído com [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).
Zero JavaScript de framework no navegador: só dois scripts minúsculos (menu móvel e animação de entrada).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
npm run preview  # serve a dist/ para conferir
```

## Onde editar

| O quê | Onde |
|---|---|
| Telefone/WhatsApp, Instagram, e-mail, duração da sessão, prazo de cancelamento | `src/data/site.ts` |
| Textos de cada seção | `src/components/*.astro` (um arquivo por seção, nomes em português) |
| Cores, fontes, botões | `src/styles/global.css` (bloco `@theme`) |
| Fotos | `src/assets/photos/` (Astro gera AVIF/WebP e vários tamanhos no build) |
| Logo | `src/assets/logo.png` (fundo transparente) |
| Favicon e imagem de compartilhamento (WhatsApp/Instagram) | `public/favicon.png`, `public/og.jpg` |
| Domínio | `public/CNAME` **e** `site:` em `astro.config.mjs` |

## Publicar no GitHub Pages com domínio da Hostinger

1. Crie um repositório no GitHub e envie o código:
   ```bash
   git add .
   git commit -m "Site inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/psikaroline.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   O workflow em `.github/workflows/deploy.yml` já faz o build e o deploy a cada push na `main`.
3. Ainda em **Settings → Pages → Custom domain**, digite o domínio (ex.: `karolinetrombim.com.br`) e salve.
   Marque **Enforce HTTPS** quando o certificado for emitido (leva alguns minutos).
4. Na Hostinger (**Domínios → Gerenciar → DNS/Nameservers**), crie os registros:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `SEU-USUARIO.github.io` |

   Apague registros A/CNAME antigos que apontem para a Hostinger (página de "estacionamento").
   A propagação costuma levar de minutos a algumas horas.
5. Confira se `public/CNAME` e `site:` em `astro.config.mjs` têm exatamente o domínio escolhido.

## Alternativa: Cloudflare Pages (grátis)

Se preferir CDN mais rápida no Brasil, analytics sem cookies e redirecionamento `www` automático:
conecte o repositório em Cloudflare Pages (build: `npm run build`, saída: `dist`) e aponte os
nameservers do domínio na Hostinger para a Cloudflare. O código não muda.
