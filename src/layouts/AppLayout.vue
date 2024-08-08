<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppDropdown from '@/components/dropdown/AppDropdown.vue'
import DropdownItem from '@/components/dropdown/DropdownItem.vue'
import DropdownItemGroup from '@/components/dropdown/DropdownItemGroup.vue'
import { RouterView } from 'vue-router'

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
      { label: 'Form', name: 'form', icon: 'description' },
      { label: 'Button', name: 'button', icon: 'radio_button_checked' }
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
  <div>
    <AppNavbar class="border-b border-b-black-10 bg-white py-8 md:py-12" sticky>
      <div class="flex items-center justify-center gap-16">
        <AppButton :to="{ name: 'home' }" color="black" icon="home" />
        <div v-for="(component, index) in components" :key="index">
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
      </div>
    </AppNavbar>

    <main>
      <RouterView />
    </main>

    <footer class="mt-16"></footer>
  </div>
</template>
