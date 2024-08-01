import { defineStore } from 'pinia'
import { ref, shallowRef, type Component } from 'vue'

const useDialogStore = defineStore('dialog', () => {
  type ModalPayload = {
    component: Component
  }

  const state = ref(false)
  const component = shallowRef<Component | null>(null)

  const open = (payload: ModalPayload) => {
    state.value = true
    component.value = payload.component
  }

  const close = () => {
    state.value = false

    setTimeout(() => {
      component.value = null
    }, 300)
  }

  return {
    state,
    component,
    open,
    close
  }
})

export default useDialogStore
