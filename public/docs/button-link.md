# ButtonLink

## Overview

The `ButtonLink` is a versatile button-like element that can render as a RouterLink, an anchor `<a>`, or a regular button `<button>`, depending on the provided props.

## Props

| Prop     | Type                                                                                | Description                                                                                                           | Default     |
| -------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| `to`     | `string \| RouteLocationAsRelativeGeneric \| RouteLocationAsPathGeneric` (optional) | Specifies the route to navigate to when the button is clicked. If provided, the button will behave as a `RouterLink`. | `undefined` |
| `href`   | `string` (optional)                                                                 | Specifies an external URL to navigate to. If provided, the button will behave as an anchor (`<a>`) tag.               | `undefined` |
| `target` | `'_blank' \| '_parent' \| '_self' \| '_top` (optional)                              | Specifies where to open the linked document. Only applicable when `href` is set.                                      | `undefined` |
| `text`   | `string` (optional)                                                                 | The text to display inside the button.                                                                                | `undefined` |
| `size`   | `'md' \| 'lg' \| 'xl'` (optional)                                                   | The size of the button text.                                                                                          | `md`        |

## Usage Example

```vue
<script lang="ts" setup>
import { ButtonLink } from 'lilasia-ui'

const handleButtonClick = () => {
  alert('Hello World!')
}
</script>

<template>
  <ButtonLink
    :to={ name: 'home' }
    text="Navigate to home"
  />
  <ButtonLink
    href="https://lilasia.id"
    text="Visit lilasia.id"
  />
  <ButtonLink
    href="https://blog.lilasia.id"
    target="_blank"
    text="Blank Navigate"
  />
  <ButtonLink
    href="#"
    text="Prevent Click"
    @click.prevent="handleButtonClick"
  />
</template>
```
