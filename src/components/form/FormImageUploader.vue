<script lang="ts" setup>
import Icon from 'lilasia-icons'
import { computed, onMounted, ref } from 'vue'
import FormLabel from './FormLabel.vue'

const emit = defineEmits(['update:model-value'])

const props = withDefaults(
  defineProps<{
    modelValue?: any
    id?: string
    name?: string
    label?: string
    placeholder?: string
    hint?: string
    required?: boolean
    readonly?: boolean
    error?: string
    src?: string
    aspectRatio?: 'video' | 'square'
    class?: any
  }>(),
  {
    modelValue: undefined,
    id: undefined,
    name: undefined,
    label: undefined,
    placeholder: 'Browse Your Image here',
    hint: undefined,
    required: false,
    readonly: false,
    error: undefined,
    src: undefined,
    aspectRatio: 'square',
    class: undefined
  }
)

const inputFile = ref<HTMLInputElement>()
const imagePreview = ref()

const classes = computed(() => {
  return [
    props.class,
    {
      'relative rounded-8 border-2 border-dashed bg-blue-10 transition-colors hover:bg-blue-20':
        true,
      'aspect-square': props.aspectRatio === 'square',
      'aspect-video': props.aspectRatio === 'video',
      'hover:border-red-30 border-red-100': props.error,
      'border-blue-100': !props.error
    }
  ]
})

onMounted(() => {
  if (props.src) {
    imagePreview.value = props.src
  }
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
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="relative">
      <FormLabel :for="id" :label="label" :required="required">
        <input
          :id="id"
          ref="inputFile"
          type="file"
          :name="name"
          :required="required"
          :disabled="readonly"
          :value="modelValue"
          accept="image/*"
          class="hidden"
          @change="handleFileChange"
        />
        <div :class="classes" :role="!readonly ? 'button' : 'none'">
          <div
            v-if="!imagePreview"
            class="absolute inset-[0] flex h-full w-full flex-col items-center justify-center p-16 text-blue-100"
          >
            <Icon name="cloud_upload" size="48" />
            <span class="text-center text-16 font-600 text-black-100 md:text-20">
              {{ placeholder }}
            </span>
            <span class="text-center text-12 leading-20 text-black-60 md:text-16 md:leading-24">
              {{ hint }}
            </span>
          </div>

          <div
            class="absolute inset-[0] flex h-full w-full flex-col items-center justify-center text-black-40"
          >
            <img
              v-if="imagePreview"
              :src="imagePreview"
              alt="Image Preview"
              width="600"
              height="600"
              class="w-full rounded-8 object-cover"
              :class="[
                {
                  'aspect-square': aspectRatio === 'square',
                  'aspect-video': aspectRatio === 'video'
                }
              ]"
            />
          </div>
        </div>
      </FormLabel>
    </div>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
