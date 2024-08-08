<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import DeleteDialog from '@/components/playground/DeleteDialog.vue'
import { useDialog } from '@/composables/dialog'

const { showDialog } = useDialog()

const openTopDialog = () => {
  showDialog(DeleteDialog, { position: 'top' })
}

const openMiddleDialog = () => {
  showDialog(DeleteDialog, { position: 'middle' })
}

const openTopRightDialog = () => {
  showDialog(DeleteDialog, { position: 'top-right' })
}

const openTopLeftDialog = () => {
  showDialog(DeleteDialog, { position: 'top-left' })
}
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Dialog</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex gap-8">
          <AppButton icon="vertical_align_top" @click="openTopDialog">Top Position</AppButton>
          <AppButton icon="recenter" @click="openMiddleDialog">Middle Position</AppButton>
          <AppButton icon="align_justify_flex_end" @click="openTopRightDialog">
            Top-right position
          </AppButton>
          <AppButton icon="align_justify_flex_start" @click="openTopLeftDialog">
            Top-left position
          </AppButton>
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
