<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="grid grid-cols-4 gap-16">
          <AppBlock>
            <template #header>
              <div class="text-center font-600">Solid</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex flex-col items-center gap-8">
                <AppButton color="light" text="Light" />
                <AppButton color="white" text="White" />
                <AppButton color="blue" text="Blue" />
                <AppButton color="yellow" text="Yellow" />
                <AppButton color="red" text="Red" />
                <AppButton color="green" text="Green" />
                <AppButton color="black" text="Black" />
              </div>
            </div>
          </AppBlock>

          <AppBlock>
            <template #header>
              <div class="text-center font-600">Outline</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex flex-col items-center gap-8">
                <AppButton color="red" text="Red" outline />
                <AppButton color="green" text="Green" outline />
                <AppButton color="blue" text="Blue" outline />
              </div>
            </div>
          </AppBlock>

          <AppBlock>
            <template #header>
              <div class="text-center font-600">Subtle</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex flex-col items-center gap-8">
                <AppButton color="red" text="Red" subtle />
                <AppButton color="green" text="Green" subtle />
              </div>
            </div>
          </AppBlock>

          <AppBlock>
            <template #header>
              <div class="text-center font-600">Disabled</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex flex-col items-center gap-8">
                <AppButton color="light" text="Light" disabled />
                <AppButton color="white" text="White" disabled />
                <AppButton color="blue" text="Blue" disabled />
                <AppButton color="yellow" text="Yellow" disabled />
                <AppButton color="red" text="Red" disabled />
                <AppButton color="green" text="Green" disabled />
                <AppButton color="black" text="Black" disabled />
              </div>
            </div>
          </AppBlock>

          <AppBlock class="col-span-4">
            <template #header>
              <div class="text-center font-600">With Icon</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex flex-wrap justify-center gap-8">
                <AppButton color="light" icon="add_reaction" text="Light" />
                <AppButton color="white" icon="add_reaction" text="White" />
                <AppButton color="blue" icon="add_reaction" text="Blue" />
                <AppButton color="yellow" icon="add_reaction" text="Yellow" />
                <AppButton color="red" icon="add_reaction" text="Red" />
                <AppButton color="green" icon="add_reaction" text="Green" />
                <AppButton color="black" icon="add_reaction" text="Black" />
              </div>
            </div>
          </AppBlock>

          <AppBlock class="col-span-4">
            <template #header>
              <div class="text-center font-600">Block</div>
            </template>
            <div class="px-24 pb-24">
              <div class="flex justify-center gap-8">
                <AppButton color="black" icon="add_reaction" text="Black" block />
                <AppButton color="white" icon="add_reaction" text="White" block />
              </div>
            </div>
          </AppBlock>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/button.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
