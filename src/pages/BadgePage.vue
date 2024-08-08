<script setup lang="ts">
import AppBadge from '@/components/AppBadge.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Badge</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="mb-8 flex gap-8">
          <AppBadge icon="explosion" label="Default Color" />
          <AppBadge color="blue" icon="info" label="Blue Color" />
          <AppBadge color="red" icon="error" label="Red Color" />
          <AppBadge color="yellow" icon="warning" label="Yellow Color" />
          <AppBadge color="green" icon="check_circle" label="Green Color" />
        </div>

        <div class="mb-16 flex gap-8">
          <AppBadge icon="explosion" label="Pill Default Color" pill />
          <AppBadge color="blue" icon="info" label="Pill Blue Color" pill />
          <AppBadge color="red" icon="error" label="Pill Red Color" pill />
          <AppBadge color="yellow" icon="warning" label="Pill Yellow Color" pill />
          <AppBadge color="green" icon="check_circle" label="Pill Green Color" pill />
        </div>

        <div class="mb-8 flex gap-8">
          <AppBadge icon="explosion" label="Default Color" outline />
          <AppBadge color="blue" icon="info" label="Blue Color" outline />
          <AppBadge color="red" icon="error" label="Red Color" outline />
          <AppBadge color="yellow" icon="warning" label="Yellow Color" outline />
          <AppBadge color="green" icon="check_circle" label="Green Color" outline />
        </div>

        <div class="flex gap-8">
          <AppBadge icon="explosion" label="Pill Default Color" pill outline />
          <AppBadge color="blue" icon="info" label="Pill Blue Color" pill outline />
          <AppBadge color="red" icon="error" label="Pill Red Color" pill outline />
          <AppBadge color="yellow" icon="warning" label="Pill Yellow Color" pill outline />
          <AppBadge color="green" icon="check_circle" label="Pill Green Color" pill outline />
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
