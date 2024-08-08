<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps<{
  defaultOpen?: boolean
}>()
</script>

<template>
  <Disclosure v-slot="{ open }" :default-open="defaultOpen">
    <DisclosureButton as="template">
      <slot name="button" :open="open"></slot>
    </DisclosureButton>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition duration-200 ease-out"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <DisclosurePanel>
        <slot></slot>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>
