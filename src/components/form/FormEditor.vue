<script setup lang="ts">
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { watch, type HTMLAttributes } from 'vue'
import Icon from 'lilasia-icons'

const emit = defineEmits(['update:model-value'])

const props = defineProps<{
  id?: HTMLAttributes['id']
  label?: string
  modelValue?: string
  placeholder?: HTMLAttributes['placeholder']
  required?: boolean
  error?: string
}>()

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      bulletList: {
        HTMLAttributes: {
          class: 'list-disc ml-24'
        }
      },
      orderedList: {
        HTMLAttributes: {
          class: 'list-decimal ml-24'
        }
      }
    }),
    Placeholder.configure({
      placeholder: props.placeholder
    })
  ],
  editorProps: {
    attributes: {
      class: [
        'block max-h-[400px] overflow-y-auto w-full rounded-8 border p-16 text-16 leading-24 shadow-sm transition duration-150 ease-in-out',
        !props.error
          ? 'border-black-10 focus:border-black-30 focus:outline-none focus:ring-1 focus:ring-black-30'
          : 'pr-40 border-red-100 focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-red-100'
      ].join(' ')
    }
  },
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:model-value', editor.getHTML())
  }
})

watch(
  () => props.error,
  (error) => {
    editor.value?.setOptions({
      editorProps: {
        attributes: {
          class: [
            'block max-h-[400px] overflow-y-auto w-full rounded-8 border p-16 text-16 leading-24 shadow-sm transition duration-150 ease-in-out',
            !error
              ? 'border-black-10 focus:border-black-30 focus:outline-none focus:ring-1 focus:ring-black-30'
              : 'pr-40 border-red-100 focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-red-100'
          ].join(' ')
        }
      }
    })
  }
)

watch(
  () => props.modelValue,
  (value) => {
    if (editor.value?.getHTML() === value) {
      return
    }

    if (value) {
      editor.value?.commands.setContent(value, false)
    }
  }
)

const triggerFocus = () => {
  editor.value?.view.dom.focus()
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <label class="w-fit text-14 font-500 leading-20" v-if="label" @click="triggerFocus" :for="id">
      <input class="hidden" type="text" :id="id" />
      {{ label }} <span class="text-black-60" v-if="!required">(Optional)</span>
    </label>

    <div class="relative">
      <EditorContent :editor="editor" />
      <div class="absolute right-[10px] top-[10px] flex items-center text-red-100" v-if="error">
        <Icon name="error" />
      </div>
    </div>

    <div class="w-fit text-14 font-500 leading-20 text-red-100" v-if="error">{{ error }}</div>
  </div>
</template>