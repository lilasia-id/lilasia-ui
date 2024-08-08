<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppTooltip from '@/components/AppTooltip.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Tooltip</h1>
      </template>

      <div class="px-24 pb-24">
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

          <AppTooltip text="This is right tooltip" position="right" class="bg-black-100 text-white">
            <AppButton icon="dock_to_right" text="Right Tooltip" />
          </AppTooltip>
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
