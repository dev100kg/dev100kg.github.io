// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// Project Pages: https://<owner>.github.io/<repo>/ or User/Org Pages: https://<owner>.github.io/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'recruit-lp';
const repoOwner =
  process.env.GITHUB_REPOSITORY_OWNER ??
  process.env.GITHUB_REPOSITORY?.split('/')[0];
const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://mcr.noar.biz';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: siteUrl,
  base: '/',
});
