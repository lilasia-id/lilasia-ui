<script lang="ts" setup>
import Icon from 'lilasia-icons'
import { computed, onMounted, ref } from 'vue'
import FormLabel from './FormLabel.vue'
import { twJoin, twMerge } from 'tailwind-merge'

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
    uploading?: boolean
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
    uploading: false,
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
      'relative rounded-8 bg-blue-10 transition-colors hover:bg-blue-20': true,
      'border border-black-10': imagePreview.value && !props.error,
      'border-2 border-dashed border-blue-100': !imagePreview.value && !props.error,
      'aspect-square': props.aspectRatio === 'square',
      'aspect-video': props.aspectRatio === 'video',
      'hover:border-red-30 border-red-100': props.error
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

        <div class="group" :class="classes" :role="!readonly ? 'button' : 'none'">
          <div
            :class="
              twMerge([
                'absolute inset-[0] z-10 flex h-full w-full flex-col items-center justify-center p-16',
                imagePreview
                  ? 'rounded-8 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100'
                  : '',
                uploading ? 'opacity-100' : ''
              ])
            "
          >
            <!-- Uploading Text -->
            <div v-if="uploading" class="flex items-center gap-8">
              <div class="inline-flex animate-spin text-white">
                <Icon name="progress_activity" />
              </div>
              <span class="text-center text-16 font-600 text-white md:text-20">
                Uploading&hellip;
              </span>
            </div>

            <!-- Browse Image Text -->
            <template v-else>
              <div :class="twJoin(['inline-flex text-blue-100', imagePreview ? 'text-white' : ''])">
                <Icon name="cloud_upload" size="48" />
              </div>
              <span
                :class="
                  twMerge([
                    'text-center text-16 font-600 text-black-100 md:text-20',
                    imagePreview ? 'text-white' : ''
                  ])
                "
              >
                {{ placeholder }}
              </span>
              <span
                :class="
                  twMerge([
                    'text-center text-12 leading-20 text-black-60 md:text-16 md:leading-24',
                    imagePreview ? 'text-black-5' : ''
                  ])
                "
              >
                {{ hint }}
              </span>
            </template>
          </div>

          <!-- Image Preview -->
          <div
            v-if="imagePreview"
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
