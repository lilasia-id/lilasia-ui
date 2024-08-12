<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormRadioGroup from '@/components/form/FormRadioGroup.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { ref } from 'vue'

const currencies = [
  { value: 'idr', label: '🇮🇩 Indonesian Rupiah (IDR)' },
  { value: 'usd', label: '🇺🇸 United States Dollar (USD)' },
  { value: 'sgd', label: '🇸🇬 Singapore Dollar (SGD)' },
  { value: 'myr', label: '🇲🇾 Malaysian Ringgit (MYR)' }
]

const selectedCurrency = ref(currencies[0])
const required = ref(false)
const error = ref()
const showError = ref(false)

const setError = (value: boolean) => {
  if (value) {
    error.value = 'This is an error message'
  } else {
    error.value = undefined
  }
}
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="flex flex-col gap-16">
          <AppBlock>
            <template #header>
              <div class="font-600">State</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex items-center gap-16">
                <FormCheckbox id="toogle-required" v-model="required" label="Required" />
                <FormCheckbox
                  id="toggle-error"
                  v-model="showError"
                  label="Error"
                  @update:model-value="setError"
                />
              </div>
            </div>
          </AppBlock>

          <AppBlock>
            <div class="p-24">
              <div class="flex flex-col gap-16">
                <FormRadioGroup
                  id="currency"
                  v-model="selectedCurrency"
                  label="Currency"
                  :options="currencies"
                  option-label="label"
                  :required="required"
                  :error="error"
                />
              </div>
            </div>
          </AppBlock>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/form-radio-group.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
