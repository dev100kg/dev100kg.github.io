// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// Project Pages: https://<owner>.github.io/<repo>/ or User/Org Pages: https://<owner>.github.io/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'recruit-lp';
const isCI = process.env.CI === 'true';
const repoOwner =
  process.env.GITHUB_REPOSITORY_OWNER ??
  process.env.GITHUB_REPOSITORY?.split('/')[0];
const isUserPages = Boolean(repoOwner && repoName === `${repoOwner}.github.io`);
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://mcr.noar.biz',
  base: isCI ? (isUserPages ? '/' : `/${repoName}/`) : '/',
});
