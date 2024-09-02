<script lang="ts" setup>
import useDialogStore from '@/stores/dialog'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'

const dialogStore = useDialogStore()
const { state, component, options } = storeToRefs(dialogStore)

const wrapper = ref<HTMLElement>()
const hiddenRef = ref()

const classes = computed(() => {
  return [
    {
      'items-start justify-center': options.value?.position === 'top',
      'items-start justify-end': options.value?.position === 'top-right',
      'items-start justify-start': options.value?.position === 'top-left',
      'items-center justify-center': options.value?.position === 'middle'
    }
  ]
})

watch(state, (newState) => {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

  if (newState) {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
    return
  }

  setTimeout(() => {
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = '0'
  }, 300)
})

watch(
  () => wrapper.value?.clientHeight,
  (clientHeight) => {
    if (options.value?.position !== 'middle') return
    if (clientHeight && clientHeight < window.innerHeight) {
      wrapper.value?.classList.add('h-full')
    } else {
      wrapper.value?.classList.remove('h-full')
    }
  },
  { immediate: true }
)
</script>

<template>
  <TransitionRoot appear :show="state" as="div">
    <Dialog class="relative z-50" as="div" :initial-focus="hiddenRef" @close="dialogStore.close">
      <TransitionChild
        as="div"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-[0] bg-black/60" @click.self="dialogStore.close"></div>
      </TransitionChild>

      <div class="fixed inset-[0] overflow-y-auto" @click.self="dialogStore.close">
        <div
          ref="wrapper"
          :class="classes"
          class="container mx-auto flex py-24"
          @click.self="dialogStore.close"
        >
          <TransitionChild
            as="div"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div ref="hiddenRef" class="hidden"></div>
            <component :is="component" />
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
