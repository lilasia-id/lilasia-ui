<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCombobox from '@/components/form/FormCombobox.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' }
]

const selectedPeople = ref()
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <AppBlock>
          <div class="p-24">
            <div class="flex flex-col gap-16">
              <FormSelect
                id="select"
                v-model="selectedPeople"
                label="Select"
                :options="people"
                option-label="name"
                placeholder="Select People"
                required
              />

              <div class="border-b border-b-black-10"></div>

              <FormCombobox
                id="combobox"
                v-model="selectedPeople"
                label="Combobox"
                :options="people"
                option-label="name"
                display-value-key="name"
                filter-key="name"
                placeholder="Select People"
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
          <MarkdownRenderer file-path="docs/form-select.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
