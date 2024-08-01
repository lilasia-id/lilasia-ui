import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lilasiaUi',
      fileName: 'lilasia-ui'
    },
    rollupOptions: {
      external: [
        "vue",
        "pinia",
        "lilasia-icons",
        "@headlessui/vue",
        "@tiptap/vue-3",
        "@tiptap/starter-kit",
        "@tiptap/pm",
        "@tiptap/extension-placeholder"
      ],
      output: {
        globals: {
          vue: "Vue",
          pinia: "Pinia",
          "lilasia-icons": "lilasia-icons",
          "@headlessui/vue": "@headlessui/vue",
          "@tiptap/vue-3": "@tiptap/vue-3",
          "@tiptap/starter-kit": "@tiptap/starter-kit",
          "@tiptap/pm": "@tiptap/pm",
          "@tiptap/extension-placeholder": "@tiptap/extension-placeholder"
        }
      }
    }
  }
})
