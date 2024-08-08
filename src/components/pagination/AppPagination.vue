<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PaginationButton from './PaginationButton.vue'

export type PaginationMeta = {
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

const props = withDefaults(
  defineProps<{
    meta: PaginationMeta
    pageLimit?: number
    hidePageNumbers?: boolean
  }>(),
  {
    pageLimit: 4
  }
)

const emit = defineEmits(['pageChange'])

const route = useRoute()
const router = useRouter()

const navigatePrev = async () => {
  if (props.meta.prev_page_url) {
    const url = new URL(props.meta.prev_page_url)
    const query = Object.fromEntries(url.searchParams.entries())
    delete query.paginate
    delete query.limit

    await router.push({ query })
    emit('pageChange', route.query.page)
  }
}

const navigateNext = async () => {
  if (props.meta.next_page_url) {
    const url = new URL(props.meta.next_page_url)
    const query = Object.fromEntries(url.searchParams.entries())
    delete query.paginate
    delete query.limit

    await router.push({ query })
    emit('pageChange', route.query.page)
  }
}

const navigatePage = async (page: number | string) => {
  await router.push({ query: { ...route.query, page } })
  emit('pageChange', route.query.page)
}

const pageNumbers = computed(() => {
  const totalPages = props.meta.last_page
  const currentPage = props.meta.current_page
  const limit = props.pageLimit ?? 4

  if (totalPages <= limit) {
    return [...Array(totalPages).keys()].map((n) => n + 1)
  }

  const pages = []

  if (currentPage > 2) {
    pages.push(1)
    pages.push('...')
  }

  if (currentPage === 2) {
    pages.push(currentPage - 1)
  }

  if (currentPage === totalPages) {
    pages.push(currentPage - 2)
    pages.push(currentPage - 1)
  }

  if (currentPage === totalPages - 1) {
    pages.push(currentPage - 1)
  }

  pages.push(currentPage)

  if (currentPage === 2) {
    pages.push(currentPage + 1)
  }

  if (currentPage === 1) {
    pages.push(currentPage + 1)
    pages.push(currentPage + 2)
  }

  if (currentPage < totalPages - 1) {
    pages.push('...')
  }

  if (currentPage < totalPages) {
    pages.push(totalPages)
  }

  return pages
})
</script>

<template>
  <div class="flex w-fit items-center rounded-8 border border-black-10">
    <PaginationButton
      icon="chevron_left"
      text="Prev"
      :disabled="!meta.prev_page_url"
      @click="navigatePrev"
    />

    <template v-if="!hidePageNumbers">
      <PaginationButton
        v-for="(page, index) in pageNumbers"
        :key="index"
        :text="page"
        :active="page === meta.current_page"
        :disabled="page === '...'"
        @click="page !== '...' && navigatePage(page)"
      />
    </template>

    <PaginationButton
      icon-right="chevron_right"
      text="Next"
      :disabled="!meta.next_page_url"
      @click="navigateNext"
    />
  </div>
</template>
