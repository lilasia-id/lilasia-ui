<script lang="ts" setup>
import { Popover, PopoverButton, PopoverOverlay } from '@headlessui/vue'
import { LilasiaIcon } from 'lilasia-icons'
import { useSlots } from 'vue'
import AppButton from '../AppButton.vue'

withDefaults(
  defineProps<{
    text?: string
    icon?: string | LilasiaIcon
    backdrop?: boolean
  }>(),
  {
    text: undefined,
    icon: undefined
  }
)

const slots = useSlots()
</script>

<template>
  <Popover #="{ open }" class="relative">
    <PopoverButton as="template">
      <slot v-if="slots.button" name="button" :open="open"></slot>
      <AppButton v-else :icon="icon" :text="text" icon-right="keyboard_arrow_down" />
    </PopoverButton>

    <PopoverOverlay v-if="backdrop" class="fixed inset-[0] bg-black/40" />

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <slot></slot>
    </transition>
  </Popover>
</template>
