# AppBadge

## Overview

The `AppBadge` component is a versatile badge used to display labels with optional icons on either side. It supports various styles, colors, and configurations to fit different UI needs.

## Props

| Props            | Default     | Description                                                                                                          | Usage                                                                |
| ---------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `label`          | `undefined` | The text to display inside the badge if no default slot is used.                                                     | Use this prop to provide a label for the badge.                      |
| `color`          | `white`     | Defines the color of the badge. Possible values are `white`, `blue`, `red`, `yellow`, `green`, `purple`, and `brown` | Set this prop to control the background and text color of the badge. |
| `icon`           | `undefined` | The icon to display on the left side of the badge, either as a string or a `LilasiaIcon` component.                  | Use this prop to add an icon to the left of the badge text.          |
| `iconRight`      | `undefined` | The icon to display on the right side of the badge, either as a string or a `LilasiaIcon` component.                 | Use this prop to add an icon to the right of the badge text.         |
| `iconClass`      | `undefined` | Custom CSS classes for the left icon.                                                                                | Set this prop to style the left icon with additional CSS classes.    |
| `iconRightClass` | `undefined` | Custom CSS classes for the right icon.                                                                               | Set this prop to style the right icon with additional CSS classes.   |
| `pill`           | `false`     | If true, makes the badge pill-shaped (fully rounded).                                                                | Use this prop to apply a pill shape to the badge.                    |
| `outline`        | `false`     | If true, applies an outlined style to the badge.                                                                     | Set this prop to change the badge style to outlined.                 |

## Slots

| Slots     | Description                                               | Usage                                                                                  |
| --------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `default` | Slot for custom content to be displayed inside the badge. | Use this slot if you want to provide custom content instead of using the `label` prop. |

## Usage Example

```vue
<template>
  <div>
    <!-- Solid Badge with Label -->
    <AppBadge color="blue" label="New" />

    <!-- Pill-Shaped Badge with Icons -->
    <AppBadge color="red" icon="star" icon-right="check" pill outline> Featured </AppBadge>

    <!-- Custom Badge with Slot Content -->
    <AppBadge color="green">
      <span>Custom Content</span>
    </AppBadge>
  </div>
</template>
```
