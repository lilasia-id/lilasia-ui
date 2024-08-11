<script setup lang="ts">
import AppDivider from '@/components/AppDivider.vue'
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
          <AppBlock>
            <div class="p-16">
              <div class="font-600">Default</div>
              <AppDivider class="my-16" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis delectus eius
              itaque necessitatibus neque voluptates laborum. Natus non ratione deleniti atque
              laborum harum blanditiis necessitatibus consequatur, tempora, laboriosam rem?
            </div>
          </AppBlock>

          <AppBlock>
            <div class="p-16">
              <div class="font-600">Dashed</div>
              <AppDivider class="my-16" dashed />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis delectus eius
              itaque necessitatibus neque voluptates laborum. Natus non ratione deleniti atque
              laborum harum blanditiis necessitatibus consequatur, tempora, laboriosam rem?
            </div>
          </AppBlock>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/divider.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
