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
      <div class="absolute top-4 right-4">
        <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
          <ArrowIcon size="24" class="text-purple-600" />
        </button>
      </div>
    </div>
    <div class="p-6">
      <div v-if="category" class="mb-2">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
          {{ category }}
        </span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p v-if="description" class="text-gray-600 text-sm mb-4">{{ description }}</p>
      <div v-if="department" class="text-sm text-gray-500">
        {{ department }}
      </div>
      <div v-if="hashtag" class="mt-2 text-sm text-purple-600 font-semibold">
        {{ hashtag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from '../ui/ArrowIcon.vue'

defineProps<{
  title: string
  image?: string
  category?: string
  description?: string
  department?: string
  hashtag?: string
}>()
</script>
