<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import { computed, onMounted, ref } from 'vue'
import { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
    href?: string
    target?: '_blank' | '_parent' | '_self' | '_top'
    text: string
    size?: 'md' | 'lg' | 'xl'
  }>(),
  {
    to: undefined,
    href: undefined,
    target: undefined,
    size: 'md'
  }
)

const button = ref()

const is = computed(() => {
  return props.to ? 'RouterLink' : props.href ? 'a' : 'button'
})

const classes = computed(() => {
  return twJoin(
    'text-center text-blue-100 underline transition-colors',
    'hover:text-blue-80',
    props.size === 'md' && 'text-14 leading-20',
    props.size === 'lg' && 'text-16 leading-24',
    props.size === 'xl' && 'text-20'
  )
})

onMounted(() => {
  if (button.value instanceof HTMLAnchorElement && props.href) {
    button.value.href = props.href
  }
})
</script>

<template>
  <component :is="is" ref="button" :to="to" :target="target" :class="classes">
    {{ text }}
  </component>
</template>
