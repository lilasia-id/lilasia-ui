<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    aspectRatio?: 'square' | 'video'
    round?: boolean
  }>(),
  {
    aspectRatio: 'square'
  }
)

const classes = computed(() => {
  return [
    'bg-black-20',
    {
      'aspect-square': props.aspectRatio === 'square',
      'aspect-video': props.aspectRatio === 'video',
      'rounded-8': !props.round,
      'rounded-9999': props.round
    }
  ]
})
</script>

<template>
  <div class="animate-pulse">
    <div :class="classes"></div>
  </div>
</template>
