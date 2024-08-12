<script setup lang="ts">
import AppAccordion from '@/components/AppAccordion.vue'
import AppButton from '@/components/AppButton.vue'
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
          <div class="flex flex-col gap-8 rounded-8 bg-white p-16">
            <AppAccordion default-open>
              <template #button="{ open }">
                <AppButton
                  text="What is your refund policy?"
                  :icon-right="open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  align="between"
                />
              </template>
              <div class="px-16 py-8">
                If you're unhappy with your purchase for any reason, email us within 90 days and
                we'll refund you in full, no questions asked.
              </div>
            </AppAccordion>

            <AppAccordion>
              <template #button="{ open }">
                <AppButton
                  text="Do you offer technical support?"
                  :icon-right="open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  align="between"
                />
              </template>
              <div class="px-16 py-8">No.</div>
            </AppAccordion>

            <AppAccordion>
              <template #button="{ open }">
                <AppButton
                  text="Is customer service always available?"
                  :icon-right="open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  align="between"
                />
              </template>
              <div class="px-16 py-8">
                Yes, our customer service team is available 25 hours a day, 8 days a week. Yes, you
                read that right—we're that committed to defying the space-time continuum to help
                you!
              </div>
            </AppAccordion>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/accordion.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
