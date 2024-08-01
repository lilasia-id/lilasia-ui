<script lang="ts" setup>
import Icon from 'lilasia-icons'
import { computed, ref, type InputHTMLAttributes } from 'vue'

defineProps<{
  id?: InputHTMLAttributes['id']
  name?: InputHTMLAttributes['name']
  value?: InputHTMLAttributes['value']
  label?: string
}>()

const model = defineModel<any>()

const checked = ref(false)

const classes = computed(() => {
  return [
    'flex h-16 w-16 select-none items-center justify-center rounded-4 border border-black-30 bg-white transition duration-150 ease-in-out',
    'focus:border-black-30 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black-30',
    'peer-checked:border-blue-100 peer-checked:bg-blue-100'
  ]
})
</script>

<template>
  <label class="inline-flex w-fit items-center" :for="id">
    <input
      class="peer hidden"
      v-model="model"
      :id="id"
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
    <span class="ml-8 text-14 font-500 leading-20">{{ label }}</span>
  </label>
</template>
