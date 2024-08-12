# AppDropdown

## Overview

The `AppDropdown` component is a customizable dropdown menu built using `@headlessui/vue`. It provides a flexible way to display actions or options in a dropdown style, with optional icons and text for each menu item.

## Props

| Prop           | Type                                  | Default     | Description                                                                                                             | Usage                                                                |
| -------------- | ------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `text`         | `string` (optional)                   | `undefined` | The text to display on the dropdown button.                                                                             | Use this prop to provide a label for the dropdown button.            |
| `icon`         | `string`, or `LilasiaIcon` (optional) | `undefined` | The icon to display on the dropdown button, either as a string or a LilasiaIcon component.                              | Use this prop to provide an icon next to the dropdown button's text. |
| `menuPosition` | `string` (optional)                   | `right`     | Determines the position of the dropdown menu relative to the button. Possible values are `right`, `left`, and `center`. | Set this prop to position the dropdown menu accordingly.             |

## Slots

| Slot      | Description                                                | Usage                                                                                                 |
| --------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `button`  | Slot for custom button content that triggers the dropdown. | Use this slot if you want to replace the default button with a custom one.                            |
| `default` | Slot for the dropdown menu items.                          | Use this slot to include `DropdownItem` and `DropdownItemGroup` components as the dropdown's content. |

## Child Components

### DropdownItem

| Props         | Type                                                                                    | Default     | Description                                                                                                 | Usage                                                                     |
| ------------- | --------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `to`          | `string` or `RouteLocationAsRelativeGeneric` or `RouteLocationAsPathGeneric` (optional) | `undefined` | The route or URL to navigate to when the dropdown item is clicked.                                          | Use this prop to make the dropdown item a navigable link.                 |
| `activeColor` | `string` (optional)                                                                     | `white`     | The color of the item when it is active. Possible values are `white`, `light`, `blue`, `yellow`, and `red`. | Use this prop to define the active color of the item when it is selected. |
| `text`        | `string` (required)                                                                     |             | The text to display for the dropdown item.                                                                  |                                                                           |
| `icon`        | `string` or `LilasiaIcon` (optional)                                                    |             | The icon to display next to the item's text.                                                                |                                                                           |

### DropdownItemGroup

| Slots     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `default` | Slot for grouping multiple `DropdownItem` components together. |

## Usage Example

```vue
<template>
  <AppDropdown icon="sort" text="Dropdown Action" menu-position="left">
    <DropdownItemGroup>
      <DropdownItem icon="edit" text="Edit" />
      <DropdownItem icon="content_copy" text="Duplicate" />
    </DropdownItemGroup>

    <DropdownItemGroup>
      <DropdownItem icon="archive" text="Archive" />
      <DropdownItem icon="open_with" text="Move" />
    </DropdownItemGroup>

    <DropdownItemGroup>
      <DropdownItem icon="delete" text="Delete" activeColor="red" />
    </DropdownItemGroup>
  </AppDropdown>
</template>
```
