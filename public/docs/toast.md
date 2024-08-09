# AppToast

## Overview

The `AppToast` component is a flexible and visually appealing toast notification system designed to display brief messages to users. It supports different notification types such as success, info, warning, and danger, each with its own distinct style.

## Usage Example

```vue
<script setup lang="ts">
import { useToast } from 'lilasia-ui'

const { toastSuccess, toastInfo, toastWarning, toastError } = useToast()

const showSuccessToast = () => {
  toastSuccess('This is success toast')
}

const showInfoToast = () => {
  toastInfo('This is info toast')
}

const showWarningToast = () => {
  toastWarning('This is warning toast')
}

const showDangerToast = () => {
  toastError('This is danger toast')
}
</script>

<template>
  <div>
    <button @click="showSuccessToast">Show Success Toast</button>
    <button @click="showInfoToast">Show Info Toast</button>
    <button @click="showWarningToast">Show Warning Toast</button>
    <button @click="showDangerToast">Show Danger Toast</button>

    <AppToast />
  </div>
</template>
```
