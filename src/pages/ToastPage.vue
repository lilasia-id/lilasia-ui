<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import { useToast } from '@/composables/toast'

const { toastSuccess, toastInfo, toastWarning, toastError } = useToast()

const showSuccessToast = () => {
  toastSuccess('This is success toast')
}

const showInfoToast = () => {
  toastInfo('This is info toast')
}

const showWarningToast = () => {
  toastWarning('This is warning toast')
}

const showDangerToast = () => {
  toastError('This is danger toast')
}
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Lilasia UI</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex gap-8">
          <AppButton @click="showSuccessToast">Show Success Toast</AppButton>
          <AppButton color="blue" @click="showInfoToast">Show Info Toast</AppButton>
          <AppButton color="yellow" @click="showWarningToast">Show Warning Toast</AppButton>
          <AppButton color="red" @click="showDangerToast">Show Danger Toast</AppButton>
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
