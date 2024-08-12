<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormInput from '@/components/form/FormInput.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { ref } from 'vue'

const required = ref(false)
const readonly = ref(false)
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
    <AppSection>
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
                <FormInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  :error="error"
                  :readonly="readonly"
                  :required="required"
                />
                <FormInput
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email address"
                  :error="error"
                  :readonly="readonly"
                  :required="required"
                />
                <FormInput
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Please provide a good password"
                  :error="error"
                  :readonly="readonly"
                  :required="required"
                />

                <div class="border-b border-b-black-10"></div>

                <FormInput
                  id="fun-question1"
                  type="number"
                  label="How many grains of sand are there in the Sahara Desert?"
                  placeholder="Please answer correctly"
                  :error="error"
                  :readonly="readonly"
                  :required="required"
                />
                <FormInput
                  id="fun-question2"
                  type="date"
                  label="When was the date of the origin of human life?"
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
          <MarkdownRenderer file-path="docs/form-input.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
