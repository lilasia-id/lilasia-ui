import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 1100,
    outDir: 'www',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          vendor: [
            'pinia',
            'shiki/core',
            'marked-shiki',
            'marked',
          ],
          shikiWasm: [
            'shiki/wasm'
          ],
          shikiThemes: [
            'shiki/themes/github-dark.mjs',
          ],
          shikiLangs: [
            'shiki/langs/md.mjs',
            'shiki/langs/vue.mjs'
          ],
        }
      }
    }
  }
})
