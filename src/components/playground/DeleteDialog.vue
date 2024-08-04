<script lang="ts" setup>
import { useDialog } from '@/composables/dialog'
import AppButton from '../AppButton.vue'
import AppBlock from '../blocks/AppBlock.vue'

const { hideDialog } = useDialog()
</script>

<template>
  <AppBlock class="w-[28rem]">
    <template #header>
      <h5 class="text-16 font-600 leading-24">Delete Confirmation</h5>
    </template>

    <div class="w-full px-24 pb-24">
      <div class="mb-24 text-16 leading-24">Are you sure want to delete this item?</div>
      <AppButton color="red" text="Yes, delete it!" outline block @click="hideDialog" />
    </div>
  </AppBlock>
</template>
