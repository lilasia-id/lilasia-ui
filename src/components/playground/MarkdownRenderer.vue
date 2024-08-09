<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { marked } from 'marked'
import { useToast } from '@/composables/toast'

const props = defineProps<{
  filePath: string
}>()

const { toastError } = useToast()
const html = ref('')

onMounted(async () => {
  await getMarkdown()
})

const getMarkdown = async () => {
  try {
    const response = await fetch(props.filePath)

    if (response.ok) {
      const markdown = await response.text()
      html.value = await marked(markdown)
    }
  } catch (error) {
    toastError(`Error fetching Markdown file: ${error}`)
  }
}
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <article class="prose mx-auto" v-html="html"></article>
</template>
