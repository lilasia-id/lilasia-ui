import { defineStore } from 'pinia'
import { ref, shallowRef, type Component } from 'vue'

export type DialogOptions = {
  position?: 'top' | 'middle' | 'top-left' | 'top-right'
}

type DialogPayload = {
  component: Component
  options?: DialogOptions
}

const useDialogStore = defineStore('dialog', () => {
  const state = ref(false)
  const component = shallowRef<Component | null>(null)
  const options = ref<DialogOptions>()

  const open = (payload: DialogPayload) => {
    state.value = true
    component.value = payload.component
    options.value = { position: 'top', ...payload.options }
  }

  const close = async () => {
    state.value = false

    await new Promise((resolve) => setTimeout(resolve, 300))

    component.value = null
    options.value = undefined
  }

  return {
    state,
    component,
    options,
    open,
    close
  }
})

export default useDialogStore
