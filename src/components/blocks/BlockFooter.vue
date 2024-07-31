<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  rounded?: number
}>()

const classes = computed(() => {
  return {
    'rounded-b-16': props.rounded === 16,
    'rounded-b-8': props.rounded === 8
  }
})
</script>

<template>
  <div class="bg-black-5 px-24 py-16" :class="classes">
    <slot />
  </div>
</template>
