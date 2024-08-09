# AppSection

## Overview

The `AppSection` component is a layout component designed to create sections within a Vue.js application. It provides options to control the layout's fluidity and spacing, making it versatile for different layout needs.

## Props

- **fluid** (optional, boolean):

  - **Description**: Determines whether the section should be fluid (full-width) or constrained within a container.
  - **Default**: `false`
  - **Usage**:
    - If `false`, the section content will be centered within a container (`container mx-auto`).
    - If `true`, the section will be full-width, spanning the entire viewport.

- **noGap** (optional, boolean):
  - **Description**: Controls the top margin of the section.
  - **Default**: `false`
  - **Usage**:
    - If `false`, the section will have a top margin of `16px` (`mt-16`).
    - If `true`, the top margin will be removed.

## Slots

- **default**:
  - **Description**: Default slot for the content of the section.
  - **Usage**: Insert your content directly between the `<AppSection>...</AppSection>` tags.

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
