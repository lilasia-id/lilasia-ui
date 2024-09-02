<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  sticky?: boolean
  class?: any
}>()

const classes = computed(() => {
  return [
    props.class,
    {
      'sticky top-[0] z-30': props.sticky,
      static: !props.sticky
    }
  ]
})
</script>

<template>
  <header :class="classes">
    <div class="container mx-auto">
      <slot></slot>
    </div>
  </header>
</template>
