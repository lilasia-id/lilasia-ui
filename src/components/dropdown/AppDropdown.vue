<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { useSlots } from 'vue'
import AppButton from '../AppButton.vue'

defineProps<{
  text?: string
  icon?: string
}>()

const slots = useSlots()
</script>

<template>
  <Menu class="relative inline-block text-left" as="div">
    <div>
      <MenuButton as="template">
        <slot v-if="slots.button" name="button"></slot>
        <AppButton v-else :icon="icon" :text="text" icon-right="keyboard_arrow_down" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="divide-gray-100 absolute right-[0] z-50 mt-4 min-w-[12rem] origin-top-right divide-y divide-black-10 rounded-8 bg-white shadow-lg ring-1 ring-black-10 focus:outline-none"
      >
        <slot></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
