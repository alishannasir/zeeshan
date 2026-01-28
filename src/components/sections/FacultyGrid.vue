<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <SectionHeading 
        title="Explore our faculties"
        subtitle="Discover excellence across diverse academic disciplines"
      />
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div 
          v-for="faculty in faculties" 
          :key="faculty.id"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer group"
        >
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
            <svg class="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faculty.name }}</h3>
          <button class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mt-4 hover:bg-purple-700 transition-colors">
            <ArrowIcon size="16" class="text-white" />
          </button>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          View More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import ArrowIcon from '../ui/ArrowIcon.vue'

const faculties = [
  { id: 1, name: 'Faculty of Sciences' },
  { id: 2, name: 'Faculty of Law and Criminology' },
  { id: 3, name: 'Faculty of Management Sciences' },
  { id: 4, name: 'Faculty of Allied Health Sciences' },
  { id: 5, name: 'Faculty of Art and Design' },
  { id: 6, name: 'Faculty of Pharmacy' },
  { id: 7, name: 'Faculty of Computing' },
  { id: 8, name: 'Faculty of Social Sciences' },
  { id: 9, name: 'Faculty of Engineering' },
  { id: 10, name: 'Faculty of Medical and Dental College' }
]
</script>
