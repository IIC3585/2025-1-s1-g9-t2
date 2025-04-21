import { defineConfig } from 'vite'

export default defineConfig({
  root: 'frontend',
  publicDir: '../public',
  base: '/2025-1-s1-g9-t2/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
