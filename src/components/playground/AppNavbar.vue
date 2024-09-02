<script setup lang="ts">
import AppButton from '../AppButton.vue'
import AppNavbar from '../AppNavbar.vue'
import AppDropdown from '../dropdown/AppDropdown.vue'
import DropdownItem from '../dropdown/DropdownItem.vue'
import DropdownItemGroup from '../dropdown/DropdownItemGroup.vue'
import MobileMenu from './MobileMenu.vue'

const components = [
  {
    label: 'Layout',
    icon: 'view_compact',
    children: [
      { label: 'Block', name: 'block', icon: 'crop_square' },
      { label: 'Section', name: 'section', icon: 'layers' },
      { label: 'Divider', name: 'divider', icon: 'horizontal_rule' },
      { label: 'Drawer', name: 'drawer', icon: 'menu' }
    ]
  },
  {
    label: 'Navigation',
    icon: 'navigation',
    children: [
      { label: 'Navbar', name: 'navbar', icon: 'menu' },
      { label: 'Pagination', name: 'pagination', icon: 'more_horiz' },
      { label: 'Tabs', name: 'tabs', icon: 'tab' },
      { label: 'Dropdown', name: 'dropdown', icon: 'arrow_drop_down' }
    ]
  },
  {
    label: 'Form',
    icon: 'description',
    children: [
      { label: 'Input', name: 'form.input', icon: 'border_color' },
      { label: 'Select', name: 'form.select', icon: 'tv_options_edit_channels' },
      { label: 'Textarea', name: 'form.textarea', icon: 'edit_note' },
      { label: 'Checkbox', name: 'form.checkbox', icon: 'event_list' },
      { label: 'Radio Group', name: 'form.radio-group', icon: 'radio_button_checked' },
      { label: 'File', name: 'form.file', icon: 'perm_media' },
      { label: 'Button', name: 'button', icon: 'check_box_outline_blank' }
    ]
  },
  {
    label: 'Notification',
    icon: 'notifications',
    children: [
      { label: 'Toast', name: 'toast', icon: 'notification_important' },
      { label: 'Dialog', name: 'dialog', icon: 'chat_bubble_outline' },
      { label: 'Skeleton', name: 'skeleton', icon: 'hourglass_empty' },
      { label: 'Badge', name: 'badge', icon: 'verified' }
    ]
  },
  {
    label: 'Data Display',
    icon: 'table_chart',
    children: [
      { label: 'Table', name: 'table', icon: 'table_chart' },
      { label: 'Indicators', name: 'indicators', icon: 'donut_large' }
    ]
  },
  {
    label: 'Miscellaneous',
    icon: 'category',
    children: [
      { label: 'Tooltip', name: 'tooltip', icon: 'help_outline' },
      { label: 'Accordion', name: 'accordion', icon: 'unfold_more' }
    ]
  }
]
</script>

<template>
  <AppNavbar class="border-b border-b-black-10 bg-white py-8 md:py-12" sticky>
    <div class="flex items-center justify-between gap-16 lg:justify-center">
      <AppButton :to="{ name: 'home' }" color="black" icon="home" />
      <div v-for="(component, index) in components" :key="index" class="hidden lg:block">
        <AppDropdown menu-position="center">
          <template #button>
            <AppButton color="light" :icon="component.icon" :text="component.label" />
          </template>
          <DropdownItemGroup>
            <DropdownItem
              v-for="(child, cIndex) in component.children"
              :key="cIndex"
              :to="{ name: child.name }"
              :icon="child.icon"
              :text="child.label"
            />
          </DropdownItemGroup>
        </AppDropdown>
      </div>
      <MobileMenu />
    </div>
  </AppNavbar>
</template>
