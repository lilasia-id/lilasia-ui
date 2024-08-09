# AppDialog

## Overview

The `AppDialog` component provides a flexible and reusable modal dialog system, designed to display dynamic content in a variety of positions on the screen. It leverages the `Headless UI` for managing transitions and is tightly integrated with a Pinia-based store for managing the dialog's state.

## Usage Example

```vue
<script setup lang="ts">
import SomeComponent from '@/components/SomeComponent.vue'
import { useDialog } from '@/composables/dialog'

const { showDialog } = useDialog()

const openTopDialog = () => {
  showDialog(SomeComponent, { position: 'top' })
}

const openMiddleDialog = () => {
  showDialog(SomeComponent, { position: 'middle' })
}

const openTopRightDialog = () => {
  showDialog(SomeComponent, { position: 'top-right' })
}

const openTopLeftDialog = () => {
  showDialog(SomeComponent, { position: 'top-left' })
}
</script>

<template>
  <div>
    <button @click="openTopDialog">Top Position</button>
    <button @click="openMiddleDialog">Middle Position</button>
    <button @click="openTopRightDialog">Top-right position</button>
    <button @click="openTopLeftDialog">Top-left position</button>

    <AppModal />
  </div>
</template>
```
