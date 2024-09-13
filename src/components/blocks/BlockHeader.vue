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
    twMerge('px-24 py-16', props.class),
    props.rounded === 16 && 'rounded-t-16',
    props.rounded === 8 && 'rounded-t-8'
  )
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
