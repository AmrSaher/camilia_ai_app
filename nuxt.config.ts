// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, },
  app: {
    head: {
      title: 'Camilia AI',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
        }
      ],
      meta: [
        {
          'http-equiv': 'Content-Language',
          'content': 'en',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@pinia/nuxt',
    '@kevinmarrec/nuxt-pwa',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL,
      LLM_API_URL: process.env.LLM_API_URL,
      LLM_API_KEY: process.env.LLM_API_KEY,
    },
  },
  pwa: {
    manifest: {
      name: 'Camilia AI',
      lang: 'en',
      useWebmanifestExtension: false,
    },
  },
})
