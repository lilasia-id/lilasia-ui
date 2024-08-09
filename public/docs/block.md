# AppBlock

## Overview

The `AppBlock` component is a flexible container that can be customized with optional borders, rounded corners, and slots for header and footer content. It is designed to be a reusable block within a Vue.js application, providing a consistent structure for content with customizable appearance.

## Props

- **bordered** (optional, boolean):

  - **Description**: Determines whether the block should have a border.
  - **Default**: `false`
  - **Usage**: When set to `true`, the block will have a black border (`border-black-10`).

- **rounded** (optional, number):
  - **Description**: Defines the border-radius of the block's corners.
  - **Default**: `8`
  - **Accepted Values**: `8` or `16`
  - **Usage**:
    - If `8`, the block will have a border-radius of `8px` (`rounded-8`).
    - If `16`, the block will have a border-radius of `16px` (`rounded-16`).

## Slots

- **header** (optional):

  - **Description**: Slot for inserting custom header content.
  - **Usage**: Wrap your header content within a `<template v-slot:header>...</template>` block.

- **default**:

  - **Description**: Default slot for the main content of the block.
  - **Usage**: Insert your main content directly between the `<AppBlock>...</AppBlock>` tags.

- **footer** (optional):
  - **Description**: Slot for inserting custom footer content.
  - **Usage**: Wrap your footer content within a `<template v-slot:footer>...</template>` block.

## Usage Example

```vue
<template>
  <AppBlock bordered :rounded="16">
    <template #header>
      <h1>Header Content</h1>
    </template>

    <p>This is the main content of the block.</p>

    <template #footer>
      <p>Footer Content</p>
    </template>
  </AppBlock>
</template>
```