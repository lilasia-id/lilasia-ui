<script lang="ts" setup>
import useDialogStore from '@/stores/dialog'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

const dialogStore = useDialogStore()
const { state, component, options } = storeToRefs(dialogStore)

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
  if (newState) {
    document.body.classList.add('no-scrollbar')
    return
  }

  setTimeout(() => {
    document.body.classList.remove('no-scrollbar')
  }, 300)
})
</script>

<template>
  <TransitionRoot appear :show="state" as="div">
    <Dialog class="relative z-50" as="div" @close="dialogStore.close">
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

      <div class="fixed inset-[0] overflow-y-scroll" @click.self="dialogStore.close">
        <div
          :class="classes"
          class="container mx-auto flex h-full py-24"
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
            <component :is="component" />
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
