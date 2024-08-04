<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'

const model = defineModel<boolean>()

defineProps<{
  id?: HTMLAttributes['id']
}>()

const classes = computed(() => {
  return [
    'switch absolute inset-[0] rounded-9999 bg-black-10 transition duration-150 ease-in-out',
    'before:absolute before:bottom-4 before:left-4 before:h-[26px] before:w-[26px] before:rounded-9999 before:bg-white before:transition before:duration-150 before:ease-in-out'
  ]
})
</script>

<template>
  <label class="relative inline-block h-[34px] w-60" :for="id">
    <input :id="id" v-model="model" class="h-[0] w-[0] translate-x-24 opacity-0" type="checkbox" />
    <span :class="classes" role="button"></span>
  </label>
</template>
