<script lang="ts" setup>
withDefaults(
  defineProps<{
    rows?: number
  }>(),
  {
    rows: 1
  }
)
</script>

<template>
  <div class="animate-pulse space-y-12">
    <div v-for="n in rows" :key="n" class="grid grid-cols-3 gap-8">
      <div class="col-span-2 h-12 rounded-8 bg-black-20"></div>
      <div class="col-span-1 h-12 rounded-8 bg-black-20"></div>
      <div class="col-span-3 h-12 rounded-8 bg-black-20"></div>
    </div>
  </div>
</template>
