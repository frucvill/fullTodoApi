import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),// Optimiza Vuetify cargando solo los componentes que se usa
    visualizer({
      open: true,
      filename:'stats.html',
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target:'esnext',
    minify:'esbuild',
    sourcemap: false, //// Desactiva los mapas de código para reducir el peso en producción
    rolldownOptions: {
      output:{
        // Separa las librerías pesadas de terceros en chunks independientes para mejorar la caché
        manualChunks(id) {
          if(id.includes('node_modules')){
            if(id.includes('vuetify')){
              return 'vendor-vuetify';
            }
            if(id.includes('vue') || id.includes('pinia') || id.includes('vue-router')) {
              return 'vendor-vue-core';
            }
            if(id.includes('axios')) {
              return 'vendor-axios';
            }
            return 'vendor-libs';
          }
        }
      }
    }
  }
})
