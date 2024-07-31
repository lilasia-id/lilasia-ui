import useToastStore from '@/stores/toast'

export const useToast = () => {
  const toastStore = useToastStore()

  const showToast = (message: string, type: string, duration = 3000) => {
    toastStore.addToast({ message, type }, duration)
  }

  return {
    toastInfo: (message: string, duration?: number) => showToast(message, 'info', duration),
    toastSuccess: (message: string, duration?: number) => showToast(message, 'success', duration),
    toastWarning: (message: string, duration?: number) => showToast(message, 'warning', duration),
    toastError: (message: string, duration?: number) => showToast(message, 'danger', duration)
  }
}
