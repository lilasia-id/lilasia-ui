<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Lilasia UI</h1>
      </template>

      <div class="px-24 pb-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis delectus eius itaque
        necessitatibus neque voluptates laborum. Natus non ratione deleniti atque laborum harum
        blanditiis necessitatibus consequatur, tempora, laboriosam rem?
      </div>
    </AppBlock>
  </AppSection>
</template>
