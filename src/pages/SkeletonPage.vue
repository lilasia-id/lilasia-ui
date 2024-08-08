<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import HeadingSkeleton from '@/components/skeleton/HeadingSkeleton.vue'
import ImageSkeleton from '@/components/skeleton/ImageSkeleton.vue'
import ParagraphSkeleton from '@/components/skeleton/ParagraphSkeleton.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Skeleton</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="rounded-8 bg-blue-10 p-24">
          <div class="grid grid-cols-5 gap-16">
            <AppBlock v-for="n in 5" :key="n" bordered>
              <div class="space-y-16 p-16">
                <ImageSkeleton />
                <HeadingSkeleton />
                <ParagraphSkeleton />
              </div>
            </AppBlock>
          </div>
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Image Skeleton</h1>
      </template>

      <div class="max-w-2xl px-24 pb-24">
        <div class="grid grid-cols-3 gap-16">
          <ImageSkeleton aspect-ratio="square" round />
          <ImageSkeleton aspect-ratio="square" />
          <ImageSkeleton aspect-ratio="video" />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Heading Skeleton</h1>
      </template>

      <div class="max-w-2xl px-24 pb-24">
        <HeadingSkeleton />
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Paragraph Skeleton</h1>
      </template>

      <div class="max-w-2xl px-24 pb-24">
        <div class="flex flex-col gap-24">
          <ParagraphSkeleton />
          <ParagraphSkeleton :rows="2" />
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
