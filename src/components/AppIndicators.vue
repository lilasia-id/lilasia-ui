<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { computed, useSlots } from 'vue'

const props = defineProps<{
  label?: string
  round?: boolean
  hide?: boolean
  class?: any
}>()

const slots = useSlots()

const classes = computed(() => {
  return [
    twMerge('bg-blue-100 text-white', props.class),
    {
      'absolute right-[0] top-[0] z-50 flex min-h-8 items-center justify-center px-4': true,
      'rounded-9999': props.round,
      'rounded-4': !props.round,
      'min-w-20 h-20': props.label,
      'min-w-8': !props.label
    }
  ]
})
</script>

<template>
  <div class="relative z-10">
    <div v-if="!hide" :class="classes">
      <span v-if="label" class="font-400 text-12">
        {{ label }}
      </span>
    </div>
    <div v-if="slots.default" class="relative">
      <slot></slot>
    </div>
  </div>
</template>
