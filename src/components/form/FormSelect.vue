<script setup lang="ts">
import Icon from 'lilasia-icons'
import { computed, type InputHTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    id?: InputHTMLAttributes['id']
    label?: string
    options: any[]
    optionLabel?: string
    placeholder?: InputHTMLAttributes['placeholder']
    required?: boolean
    readonly?: boolean
    error?: string
  }>(),
  {
    id: undefined,
    label: undefined,
    optionLabel: undefined,
    placeholder: undefined,
    error: undefined
  }
)

const model = defineModel<any>()

const classes = computed(() => {
  return [
    'bg-white block h-40 w-full rounded-8 border px-16 text-16 leading-24 shadow-sm transition duration-150 ease-in-out',
    'disabled:bg-black-5',
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
      <select :id="id" v-model="model" :class="classes" :required="required" :disabled="readonly">
        <option :value="undefined">{{ placeholder }}</option>
        <option v-for="(opt, index) in options" :key="index" :value="opt">
          {{ optionLabel ? opt[optionLabel] : opt }}
        </option>
      </select>

      <div
        v-if="error"
        class="absolute inset-y-[0] right-[40px] flex items-center text-red-100"
        aria-label="Form Error"
      >
        <Icon name="error" />
      </div>
    </div>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
