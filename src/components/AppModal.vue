<script lang="ts" setup>
import useDialogStore from '@/stores/dialog'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const dialogStore = useDialogStore()
const { state, component } = storeToRefs(dialogStore)

watch(state, (newState) => {
  if (newState) {
    document.body.style.overflowY = 'hidden'
    return
  }

  setTimeout(() => {
    document.body.style.overflowY = 'auto'
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
        <div class="fixed inset-[0] bg-black/60"></div>
      </TransitionChild>

      <div class="fixed inset-[0] overflow-y-auto" @click.self="dialogStore.close">
        <div class="mx-auto flex h-fit w-fit items-center justify-center p-24">
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
