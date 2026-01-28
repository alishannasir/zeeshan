<template>
  <svg 
    :class="iconClass"
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M9 5l7 7-7 7" 
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: number | string
  class?: string
}>(), {
  size: 24
})

const iconClass = computed(() => props.class || '')
</script>
