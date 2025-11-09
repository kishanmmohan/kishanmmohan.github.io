// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
  ],

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },

  // Static site generation for GitHub Pages
  ssr: true,

  // GitHub Pages deployment configuration
  app: {
    baseURL: '/',
    head: {
      title: 'Kishan M Mohan | Product Manager',
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Technical Product Manager with 9+ years shipping complex transactional and data systems. Leading cross-functional teams at Radius AI.'
        },
        {
          name: 'keywords',
          content: 'Product Manager, Technical Product Management, System Architecture, Data Platforms, PIM, MDM, DevOps, Cross-functional Leadership, Bengaluru'
        },
        { name: 'author', content: 'Kishan M Mohan' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kishan M Mohan | Product Manager' },
        { property: 'og:description', content: 'Technical Product Manager with 9+ years shipping complex transactional and data systems. Leading cross-functional teams at Radius AI.' },
        { property: 'og:url', content: 'https://kishanmmohan.dev' },
        { property: 'og:site_name', content: 'Kishan M Mohan' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter/X Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Kishan M Mohan | Product Manager' },
        { name: 'twitter:description', content: 'Technical Product Manager with 9+ years shipping complex transactional and data systems. Leading cross-functional teams at Radius AI.' },
        { name: 'twitter:site', content: '@kishanmmohan' },
        { name: 'twitter:creator', content: '@kishanmmohan' },

        // Additional Contact
        { name: 'contact', content: 'madhanmohankishan@gmail.com' },

        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'canonical', href: 'https://kishanmmohan.dev' }
      ]
    }
  },

  typescript: {
    strict: true
  }
})
