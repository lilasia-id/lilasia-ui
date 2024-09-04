<script setup lang="ts">
import AppPopover from '@/components/popover/AppPopover.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import PopoverPanel from '@/components/popover/PopoverPanel.vue'
import FormInput from '@/components/form/FormInput.vue'
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <AppBlock bordered>
          <div class="p-24">
            <div class="flex flex-wrap items-center justify-center gap-8">
              <AppPopover icon="price_change" text="Price Range">
                <PopoverPanel #="{ close }">
                  <AppBlock bordered>
                    <div class="p-16">
                      <div class="flex items-center gap-8">
                        <FormInput type="number" placeholder="Min Price" />
                        <FormInput type="number" placeholder="Max Price" />
                        <AppButton color="black" text="Apply" @click="close" />
                      </div>
                    </div>
                  </AppBlock>
                </PopoverPanel>
              </AppPopover>
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/popover.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
