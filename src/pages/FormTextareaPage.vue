<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormEditor from '@/components/form/FormEditor.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <AppBlock>
          <div class="p-24">
            <div class="flex flex-col gap-16">
              <FormTextarea id="textarea" label="Textarea" placeholder="Write something" required />

              <div class="border-b border-b-black-10"></div>

              <FormEditor id="editor" label="Editor" placeholder="Write something..." required />
            </div>
          </div>
        </AppBlock>
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
