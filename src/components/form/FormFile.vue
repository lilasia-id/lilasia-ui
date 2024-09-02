<script lang="ts" setup>
import { ref } from 'vue'
import AppButton from '../AppButton.vue'
import FormLabel from './FormLabel.vue'

const emit = defineEmits(['update:model-value'])

const props = withDefaults(
  defineProps<{
    modelValue?: any
    id?: string
    name?: string
    label?: string
    placeholder?: string
    multiple?: boolean
    required?: boolean
    readonly?: boolean
    error?: string
  }>(),
  {
    modelValue: undefined,
    id: undefined,
    name: undefined,
    label: undefined,
    placeholder: 'Choose File',
    required: false,
    readonly: false,
    error: undefined
  }
)

const inputFile = ref<HTMLInputElement>()
const fileInfo = ref()

const handleFileChange = (event: Event) => {
  const el = event.target as HTMLInputElement

  if (props.multiple) {
    emit('update:model-value', el.files)
    fileInfo.value = `${el.files?.length} File${el.files && el.files && el.files.length > 1 ? 's' : ''}`
    return
  }

  emit('update:model-value', el.files?.[0])
  fileInfo.value = el.files?.[0].name
}

const triggerInputFileClick = () => {
  inputFile.value?.click()
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="relative">
      <FormLabel :for="id" :label="label" :required="required">
        <input
          :id="id"
          ref="inputFile"
          type="file"
          :name="name"
          :multiple="multiple"
          :required="required"
          :disabled="readonly"
          :value="modelValue"
          class="hidden"
          @change="handleFileChange"
        />
        <AppButton
          :color="error ? 'red' : 'white'"
          :outline="!!error"
          :no-wrap="false"
          icon="upload"
          block
          @click="triggerInputFileClick"
        >
          <div class="line-clamp-1">{{ fileInfo ?? placeholder }}</div>
        </AppButton>
      </FormLabel>
    </div>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
