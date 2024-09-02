<script lang="ts" setup>
import Icon from 'lilasia-icons'
import { computed, ref } from 'vue'

defineProps<{
  id?: string
  name?: string
  value?: any
  label?: string
}>()

const model = defineModel<any>()

const checked = ref(false)

const classes = computed(() => {
  return [
    'flex h-18 w-18 select-none items-center justify-center rounded-none border-2 border-black-100 bg-white transition duration-150 ease-in-out',
    'focus-visible:border-black-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-black-30',
    'peer-checked:border-blue-100 peer-checked:bg-blue-100'
  ]
})
</script>

<template>
  <label class="inline-flex w-fit items-center" :for="id">
    <input
      :id="id"
      v-model="model"
      class="peer hidden"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
    />

    <span :class="classes" tabindex="0" @keyup.enter="checked = !checked">
      <div class="inline-flex text-white">
        <Icon name="check" size="14" weight="700" />
      </div>
    </span>

    <div v-if="label || $slots.label" class="ml-8 text-14 font-500 leading-20">
      <span v-if="label && !$slots.label">
        {{ label }}
      </span>
      <slot name="label"></slot>
    </div>
  </label>
</template>
