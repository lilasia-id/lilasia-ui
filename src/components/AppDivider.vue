<script lang="ts" setup>
defineProps<{
  dashed?: boolean
}>()
</script>

<template>
  <div
    class="border-b border-t-0 border-b-black-10"
    :class="dashed ? 'border-dashed' : 'border-solid'"
  />
</template>
