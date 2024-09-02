<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import FormCheckbox from '@/components/form/FormCheckbox.vue'
import FormSwitch from '@/components/form/FormSwitch.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <AppBlock>
          <div class="p-24">
            <div class="flex flex-col gap-16">
              <FormCheckbox id="checkbox" label="Remember Me" required />
              <div class="border-b border-b-black-10"></div>
              <FormSwitch id="switch" />
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/form-checkbox.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
