# AppAccordion

## Overview

The `AppAccordion` component provides a collapsible section for displaying content that can be toggled open or closed. It utilizes Headless UI's `Disclosure` component to manage the open/closed state and apply transitions.

## Props

| Prop          | Type      | Description                                            | Default                                                       | Usage                                                                                   |
| ------------- | --------- | ------------------------------------------------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `defaultOpen` | `boolean` | Determines if the accordion should be open by default. | `undefined` (Accordion is closed by default if not specified) | Set this prop to `true` if you want the accordion to be open when it is first rendered. |

## Slots

| Slot      | Description                                                                           | Usage                                                                                         |
| --------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `button`  | Slot for the button or header that controls the opening and closing of the accordion. | Use this slot to provide custom content or styling for the button that toggles the accordion. |
| `default` | Slot for the content that will be displayed when the accordion is open.               | Place the content you want to show within the accordion when it is expanded.                  |

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
