# FormInput

## Overview

The `FormInput` component is a versatile input field designed for form usage within Vue applications. It supports various input types including text and password, integrates input validation feedback, and provides optional visibility toggling for passwords.

## Props

| Prop           | Type                                  | Description                                                                   |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------- |
| `id`           | `HTMLAttributes['id']`                | The HTML ID attribute associated with the input element.                      |
| `type`         | `InputHTMLAttributes['type']`         | The type of input, such as `text` or `password`. Defaults to `text`.          |
| `label`        | `string`                              | Text label for the input field. If provided, it will display above the input. |
| `placeholder`  | `InputHTMLAttributes['placeholder']`  | Placeholder text for the input field.                                         |
| `autocomplete` | `InputHTMLAttributes['autocomplete']` | Browser autocomplete setting. Defaults to `off`.                              |
| `required`     | `boolean`                             | Marks the input field as required. Defaults to `false`.                       |
| `readonly`     | `boolean`                             | Makes the input field read-only. Defaults to `false`.                         |
| `error`        | `string`                              | Error message to display when input validation fails.                         |

## Computed Properties

- **classes**: Computes CSS classes based on the input state (e.g., normal, read-only, error) to style the input field dynamically.

## Methods

- **togglePasswordVisibility**: Toggles the visibility of the password in the input field between hidden (`password`) and visible (`text`).

## Usage Example

```vue
<template>
  <FormInput
    id="user-email"
    type="email"
    label="Email Address"
    placeholder="Enter your email"
    required
  />
</template>
```
