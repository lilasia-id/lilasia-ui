<script lang="ts" setup>
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed } from 'vue'

const props = defineProps<{
  position: 'left' | 'right' | 'bottom' | 'top'
  backdrop?: boolean | 'static'
  class?: any
}>()

const show = defineModel<boolean>()

const transition = {
  top: {
    enterFrom: '-translate-y-full',
    enterTo: 'translate-y-0',
    leaveFrom: 'translate-y-0',
    leaveTo: '-translate-y-full'
  },
  right: {
    enterFrom: 'translate-x-full',
    enterTo: '-translate-x-0',
    leaveFrom: '-translate-x-0',
    leaveTo: 'translate-x-full'
  },
  left: {
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full'
  },
  bottom: {
    enterFrom: 'translate-y-full',
    enterTo: '-translate-y-0',
    leaveFrom: '-translate-y-0',
    leaveTo: 'translate-y-full'
  }
}

const classes = computed(() => {
  return [
    'fixed',
    {
      'top-[0]': props.position === 'top',
      'top-[0] right-[0]': props.position === 'right',
      'top-[0] left-[0]': props.position === 'left',
      'bottom-[0]': props.position === 'bottom'
    },
    props.class
  ]
})

const onBackdropClick = () => {
  if (props.backdrop === 'static') {
    return
  }

  show.value = false
}
</script>

<template>
  <TransitionRoot appear :show="show" as="div" class="relative z-40">
    <TransitionChild
      v-if="backdrop"
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="fixed inset-[0] bg-black/60" @click="onBackdropClick"></div>
    </TransitionChild>

    <TransitionChild
      as="template"
      enter="duration-300"
      :enter-from="transition[position].enterFrom"
      :enter-to="transition[position].enterTo"
      leave="duration-200"
      :leave-from="transition[position].leaveFrom"
      :leave-to="transition[position].leaveTo"
    >
      <div :class="classes">
        <slot></slot>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
