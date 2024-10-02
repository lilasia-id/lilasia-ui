<script lang="ts" setup>
defineProps<{
  fluid?: boolean
  noGap?: boolean
}>()
</script>

<template>
  <section :class="{ 'mt-24 xs:mt-16 lg:mt-40': !noGap }">
    <div :class="{ 'container mx-auto': !fluid }">
      <slot></slot>
    </div>
  </section>
</template>
