<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormFile from '@/components/form/FormFile.vue'
import FormImageUploader from '@/components/form/FormImageUploader.vue'
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
              <FormFile id="file" label="File" required />
              <FormFile id="multi-file" label="Multiple File" multiple required />

              <div class="border-b border-b-black-10"></div>

              <FormImageUploader id="square-image" label="Square (1/1) Image" required />
              <FormImageUploader
                id="video-image"
                label="Video (16/9) Image"
                aspect-ratio="video"
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
          <MarkdownRenderer file-path="docs/form-file.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
