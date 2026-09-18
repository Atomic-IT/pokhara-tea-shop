// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon'],

  css: ['~/styles/index.scss'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Healthy Organic Teas · Pokhara, Nepal',
      meta: [
        {
          name: 'description',
          content:
            'Fair trade organic teas and Himalayan treasures from Pokhara, Nepal — collected directly from villagers.',
        },
        { name: 'theme-color', content: '#1f5c3a' },
        { property: 'og:title', content: 'Healthy Organic Teas' },
        {
          property: 'og:description',
          content:
            'From local hands with honest hearts. Pure goodness from Pokhara, Nepal.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  nitro: {
    preset: 'cloudflare_module',
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
      cssCodeSplit: false,
      rollupOptions: {
        maxParallelFileOps: 2,
      },
    },
  },
})
