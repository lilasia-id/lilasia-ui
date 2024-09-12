import AppLayout from '@/layouts/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/HomePage.vue')
        },
        {
          path: 'badge',
          name: 'badge',
          component: () => import('@/pages/BadgePage.vue')
        },
        {
          path: 'block',
          name: 'block',
          component: () => import('@/pages/BlockPage.vue')
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('@/pages/ButtonPage.vue')
        },
        {
          path: 'button-link',
          name: 'button.link',
          component: () => import('@/pages/ButtonLinkPage.vue')
        },
        {
          path: 'dialog',
          name: 'dialog',
          component: () => import('@/pages/DialogPage.vue')
        },
        {
          path: 'divider',
          name: 'divider',
          component: () => import('@/pages/DividerPage.vue')
        },
        {
          path: 'dropdown',
          name: 'dropdown',
          component: () => import('@/pages/DropdownPage.vue')
        },
        {
          path: 'form-input',
          name: 'form.input',
          component: () => import('@/pages/FormInputPage.vue')
        },
        {
          path: 'form-select',
          name: 'form.select',
          component: () => import('@/pages/FormSelectPage.vue')
        },
        {
          path: 'form-textarea',
          name: 'form.textarea',
          component: () => import('@/pages/FormTextareaPage.vue')
        },
        {
          path: 'form-checkbox',
          name: 'form.checkbox',
          component: () => import('@/pages/FormCheckboxPage.vue')
        },
        {
          path: 'form-radio-group',
          name: 'form.radio-group',
          component: () => import('@/pages/FormRadioGroupPage.vue')
        },
        {
          path: 'form-file',
          name: 'form.file',
          component: () => import('@/pages/FormFilePage.vue')
        },
        {
          path: 'indicators',
          name: 'indicators',
          component: () => import('@/pages/IndicatorsPage.vue')
        },
        {
          path: 'section',
          name: 'section',
          component: () => import('@/pages/SectionPage.vue')
        },
        {
          path: 'table',
          name: 'table',
          component: () => import('@/pages/TablePage.vue')
        },
        {
          path: 'toast',
          name: 'toast',
          component: () => import('@/pages/ToastPage.vue')
        },
        {
          path: 'navbar',
          name: 'navbar',
          component: () => import('@/pages/NavbarPage.vue')
        },
        {
          path: 'drawer',
          name: 'drawer',
          component: () => import('@/pages/DrawerPage.vue')
        },
        {
          path: 'pagination',
          name: 'pagination',
          component: () => import('@/pages/PaginationPage.vue')
        },
        {
          path: 'popover',
          name: 'popover',
          component: () => import('@/pages/PopoverPage.vue')
        },
        {
          path: 'accordion',
          name: 'accordion',
          component: () => import('@/pages/AccordionPage.vue')
        },
        {
          path: 'tooltip',
          name: 'tooltip',
          component: () => import('@/pages/TooltipPage.vue')
        },
        {
          path: 'skeleton',
          name: 'skeleton',
          component: () => import('@/pages/SkeletonPage.vue')
        },
        {
          path: 'tabs',
          name: 'tabs',
          component: () => import('@/pages/TabsPage.vue')
        }
      ]
    }
  ]
})

export default router
