// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// Project Pages: https://<user>.github.io/recruit-lp/
const repoName = 'recruit-lp';
const isCI = process.env.CI === 'true';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: isCI ? `https://${process.env.GITHUB_OWNER}.github.io` : 'http://localhost:4321',
  base: isCI ? `/${repoName}/` : '/',
});
