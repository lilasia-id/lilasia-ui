# AppPagination

## Overview

The `AppPagination` component provides a pagination interface that allows users to navigate through pages of content. It supports customizable page limits, hiding page numbers, and emits events on page changes. The component works seamlessly with Vue Router for navigation.

## Props

| Prop            | Type             | Default | Description                                                                                     |
| --------------- | ---------------- | ------- | ----------------------------------------------------------------------------------------------- |
| meta            | `PaginationMeta` |         | Contains metadata for pagination, including current page, total pages, and URLs for navigation. |
| pageLimit       | number           | `4`     | Determines the maximum number of page buttons to display at once.                               |
| hidePageNumbers | boolean          | `false` | Controls whether page numbers are displayed.                                                    |

### Pagination Meta

The `PaginationMeta` object contains should have the following type:

```typescript
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
```

## Emits

| Event        | Description                                       | Payload                  |
| ------------ | ------------------------------------------------- | ------------------------ |
| `pageChange` | Emits the current page when a page change occurs. | The current page number. |

## Usage Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { type PaginationMeta } from 'lilasia-ui'

const paginationMeta = ref<PaginationMeta>({
  current_page: 3,
  first_page_url: '/?page=1',
  from: 21,
  last_page: 10,
  last_page_url: '/?page=10',
  next_page_url: '/?page=4',
  path: '/',
  per_page: 10,
  prev_page_url: '/?page=2',
  to: 30,
  total: 100
})

const handlePageChange = (page: number) => {
  console.log('Page changed to:', page)
}
</script>

<template>
  <AppPagination :meta="paginationMeta" :pageLimit="5" @pageChange="handlePageChange" />
</template>
```
