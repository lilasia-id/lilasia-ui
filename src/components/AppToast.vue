<script setup lang="ts">
import useToastStore from '@/stores/toast'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import Icon from 'lilasia-icons'
import { storeToRefs } from 'pinia'
import AppBlock from './blocks/AppBlock.vue'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)
</script>

<template>
  <div v-if="!!toasts.length" class="fixed right-24 top-24 z-[52] w-fit">
    <TransitionRoot
      v-for="toast in toasts"
      :key="toast.id"
      class="flex justify-end"
      as="div"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-50"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-50"
      :show="toast.state"
      appear
    >
      <AppBlock class="mb-16 w-fit max-w-[432px] shadow ring-1 ring-black-10" :rounded="16">
        <div class="flex items-center gap-16 p-16">
          <TransitionChild
            as="div"
            enter="duration-300 delay-100 ease-out"
            enter-from="opacity-0 scale-0"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-0"
          >
            <div class="relative flex h-32 w-32 items-center justify-center">
              <div
                class="absolute h-32 w-32 rounded-9999"
                :class="{
                  'bg-green-10': toast.type === 'success',
                  'bg-blue-10': toast.type === 'info',
                  'bg-yellow-10': toast.type === 'warning',
                  'bg-red-10': toast.type === 'danger'
                }"
              ></div>
              <div
                class="absolute h-24 w-24 rounded-9999"
                :class="{
                  'bg-green-20': toast.type === 'success',
                  'bg-blue-20': toast.type === 'info',
                  'bg-yellow-20': toast.type === 'warning',
                  'bg-red-20': toast.type === 'danger'
                }"
              ></div>
              <div
                class="absolute inline-flex"
                :class="{
                  'text-green-100': toast.type === 'success',
                  'text-blue-100': toast.type === 'info',
                  'text-yellow-100': toast.type === 'warning',
                  'text-red-100': toast.type === 'danger'
                }"
              >
                <Icon v-if="toast.type === 'success'" name="check_circle" size="16" />
                <Icon v-if="toast.type === 'info'" name="info" size="16" />
                <Icon v-if="toast.type === 'warning'" name="warning" size="16" />
                <Icon v-if="toast.type === 'danger'" name="error" size="16" />
              </div>
            </div>
          </TransitionChild>

          <div class="text-16 font-500 leading-20">
            {{ toast.message }}
          </div>
        </div>
      </AppBlock>
    </TransitionRoot>
  </div>
</template>
