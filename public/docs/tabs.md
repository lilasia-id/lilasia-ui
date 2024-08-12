# AppTabs

## Overview

The `AppTabs` component is a tabbed interface that allows users to switch between different views or sections. It leverages the `TabGroup` component from the `@headlessui/vue` library, making it fully accessible and customizable.

## Props

| Prop           | Default | Description                                                 | Usage                                                                      |
| -------------- | ------- | ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| `defaultIndex` | 0       | The index of the tab that should be selected by default.    | Use this prop to specify which tab should be active on the initial render. |
| `vertical`     | false   | Determines whether the tabs should be displayed vertically. | Set this prop to `true` to display tabs in a vertical layout.              |

## Emits

| Event    | Description                             | Payload                              |
| -------- | --------------------------------------- | ------------------------------------ |
| `change` | Emitted when the active tab is changed. | The index of the newly selected tab. |

## Slots

| Slot      | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| `default` | Slot for the tab content, which typically includes `TabList`, `TabPanels`, and their respective child components. |

## Child Components

### TabButton

| Prop       | Type      | Default | Description                                          |
| ---------- | --------- | ------- | ---------------------------------------------------- |
| `disabled` | `boolean` | `false` | Disables the tab, preventing it from being selected. |

| Slot      | Description                                            |
| --------- | ------------------------------------------------------ |
| `default` | Slot for the tab content, typically a button or label. |

### TabList

| Slot      | Description                                       |
| --------- | ------------------------------------------------- |
| `default` | Slot for placing multiple `TabButton` components. |

### TabPanel

| Slot      | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `default` | Slot for the content of a specific tab panel, which is shown when the corresponding tab is selected. |

### TabPanels

| Slot      | Description                                      |
| --------- | ------------------------------------------------ |
| `default` | Slot for placing multiple `TabPanel` components. |

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
