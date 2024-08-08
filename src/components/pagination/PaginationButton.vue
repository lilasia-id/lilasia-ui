<script lang="ts" setup>
import Icon, { LilasiaIcon } from 'lilasia-icons'
import { computed, ref } from 'vue'

const props = defineProps<{
  text: string | number
  icon?: string | LilasiaIcon
  iconRight?: string | LilasiaIcon
  active?: boolean
  disabled?: boolean
}>()

const button = ref()

const classes = computed(() => {
  return [
    'text-nowrap flex h-48 justify-center items-center gap-x-8 px-16 transition duration-150 ease-in-out md:h-40',
    'first:rounded-l-8 first:border-none',
    'last:rounded-r-8',
    'odd:border-l border-black-10',
    'even:border-l border-black-10',
    'focus-visible:border-black-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-30 focus-visible:ring-offset-2',
    'disabled:text-black-40',
    {
      'bg-white': !props.active,
      'bg-black-20': props.active,
      'hover:bg-black-20': !props.disabled
    }
  ]
})

const handleFocusIn = () => {
  if (button.value instanceof HTMLElement) {
    button.value.classList.add('z-10', 'focus-visible:border')
  }
}

const handleFocusOut = () => {
  if (button.value instanceof HTMLElement) {
    button.value.classList.remove('z-10', 'focus-visible:border')
  }
}
</script>

<template>
  <button
    ref="button"
    type="button"
    :class="classes"
    :disabled="disabled"
    @focusin="handleFocusIn"
    @focusout="handleFocusOut"
  >
    <div v-if="icon" class="inline-flex">
      <Icon v-if="typeof icon === 'string'" :name="icon" size="20" />
      <Icon v-else :="{ size: 20, ...icon }" />
    </div>

    <span class="text-14 font-600 leading-20">
      {{ text }}
    </span>

    <div v-if="iconRight" class="inline-flex">
      <Icon v-if="typeof iconRight === 'string'" :name="iconRight" size="20" />
      <Icon v-else :="{ size: 20, ...iconRight }" />
    </div>
  </button>
</template>
