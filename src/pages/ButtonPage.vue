<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Button</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="mb-8 flex gap-8">
          <AppButton>Default</AppButton>
          <AppButton icon="search">Default with icon</AppButton>
          <AppButton icon-right="search">Default with icon</AppButton>
          <AppButton disabled>Default Disabled</AppButton>
        </div>

        <div class="mb-8 flex gap-8">
          <AppButton color="light">Light</AppButton>
          <AppButton color="light" icon="close">Light with icon</AppButton>
          <AppButton color="light" icon-right="close">Light with icon</AppButton>
          <AppButton color="light" disabled>Light Disabled</AppButton>
        </div>

        <div class="mb-8 flex gap-8">
          <AppButton color="blue">Blue</AppButton>
          <AppButton color="blue" icon="info">Blue with icon</AppButton>
          <AppButton color="blue" icon-right="info">Blue with icon</AppButton>
          <AppButton color="blue" disabled>Blue Disabled</AppButton>
          <AppButton color="blue" outline>Outlined Blue</AppButton>
          <AppButton color="blue" outline disabled>Outlined Blue Disabled</AppButton>
        </div>

        <div class="mb-8 flex gap-8">
          <AppButton color="yellow">Yellow</AppButton>
          <AppButton color="yellow" icon="warning">Yellow with icon</AppButton>
          <AppButton color="yellow" icon-right="warning">Yellow with icon</AppButton>
          <AppButton color="yellow" disabled>Yellow Disabled</AppButton>
        </div>

        <div class="mb-8 flex items-center gap-8">
          <AppButton color="red">Red</AppButton>
          <AppButton color="red" icon="error">Red with icon</AppButton>
          <AppButton color="red" icon-right="error">Red with icon</AppButton>
          <AppButton color="red" disabled>Red Disabled</AppButton>
          <AppButton color="red" outline>Outlined Red</AppButton>
          <AppButton color="red" outline disabled>Outlined Red Disabled</AppButton>
        </div>

        <div class="mb-24 flex items-center gap-8">
          <AppButton color="black">Black</AppButton>
          <AppButton color="black" icon="close">Black with icon</AppButton>
          <AppButton color="black" icon-right="close">Black with icon</AppButton>
          <AppButton color="black" disabled>Black Disabled</AppButton>
        </div>

        <div class="mb-24 max-w-screen-sm">
          <AppButton color="blue" icon="add_circle" block>Block Button</AppButton>
        </div>

        <div class="mb-24 flex items-center gap-8">
          <AppButton loading>Submit</AppButton>
          <AppButton color="red" loading>Submit</AppButton>
        </div>

        <div class="flex items-center gap-8">
          <AppButton href="https://lilasia.id">Self Target</AppButton>
          <AppButton href="https://lilasia.id" target="_blank">Blank Target</AppButton>
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
