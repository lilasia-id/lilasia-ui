<script setup lang="ts">
import AppPagination, { PaginationMeta } from '@/components/pagination/AppPagination.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

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
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Pagination</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex flex-col gap-8">
          <AppPagination v-if="meta" :meta="meta" :page-limit="5" @page-change="fetchData" />
        </div>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Pagination w/o page numbers</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex flex-col gap-8">
          <AppPagination v-if="meta" :meta="meta" hide-page-numbers @page-change="fetchData" />
        </div>
      </div>
    </AppBlock>
  </AppSection>
</template>
