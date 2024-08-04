<script lang="ts" setup>
import Icon, { type LilasiaIcon } from 'lilasia-icons'
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    color?: 'white' | 'blue' | 'red' | 'yellow' | 'green'
    icon?: string | LilasiaIcon
    iconRight?: string | LilasiaIcon
    iconClass?: string | string[]
    iconRightClass?: string | string[]
    iconFilled?: boolean
    pill?: boolean
  }>(),
  {
    label: undefined,
    color: 'white',
    icon: undefined,
    iconRight: undefined,
    iconClass: undefined,
    iconRightClass: undefined
  }
)

const slots = useSlots()

const colorClasses = computed(() => {
  return {
    white: ['border border-black-10 bg-white', 'hover:border-black-30 hover:bg-black-5'],
    blue: ['border border-blue-20 bg-blue-20 text-blue-100', 'hover:border-blue-100'],
    red: ['border border-red-20 bg-red-20 text-red-100', 'hover:border-red-100'],
    yellow: ['border border-yellow-20 bg-yellow-20 text-yellow-100', 'hover:border-yellow-100'],
    green: ['border border-green-20 bg-green-20 text-green-100', 'hover:border-green-100']
  }
})

const classes = computed(() => {
  return [
    'flex h-28 cursor-default items-center justify-center gap-x-[6px] text-nowrap px-12 transition-colors',
    {
      'rounded-8': !props.pill,
      'rounded-9999': props.pill
    },
    colorClasses.value[props.color]
  ]
})
</script>

<template>
  <div :class="classes">
    <div v-if="icon" class="inline-flex transition-colors" :class="iconClass">
      <Icon v-if="typeof icon === 'string'" :name="icon" size="20" />
      <Icon v-else :="{ size: 20, ...icon }" />
    </div>

    <span v-if="slots.default || label" class="text-14 font-600 leading-20">
      <slot v-if="slots.default"></slot>
      <template v-else-if="label">{{ label }}</template>
    </span>

    <div v-if="iconRight" class="inline-flex transition-colors" :class="iconRightClass">
      <Icon v-if="typeof iconRight === 'string'" :name="iconRight" size="20" />
      <Icon v-else :="{ size: 20, ...iconRight }" />
    </div>
  </div>
</template>
