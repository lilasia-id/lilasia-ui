<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppIndicators from '@/components/AppIndicators.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection>
      <ComponentsPreview>
        <AppBlock>
          <div class="flex items-center justify-center gap-8 rounded-8 bg-white p-16">
            <AppIndicators label="10" class="bg-green-100 text-white">
              <AppButton color="light" :icon="{ name: 'notifications', size: 28 }" />
            </AppIndicators>
            <AppIndicators label="5" round>
              <AppButton color="light" :icon="{ name: 'local_mall', size: 28 }" />
            </AppIndicators>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/indicators.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
