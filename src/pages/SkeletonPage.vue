<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import HeadingSkeleton from '@/components/skeleton/HeadingSkeleton.vue'
import ImageSkeleton from '@/components/skeleton/ImageSkeleton.vue'
import ParagraphSkeleton from '@/components/skeleton/ParagraphSkeleton.vue'
</script>

<template>
  <div class="prose mx-auto">
    <AppSection>
      <ComponentsPreview>
        <AppBlock>
          <div class="px-24 py-48">
            <div class="grid grid-cols-3 gap-16">
              <AppBlock v-for="n in 3" :key="n" bordered>
                <div class="space-y-16 p-16">
                  <ImageSkeleton />
                  <HeadingSkeleton />
                  <ParagraphSkeleton />
                </div>
              </AppBlock>
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <ComponentsPreview>
        <AppBlock>
          <div class="px-24 py-48">
            <div class="grid grid-cols-3 gap-16 rounded-8 bg-white p-20">
              <ImageSkeleton aspect-ratio="square" round />
              <ImageSkeleton aspect-ratio="square" />
              <ImageSkeleton aspect-ratio="video" />
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <ComponentsPreview>
        <AppBlock>
          <div class="px-24 py-48">
            <div class="flex flex-col gap-24 rounded-8 bg-white p-16">
              <HeadingSkeleton />
              <ParagraphSkeleton />
              <ParagraphSkeleton :rows="2" />
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/skeleton.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
