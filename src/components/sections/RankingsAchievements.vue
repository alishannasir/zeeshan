<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <SectionHeading 
        title="Superior University Among Top Global Institutions"
        subtitle="Recognized for excellence in education, research, and impact"
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="achievement in achievements" 
          :key="achievement.id"
          class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-600 transition-colors text-center"
        >
          <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">{{ achievement.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ achievement.title }}</h3>
          <p class="text-gray-600 mb-4">{{ achievement.description }}</p>
          <div v-if="achievement.rank" class="text-purple-600 font-semibold">
            {{ achievement.rank }}
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          Learn More About Our Impact
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'

const achievements = [
  {
    id: 1,
    icon: '🏆',
    title: 'THE World University Rankings',
    description: 'Ranked among TOP 100-200 globally',
    rank: 'Impact Rankings TOP 100-200'
  },
  {
    id: 2,
    icon: '🌍',
    title: 'QS World Rankings',
    description: 'Overall Rank among the World\'s TOP 301-400',
    rank: 'TOP 301-400'
  },
  {
    id: 3,
    icon: '🇵🇰',
    title: 'National Recognition',
    description: 'Among the TOP-5 Universities of Pakistan',
    rank: 'TOP-5 in Pakistan'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Babson College Partnership',
    description: '1st Partner of Babson College (USA) from Pakistan',
    rank: 'Exclusive Partnership'
  },
  {
    id: 5,
    icon: '🌱',
    title: 'UI GreenMetric',
    description: 'Recognized for sustainable campus practices',
    rank: 'Green Campus Award'
  },
  {
    id: 6,
    icon: '🎯',
    title: 'UN SDGs Alignment',
    description: 'Globally recognized for Sustainable & Inclusive Growth',
    rank: 'SDG Impact Leader'
  }
]
</script>
