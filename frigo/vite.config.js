import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false
  }
})
