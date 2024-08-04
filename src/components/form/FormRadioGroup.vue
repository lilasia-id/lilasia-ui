<script lang="ts" setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import Icon, { type LilasiaIcon } from 'lilasia-icons'
import { useSlots, type HTMLAttributes } from 'vue'

withDefaults(
  defineProps<{
    id?: HTMLAttributes['id']
    label?: string
    options?: any[]
    optionLabel?: string
    icon?: string | LilasiaIcon
    uncheckedIcon?: string | LilasiaIcon
    required?: boolean
    error?: string
  }>(),
  {
    id: undefined,
    label: undefined,
    options: undefined,
    optionLabel: undefined,
    icon: 'radio_button_checked',
    uncheckedIcon: 'radio_button_unchecked',
    error: undefined
  }
)

const model = defineModel<any>()

const slots = useSlots()
</script>

<template>
  <div class="flex flex-col gap-8">
    <label v-if="label" class="w-fit text-14 font-500 leading-20" :for="id">
      {{ label }} <span v-if="!required" class="text-black-60">(Optional)</span>
    </label>

    <RadioGroup v-model="model">
      <RadioGroupLabel class="sr-only">
        <input :id="id" class="hidden" type="radio" />
      </RadioGroupLabel>

      <div class="space-y-8">
        <RadioGroupOption
          v-for="(option, index) in options"
          v-slot="{ active, checked }"
          :key="index"
          as="template"
          :value="option"
        >
          <div
            class="relative flex cursor-pointer rounded-8 border border-black-10 bg-white p-16 text-black-80 shadow-sm transition duration-150 ease-in-out focus:outline-none"
            :class="{
              'border-blue-100': checked && !error,
              'border-red-100 focus:border-red-100 focus:outline-none focus:ring-1 focus:ring-red-100':
                checked && error,
              'focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-black-30': active
            }"
          >
            <div class="flex w-full items-center justify-between">
              <div class="flex items-center">
                <RadioGroupLabel as="template">
                  <slot v-if="slots['option-label']" name="option-label" :option="option"></slot>
                  <p v-else class="text-16 font-600 leading-20">
                    {{ optionLabel ? option[optionLabel] : option }}
                  </p>
                </RadioGroupLabel>
              </div>
              <div
                v-if="checked"
                class="rounded-9999"
                :class="error ? 'text-red-100' : 'text-blue-100'"
              >
                <Icon v-if="typeof icon === 'string'" :name="icon" />
                <Icon v-else :="icon" />
              </div>
              <div v-else class="rounded-9999 text-black-10">
                <Icon v-if="typeof uncheckedIcon === 'string'" :name="uncheckedIcon" />
                <Icon v-else :="uncheckedIcon" />
              </div>
            </div>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>

    <div v-if="error" class="w-fit text-14 font-500 leading-20 text-red-100">{{ error }}</div>
  </div>
</template>
