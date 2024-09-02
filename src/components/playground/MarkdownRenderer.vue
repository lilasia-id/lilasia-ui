<script lang="ts" setup>
import { useToast } from '@/composables/toast'
import { Marked } from 'marked'
import markedShiki from 'marked-shiki'
import { createHighlighterCore } from 'shiki/core'
import getWasm from 'shiki/wasm'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  filePath: string
}>()

const { toastError } = useToast()
const html = ref('')

onMounted(async () => {
  await getMarkdown()
  addCopyButtons()
})

const getHighlighter = async () => {
  return await createHighlighterCore({
    themes: [import('shiki/themes/github-dark.mjs')],
    langs: [import('shiki/langs/md.mjs'), import('shiki/langs/vue.mjs')],
    loadWasm: getWasm
  })
}

const getMarkdown = async () => {
  try {
    const response = await fetch(props.filePath)

    if (response.ok) {
      const markdown = await response.text()
      const highlighter = await getHighlighter()

      html.value = await new Marked()
        .use(
          markedShiki({
            highlight: (code, lang) => {
              const highlightedCode = highlighter.codeToHtml(code, {
                lang,
                theme: 'github-dark'
              })

              return `<div class="relative">
                <button class="copy-button absolute right-12 top-12 rounded-8 bg-black-80/50 px-12 py-8 text-12 text-white transition-colors hover:bg-black-80">
                  Copy
                </button>
                ${highlightedCode}
              </div>`
            }
          })
        )
        .parse(markdown)
    }
  } catch (error) {
    toastError(`Error fetching Markdown file: ${error}`)
  }
}

const addCopyButtons = () => {
  document.querySelectorAll('.copy-button').forEach((button) => {
    button.addEventListener('click', () => {
      const codeBlock = button.nextElementSibling?.querySelector('code')
      if (codeBlock) {
        navigator.clipboard
          .writeText(codeBlock.innerText)
          .then(() => {
            button.textContent = 'Copied!'
            setTimeout(() => (button.textContent = 'Copy'), 2000)
          })
          .catch((err) => toastError(`Failed to copy: ${err}`))
      }
    })
  })
}
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <article class="prose mx-auto max-w-4xl overflow-x-auto" v-html="html"></article>
</template>
