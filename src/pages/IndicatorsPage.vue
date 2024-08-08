<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppIndicators from '@/components/AppIndicators.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Indicators</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex items-center gap-8">
          <AppIndicators label="5" class="bg-blue-100 text-white">
            <AppButton icon="notifications" />
          </AppIndicators>

          <AppIndicators label="10" round class="bg-blue-100 text-white">
            <AppButton color="light" :icon="{ name: 'local_mall', size: 32 }" />
          </AppIndicators>
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
