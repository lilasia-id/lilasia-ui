<script lang="ts" setup>
import { MenuItem } from '@headlessui/vue'
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
import AppButton from '../AppButton.vue'
import { type LilasiaIcon } from 'lilasia-icons'

withDefaults(
  defineProps<{
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
    activeColor?: 'white' | 'light' | 'blue' | 'yellow' | 'red'
    text: string
    icon?: string | LilasiaIcon
  }>(),
  {
    to: undefined,
    activeColor: 'white',
    icon: undefined
  }
)
</script>

<template>
  <MenuItem v-slot="{ active, close }">
    <AppButton
      v-if="!$slots.default"
      :to="to"
      :color="active ? activeColor : 'light'"
      :icon="icon"
      :text="text"
      align="start"
      block
      @click.capture="close"
    />
    <slot v-else :active="active" :close="close"></slot>
  </MenuItem>
</template>
