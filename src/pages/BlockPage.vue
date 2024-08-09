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
          <MarkdownRenderer file-path="docs/block.md" />
        </div>
      </AppBlock>
    </AppSection>

    <AppSection class="not-prose">
      <AppBlock>
        <template #header>
          <h1 class="text-24 font-600 leading-32">Usages</h1>
        </template>

        <div class="px-24 pb-24">
          <div class="flex flex-col gap-16">
            <div class="flex flex-col gap-8">
              <h2 class="text-16 font-600 leading-24">Basic</h2>
              <div class="rounded-8 bg-blue-20 p-16">
                <AppBlock>
                  <template #header>
                    <h1 class="text-24 font-600 leading-32">Block Header</h1>
                  </template>

                  <div class="px-24 pb-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores quam iure
                    numquam soluta id illo excepturi et, exercitationem, voluptates nobis modi
                    facere fuga repudiandae, quos veniam blanditiis aut! Assumenda?
                  </div>

                  <template #footer> Block Footer </template>
                </AppBlock>
              </div>
            </div>

            <div class="flex flex-col gap-8">
              <h2 class="text-16 font-600 leading-24">Bordered</h2>
              <div class="rounded-8 bg-blue-20 p-16">
                <AppBlock bordered>
                  <template #header>
                    <h1 class="text-24 font-600 leading-32">Block Header</h1>
                  </template>

                  <div class="px-24 pb-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores quam iure
                    numquam soluta id illo excepturi et, exercitationem, voluptates nobis modi
                    facere fuga repudiandae, quos veniam blanditiis aut! Assumenda?
                  </div>

                  <template #footer> Block Footer </template>
                </AppBlock>
              </div>
            </div>

            <div class="flex flex-col gap-8">
              <h2 class="text-16 font-600 leading-24">Rounded 16</h2>
              <div class="rounded-8 bg-blue-20 p-16">
                <AppBlock bordered :rounded="16">
                  <template #header>
                    <h1 class="text-24 font-600 leading-32">Block Header</h1>
                  </template>

                  <div class="px-24 pb-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores quam iure
                    numquam soluta id illo excepturi et, exercitationem, voluptates nobis modi
                    facere fuga repudiandae, quos veniam blanditiis aut! Assumenda?
                  </div>

                  <template #footer> Block Footer </template>
                </AppBlock>
              </div>
            </div>
          </div>
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
