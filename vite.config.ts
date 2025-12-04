import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import mdx from "@mdx-js/rollup";
import { cloudflare } from '@cloudflare/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		tailwindcss(),
		mdx({ providerImportSource: "@mdx-js/preact" }),
		cloudflare(),
	],
});
