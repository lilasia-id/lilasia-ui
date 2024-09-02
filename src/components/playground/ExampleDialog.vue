<script lang="ts" setup>
import { useDialog } from '@/composables/dialog'
import AppButton from '../AppButton.vue'
import AppBlock from '../blocks/AppBlock.vue'

const { hideDialog } = useDialog()
</script>

<template>
  <AppBlock class="w-full md:w-[28rem]">
    <template #header>
      <h5 class="text-16 font-600 leading-24">Example Dialog</h5>
    </template>

    <div class="w-full px-24 pb-24">
      <div class="text-16 leading-24">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit vitae aliquam ex est
        sapiente a, quaerat obcaecati deleniti praesentium dolore, velit suscipit minima totam sit
        corrupti animi et asperiores doloribus!
      </div>
    </div>

    <template #footer>
      <AppButton color="black" text="Close" block @click="hideDialog" />
    </template>
  </AppBlock>
</template>
