# FormInput

## Overview

The `FormInput` component is a versatile input field designed for form usage within Vue applications. It supports various input types including text and password, integrates input validation feedback, and provides optional visibility toggling for passwords.

## Props

- **id** (`HTMLAttributes['id']`, optional): The HTML ID attribute associated with the input element.
- **type** (`InputHTMLAttributes['type']`, optional): The type of input, such as `text` or `password`. Defaults to `'text'`.
- **label** (`string`, optional): Text label for the input field. If provided, it will display above the input.
- **placeholder** (`InputHTMLAttributes['placeholder']`, optional): Placeholder text for the input field.
- **autocomplete** (`InputHTMLAttributes['autocomplete']`, optional): Browser autocomplete setting. Defaults to `'off'`.
- **required** (`boolean`, optional): Marks the input field as required. Defaults to `false`.
- **readonly** (`boolean`, optional): Makes the input field read-only. Defaults to `false`.
- **error** (`string`, optional): Error message to display when input validation fails.

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
