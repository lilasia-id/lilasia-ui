import { defineStore } from 'pinia'
import { ref } from 'vue'

const useToastStore = defineStore('toast', () => {
  type Toast = {
    id?: string
    state?: boolean
    message: string
    type: string
    round: boolean
    position: 'start' | 'center' | 'end'
  }

  const toasts = ref<Toast[]>([])

  const addToast = (options: Toast, duration = 3000) => {
    const id = Date.now().toString()

    toasts.value.push({
      id,
      state: true,
      message: options.message,
      type: options.type,
      round: options.round,
      position: options.position
    })

    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  const removeToast = (id: string) => {
    const index = toasts.value.findIndex((toast) => toast.id === id)

    if (index !== -1) {
      toasts.value[index].state = false
      setTimeout(() => {
        toasts.value.splice(index, 1)
      }, 300)
    }
  }

  return {
    toasts,
    addToast,
    removeToast
  }
})

export default useToastStore
