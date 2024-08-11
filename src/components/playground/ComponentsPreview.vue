<script setup lang="ts">
import AppBlock from '../blocks/AppBlock.vue'
</script>

<template>
  <AppBlock class="bg-gradient-to-bl from-black-20 to-black-80">
    <div class="px-24 py-48">
      <slot></slot>
    </div>
  </AppBlock>
</template>
