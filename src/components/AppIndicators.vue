<script lang="ts" setup>
import { computed, useSlots } from 'vue'

const props = defineProps<{
  label?: string
  round?: boolean
  class?: any
}>()

const slots = useSlots()

const classes = computed(() => {
  return [
    'top[0] absolute right-[0] z-50 -mr-4 -mt-4 flex h-16 min-w-16 items-center justify-center',
    {
      'rounded-9999': props.round,
      'rounded-4': !props.round
    },
    props.class
  ]
})
</script>

<template>
  <div class="relative">
    <div :class="classes">
      <span v-if="label" class="font-400 text-10">
        {{ label }}
      </span>
    </div>
    <div v-if="slots.default" class="relative">
      <slot></slot>
    </div>
  </div>
</template>
