// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://aroquega-codes.github.io',
    base: '/faq-accordion',
    vite: {
        plugins: [tailwindcss()]
    }
});
