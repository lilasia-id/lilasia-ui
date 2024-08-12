<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormEditor from '@/components/form/FormEditor.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { ref } from 'vue'

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
                <FormTextarea
                  id="textarea"
                  label="Textarea"
                  placeholder="Write something"
                  :error="error"
                  :required="required"
                />

                <div class="border-b border-b-black-10"></div>

                <FormEditor
                  id="editor"
                  label="Editor"
                  placeholder="Write something..."
                  :error="error"
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
          <MarkdownRenderer file-path="docs/form-textarea.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
