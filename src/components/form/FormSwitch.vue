<script lang="ts" setup>
import { computed } from 'vue'

const model = defineModel<boolean>()

defineProps<{
  id?: string
}>()

const classes = computed(() => {
  return [
    'switch absolute inset-[0] rounded-16 bg-black-10 transition duration-150 ease-in-out',
    'before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[2px] before:h-[20px] before:w-[20px] before:rounded-16 before:bg-white before:transition before:duration-150 before:ease-in-out'
  ]
})
</script>

<template>
  <label class="relative inline-block h-[26px] w-48" :for="id">
    <input :id="id" v-model="model" class="h-[0] w-[0] translate-x-24 opacity-0" type="checkbox" />
    <span :class="classes" role="button"></span>
  </label>
</template>
