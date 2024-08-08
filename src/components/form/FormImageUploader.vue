<script lang="ts" setup>
import Icon from 'lilasia-icons'
import { computed, HTMLAttributes, InputHTMLAttributes, ref } from 'vue'

const emit = defineEmits(['update:model-value'])

const props = withDefaults(
  defineProps<{
    modelValue?: any
    id?: HTMLAttributes['id']
    label?: string
    placeholder?: InputHTMLAttributes['placeholder']
    required?: boolean
    readonly?: boolean
    error?: string
    aspectRatio?: 'video' | 'square'
    class?: any
  }>(),
  {
    modelValue: undefined,
    id: undefined,
    label: undefined,
    placeholder: 'Choose Image',
    required: false,
    readonly: false,
    error: undefined,
    aspectRatio: 'square',
    class: undefined
  }
)

const inputFile = ref<HTMLInputElement>()
const imagePreview = ref()

const classes = computed(() => {
  return [
    'relative rounded-8 border-2 border-dashed bg-black-5 transition-colors',
    'hover:bg-black-10/50',
    props.error ? 'hover:border-red-30 border-red-100' : 'border-black-20 hover:border-black-30',
    {
      'aspect-square': props.aspectRatio === 'square',
      'aspect-video': props.aspectRatio === 'video'
    },
    props.class
  ]
})

const handleFileChange = (event: Event) => {
  const el = event.target as HTMLInputElement
  const file = el.files?.[0]

  emit('update:model-value', file)

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const triggerInputFileClick = () => {
  inputFile.value?.click()
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <label v-if="label" class="w-fit text-14 font-500 leading-20" :for="id">
      {{ label }} <span v-if="!required" class="text-black-60">(Optional)</span>
    </label>

    <div class="relative">
      <input
        :id="id"
        ref="inputFile"
        type="file"
        :required="required"
        :disabled="readonly"
        :value="modelValue"
        accept="image/*"
        class="hidden"
        @change="handleFileChange"
      />

      <div :class="classes" :role="!readonly ? 'button' : 'none'" @click="triggerInputFileClick">
        <div
          v-if="!imagePreview"
          class="inset-0 absolute flex h-full w-full flex-col items-center justify-center text-black-40"
        >
          <Icon name="image" size="100" />
          <span class="font-500">{{ placeholder }}</span>
        </div>

        <div
          class="inset-0 absolute flex h-full w-full flex-col items-center justify-center text-black-40"
        >
          <img
            v-if="imagePreview"
            :src="imagePreview"
            alt="Image Preview"
            width="600"
            height="600"
            class="rounded-8 object-cover"
            :class="[
              {
                'aspect-square': aspectRatio === 'square',
                'aspect-video': aspectRatio === 'video'
              }
            ]"
          />
        </div>
      </div>
    </div>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
