// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// Project Pages: https://<user>.github.io/recruit-lp/
const repoName = 'recruit-lp';
const isCI = process.env.CI === 'true';
const repoOwner =
  process.env.GITHUB_REPOSITORY_OWNER ??
  process.env.GITHUB_REPOSITORY?.split('/')[0];
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: isCI && repoOwner ? `https://${repoOwner}.github.io` : 'http://localhost:4321',
  base: isCI ? `/${repoName}/` : '/',
});
