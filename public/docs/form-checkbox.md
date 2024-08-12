# Checkbox and Switch

## FormCheckbox

### Overview

The `FormCheckbox` component is a stylized checkbox suitable for Vue applications that require custom visual elements while maintaining accessibility and usability standards. The checkbox features a customizable appearance with icon integration to visually indicate the checked state.

### Props

- **id** (`InputHTMLAttributes['id']`, optional): HTML ID attribute for the checkbox input, useful for associating the label with the input element.
- **name** (`InputHTMLAttributes['name']`, optional): Name attribute for the checkbox input, which identifies the form data entry associated with this component.
- **value** (`InputHTMLAttributes['value']`, optional): Value attribute for the checkbox input, which will be the actual value sent in the form when the checkbox is checked.
- **label** (`string`, optional): Text label displayed next to the checkbox, providing context or instruction associated with the checkbox.

### Usage Example

```vue
<template>
  <FormCheckbox
    id="agree-terms"
    name="agreement"
    value="yes"
    label="I agree to the terms and conditions"
  />
</template>
```

Here's the documentation for the `FormSwitch` component, a stylized toggle switch designed for Vue applications. This component is visually customizable and offers a sleek user interaction experience.

## FormSwitch

### Overview

The `FormSwitch` component is a toggle switch that provides a more visually engaging alternative to traditional checkboxes. It's typically used for toggling a single setting on or off, like enabling or disabling a feature.

### Props

- **id** (`HTMLAttributes['id']`, optional): HTML ID attribute for the switch component, used to link the label and the actual switch input for accessibility purposes.

### Usage Example

```vue
<template>
  <FormSwitch id="enable-feature" />
</template>
```
