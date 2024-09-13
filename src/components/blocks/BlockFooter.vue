<script setup lang="ts">
import { twJoin, twMerge } from 'tailwind-merge'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    rounded?: number
    class?: string
  }>(),
  {
    rounded: 16,
    class: undefined
  }
)

const classes = computed(() => {
  return twJoin(
    twMerge('bg-black-5 px-24 py-16', props.class),
    props.rounded === 16 && 'rounded-b-16',
    props.rounded === 8 && 'rounded-b-8'
  )
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
