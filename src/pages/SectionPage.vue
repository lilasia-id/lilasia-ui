<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="flex flex-col gap-16">
          <div class="rounded-8 bg-white px-16 pb-16">
            <AppSection>
              <div class="relative h-[5rem] bg-black-100">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  Default Section 1
                </div>
              </div>
            </AppSection>
            <AppSection>
              <div class="relative h-[5rem] bg-black-80">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  Default Section 2
                </div>
              </div>
            </AppSection>
          </div>

          <div class="rounded-8 bg-white p-16">
            <AppSection no-gap>
              <div class="relative h-[5rem] bg-black-100">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  No-gap Section 1
                </div>
              </div>
            </AppSection>
            <AppSection no-gap>
              <div class="relative h-[5rem] bg-black-80">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  No-gap Section 2
                </div>
              </div>
            </AppSection>
          </div>

          <div class="rounded-8 bg-white pb-16">
            <AppSection fluid>
              <div class="relative h-[10rem] bg-black-100">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  Fluid Section
                </div>
              </div>
            </AppSection>
          </div>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/section.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
