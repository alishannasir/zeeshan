<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <RouterLink to="/" class="text-2xl font-bold text-purple-600 flex items-center gap-2">
          <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xl">S</span>
          </div>
          University
        </RouterLink>
        <div class="flex flex-wrap gap-4 md:gap-6">
          <RouterLink 
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path" 
            class="text-gray-600 hover:text-purple-600 transition-colors whitespace-nowrap font-medium"
            active-class="text-purple-600"
          >
            {{ link.label }}
          </RouterLink>
        </div>
        <div class="flex gap-4">
          <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold whitespace-nowrap">
            Apply Online
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/admission', label: 'Admission' },
  { path: '/alumni', label: 'Alumni' },
  { path: '/research', label: 'Research' },
  { path: '/administration', label: 'Administration' },
  { path: '/center', label: 'Center' }
]
</script>
