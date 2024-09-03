import useToastStore from '@/stores/toast'

type ToastOptions = {
  round?: boolean
  position?: 'start' | 'center' | 'end'
  duration?: number
}

export const useToast = () => {
  const toastStore = useToastStore()

  const showToast = (message: string, type: string, options?: ToastOptions) => {
    const round = options?.round ?? true
    const duration = options?.duration ?? 3000
    const position = options?.position ?? 'end'

    toastStore.addToast({ message, type, round, position }, duration)
  }

  return {
    toastInfo: (message: string, options?: ToastOptions) => showToast(message, 'info', options),
    toastSuccess: (message: string, options?: ToastOptions) =>
      showToast(message, 'success', options),
    toastWarning: (message: string, options?: ToastOptions) =>
      showToast(message, 'warning', options),
    toastError: (message: string, options?: ToastOptions) => showToast(message, 'danger', options)
  }
}
