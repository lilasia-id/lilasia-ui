# AppDropdown

## Overview

The `AppDropdown` component is a customizable dropdown menu built using `@headlessui/vue`. It provides a flexible way to display actions or options in a dropdown style, with optional icons and text for each menu item.

## Props

- **text** (optional, string):

  - **Description**: The text to display on the dropdown button.
  - **Default**: `undefined`
  - **Usage**: Use this prop to provide a label for the dropdown button.

- **icon** (optional, string | LilasiaIcon):

  - **Description**: The icon to display on the dropdown button, either as a string or a `LilasiaIcon` component.
  - **Default**: `undefined`
  - **Usage**: Use this prop to provide an icon next to the dropdown button's text.

- **menuPosition** (optional, string):
  - **Description**: Determines the position of the dropdown menu relative to the button. Possible values are `'right'`, `'left'`, and `'center'`.
  - **Default**: `'right'`
  - **Usage**: Set this prop to position the dropdown menu accordingly.

## Slots

- **button** (optional):

  - **Description**: Slot for custom button content that triggers the dropdown.
  - **Usage**: Use this slot if you want to replace the default button with a custom one.

- **default**:
  - **Description**: Slot for the dropdown menu items.
  - **Usage**: Use this slot to include `DropdownItem` and `DropdownItemGroup` components as the dropdown's content.

## Child Components

### DropdownItem

- **Props**:

  - **to** (optional, string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric):
    - **Description**: The route or URL to navigate to when the dropdown item is clicked.
    - **Default**: `undefined`
    - **Usage**: Use this prop to make the dropdown item a navigable link.
  - **activeColor** (optional, string):
    - **Description**: The color of the item when it is active. Possible values are `'white'`, `'light'`, `'blue'`, `'yellow'`, and `'red'`.
    - **Default**: `'white'`
    - **Usage**: Use this prop to define the active color of the item when it is selected.
  - **text** (required, string):
    - **Description**: The text to display for the dropdown item.
  - **icon** (optional, string | LilasiaIcon):
    - **Description**: The icon to display next to the item's text.

### DropdownItemGroup

- **Slots**:
  - **default**:
    - **Description**: Slot for grouping multiple `DropdownItem` components together.

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
