# RadioGroup

## Overview

The `RadioGroup` component facilitates user selection among a set of mutually exclusive options. It is built with `@headlessui/vue` for accessibility and Vue's compositional utilities for reactivity and slots. This component integrates icons for visual feedback and supports extensive customization through slots and props.

## Props

- **id** (`HTMLAttributes['id']`, optional): HTML ID attribute for associating the label with the radio group.
- **label** (`string`, optional): Descriptive text displayed above the radio group.
- **options** (`any[]`, optional): Array of options that users can choose from.
- **optionLabel** (`string`, optional): Property name in the options objects to use for display text.
- **icon** (`string | LilasiaIcon`, optional): Icon displayed next to the radio option when it is selected. Defaults to `'radio_button_checked'`.
- **uncheckedIcon** (`string | LilasiaIcon`, optional): Icon displayed next to the radio option when it is not selected. Defaults to `'radio_button_unchecked'`.
- **required** (`boolean`, optional): Indicates if the radio group must have a selected option for form submission.
- **error** (`string`, optional): Error message that displays if there is an issue with the radio group validation.

## Usage Example

```vue
<template>
  <RadioGroup
    id="user-role-selection"
    label="Select User Role"
    :options="[
      { id: 'admin', label: 'Administrator' },
      { id: 'user', label: 'Standard User' }
    ]"
    optionLabel="label"
    required
    @update:model-value="handleSelection"
  />
</template>
```
