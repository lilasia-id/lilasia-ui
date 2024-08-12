# Select

## FormSelect

### Overview

The `FormSelect` component is a customizable dropdown select input for Vue applications. It supports dynamic options, configurable labels, and integrates error display. This component enhances forms by allowing user selection from a list of options.

### Props

| Prop          | Type                                 | Description                                                                               |
| ------------- | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| `id`          | `InputHTMLAttributes['id']`          | HTML ID attribute for the select element.                                                 |
| `label`       | `string`                             | Label text for the select box. Displayed above the dropdown.                              |
| `options`     | `any[]`                              | Array of options that the user can select from.                                           |
| `optionLabel` | `string`                             | Property name to use as the display text for each option if the options are objects.      |
| `placeholder` | `InputHTMLAttributes['placeholder']` | Placeholder text to display when no option is selected.                                   |
| `required`    | `boolean`                            | Whether the select input is required for form submission.                                 |
| `readonly`    | `boolean`                            | Makes the select box non-interactive, effectively displaying but preventing modification. |
| `error`       | `string`                             | Error message to display when validation fails.                                           |

#### Usage Example

```vue
<template>
  <FormSelect
    id="user-role"
    label="User Role"
    :options="[
      { id: 1, name: 'Admin' },
      { id: 2, name: 'User' }
    ]"
    optionLabel="name"
    placeholder="Select a role"
    required
  />
</template>
```

## FormCombobox

### Overview

The `FormCombobox` is a Vue component built with `@headlessui/vue` that offers a flexible combobox input with autocomplete capabilities. It is ideal for situations where users need to search and select one or multiple items from a large set of options.

### Props

| Prop              | Type                                 | Description                                                                  |
| ----------------- | ------------------------------------ | ---------------------------------------------------------------------------- |
| `id`              | `InputHTMLAttributes['id']`          | HTML ID attribute for the combobox input element.                            |
| `label`           | `string`                             | Descriptive label for the combobox.                                          |
| `options`         | `any[]`                              | Array of options available for selection.                                    |
| `optionLabel`     | `string`                             | Specifies the property name of the option object to display as the label.    |
| `filterKey`       | `string`                             | Property name used to filter the options based on the query.                 |
| `displayValueKey` | `string`                             | Property name used to display the value in the combobox input when selected. |
| `placeholder`     | `InputHTMLAttributes['placeholder']` | Placeholder text displayed in the input field.                               |
| `multiple`        | `boolean`                            | Allows multiple selections if true.                                          |
| `required`        | `boolean`                            | Specifies whether the input is required.                                     |
| `readonly`        | `boolean`                            | If true, the input is non-interactive.                                       |
| `error`           | `string`                             | Displays an error message when the input fails validation.                   |

### Usage Example

```vue
<template>
  <FormCombobox
    id="user-selection"
    label="Select User"
    :options="userList"
    optionLabel="username"
    filterKey="username"
    displayValueKey="username"
    placeholder="Type to search..."
    multiple
  />
</template>
```
