# AppIndicators

## Overview

The `AppIndicators` component is used to display small indicators, such as badges or notification dots, which can be positioned relative to other content. It supports customization in shape and additional CSS classes.

## Props

| Prop  | Type                 | Default     | Description                                                                                        | Usage                                                            |
| ----- | -------------------- | ----------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| label | `string` (optional)  | `undefined` | Text to display inside the indicator.                                                              | Use this prop to provide a label for the indicator.              |
| round | `boolean` (optional) | `false`     | If true, makes the indicator fully rounded (pill shape). If false, applies a squared corner style. | Set this prop to apply a round or square style to the indicator. |
| class | `any` (optional)     | `undefined` | Custom CSS classes to apply to the indicator.                                                      | Use this prop to add additional styling to the indicator.        |

## Slots

| Slot      | Description                                                   | Usage                                                                     |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `default` | Slot for custom content to be displayed inside the indicator. | Use this slot to include custom content or elements within the indicator. |

## Usage Example

```vue
<template>
  <div>
    <!-- Rounded Indicator with Label -->
    <AppIndicators round label="5" class="bg-blue-500 text-white">
      <!-- Custom content (e.g., shopping cart dot) -->
    </AppIndicators>
  </div>
</template>
```
