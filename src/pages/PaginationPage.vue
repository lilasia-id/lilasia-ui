<script setup lang="ts">
import AppPagination, { PaginationMeta } from '@/components/pagination/AppPagination.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'

const route = useRoute()
const meta = ref<PaginationMeta>()

onMounted(async () => {
  await fetchData()
})

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://lilasia.id/api/browse-products?page=${route.query.page}&paginate=true`
    )
    const json = await response.json()

    meta.value = json.meta
  } catch (err: any) {
    console.error(err.message)
  }
}
</script>

<template>
  <div class="prose mx-auto">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="flex flex-col gap-16">
          <AppBlock>
            <template #header>
              <div class="font-600">Default</div>
            </template>
            <div class="px-24 pb-24">
              <AppPagination v-if="meta" :meta="meta" :page-limit="5" @page-change="fetchData" />
            </div>
          </AppBlock>

          <AppBlock>
            <template #header>
              <div class="font-600">Without page numbers</div>
            </template>
            <div class="px-24 pb-24">
              <AppPagination v-if="meta" :meta="meta" hide-page-numbers @page-change="fetchData" />
            </div>
          </AppBlock>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer file-path="docs/pagination.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
