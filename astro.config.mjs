// @ts-check
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://easyform.playup.com.au',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs(),
    sitemap({
      filter: (page) => !page.includes('404'),
    }),
  ],
})
