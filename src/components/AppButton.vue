<script lang="ts" setup>
import Icon, { type LilasiaIcon } from 'lilasia-icons'
import { computed, useSlots } from 'vue'
import { type RouteLocationAsPathGeneric, type RouteLocationAsRelativeGeneric } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
    type?: 'submit' | 'button' | 'reset'
    color?: 'white' | 'light' | 'blue' | 'yellow' | 'red'
    text?: string
    icon?: string | LilasiaIcon
    iconRight?: string | LilasiaIcon
    iconClass?: string | string[]
    iconRightClass?: string | string[]
    align?: 'center' | 'start' | 'end'
    outline?: boolean
    subtle?: boolean
    round?: boolean
    block?: boolean
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    to: undefined,
    href: undefined,
    target: undefined,
    type: 'button',
    color: 'white',
    text: undefined,
    icon: undefined,
    iconRight: undefined,
    iconClass: undefined,
    iconRightClass: undefined,
    align: 'center',
    outline: false,
    round: false,
    block: false,
    disabled: false,
    loading: false
  }
)

const slots = useSlots()

const variant = computed(() => {
  return props.outline ? 'outline' : props.subtle ? 'subtle' : 'solid'
})

const colorClasses = computed(() => {
  return {
    white: {
      solid: [
        'text-black-100 bg-white border border-black-10',
        props.loading ? '' : 'hover:bg-black-5 hover:border-black-30',
        props.loading ? '' : 'disabled:text-black-40',
        props.loading ? '' : 'disabled:hover:bg-white disabled:hover:border-black-10'
      ],
      outline: [],
      subtle: []
    },
    light: {
      solid: [
        'text-black-100 bg-white border border-white',
        props.loading ? '' : 'hover:bg-black-5 hover:border-black-5',
        props.loading ? '' : 'disabled:text-black-40',
        props.loading ? '' : 'disabled:hover:bg-white disabled:hover:border-white'
      ],
      outline: [],
      subtle: []
    },
    blue: {
      solid: [
        'text-white bg-blue-100 border border-blue-100',
        props.loading ? '' : 'hover:bg-blue-80 hover:border-blue-80',
        props.loading ? '' : 'disabled:bg-blue-40 disabled:border-blue-40',
        props.loading ? '' : 'disabled:hover:bg-blue-40 disabled:hover:border-blue-40'
      ],
      outline: [
        'text-blue-100 border border-blue-100',
        props.disabled || props.loading ? '' : 'hover:bg-blue-20 hover:border-blue-100',
        props.loading ? '' : 'disabled:text-blue-40 disabled:border-blue-40',
        props.loading ? '' : 'disabled:hover:border-blue-40'
      ],
      subtle: []
    },
    yellow: {
      solid: [
        'text-black-100 bg-yellow-100 border border-yellow-100',
        props.loading ? '' : 'hover:bg-yellow-80 hover:border-yellow-80',
        props.loading
          ? ''
          : 'disabled:text-black-40 disabled:bg-yellow-40 disabled:border-yellow-40',
        props.loading ? '' : 'disabled:hover:bg-yellow-40 disabled:hover:border-yellow-40'
      ],
      outline: [],
      subtle: []
    },
    red: {
      solid: [
        'text-white bg-red-100 border border-red-100',
        props.loading ? '' : 'hover:bg-red-80 hover:border-red-80',
        props.loading ? '' : 'disabled:bg-red-40 disabled:border-red-40',
        props.loading ? '' : 'disabled:hover:bg-red-40 disabled:hover:border-red-40'
      ],
      outline: [
        'text-red-100 border border-red-100',
        props.disabled || props.loading ? '' : 'hover:bg-red-20 hover:border-red-100',
        props.loading ? '' : 'disabled:text-red-40 disabled:border-red-40',
        props.loading ? '' : 'disabled:hover:border-red-40'
      ],
      subtle: [
        'text-red-100 bg-red-10 border border-red-10',
        props.disabled || props.loading ? '' : 'hover:bg-red-20 hover:border-red-20',
        props.loading ? '' : 'disabled:text-red-40 disabled:bg-red-5 disabled:border-red-5',
        props.loading ? '' : 'disabled:hover:border-red-5'
      ]
    }
  }
})

const classes = computed(() => {
  return [
    'flex h-48 flex-col justify-center text-nowrap px-16 transition duration-150 ease-in-out md:h-40',
    'focus-visible:border-black-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-30 focus-visible:ring-offset-2',
    {
      'w-full': props.block,
      'w-48 md:w-40': !(slots.default || props.text),
      'rounded-9999': props.round,
      'rounded-8': !props.round,
      'items-center': props.align === 'center',
      'items-start': props.align === 'start',
      'items-end': props.align === 'end'
    },
    colorClasses.value[props.color][variant.value]
  ]
})
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to"
    :type="type"
    :class="classes"
    :disabled="disabled || loading"
  >
    <div class="flex items-center justify-center gap-x-8">
      <template v-if="!loading">
        <div class="inline-flex" v-if="icon" :class="iconClass">
          <Icon v-if="typeof icon === 'string'" :name="icon" size="20" />
          <Icon v-else :="{ size: 20, ...icon }" />
        </div>

        <span class="text-16 font-600 leading-20 md:text-14" v-if="slots.default || text">
          <slot v-if="slots.default"></slot>
          <template v-else-if="text">{{ text }}</template>
        </span>

        <div
          class="inline-flex"
          v-if="(slots.default || text) && iconRight && !loading"
          :class="iconRightClass"
        >
          <Icon v-if="typeof iconRight === 'string'" :name="iconRight" size="20" />
          <Icon v-else :="{ size: 20, ...iconRight }" />
        </div>
      </template>

      <template v-else>
        <div class="inline-flex animate-spin">
          <Icon name="progress_activity" size="20" />
        </div>

        <span class="text-16 font-600 leading-20 md:text-14"> Loading&hellip; </span>
      </template>
    </div>
  </component>
</template>
