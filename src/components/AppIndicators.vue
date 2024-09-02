<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { computed, useSlots } from 'vue'

const props = defineProps<{
  label?: string
  round?: boolean
  class?: any
}>()

const slots = useSlots()

const classes = computed(() => {
  return [
    twMerge('bg-blue-100 text-white', props.class),
    {
      'top-[-4px] absolute right-[-4px] px-4 z-50 min-h-8 flex items-center justify-center': true,
      'rounded-9999': props.round,
      'rounded-4': !props.round,
      'min-w-20': props.label,
      'min-w-8': !props.label
    }
  ]
})
</script>

<template>
  <div class="relative z-10">
    <div :class="classes">
      <span v-if="label" class="font-400 text-12">
        {{ label }}
      </span>
    </div>
    <div v-if="slots.default" class="relative">
      <slot></slot>
    </div>
  </div>
</template>
