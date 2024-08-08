<script setup lang="ts">
import AppAccordion from '@/components/AppAccordion.vue'
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Accordion</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex flex-col gap-8">
          <AppAccordion default-open>
            <template #button="{ open }">
              <AppButton
                text="What is your refund policy?"
                :icon-right="open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                align="between"
              />
            </template>
            <div class="px-16 py-8">
              If you're unhappy with your purchase for any reason, email us within 90 days and we'll
              refund you in full, no questions asked.
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
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
