import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  site: 'https://aberc.github.io/',
  //site: 'http://127.0.0.1:8000', // run with 'php -S 127.0.0.1:8000'
  base: 'astro-test'
});