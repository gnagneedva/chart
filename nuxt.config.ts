// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      tmdbApiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTEzYzZkMTBiY2IwYmM5NzNmNGRhYWVhZWIzZmQ4ZSIsIm5iZiI6MTc0NjAyMzcxOS4xNDgsInN1YiI6IjY4MTIzNTI3NmRiZjJmYjM2YTI3ZWYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCzDNE3Z1C09uZisM-EJLh9X3GeBCszIOIlsTbyUovY',
    },
  },
  typescript: {
    strict: true,
  },
})