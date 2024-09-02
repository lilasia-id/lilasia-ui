<script lang="ts" setup>
import AppFooter from '@/components/playground/AppFooter.vue'
import AppNavbar from '@/components/playground/AppNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <AppNavbar />
    <main class="min-h-dvh">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
