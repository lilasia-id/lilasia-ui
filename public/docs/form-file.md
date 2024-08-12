# File

## FormFile

### Overview

The `FormFile` component provides a user-friendly interface for file uploads, replacing the default file input element with a customizable button. It supports single and multiple file selections and integrates Vue's reactivity system to update the parent component with the file data.

### Props

| Prop          | Type                                            | Description                                                                                                                            |
| ------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | `HTMLAttributes['id']` (optional)               | HTML ID attribute for associating the label with the file input.                                                                       |
| `modelValue`  | `any` (optional)                                | The value that binds to the file input's state, which can be a file or files, depending on whether multiple file selection is enabled. |
| `label`       | `string` (optional)                             | Text label displayed above the file input.                                                                                             |
| `placeholder` | `InputHTMLAttributes['placeholder']` (optional) | Text displayed on the button when no file is selected. Defaults to 'Choose File'.                                                      |
| `multiple`    | `boolean` (optional)                            | Determines if multiple files can be selected. Defaults to `false`.                                                                     |
| `required`    | `boolean` (optional)                            | Indicates if file selection is required for form submission.                                                                           |
| `readonly`    | `boolean` (optional)                            | If true, disables file selection.                                                                                                      |
| `error`       | `string` (optional)                             | Error message displayed if there is an issue with the file input validation.                                                           |

### Usage Example

```vue
<template>
  <FormFile
    id="user-document"
    label="Upload Document"
    multiple
    required
    @update:model-value="handleFileUpload"
  />
</template>
```

## FormImageUploader

### Overview

The `FormImageUploader` component allows users to upload images, providing immediate visual feedback through an image preview. It is designed to handle different image aspect ratios and includes robust error handling. The component also supports accessibility and usability enhancements.

### Props

| Prop          | Type                                            | Description                                                                                       |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`          | `HTMLAttributes['id']` (optional)               | HTML ID attribute for associating the label with the image input.                                 |
| `modelValue`  | `any` (optional)                                | The value that binds to the image file's state.                                                   |
| `label`       | `string` (optional)                             | Text label displayed above the image uploader.                                                    |
| `placeholder` | `InputHTMLAttributes['placeholder']` (optional) | Text displayed within the uploader area when no image is selected. Defaults to 'Choose Image'.    |
| `required`    | `boolean` (optional)                            | Specifies whether the image upload is required for form submission.                               |
| `readonly`    | `boolean` (optional)                            | If true, disables the ability to change the image.                                                |
| `error`       | `string` (optional)                             | Error message displayed if there is an issue with the image upload.                               |
| `aspectRatio` | `video' \| 'square` (optional)                  | Defines the aspect ratio of the image preview; supports 'video' (16:9) and 'square' (1:1) ratios. |
| `class`       | `any` (optional)                                | Custom CSS classes that can be applied to the uploader container for additional styling.          |

### Usage Example

```vue
<template>
  <FormImageUploader
    id="profile-picture"
    label="Upload Profile Picture"
    required
    @update:model-value="handleImageUpload"
  />
</template>
```
