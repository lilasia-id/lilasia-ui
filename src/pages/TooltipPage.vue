<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppTooltip from '@/components/AppTooltip.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection>
      <AppBlock class="bg-gradient-to-bl from-black-20 to-black-80">
        <div class="px-24 py-48">
          <div class="flex items-center gap-8">
            <AppTooltip
              text="This is left tooltip"
              position="left"
              class="border border-black-10 bg-white"
            >
              <AppButton icon="dock_to_left" text="Left Tooltip" />
            </AppTooltip>

            <AppTooltip
              text="This is top tooltip"
              position="top"
              class="border border-black-10 bg-white"
            >
              <AppButton icon="dock_to_bottom" text="Top Tooltip" />
            </AppTooltip>

            <AppTooltip
              text="This is bottom tooltip"
              position="bottom"
              class="bg-black-100 text-white"
            >
              <AppButton icon="dock_to_bottom" text="Bottom Tooltip" />
            </AppTooltip>

            <AppTooltip
              text="This is right tooltip"
              position="right"
              class="bg-black-100 text-white"
            >
              <AppButton icon="dock_to_right" text="Right Tooltip" />
            </AppTooltip>
          </div>
        </div>
      </AppBlock>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/tooltip.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
