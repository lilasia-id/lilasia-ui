<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'

const handleButtonClick = () => {
  alert('Hello World!')
}
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection>
      <AppBlock bordered>
        <div class="flex flex-wrap justify-center gap-8 p-24">
          <ButtonLink :to="{ name: 'home' }" text="Navigate to Home" />
          <ButtonLink href="https://lilasia.id" text="Visit lilasia.id" />
          <ButtonLink href="https://blog.lilasia.id" target="_blank" text="Blank Navigate" />
          <ButtonLink href="#" text="Prevent Click" @click.prevent="handleButtonClick" />
        </div>
      </AppBlock>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/button-link.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
