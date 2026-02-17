<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-48 bg-gradient-to-br from-purple-400 to-purple-600">
      <img 
        v-if="image" 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <span class="text-white text-4xl font-bold">{{ title.charAt(0) }}</span>
      </div>
    </div>
    <div class="p-6">
      <div v-if="date" class="text-sm text-gray-500 mb-2">{{ date }}</div>
      <h3 class="text-xl font-bold text-gray-900 mb-3">{{ title }}</h3>
      <p v-if="description" class="text-gray-600 text-sm mb-4 line-clamp-3">{{ description }}</p>
      <a href="#" class="text-purple-600 font-semibold text-sm hover:text-purple-700 flex items-center gap-2">
        View More
        <ArrowIcon size="16" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from '../ui/ArrowIcon.vue'
defineProps<{
  title: string
  image?: string
  description?: string
  date?: string
}>()
</script>
