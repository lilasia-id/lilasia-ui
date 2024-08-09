# AppTabs

## Overview

The `AppTabs` component is a tabbed interface that allows users to switch between different views or sections. It leverages the `TabGroup` component from the `@headlessui/vue` library, making it fully accessible and customizable.

## Props

- **defaultIndex** (optional, number):

  - **Description**: The index of the tab that should be selected by default.
  - **Default**: `0` (the first tab is selected by default)
  - **Usage**: Use this prop to specify which tab should be active on the initial render.

- **vertical** (optional, boolean):
  - **Description**: Determines whether the tabs should be displayed vertically.
  - **Default**: `false`
  - **Usage**: Set this prop to `true` to display tabs in a vertical layout.

## Emits

- **change** (event):
  - **Description**: Emitted when the active tab is changed.
  - **Payload**: The index of the newly selected tab.

## Slots

- **default**:
  - **Description**: Slot for the tab content, which typically includes `TabList`, `TabPanels`, and their respective child components.

## Child Components

### TabButton

- **Props**:

  - **disabled** (optional, boolean):
    - **Description**: Disables the tab, preventing it from being selected.
    - **Default**: `false`
    - **Usage**: Set this prop to `true` to disable the tab.

- **Slots**:
  - **default**: Slot for the tab content, typically a button or label.

### TabList

- **Slots**:
  - **default**: Slot for placing multiple `TabButton` components.

### TabPanel

- **Slots**:
  - **default**: Slot for the content of a specific tab panel, which is shown when the corresponding tab is selected.

### TabPanels

- **Slots**:
  - **default**: Slot for placing multiple `TabPanel` components.

## Usage Example

```vue
<template>
  <AppTabs defaultIndex="0" vertical>
    <div class="flex flex-col gap-16">
      <TabList class="flex gap-x-8">
        <TabButton v-slot="{ selected }" class="w-full">
          <AppButton :color="selected ? 'black' : 'white'" text="For You" block />
        </TabButton>
        <TabButton v-slot="{ selected }" class="w-full">
          <AppButton :color="selected ? 'black' : 'white'" text="Popular" block />
        </TabButton>
        <TabButton v-slot="{ selected }" class="w-full">
          <AppButton :color="selected ? 'black' : 'white'" text="Top Rated" block />
        </TabButton>
      </TabList>

      <TabPanels>
        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo blanditiis ex iste iure
          incidunt provident delectus soluta doloremque possimus molestiae?
        </TabPanel>

        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo blanditiis ex iste iure
          incidunt provident delectus soluta doloremque possimus molestiae?
        </TabPanel>

        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo blanditiis ex iste iure
          incidunt provident delectus soluta doloremque possimus molestiae?
        </TabPanel>
      </TabPanels>
    </div>
  </AppTabs>
</template>
```
