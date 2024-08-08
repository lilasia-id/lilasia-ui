<script setup lang="ts">
import { Tab } from '@headlessui/vue'

defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <Tab v-slot="{ selected }" :disabled="disabled" as="div" class="focus:outline-none">
    <slot :selected="selected" :disabled="disabled"></slot>
  </Tab>
</template>
