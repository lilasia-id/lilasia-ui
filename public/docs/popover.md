# AppPopover

The AppPopover is component that leverages the @headlessui/vue library to create a customizable popover UI element. It allows for flexible content through slots and provides options for including an icon, text, and a backdrop overlay.

## Usage Example

```vue
<script lang="ts" setup>
import { AppPopover, PopoverPanel } from 'lilasia-ui'
</script>

<template>
  <AppPopover icon="price_change" text="Price Range">
    <PopoverPanel #="{ close }">
      <AppBlock bordered>
        <div class="p-16">
          <div class="flex items-center gap-8">
            <FormInput type="number" placeholder="Min Price" />
            <FormInput type="number" placeholder="Max Price" />
            <AppButton color="black" text="Apply" @click="close" />
          </div>
        </div>
      </AppBlock>
    </PopoverPanel>
  </AppPopover>
</template>
```
