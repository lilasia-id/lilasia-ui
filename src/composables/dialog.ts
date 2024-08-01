import useDialogStore from '@/stores/dialog'
import { Component } from 'vue'

export const useDialog = () => {
  const dialogStore = useDialogStore()

  const showDialog = (component: Component) => {
    dialogStore.open({ component })
  }

  const hideDialog = () => {
    dialogStore.close()
  }

  return {
    showDialog,
    hideDialog
  }
}
