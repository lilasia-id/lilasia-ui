# AppNavbar

## Overview

The `AppNavbar` component is a responsive navigation bar that can be optionally sticky. It is designed to be placed at the top of a page or section, and it includes a container for easy alignment of content within the viewport.

## Props

- **sticky** (optional, boolean):

  - **Description**: Determines whether the navbar should be sticky (fixed to the top of the viewport) or static.
  - **Default**: `false`
  - **Usage**:
    - If `true`, the navbar will stick to the top of the page as the user scrolls (`sticky top-[0] z-30`).
    - If `false`, the navbar will be static and scroll with the rest of the content.

- **class** (optional, any):
  - **Description**: Custom CSS classes to apply to the navbar for additional styling.
  - **Default**: `undefined`
  - **Usage**: Pass any additional classes to style the navbar.

## Slots

- **default**:
  - **Description**: Default slot for the content inside the navbar.
  - **Usage**: Insert your content directly between the `<AppNavbar>...</AppNavbar>` tags.

## Usage Example

```vue
<template>
  <AppNavbar sticky class="bg-white shadow">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </AppNavbar>
</template>
```