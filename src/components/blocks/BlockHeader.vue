<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  rounded?: number
}>()

const classes = computed(() => {
  return {
    'rounded-t-16': props.rounded === 16,
    'rounded-t-8': props.rounded === 8
  }
})
</script>

<template>
  <div class="relative p-24" :class="classes">
    <slot />
  </div>
</template>
