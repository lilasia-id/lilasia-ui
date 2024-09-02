<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { computed, ref, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    text?: string
    position?: 'left' | 'right' | 'top' | 'bottom'
    class?: any
  }>(),
  {
    text: undefined,
    position: 'bottom',
    class: undefined
  }
)

const slots = useSlots()

const state = ref(false)

const classes = computed(() => {
  return [
    twMerge('bg-black-100 text-white', props.class),
    {
      'absolute z-50 flex h-32 items-center text-nowrap rounded-8 px-12 text-12 font-500': true,
      '-ml-4 top-[50%] translate-y-[-50%] left-[0] -translate-x-full': props.position === 'left',
      '-mr-4 top-[50%] translate-y-[-50%] right-[0] translate-x-full': props.position === 'right',
      '-mt-4 top-[0] left-[50%] translate-x-[-50%] -translate-y-full': props.position === 'top',
      'mt-4 left-[50%] translate-x-[-50%]': props.position === 'bottom'
    }
  ]
})
</script>

<template>
  <div class="relative">
    <div
      @mouseenter="state = true"
      @mouseleave="state = false"
      @focusin="state = true"
      @focusout="state = false"
    >
      <slot></slot>
    </div>

    <Transition
      enter-active-class="transition delay-75 duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition duration-200 ease-out"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div v-if="state" :class="classes">
        <slot v-if="slots.text" name="text"></slot>
        <span v-else>{{ text }}</span>
      </div>
    </Transition>
  </div>
</template>
