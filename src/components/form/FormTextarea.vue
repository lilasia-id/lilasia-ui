<script lang="ts" setup>
import Icon from 'lilasia-icons'
import { computed, HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    id?: HTMLAttributes['id']
    label?: string
    placeholder?: HTMLAttributes['placeholder']
    rows?: string | number
    cols?: string | number
    required?: boolean
    error?: string
  }>(),
  {
    id: undefined,
    label: undefined,
    placeholder: undefined,
    rows: 3,
    cols: undefined,
    error: undefined
  }
)

const model = defineModel<any>()

const classes = computed(() => {
  return [
    'block max-h-[400px] overflow-y-auto w-full rounded-8 border p-16 text-16 leading-24 shadow-sm transition duration-150 ease-in-out',
    'placeholder:font-400 placeholder:text-black-60',
    'read-only:bg-black-5',
    !props.error
      ? 'border-black-10 focus:border-black-30 focus:outline-none focus:ring-1 focus:ring-black-30'
      : 'pr-40 border-red-100 focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-red-100'
  ]
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <label v-if="label" class="w-fit text-14 font-500 leading-20" :for="id">
      {{ label }} <span v-if="!required" class="text-black-60">(Optional)</span>
    </label>

    <div class="relative">
      <textarea
        :id="id"
        v-model="model"
        :class="classes"
        :rows="rows"
        :cols="cols"
        :placeholder="placeholder"
      ></textarea>

      <div v-if="error" class="absolute right-[10px] top-[10px] flex items-center text-red-100">
        <Icon name="error" />
      </div>
    </div>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
