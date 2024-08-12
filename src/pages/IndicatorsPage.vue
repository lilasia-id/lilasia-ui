<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppIndicators from '@/components/AppIndicators.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection>
      <ComponentsPreview>
        <AppBlock>
          <div class="flex justify-center gap-8 rounded-8 bg-white p-16">
            <AppIndicators label="5" class="bg-blue-100 text-white">
              <AppButton icon="notifications" />
            </AppIndicators>
            <AppIndicators label="10" round class="bg-red-100 text-white">
              <AppButton color="light" :icon="{ name: 'local_mall', size: 32 }" />
            </AppIndicators>
            <AppIndicators round class="bg-green-100 text-white">
              <AppButton color="light" :icon="{ name: 'account_circle', size: 32 }" />
            </AppIndicators>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/indicators.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
