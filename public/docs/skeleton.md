# Skeleton

## HeadingSkeleton

### Overview

`HeadingSkeleton` is a component used to display a placeholder skeleton for heading elements during content loading. This component enhances the user experience by providing a visual cue that content is loading.

### Example Usage

```vue
<template>
  <HeadingSkeleton />
</template>
```

## ImageSkeleton

### Overview

`ImageSkeleton` is a component designed to display a placeholder for images before they are fully loaded. It uses a skeleton screen with configurable aspect ratios and optional rounded corners to maintain a visually consistent loading state.

### Props

| Prop          | Default Value | Values            | Description                                                | Usage                                                                          |
| ------------- | ------------- | ----------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `aspectRatio` | `square`      | `square`, `video` | Defines the aspect ratio of the image skeleton.            | Use `square` for square images and `video` for video-like aspect ratio (16:9). |
| `round`       | `false`       | `true`, `false`   | Determines if the edges of the skeleton should be rounded. | Set to `true` to apply fully rounded corners, creating a circular skeleton.    |

```vue
<template>
  <ImageSkeleton aspectRatio="video" :round="true" />
</template>
```

## ParagraphSkeleton

### Overview

`ParagraphSkeleton` is a component designed to simulate multiple rows of text content as placeholders while the actual content is loading. This component helps maintain layout consistency and provides a visual indication that text content is being loaded.

### Props

| Prop   | Default | Description                                                  | Usage                                                                                       |
| ------ | ------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `rows` | `1`     | Specifies the number of simulated text rows in the skeleton. | Set this prop based on the number of text rows you expect in the content area being loaded. |

### Example Usage

```vue
<template>
  <ParagraphSkeleton :rows="3" />
</template>
```
