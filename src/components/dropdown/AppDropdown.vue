<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { computed, useSlots } from 'vue'
import AppButton from '../AppButton.vue'
import { LilasiaIcon } from 'lilasia-icons'

const props = withDefaults(
  defineProps<{
    text?: string
    icon?: string | LilasiaIcon
    menuPosition?: 'right' | 'left' | 'center'
  }>(),
  {
    text: undefined,
    icon: undefined,
    menuPosition: 'right'
  }
)

const slots = useSlots()

const classes = computed(() => {
  return [
    {
      'divide-gray-100 absolute z-50 mt-8 min-w-[12rem] origin-top-right divide-y divide-black-10 rounded-8 bg-white shadow-lg ring-1 ring-black-10 focus:outline-none':
        true,
      'right-[0]': props.menuPosition === 'right',
      'left-[0]': props.menuPosition === 'left',
      'left-[50%] translate-x-[-50%]': props.menuPosition === 'center'
    }
  ]
})
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
      <MenuItems :class="classes">
        <slot></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
