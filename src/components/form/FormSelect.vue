<script setup lang="ts">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot
} from '@headlessui/vue'
import Icon from 'lilasia-icons'
import { computed, ref, useSlots, type InputHTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    id?: InputHTMLAttributes['id']
    label?: string
    options: any[]
    optionLabel?: string
    filterKey?: string
    displayValueKey?: string
    placeholder?: InputHTMLAttributes['placeholder']
    multiple?: boolean
    required?: boolean
    readonly?: boolean
    error?: string
  }>(),
  {
    id: undefined,
    label: undefined,
    optionLabel: undefined,
    filterKey: undefined,
    displayValueKey: undefined,
    placeholder: undefined,
    error: undefined
  }
)

const model = defineModel<any>()

const slots = useSlots()

const query = ref('')

const classes = computed(() => {
  return [
    'h-40 w-full rounded-8 border px-16 pr-44 text-16 leading-24 text-black-100 shadow-sm transition duration-150 ease-in-out',
    'placeholder:font-400 placeholder:text-black-60',
    'read-only:bg-black-5',
    !props.error
      ? 'border-black-10 focus:border-black-30 focus:outline-none focus:ring-1 focus:ring-black-30'
      : 'pr-40 border-red-100 focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-red-100'
  ]
})

const filteredOptions = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((option) => {
        const key = props.filterKey ? option[props.filterKey] : option
        return key
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      })
)

const displayValue = (option: unknown): string => {
  if (option instanceof Array) {
    return option
      .map((opt) => (props.displayValueKey ? opt[props.displayValueKey] : opt))
      .join(', ')
  }

  return props.displayValueKey ? (option as any)[props.displayValueKey] : option
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <label v-if="label" class="w-fit text-14 font-500 leading-20" :for="id">
      {{ label }} <span v-if="!required" class="text-black-60">(Optional)</span>
    </label>

    <Combobox v-model="model" :multiple="multiple">
      <div class="relative">
        <div class="relative">
          <ComboboxInput
            :id="id"
            :class="classes"
            :placeholder="placeholder"
            :readonly="readonly"
            spellcheck="false"
            autocomplete="off"
            :display-value="displayValue"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-[0] right-[0] flex items-center pr-16"
            :class="error ? 'text-red-100' : ''"
            :disabled="readonly"
          >
            <Icon name="unfold_more" size="20" />
          </ComboboxButton>
        </div>

        <TransitionRoot
          leave="transition ease-in duration-100"
          leave-from="opacity-100"
          leave-to="opacity-0"
          as="template"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute z-50 mt-4 max-h-[400px] w-full rounded-8 bg-white py-4 shadow-lg ring-1 ring-black-10"
          >
            <template v-if="filteredOptions.length === 0 && query !== ''">
              <slot v-if="slots['not-found']" name="not-found"></slot>
              <div v-else class="flex h-40 cursor-default select-none items-center px-16">
                Nothing found.
              </div>
            </template>

            <ComboboxOption
              v-for="(option, index) in filteredOptions"
              v-slot="{ selected, active }"
              :key="index"
              as="template"
              :value="option"
            >
              <li
                class="relative flex cursor-pointer select-none items-center px-16 py-[10px] pr-48"
                :class="{ 'bg-black-5': active || selected }"
              >
                <slot
                  v-if="slots['option-label']"
                  name="option-label"
                  :active="active"
                  :selected="selected"
                  :option="option"
                ></slot>
                <span v-else class="block truncate" :class="{ 'font-600': selected }">
                  {{ optionLabel ? option[optionLabel] : option }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-[0] right-[0] flex items-center pr-16 text-blue-100"
                >
                  <Icon name="check_circle" size="20" filled />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
