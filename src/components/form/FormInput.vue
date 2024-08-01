<script lang="ts" setup>
import { computed, ref, type HTMLAttributes, type InputHTMLAttributes } from 'vue'
import Icon from 'lilasia-icons'

const props = withDefaults(
  defineProps<{
    id?: HTMLAttributes['id']
    type?: InputHTMLAttributes['type']
    label?: string
    placeholder?: InputHTMLAttributes['placeholder']
    autocomplete?: InputHTMLAttributes['autocomplete']
    required?: boolean
    readonly?: boolean
    error?: string
  }>(),
  {
    id: undefined,
    type: 'text',
    label: undefined,
    placeholder: undefined,
    autocomplete: 'off',
    required: false,
    readonly: false,
    error: undefined
  }
)

const model = defineModel<any>()

const inputType = ref(props.type)

const classes = computed(() => {
  return [
    'block h-40 w-full rounded-8 border px-16 text-16 leading-24 shadow-sm transition duration-150 ease-in-out',
    'placeholder:font-400 placeholder:text-black-60',
    'read-only:bg-black-5',
    !props.error
      ? 'border-black-10 focus:border-black-30 focus:outline-none focus:ring-1 focus:ring-black-30'
      : 'pr-40 border-red-100 focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-red-100'
  ]
})

const showPassword = () => {
  inputType.value = 'text'
}

const hidePassword = () => {
  inputType.value = 'password'
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <label class="w-fit text-14 font-500 leading-20" v-if="label" :for="id">
      {{ label }} <span class="text-black-60" v-if="!required">(Optional)</span>
    </label>

    <div class="relative">
      <input
        v-model="model"
        :class="classes"
        :id="id"
        :type="inputType"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        :readonly="readonly"
      />

      <div
        class="absolute inset-y-[0] right-[0] flex select-none items-center"
        v-if="type === 'password'"
      >
        <div
          class="inline-flex pr-16"
          v-if="inputType === 'password'"
          role="button"
          @click="showPassword"
        >
          <Icon name="visibility" size="20" />
        </div>
        <div
          class="inline-flex pr-16"
          v-if="inputType === 'text'"
          role="button"
          @click="hidePassword"
        >
          <Icon name="visibility_off" size="20" />
        </div>
      </div>

      <div class="absolute inset-y-[0] right-[10px] flex items-center text-red-100" v-if="error">
        <Icon name="error" />
      </div>
    </div>

    <div class="w-fit text-14 font-500 leading-20 text-red-100" v-if="error">{{ error }}</div>
  </div>
</template>
