import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    minify: 'esbuild', // esbuild is used for minifying JS/TS
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        // Ensure CSS and JS are properly minified
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
