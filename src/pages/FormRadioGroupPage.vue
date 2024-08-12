<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
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
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <AppBlock>
          <div class="p-24">
            <div class="flex flex-col gap-16">
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
