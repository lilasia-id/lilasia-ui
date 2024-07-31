<script setup lang="ts">
import BlockFooter from '@/components/blocks/BlockFooter.vue'
import BlockHeader from '@/components/blocks/BlockHeader.vue'
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    bordered?: boolean
    rounded?: number
  }>(),
  {
    bordered: false,
    rounded: 8
  }
)

const slots = useSlots()

const classes = computed(() => {
  return {
    'border border-black-10': props.bordered,
    'rounded-16': props.rounded === 16,
    'rounded-8': props.rounded === 8
  }
})
</script>

<template>
  <div class="bg-white" :class="classes">
    <BlockHeader v-if="slots.header" :rounded="rounded">
      <slot name="header" />
    </BlockHeader>

    <slot />

    <BlockFooter v-if="slots.footer" :rounded="rounded">
      <slot name="footer" />
    </BlockFooter>
  </div>
</template>
