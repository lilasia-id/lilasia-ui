<script lang="ts" setup>
defineProps<{
  for?: string
  label?: string
  required?: boolean
}>()
</script>

<template>
  <label :for="$props.for" class="flex flex-col gap-8">
    <div v-if="label" class="w-fit text-14 font-500 leading-20">
      {{ label }} <span v-if="!required" class="text-black-60">(Optional)</span>
    </div>
    <slot></slot>
  </label>
</template>
