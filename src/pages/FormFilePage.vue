<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormFile from '@/components/form/FormFile.vue'
import FormImageUploader from '@/components/form/FormImageUploader.vue'
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
                <FormFile
                  id="file"
                  label="File"
                  :required="required"
                  :error="error"
                  :readonly="readonly"
                />
                <FormFile
                  id="multi-file"
                  label="Multiple File"
                  multiple
                  :required="required"
                  :error="error"
                  :readonly="readonly"
                />

                <div class="border-b border-b-black-10"></div>

                <FormImageUploader
                  id="square-image"
                  label="Square (1/1) Image"
                  :required="required"
                  :error="error"
                  :readonly="readonly"
                />
                <FormImageUploader
                  id="video-image"
                  label="Video (16/9) Image"
                  aspect-ratio="video"
                  :required="required"
                  :error="error"
                  :readonly="readonly"
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
          <MarkdownRenderer class="max-w-4xl" file-path="docs/form-file.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
