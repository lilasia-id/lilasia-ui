<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Section</h1>
      </template>

      <div class="px-24 pb-24">
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
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">No Gap Section</h1>
      </template>

      <div class="px-24 pb-24">
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
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Fluid Section</h1>
      </template>

      <div class="pb-24">
        <AppSection fluid>
          <div class="relative h-[10rem] bg-black-100">
            <div class="absolute inset-[0] flex items-center justify-center text-white">
              Section 1
            </div>
          </div>
        </AppSection>
      </div>
    </AppBlock>
  </AppSection>
</template>
