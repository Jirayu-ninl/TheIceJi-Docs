import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname),
    '@config': resolve(__dirname, './app/config'),
    '@app': resolve(__dirname, './app'),
    '@models': resolve(__dirname, './app/models'),
    '@database': resolve(__dirname, './app/models/database'),
    '@libs': resolve(__dirname, './libs'),
    '@contexts': resolve(__dirname, './app/contexts'),
    '@store': resolve(__dirname, './app/store'),
    '@auth': resolve(__dirname, './app/auth'),
    contents: resolve(__dirname, './resources/contents'),
    views: resolve(__dirname, './resources/views'),
    layouts: resolve(__dirname, './resources/views/layouts'),
    pages: resolve(__dirname, './resources/views/pages'),
    public: resolve(__dirname, './public'),
  },

  css: ['~/resources/theme/tailwind.css', '~/resources/theme/global.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
    babel: {
      babelrc: true,
    },
  },
})
