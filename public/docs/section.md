# AppSection

## Overview

The `AppSection` component is a layout component designed to create sections within a Vue.js application. It provides options to control the layout's fluidity and spacing, making it versatile for different layout needs.

## Props

| Prop    | Type      | Default | Description                                                                                    |
| ------- | --------- | ------- | ---------------------------------------------------------------------------------------------- |
| `fluid` | `boolean` | `false` | Determines whether the section should be fluid (full-width) or constrained within a container. |
| `noGap` | `boolean` | `false` | Controls the top margin of the section.                                                        |

## Slots

| Name      | Description                                  | Usage                                                                         |
| --------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| `default` | Default slot for the content of the section. | Insert your content directly between the `<AppSection>...</AppSection>` tags. |

## Usage Example

```vue
<template>
  <AppSection fluid no-gap>
    <p>This is a full-width section with no top margin.</p>
  </AppSection>

  <AppSection>
    <p>This is a centered section with a top margin.</p>
  </AppSection>
</template>
```
