<script setup lang="ts">
import useToastStore from '@/stores/toast'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import Icon from 'lilasia-icons'
import { storeToRefs } from 'pinia'
import AppBlock from './blocks/AppBlock.vue'
import { computed } from 'vue'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)

const startToasts = computed(() => {
  return toasts.value.filter((item) => item.position === 'start')
})

const centerToasts = computed(() => {
  return toasts.value.filter((item) => item.position === 'center')
})

const endToasts = computed(() => {
  return toasts.value.filter((item) => item.position === 'end')
})

const dismissToast = (toastId?: string) => {
  if (toastId) {
    toastStore.removeToast(toastId)
  }
}

const getPositionClass = (toastPosition: 'start' | 'center' | 'end') => {
  return {
    'justify-start': toastPosition === 'start',
    'justify-center': toastPosition === 'center',
    'justify-end': toastPosition === 'end'
  }
}

const getToastClass = (toastType: string, toastRound: boolean) => {
  return {
    'bg-green-10 ring-1 ring-green-100': toastType === 'success',
    'bg-blue-20 ring-1 ring-blue-100': toastType === 'info',
    'bg-yellow-10 ring-1 ring-yellow-100': toastType === 'warning',
    'bg-red-10 ring-1 ring-red-100': toastType === 'danger',
    'rounded-9999': toastRound,
    'rounded-8': !toastRound
  }
}

const getSecondCircleClass = (toastType: string) => {
  return {
    'bg-green-20': toastType === 'success',
    'bg-blue-20': toastType === 'info',
    'bg-yellow-20': toastType === 'warning',
    'bg-red-20': toastType === 'danger'
  }
}

const getFirstCircleClass = (toastType: string) => {
  return {
    'bg-green-60': toastType === 'success',
    'bg-blue-40': toastType === 'info',
    'bg-yellow-40': toastType === 'warning',
    'bg-red-40': toastType === 'danger'
  }
}

const getIconClass = (toastType: string) => {
  return {
    'text-green-100': toastType === 'success',
    'text-blue-100': toastType === 'info',
    'text-yellow-100': toastType === 'warning',
    'text-red-100': toastType === 'danger'
  }
}

const getIconName = (toastType: string) => {
  switch (toastType) {
    case 'success':
      return 'check_circle'

    case 'info':
      return 'info'

    case 'warning':
      return 'warning'

    case 'danger':
      return 'error'

    default:
      return ''
  }
}
</script>

<template>
  <!-- Start Position's Toast -->
  <div v-if="startToasts && startToasts.length > 0" class="fixed left-[0] top-[0] z-[52]">
    <TransitionRoot
      v-for="toast in startToasts"
      :key="toast.id"
      as="div"
      class="flex px-24 pt-24"
      :class="getPositionClass(toast.position)"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-50"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-50"
      :show="toast.state"
      appear
      @click="dismissToast(toast.id)"
    >
      <AppBlock
        class="shadow ring-1 ring-black-10 md:max-w-[432px]"
        :class="getToastClass(toast.type, toast.round)"
      >
        <div class="flex items-center gap-16 px-16 py-8">
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
                :class="getSecondCircleClass(toast.type)"
              ></div>
              <div
                class="absolute h-24 w-24 rounded-9999"
                :class="getFirstCircleClass(toast.type)"
              ></div>
              <div class="absolute inline-flex" :class="getIconClass(toast.type)">
                <Icon :name="getIconName(toast.type)" size="16" />
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

  <!-- Center Position's Toast -->
  <div
    v-if="centerToasts && centerToasts.length > 0"
    class="fixed top-[0] z-[52] w-full md:left-[50%] md:w-fit md:translate-x-[-50%]"
  >
    <TransitionRoot
      v-for="toast in centerToasts"
      :key="toast.id"
      as="div"
      class="flex px-24 pt-24"
      :class="getPositionClass(toast.position)"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-50"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-50"
      :show="toast.state"
      appear
      @click="dismissToast(toast.id)"
    >
      <AppBlock class="shadow md:max-w-[432px]" :class="getToastClass(toast.type, toast.round)">
        <div class="flex items-center gap-16 px-16 py-8">
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
                :class="getSecondCircleClass(toast.type)"
              ></div>
              <div
                class="absolute h-24 w-24 rounded-9999"
                :class="getFirstCircleClass(toast.type)"
              ></div>
              <div class="absolute inline-flex" :class="getIconClass(toast.type)">
                <Icon :name="getIconName(toast.type)" size="16" />
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

  <!-- End Position's Toast -->
  <div v-if="endToasts && endToasts.length > 0" class="fixed right-[0] top-[0] z-[52]">
    <TransitionRoot
      v-for="toast in endToasts"
      :key="toast.id"
      as="div"
      class="flex px-24 pt-24"
      :class="getPositionClass(toast.position)"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-50"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-50"
      :show="toast.state"
      appear
      @click="dismissToast(toast.id)"
    >
      <AppBlock
        class="shadow ring-1 ring-black-10 md:max-w-[432px]"
        :class="getToastClass(toast.type, toast.round)"
      >
        <div class="flex items-center gap-16 px-16 py-8">
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
                :class="getSecondCircleClass(toast.type)"
              ></div>
              <div
                class="absolute h-24 w-24 rounded-9999"
                :class="getFirstCircleClass(toast.type)"
              ></div>
              <div class="absolute inline-flex" :class="getIconClass(toast.type)">
                <Icon :name="getIconName(toast.type)" size="16" />
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
