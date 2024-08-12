# AppButton

## Overview

The `AppButton` component is a versatile and customizable button component that can be used in various parts of your application. It supports different button styles, icons, and interactions, making it suitable for a wide range of use cases.

## Props

| Prop             | Type                                                                                | Description                                                                                                           | Default     |
| ---------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| `to`             | `string \| RouteLocationAsRelativeGeneric \| RouteLocationAsPathGeneric` (optional) | Specifies the route to navigate to when the button is clicked. If provided, the button will behave as a `RouterLink`. | `undefined` |
| `href`           | `string` (optional)                                                                 | Specifies an external URL to navigate to. If provided, the button will behave as an anchor (`<a>`) tag.               | `undefined` |
| `target`         | `'_blank' \| '_parent' \| '_self' \| '_top` (optional)                              | Specifies where to open the linked document. Only applicable when `href` is set.                                      | `undefined` |
| `type`           | `'submit' \| 'button' \| 'reset` (optional)                                         | Defines the type of the button element.                                                                               | `button`    |
| `color`          | `'white' \| 'light' \| 'blue' \| 'yellow' \| 'red' \| 'black` (optional)            | Sets the color theme of the button.                                                                                   | `white`     |
| `text`           | `string` (optional)                                                                 | The text to display inside the button.                                                                                | `undefined` |
| `icon`           | `string \| LilasiaIcon` (optional)                                                  | An icon to display on the left side of the button.                                                                    | `undefined` |
| `iconRight`      | `string \| LilasiaIcon` (optional)                                                  | An icon to display on the right side of the button.                                                                   | `undefined` |
| `iconClass`      | `string \| string[]` (optional)                                                     | Additional classes to apply to the left icon.                                                                         | `undefined` |
| `iconRightClass` | `string \| string[]` (optional)                                                     | Additional classes to apply to the right icon.                                                                        | `undefined` |
| `align`          | `'center' \| 'start' \| 'end' \| 'between` (optional)                               | Defines the alignment of the content within the button.                                                               | `center`    |
| `outline`        | `boolean` (optional)                                                                | If true, the button will have an outline style.                                                                       | `false`     |
| `subtle`         | `boolean` (optional)                                                                | If true, the button will have a subtle style.                                                                         | `false`     |
| `round`          | `boolean` (optional)                                                                | If true, the button will have fully rounded corners.                                                                  | `false`     |
| `block`          | `boolean` (optional)                                                                | If true, the button will take up the full width of its container.                                                     | `false`     |
| `noWrap`         | `boolean` (optional)                                                                | If true, the text inside the button will not wrap.                                                                    | `true`      |
| `disabled`       | `boolean` (optional)                                                                | If true, the button will be disabled and non-interactive.                                                             | `false`     |
| `loading`        | `boolean` (optional)                                                                | If true, a loading spinner will be shown inside the button, and it will be non-interactive.                           | `false`     |

## Usage Example

```vue
<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

const handleClick = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <AppButton
    color="blue"
    text="Click Me"
    icon="check"
    icon-right="arrow_forward"
    block
    round
    :loading="isLoading"
    @click="handleClick"
  />
</template>
```
