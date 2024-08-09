# AppDrawer

## Overview

The `AppDrawer` component is a slide-in panel that can appear from any side of the screen (top, right, bottom, or left). It is commonly used for navigation menus, settings panels, or other off-canvas content. The component includes optional backdrop support and customizable transitions.

## Props

- **position** (required, string):

  - **Description**: Specifies the position from which the drawer will slide in.
  - **Accepted Values**: `'left'`, `'right'`, `'bottom'`, `'top'`
  - **Usage**: Determines the side of the screen from which the drawer will enter and exit.

- **backdrop** (optional, boolean or string):

  - **Description**: Controls the presence and behavior of the backdrop (overlay) behind the drawer.
  - **Default**: `false`
  - **Usage**:
    - If `false`, no backdrop is displayed.
    - If `true`, a backdrop is displayed that closes the drawer when clicked.
    - If `'static'`, a backdrop is displayed but does not close the drawer when clicked.

- **class** (optional, any):
  - **Description**: Custom CSS classes to apply to the drawer for additional styling.
  - **Default**: `undefined`
  - **Usage**: Pass any additional classes to style the drawer.

## Model

- **show** (boolean):
  - **Description**: A two-way binding model that controls the visibility of the drawer.
  - **Usage**: Set to `true` to show the drawer and `false` to hide it.

## Slots

- **default**:
  - **Description**: Default slot for the content inside the drawer.
  - **Usage**: Insert your content directly between the `<AppDrawer>...</AppDrawer>` tags.

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
