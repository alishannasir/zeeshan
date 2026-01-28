<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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
      <div v-if="category" class="absolute top-4 left-4">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-white text-purple-700">
          {{ category }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{{ title }}</h3>
      <p v-if="excerpt" class="text-gray-600 text-sm mb-4 line-clamp-3">{{ excerpt }}</p>
      <div class="flex justify-between items-center text-sm text-gray-500">
        <span>{{ date }}</span>
        <span v-if="author">{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image?: string
  category?: string
  excerpt?: string
  date: string
  author?: string
}>()
</script>
