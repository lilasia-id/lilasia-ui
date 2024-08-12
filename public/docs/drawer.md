# AppDrawer

## Overview

The `AppDrawer` component is a slide-in panel that can appear from any side of the screen (top, right, bottom, or left). It is commonly used for navigation menus, settings panels, or other off-canvas content. The component includes optional backdrop support and customizable transitions.

## Props

| Prop       | Type                             | Default | Accepted Values                  | Description                                                                     | Usage                                                                                                                                                                                                          |
| ---------- | -------------------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position` | `string` (required)              |         | `left`, `right`, `bottom`, `top` | Specifies the position from which the drawer will slide in.                     | Determines the side of the screen from which the drawer will enter and exit.                                                                                                                                   |
| `backdrop` | `boolean` or `string` (optional) | `false` | `false`, `true`, `static`        | Controls the presence and behavior of the backdrop (overlay) behind the drawer. | - If `false`, no backdrop is displayed. <br> - If `true`, a backdrop is displayed that closes the drawer when clicked. <br> - If `static`, a backdrop is displayed but does not close the drawer when clicked. |
| `class`    | `any` (optional)                 |         | `undefined`                      | Custom CSS classes to apply to the drawer for additional styling.               | Pass any additional classes to style the drawer.                                                                                                                                                               |

## Slots

## Slots

| Slot      | Description                                     | Usage                                                                       |
| --------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| `default` | Default slot for the content inside the drawer. | Insert your content directly between the `<AppDrawer>...</AppDrawer>` tags. |

## Usage Example

```vue
<script setup lang="ts">
import { ref } from 'vue'

const drawerVisible = ref(false)
</script>

<template>
  <AppDrawer v-model="drawerVisible" position="left" backdrop>
    <p>This is the content inside the drawer.</p>
  </AppDrawer>

  <button @click="drawerVisible = true">Open Drawer</button>
</template>
```
