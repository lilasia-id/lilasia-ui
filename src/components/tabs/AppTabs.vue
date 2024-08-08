<script lang="ts" setup>
import { TabGroup } from '@headlessui/vue'

defineProps<{
  defaultIndex?: number
  vertical?: boolean
}>()

const model = defineModel<number>()

const changeTab = (index: number) => {
  model.value = index
}
</script>

<template>
  <TabGroup
    as="div"
    :vertical="vertical"
    :selected-index="model"
    :default-index="defaultIndex"
    @change="changeTab"
  >
    <slot></slot>
  </TabGroup>
</template>
