<script setup lang="ts">
import AppToast from './components/AppToast.vue'
import AppModal from './components/AppModal.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <Teleport to="body">
    <AppToast />
    <AppModal />
  </Teleport>
</template>
