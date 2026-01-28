<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <SectionHeading 
        title="Study with us"
        subtitle="Choose from our wide range of programs designed to shape your future"
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="program in programs" 
          :key="program.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
        >
          <div class="relative h-64">
            <img 
              :src="program.image" 
              :alt="program.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <h3 class="text-xl font-bold mb-2">{{ program.title }}</h3>
              <p v-if="program.subtitle" class="text-sm opacity-90">{{ program.subtitle }}</p>
            </div>
            <div class="absolute top-4 right-4">
              <button class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg">
                <ArrowIcon size="24" class="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import ArrowIcon from '../ui/ArrowIcon.vue'
import { getPlaceholderImage } from '../../utils/images'

const programs = [
  {
    id: 1,
    title: 'Undergraduate Programs',
    subtitle: 'Start your academic journey',
    image: getPlaceholderImage('students')
  },
  {
    id: 2,
    title: 'Postgraduate Programs',
    subtitle: 'Advance your career',
    image: getPlaceholderImage('classroom')
  },
  {
    id: 3,
    title: 'Associate Degree Programs (ADP)',
    subtitle: 'Fast-track your education',
    image: getPlaceholderImage('library')
  },
  {
    id: 4,
    title: 'Admissions Open Spring 2026',
    subtitle: 'Apply now and secure your future',
    image: getPlaceholderImage('campus')
  }
]
</script>
