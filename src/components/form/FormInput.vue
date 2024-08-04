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

const togglePasswordVisibility = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text'
    return
  }

  inputType.value = 'password'
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <label v-if="label" class="w-fit text-14 font-500 leading-20" :for="id">
      {{ label }} <span v-if="!required" class="text-black-60">(Optional)</span>
    </label>

    <div class="relative">
      <input
        :id="id"
        v-model="model"
        :class="classes"
        :type="inputType"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        :readonly="readonly"
      />

      <div
        v-if="type === 'password'"
        class="absolute inset-y-[0] flex select-none items-center"
        :class="error ? 'right-[40px]' : 'right-[16px]'"
      >
        <div
          class="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-30"
          role="button"
          tabindex="0"
          aria-label="Password Revealer"
          @click="togglePasswordVisibility"
          @keyup.enter="togglePasswordVisibility"
        >
          <Icon :name="inputType === 'password' ? 'visibility' : 'visibility_off'" size="20" />
        </div>
      </div>

      <div
        v-if="error"
        class="absolute inset-y-[0] right-[10px] flex items-center text-red-100"
        aria-label="Form Error"
      >
        <Icon name="error" />
      </div>
    </div>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
