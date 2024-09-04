<script setup lang="ts">
import { PopoverPanel } from '@headlessui/vue'
import { twJoin, twMerge } from 'tailwind-merge'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    position?: 'left' | 'center' | 'right'
    class?: any
  }>(),
  {
    position: 'center',
    class: undefined
  }
)

const classes = computed(() => {
  return twJoin(
    twMerge('mt-8 z-10 max-w-lg', props.class),
    'absolute w-dvw transform',
    props.position === 'left' && 'left-[0]',
    props.position === 'center' && 'left-1/2 -translate-x-1/2',
    props.position === 'right' && 'right-[0]'
  )
})
</script>

<template>
  <PopoverPanel #="{ close }" :class="classes">
    <slot :close="close"></slot>
  </PopoverPanel>
</template>
