<script setup lang="ts">
import AppBadge from '@/components/AppBadge.vue'
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
          <div class="grid grid-cols-3 gap-16 px-24 py-48">
            <div class="flex flex-col items-center gap-16 rounded-8 bg-white p-16">
              <div class="font-600">Without Icon</div>
              <AppBadge class="w-fit" label="Default Color" />
              <AppBadge class="w-fit" color="blue" label="Blue Color" />
              <AppBadge class="w-fit" color="red" label="Red Color" />
              <AppBadge class="w-fit" color="yellow" label="Yellow Color" />
              <AppBadge class="w-fit" color="green" label="Green Color" />
            </div>

            <div class="flex flex-col items-center gap-16 rounded-8 bg-white p-16">
              <div class="font-600">With Icon</div>
              <AppBadge class="w-fit" icon="explosion" label="Default Color" />
              <AppBadge class="w-fit" color="blue" icon="info" label="Blue Color" />
              <AppBadge class="w-fit" color="red" icon="error" label="Red Color" />
              <AppBadge class="w-fit" color="yellow" icon="warning" label="Yellow Color" />
              <AppBadge class="w-fit" color="green" icon="check_circle" label="Green Color" />
            </div>

            <div class="flex flex-col items-center gap-16 rounded-8 bg-white p-16">
              <div class="font-600">Pills</div>
              <AppBadge class="w-fit" icon="explosion" label="Pill Default Color" pill />
              <AppBadge class="w-fit" color="blue" icon="info" label="Pill Blue Color" pill />
              <AppBadge class="w-fit" color="red" icon="error" label="Pill Red Color" pill />
              <AppBadge
                class="w-fit"
                color="yellow"
                icon="warning"
                label="Pill Yellow Color"
                pill
              />
              <AppBadge
                class="w-fit"
                color="green"
                icon="check_circle"
                label="Pill Green Color"
                pill
              />
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/badge.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
