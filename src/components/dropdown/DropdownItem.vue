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
    activeColor: 'blue',
    icon: undefined
  }
)
</script>

<template>
  <MenuItem v-slot="{ active }">
    <AppButton
      :to="to"
      :color="active ? activeColor : 'light'"
      :icon="icon"
      :text="text"
      align="start"
      block
    />
  </MenuItem>
</template>
