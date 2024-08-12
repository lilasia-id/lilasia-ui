<script setup lang="ts">
import { computed } from 'vue'
import AppBlock from '../blocks/AppBlock.vue'

const gradients = [
  'from-black-10 to-black',
  'from-[#89CFF0] to-[#0343DF]',
  'from-[#FFC0CB] to-[#8A2BE2]',
  'from-[#98FF98] to-[#228B22]',
  'from-[#FFA500] to-[#800000]',
  'from-[#D3D3D3] to-[#36454F]',
  'from-[#40E0D0] to-[#008080]',
  'from-[#E6E6FA] to-[#4B0082]',
  'from-[#FF7F50] to-[#9B111E]'
]

const randomGradient = computed(() => gradients[Math.floor(Math.random() * gradients.length)])
</script>

<template>
  <AppBlock class="bg-gradient-to-bl" :class="randomGradient">
    <div class="px-24 py-48">
      <slot></slot>
    </div>
  </AppBlock>
</template>
