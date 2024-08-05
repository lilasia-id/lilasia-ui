import useDialogStore, { DialogOptions } from '@/stores/dialog'
import { Component } from 'vue'

export const useDialog = () => {
  const dialogStore = useDialogStore()

  const showDialog = (component: Component, options?: DialogOptions) => {
    dialogStore.open({ component, options })
  }

  const hideDialog = () => {
    dialogStore.close()
  }

  return {
    showDialog,
    hideDialog
  }
}
