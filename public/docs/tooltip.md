# AppTooltip

## Overview

The `AppTooltip` component is used to display a tooltip with a text or slot content when hovering over or focusing on a target element. It provides customizable positioning and appearance.

## Props

- **text** (optional, string):

  - **Description**: The text to be displayed inside the tooltip.
  - **Default**: `undefined` (If not provided, the slot content will be used instead.)

- **position** (optional, string):

  - **Description**: Defines the position of the tooltip relative to the target element.
  - **Options**: `left' | 'right' | 'top' | 'bottom`
  - **Default**: `bottom`

- **class** (optional, any):
  - **Description**: Additional CSS classes to apply to the tooltip.
  - **Default**: `undefined`

## Slots

- **default**:

  - **Description**: The content to be used as the target element for the tooltip. This slot is where you place the element that will trigger the tooltip when hovered over or focused on.

- **text** (optional):
  - **Description**: Slot for the content of the tooltip. This slot allows you to provide custom content for the tooltip if `text` prop is not used.
  - **Usage**: Use this slot to replace the `text` prop content with custom HTML or Vue components.

## Usage Example

```vue
<template>
  <AppTooltip text="This is a tooltip" position="top">
    <button class="bg-blue-500 p-4 text-white">Hover me</button>
  </AppTooltip>
</template>
```
