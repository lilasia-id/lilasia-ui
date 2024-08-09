# AppPagination

## Overview

The `AppPagination` component provides a pagination interface that allows users to navigate through pages of content. It supports customizable page limits, hiding page numbers, and emits events on page changes. The component works seamlessly with Vue Router for navigation.

## Props

- **meta** (required, `PaginationMeta` object):

  - **Description**: Contains metadata for pagination, including current page, total pages, and URLs for navigation.
  - **Type**:
    ```ts
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
  - **Usage**: This prop is required to handle pagination. It provides all necessary information for rendering and navigating through pages.

- **pageLimit** (optional, number):

  - **Description**: Determines the maximum number of page buttons to display at once.
  - **Default**: `4`
  - **Usage**: Set to customize the number of visible page numbers in the pagination bar.

- **hidePageNumbers** (optional, boolean):
  - **Description**: Controls whether page numbers are displayed.
  - **Default**: `false`
  - **Usage**:
    - If `true`, page numbers will be hidden, showing only "Prev" and "Next" buttons.

## Emits

- **pageChange** (event):
  - **Description**: Emits the current page when a page change occurs.
  - **Payload**: The current page number.

## Methods

- **navigatePrev**:

  - **Description**: Navigates to the previous page, if available.

- **navigateNext**:

  - **Description**: Navigates to the next page, if available.

- **navigatePage**:
  - **Description**: Navigates to a specific page when the page number is clicked.
  - **Parameters**: `page` (number or string) - The page number to navigate to.

## Computed Properties

- **pageNumbers**:
  - **Description**: Computes the array of page numbers to display based on the current page and total pages. Includes ellipses (`'...'`) for skipped ranges.

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
