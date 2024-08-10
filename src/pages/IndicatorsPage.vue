<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppIndicators from '@/components/AppIndicators.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection>
      <AppBlock class="bg-gradient-to-bl from-black-20 to-black-80">
        <div class="px-24 py-48">
          <div class="flex justify-center gap-8 rounded-8 bg-white p-16">
            <AppIndicators label="5" class="bg-blue-100 text-white">
              <AppButton icon="notifications" />
            </AppIndicators>

            <AppIndicators label="10" round class="bg-blue-100 text-white">
              <AppButton color="light" :icon="{ name: 'local_mall', size: 32 }" />
            </AppIndicators>
          </div>
        </div>
      </AppBlock>
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
