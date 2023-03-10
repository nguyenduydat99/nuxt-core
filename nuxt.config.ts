// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  srcDir: './src',
  css: ['~/assets/css/main.css'],
  alias: {
    src: resolve(__dirname, './src/'),
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
