<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/section.md" />
        </div>
      </AppBlock>
    </AppSection>

    <AppSection class="not-prose">
      <AppBlock bordered>
        <template #header>
          <h1 class="text-24 font-600 leading-32">Usages</h1>
        </template>

        <div class="px-24 pb-24">
          <div class="flex flex-col gap-16">
            <div class="flex flex-col gap-8">
              <h2 class="text-16 font-600 leading-24">Basic</h2>
              <AppSection>
                <div class="relative h-[10rem] rounded-8 bg-black-100">
                  <div class="absolute inset-[0] flex items-center justify-center text-white">
                    Section 1
                  </div>
                </div>
              </AppSection>

              <AppSection>
                <div class="relative h-[10rem] rounded-8 bg-black-80">
                  <div class="absolute inset-[0] flex items-center justify-center text-white">
                    Section 2
                  </div>
                </div>
              </AppSection>
            </div>
          </div>
        </div>

        <div class="px-24 pb-24">
          <div class="flex flex-col">
            <h2 class="mb-8 text-16 font-600 leading-24">No Gap</h2>
            <AppSection no-gap>
              <div class="relative h-[10rem] rounded-t-8 bg-black-100">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  Section 1
                </div>
              </div>
            </AppSection>
            <AppSection no-gap>
              <div class="relative h-[10rem] rounded-b-8 bg-black-80">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  Section 2
                </div>
              </div>
            </AppSection>
          </div>
        </div>

        <div class="pb-24">
          <div class="flex flex-col gap-8">
            <h2 class="pl-24 text-16 font-600 leading-24">Fluid</h2>
            <AppSection fluid>
              <div class="relative h-[10rem] bg-black-100">
                <div class="absolute inset-[0] flex items-center justify-center text-white">
                  Section 1
                </div>
              </div>
            </AppSection>
          </div>
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
