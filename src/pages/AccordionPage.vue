<script setup lang="ts">
import AppAccordion from '@/components/AppAccordion.vue'
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection>
      <AppBlock class="bg-gradient-to-bl from-black-20 to-black-80">
        <div class="px-24 py-48">
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
        </div>
      </AppBlock>
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
