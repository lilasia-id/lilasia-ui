<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import DeleteDialog from '@/components/playground/DeleteDialog.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
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
  <div class="prose mx-auto max-w-4xl">
    <AppSection>
      <AppBlock bordered>
        <div class="flex justify-center gap-8 p-24">
          <AppButton icon="vertical_align_top" @click="openTopDialog">Top</AppButton>
          <AppButton icon="recenter" @click="openMiddleDialog">Middle</AppButton>
          <AppButton icon="align_justify_flex_end" @click="openTopRightDialog">
            Top-right
          </AppButton>
          <AppButton icon="align_justify_flex_start" @click="openTopLeftDialog">
            Top-left
          </AppButton>
        </div>
      </AppBlock>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/dialog.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
