// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag"],

  components: [
    { path: "~/components", ignore: ["**/ui/**"] },
  ],

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  // Static site generation for GitHub Pages
  ssr: true,

  // GitHub Pages deployment configuration
  app: {
    baseURL: "/",
    head: {
      title: "Kishan M Mohan | Head of Engineering",
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Head of Engineering at nuark.ai. Building high-performance engineering teams.",
        },
        {
          name: "keywords",
          content:
            "Head of Engineering, Engineering Leadership, Frontend, Backend, Platform, DevOps, System Architecture, Bengaluru",
        },
        { name: "author", content: "Kishan M Mohan" },
        { name: "robots", content: "index, follow" },

        // Open Graph
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Kishan M Mohan | Head of Engineering",
        },
        {
          property: "og:description",
          content:
            "Head of Engineering at nuark.ai. Building high-performance engineering teams.",
        },
        { property: "og:url", content: "https://kishanmmohan.dev" },
        { property: "og:site_name", content: "Kishan M Mohan" },
        { property: "og:locale", content: "en_US" },

        // Additional Contact
        { name: "contact", content: "madhanmohankishan@gmail.com" },

        // Additional SEO
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "canonical", href: "https://kishanmmohan.dev" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap",
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },
});
