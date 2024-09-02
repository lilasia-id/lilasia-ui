<script setup lang="ts">
import AppToast from './components/AppToast.vue'
import AppDialog from './components/AppDialog.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <Teleport to="body">
    <AppToast />
    <AppDialog />
  </Teleport>
</template>
