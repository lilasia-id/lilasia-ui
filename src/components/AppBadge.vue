<script lang="ts" setup>
import Icon, { type LilasiaIcon } from 'lilasia-icons'
import { twJoin } from 'tailwind-merge'
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    color?: 'white' | 'blue' | 'red' | 'yellow' | 'green'
    icon?: string | LilasiaIcon
    iconRight?: string | LilasiaIcon
    iconClass?: string | string[]
    iconRightClass?: string | string[]
    pill?: boolean
    outline?: boolean
  }>(),
  {
    label: undefined,
    color: 'white',
    icon: undefined,
    iconRight: undefined,
    iconClass: undefined,
    iconRightClass: undefined,
    pill: false,
    outline: false
  }
)

const slots = useSlots()

const variant = computed(() => {
  return props.outline ? 'outline' : 'solid'
})

const colorClasses = computed(() => {
  return {
    white: {
      solid: ['border border-black-10 bg-white'],
      outline: ['border border-black-30 bg-black-5']
    },
    blue: {
      solid: ['border border-blue-20 bg-blue-20 text-blue-100'],
      outline: ['border border-blue-100 bg-blue-20 text-blue-100']
    },
    red: {
      solid: ['border border-red-20 bg-red-20 text-red-100'],
      outline: ['border border-red-100 bg-red-20 text-red-100']
    },
    yellow: {
      solid: ['border border-yellow-20 bg-yellow-20 text-yellow-100'],
      outline: ['border border-yellow-100 bg-yellow-20 text-yellow-100']
    },
    green: {
      solid: ['border border-green-20 bg-green-20 text-green-100'],
      outline: ['border border-green-100 bg-green-20 text-green-100']
    }
  }
})

const classes = computed(() => {
  return twJoin(
    'flex h-24 cursor-default items-center justify-center gap-x-4 text-nowrap transition-colors',
    (props.icon || props.iconRight) && 'px-[6px]',
    !props.icon && !props.iconRight && 'px-[12px]',
    props.pill && 'rounded-9999',
    !props.pill && 'rounded-4',
    colorClasses.value[props.color][variant.value]
  )
})
</script>

<template>
  <div :class="classes">
    <div v-if="icon" class="inline-flex transition-colors" :class="iconClass">
      <Icon v-if="typeof icon === 'string'" :name="icon" size="16" />
      <Icon v-else :="{ size: 16, ...icon }" />
    </div>

    <span v-if="slots.default || label" class="text-12 font-600">
      <slot v-if="slots.default"></slot>
      <template v-else-if="label">{{ label }}</template>
    </span>

    <div v-if="iconRight" class="inline-flex transition-colors" :class="iconRightClass">
      <Icon v-if="typeof iconRight === 'string'" :name="iconRight" size="16" />
      <Icon v-else :="{ size: 16, ...iconRight }" />
    </div>
  </div>
</template>
