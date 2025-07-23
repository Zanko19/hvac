import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs'
  },
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false
  }
})
