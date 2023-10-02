// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/css/_variables.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ],
  nitro: {
    preset: 'vercel',
  },
  postcss: {},
  vite: {},
  app: {
    head: {
      title: 'Nuxt3-Learning',
      meta: [
        {
          name: 'description',
          content: 'Nuxt3-Learning',
        },
        {
          name: 'keywords',
          content: 'Nuxt3-Learning',
        },
      ],
    },
  },
  // ssr: false,
})
