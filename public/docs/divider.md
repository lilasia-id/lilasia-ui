# AppDivider

## Overview

The `AppDivider` component is a simple horizontal line (`<hr>`) used to separate content within a Vue.js application. It offers an option to display the divider as a solid or dashed line.

## Props

| Prop     | Type      | Default | Description                                                    |
| -------- | --------- | ------- | -------------------------------------------------------------- |
| `dashed` | `boolean` | `false` | Determines whether the divider line should be dashed or solid. |

**Usage**:

- If `false`, the divider will be displayed as a solid line (`border-solid`).
- If `true`, the divider will be displayed as a dashed line (`border-dashed`).

## Usage Example

```vue
<template>
  <AppDivider class="my-12" />
  <p>This content is separated by a solid divider.</p>

  <AppDivider dashed class="my-12" />
  <p>This content is separated by a dashed divider.</p>
</template>
```
