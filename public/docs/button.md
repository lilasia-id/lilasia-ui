# AppButton

## Overview

The `AppButton` component is a versatile and customizable button component that can be used in various parts of your application. It supports different button styles, icons, and interactions, making it suitable for a wide range of use cases.

## Props

- **to** (optional, string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric):

  - **Description**: Specifies the route to navigate to when the button is clicked. If provided, the button will behave as a `RouterLink`.
  - **Default**: `undefined`

- **href** (optional, string):

  - **Description**: Specifies an external URL to navigate to. If provided, the button will behave as an anchor (`<a>`) tag.
  - **Default**: `undefined`

- **target** (optional, '\_blank' | '\_parent' | '\_self' | '\_top'):

  - **Description**: Specifies where to open the linked document. Only applicable when `href` is set.
  - **Default**: `undefined`

- **type** (optional, 'submit' | 'button' | 'reset'):

  - **Description**: Defines the type of the button element.
  - **Default**: `'button'`

- **color** (optional, 'white' | 'light' | 'blue' | 'yellow' | 'red' | 'black'):

  - **Description**: Sets the color theme of the button.
  - **Default**: `'white'`

- **text** (optional, string):

  - **Description**: The text to display inside the button.
  - **Default**: `undefined`

- **icon** (optional, string | LilasiaIcon):

  - **Description**: An icon to display on the left side of the button.
  - **Default**: `undefined`

- **iconRight** (optional, string | LilasiaIcon):

  - **Description**: An icon to display on the right side of the button.
  - **Default**: `undefined`

- **iconClass** (optional, string | string[]):

  - **Description**: Additional classes to apply to the left icon.
  - **Default**: `undefined`

- **iconRightClass** (optional, string | string[]):

  - **Description**: Additional classes to apply to the right icon.
  - **Default**: `undefined`

- **align** (optional, 'center' | 'start' | 'end' | 'between'):

  - **Description**: Defines the alignment of the content within the button.
  - **Default**: `'center'`

- **outline** (optional, boolean):

  - **Description**: If true, the button will have an outline style.
  - **Default**: `false`

- **subtle** (optional, boolean):

  - **Description**: If true, the button will have a subtle style.
  - **Default**: `false`

- **round** (optional, boolean):

  - **Description**: If true, the button will have fully rounded corners.
  - **Default**: `false`

- **block** (optional, boolean):

  - **Description**: If true, the button will take up the full width of its container.
  - **Default**: `false`

- **noWrap** (optional, boolean):

  - **Description**: If true, the text inside the button will not wrap.
  - **Default**: `true`

- **disabled** (optional, boolean):

  - **Description**: If true, the button will be disabled and non-interactive.
  - **Default**: `false`

- **loading** (optional, boolean):
  - **Description**: If true, a loading spinner will be shown inside the button, and it will be non-interactive.
  - **Default**: `false`

## Computed Properties

- **variant**:

  - **Description**: Determines the button's style variant based on the `outline` and `subtle` props.
  - **Values**: `'solid'`, `'outline'`, `'subtle'`

- **colorClasses**:

  - **Description**: Generates classes for the button based on its `color` and `variant`.

- **classes**:
  - **Description**: Combines various classes to apply to the button, including alignment, size, and variant-specific styles.

## Methods

- **handleFocusIn**:

  - **Description**: Adds a `z-10` class when the button is focused to bring it to the front.

- **handleFocusOut**:
  - **Description**: Removes the `z-10` class when the button loses focus.

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
