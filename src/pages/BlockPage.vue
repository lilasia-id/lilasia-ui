<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="flex flex-col gap-16">
          <AppBlock>
            <template #header>
              <h1 class="font-600">Block Header</h1>
            </template>
            <div class="px-24 pb-24">
              <p>This is block content</p>
            </div>
            <template #footer> Block Footer </template>
          </AppBlock>

          <AppBlock bordered>
            <template #header>
              <h1 class="font-600">Bordered Block</h1>
            </template>
            <div class="px-24 pb-24">
              <p>This is block content</p>
            </div>
            <template #footer>Block Footer</template>
          </AppBlock>

          <AppBlock :rounded="16">
            <template #header>
              <h1 class="font-600">Rounded 16 Block</h1>
            </template>
            <div class="px-24 pb-24">
              <p>This is block content</p>
            </div>
            <template #footer>Block Footer</template>
          </AppBlock>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/block.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
