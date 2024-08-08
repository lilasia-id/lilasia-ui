<script lang="ts" setup>
defineProps<{
  fluid?: boolean
  noGap?: boolean
}>()
</script>

<template>
  <section :class="{ 'mt-16': !noGap }">
    <div :class="{ 'container mx-auto': !fluid }">
      <slot></slot>
    </div>
  </section>
</template>
