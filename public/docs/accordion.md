# AppAccordion

## Overview

The `AppAccordion` component provides a collapsible section for displaying content that can be toggled open or closed. It utilizes Headless UI's `Disclosure` component to manage the open/closed state and apply transitions.

## Props

- **defaultOpen** (optional, boolean):
  - **Description**: Determines if the accordion should be open by default.
  - **Default**: `undefined` (Accordion is closed by default if not specified)
  - **Usage**: Set this prop to `true` if you want the accordion to be open when it is first rendered.

## Slots

- **button** (optional):

  - **Description**: Slot for the button or header that controls the opening and closing of the accordion. The slot receives an `open` boolean indicating if the accordion is currently open.
  - **Usage**: Use this slot to provide custom content or styling for the button that toggles the accordion.

- **default**:
  - **Description**: Slot for the content that will be displayed when the accordion is open.
  - **Usage**: Place the content you want to show within the accordion when it is expanded.

## Usage Example

```vue
<template>
  <AppAccordion defaultOpen>
    <template #button="{ open }">
      <button class="text-blue-500 p-4">
        {{ open ? 'Collapse' : 'Expand' }}
      </button>
    </template>

    <div class="p-4">
      <p>This is the content of the accordion.</p>
    </div>
  </AppAccordion>
</template>
```
