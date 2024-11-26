<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormCombobox from '@/components/form/FormCombobox.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { onMounted, ref } from 'vue'

const people = ref<any[]>([])

const selectedPeople = ref()
const required = ref(false)
const readonly = ref(false)
const error = ref()
const showError = ref(false)

onMounted(() => {
  people.value = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' }
  ]
})

const setError = (value: boolean) => {
  if (value) {
    error.value = 'This is an error message'
  } else {
    error.value = undefined
  }
}
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
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
                <FormCheckbox id="toogle-readonly" v-model="readonly" label="Readonly" />
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
                <FormSelect
                  id="select"
                  v-model="selectedPeople"
                  label="Select"
                  :options="people"
                  option-label="name"
                  placeholder="Select People"
                  :error="error"
                  :readonly="readonly"
                  :required="required"
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
                  :error="error"
                  :readonly="readonly"
                  :required="required"
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
          <MarkdownRenderer class="max-w-4xl" file-path="docs/form-select.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
