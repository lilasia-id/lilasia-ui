# Textarea

## FormTextarea

## Overview

The `FormTextarea` component is designed to facilitate multi-line text input within Vue applications. It supports customizable sizing and integrates error messaging, making it suitable for a variety of text entry needs in forms, such as comments or descriptions.

## Props

- **id** (`HTMLAttributes['id']`, optional): The HTML ID attribute assigned to the textarea element.
- **label** (`string`, optional): Descriptive label displayed above the textarea.
- **placeholder** (`HTMLAttributes['placeholder']`, optional): Placeholder text that appears within the textarea when it is empty.
- **rows** (`string | number`, optional): Number of visible text lines in the textarea. Defaults to `3`.
- **cols** (`string | number`, optional): Number of characters the textarea can display per line horizontally. Undefined by default, which allows the width to be controlled via CSS.
- **required** (`boolean`, optional): Specifies whether input in the textarea is required for form submission.
- **error** (`string`, optional): Error message that appears when input validation fails.

## Usage Example

```vue
<template>
  <FormTextarea
    id="user-comment"
    label="Your Comment"
    placeholder="Enter your comment here..."
    rows="5"
    required
  />
</template>
```

## FormEditor.vue

### Overview

The `FormEditor` component is a rich text editor based on TiPTap and Vue 3, designed to provide a powerful editing interface for creating formatted text. It includes custom configuration for list styles and integrates a placeholder functionality. The component is well-suited for applications requiring rich content creation such as blogs, forums, or content management systems.

### Props

- **id** (`HTMLAttributes['id']`, optional): Specifies the HTML ID attribute for the editor input, aiding in form accessibility and label linkage.
- **label** (`string`, optional): Text label for the editor. Clicking the label focuses the editor.
- **modelValue** (`string`, optional): The HTML content to be edited, which is bound via v-model to allow for two-way data binding.
- **placeholder** (`HTMLAttributes['placeholder']`, optional): Placeholder text that appears when the editor is empty, providing guidance to the user.
- **required** (`boolean`, optional): Indicates if the input is required in a form context, useful for validation purposes.
- **error** (`string`, optional): Error message to display when validation fails or other errors occur related to the input.

### Usage Example

```vue
<template>
  <FormEditor
    id="post-editor"
    label="Create Post"
    placeholder="Write something amazing..."
    required
  />
</template>
```