// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})