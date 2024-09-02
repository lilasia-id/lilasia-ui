<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { useToast } from '@/composables/toast'

const { toastSuccess, toastInfo, toastWarning, toastError } = useToast()

const showSuccessToast = () => {
  toastSuccess('This is success toast', { position: 'start' })
}

const showInfoToast = () => {
  toastInfo('This is info toast', {
    position: 'center'
  })
}

const showWarningToast = () => {
  toastWarning('This is warning toast', {
    position: 'center'
  })
}

const showDangerToast = () => {
  toastError('This is danger toast', {
    position: 'end'
  })
}
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection>
      <AppBlock bordered>
        <div class="flex flex-wrap justify-center gap-8 p-24">
          <AppButton color="green" @click="showSuccessToast"> Success Toast </AppButton>
          <AppButton color="blue" @click="showInfoToast"> Info Toast </AppButton>
          <AppButton color="yellow" @click="showWarningToast"> Warning Toast </AppButton>
          <AppButton color="red" @click="showDangerToast"> Danger Toast </AppButton>
        </div>
      </AppBlock>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/toast.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
