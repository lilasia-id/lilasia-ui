<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  sticky?: boolean
  class?: any
}>()

const classes = computed(() => {
  return [props.sticky ? 'sticky top-[0] z-30' : 'static', props.class]
})
</script>

<template>
  <header :class="classes">
    <div class="container mx-auto">
      <slot></slot>
    </div>
  </header>
</template>
