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
      'container mx-auto flex py-24': true,
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
    document.documentElement.classList.add('!overflow-visible')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
    return
  }

  setTimeout(() => {
    document.documentElement.classList.remove('!overflow-visible')
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

const hideDialog = () => {
  if (options.value?.staticBackdrop) {
    return
  }

  dialogStore.close()
}
</script>

<template>
  <TransitionRoot appear :show="state" as="div">
    <Dialog class="relative z-50" as="div" :initial-focus="hiddenRef" @close="dialogStore.close">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-[0] bg-black/60" @click.self="hideDialog"></div>
      </TransitionChild>

      <div class="fixed inset-[0] overflow-y-auto" @click.self="hideDialog">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <div ref="wrapper" :class="classes" @click.self="hideDialog">
            <div ref="hiddenRef" class="hidden"></div>
            <component :is="component" />
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
