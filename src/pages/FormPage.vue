<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormCombobox from '@/components/form/FormCombobox.vue'
import FormEditor from '@/components/form/FormEditor.vue'
import FormFile from '@/components/form/FormFile.vue'
import FormImageUploader from '@/components/form/FormImageUploader.vue'
import FormInput from '@/components/form/FormInput.vue'
import FormRadioGroup from '@/components/form/FormRadioGroup.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import FormSwitch from '@/components/form/FormSwitch.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' }
]

const currencies = [
  { value: 'idr', label: '🇮🇩 Indonesian Rupiah (IDR)' },
  { value: 'usd', label: '🇺🇸 United States Dollar (USD)' },
  { value: 'sgd', label: '🇸🇬 Singapore Dollar (SGD)' },
  { value: 'myr', label: '🇲🇾 Malaysian Ringgit (MYR)' }
]

const selectedPeople = ref()
const selectedCurrency = ref(currencies[0])
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Input</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormInput id="name" label="Name" placeholder="Input Name" autocomplete="username" />

          <FormInput
            id="email"
            type="email"
            label="Email"
            autocomplete="current-password"
            placeholder="Input Email"
            model-value="johndoe123"
            required
          />

          <FormInput
            id="password"
            type="password"
            label="Password"
            placeholder="Input Password"
            required
          />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Select</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormSelect
            id="select"
            v-model="selectedPeople"
            label="People"
            :options="people"
            option-label="name"
            placeholder="Select People"
            required
          />

          <FormCombobox
            id="combobox"
            v-model="selectedPeople"
            label="People (Combobox)"
            :options="people"
            option-label="name"
            filter-key="name"
            display-value-key="name"
            placeholder="Select People (Combobox)"
            required
          />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Textarea</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormTextarea
            id="notes"
            label="Order Notes"
            placeholder="Write anything here..."
            required
          />
          <FormEditor
            id="content"
            label="Content Editor"
            placeholder="Write anything here..."
            required
          />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Checkbox</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormCheckbox id="remember" label="Remember me" />
          <FormSwitch id="switch" />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Radio</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormRadioGroup
            id="currency"
            v-model="selectedCurrency"
            label="Currency"
            :options="currencies"
            option-label="label"
            required
          />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">File</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormFile id="file" label="File" required />
          <FormFile id="multi-file" label="Multiple File" multiple required />
          <FormImageUploader id="image-aspect-square" label="Image (1/1 ratio)" />
          <FormImageUploader
            id="image-aspect-video"
            label="Image (16/9 ratio)"
            aspect-ratio="video"
          />
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
